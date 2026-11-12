// Run with sharp installed: node scripts/prepare-images.cjs <athlete-originals-dir> <site-originals-dir>.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require(process.env.CHARZA_SHARP_MODULE || 'sharp');
const root = path.resolve(__dirname, '..');
const athleteDir = process.argv[2];
const siteDir = process.argv[3];
if (!athleteDir || !siteDir) throw new Error('Provide both original image directories.');
const portraits = [
  { source:'Raul.jpg', name:'raul-rubio', crop:{left:170,top:0,width:684,height:854}, note:'Recorte desplazado a la izquierda; conserva cabeza, mano elevada y lanza.' },
  { source:'Dylan.jpg', name:'dylan-cazares', crop:{left:47,top:0,width:984,height:1230}, note:'Recorte lateral leve; conserva cabeza, manos, pies y postura baja.' },
  { source:'Karen.jpg', name:'karen-pastrana', crop:{left:22,top:0,width:1035,height:1294}, note:'Recorte lateral mínimo; conserva cabeza y pies completos.' },
  { source:'Aaron.jpg', name:'aaron-pastrana', crop:{left:430,top:0,width:853,height:1066}, note:'Ventana desplazada a la derecha para conservar cabeza, manos y postura.' },
  { source:'Apolo.jpg', name:'apolo-zuany', crop:{left:0,top:100,width:474,height:592}, note:'Recorte vertical de fondo; conserva cabeza, espada y ambos pies.' },
  { source:'Isis.jpg', name:'isis-chavez', crop:{left:275,top:0,width:719,height:899}, note:'Recorte lateral sobre la acción; conserva cabeza, espada y desplante.' },
  { source:'Diego.jpg', name:'diego-hernandez', crop:{left:0,top:275,width:900,height:1125}, note:'Recorte vertical sobre la figura; conserva cabeza, pies y punta de la lanza.' },
  { source:'Sebas.jpg', name:'leonardo-avila', crop:{left:0,top:330,width:1079,height:1348}, note:'Identidad confirmada por el propietario; elimina techo y conserva cabeza y pies.' },
  { source:'Ruben.jpg', name:'ruben-pastrana', crop:null, note:'Imagen completa con relleno neutro; evita cortar la vara o la mano extendida.' }
];
async function portrait(item) {
  let input = sharp(path.join(athleteDir,item.source)).rotate();
  if (item.crop) input=input.extract(item.crop);
  await input.resize(800,1000,{fit:'contain',background:'#222327',kernel:'lanczos3'})
    .webp({quality:84,effort:5}).toFile(path.join(root,'assets/images/athletes',item.name+'.webp'));
}
(async()=>{
  await fs.mkdir(path.join(root,'assets/images/athletes'),{recursive:true});
  await fs.mkdir(path.join(root,'assets/images/site'),{recursive:true});
  if(process.argv.includes('--precision')){
    // Only the decorative medal artwork is extracted from the supplied design reference.
    const medalMask='<svg width="1672" height="941" xmlns="http://www.w3.org/2000/svg"><g fill="white"><path d="M353 334 398 333 420 445 375 457Z M420 277 551 277 516 413 460 413Z M559 333 605 331 601 442 549 442Z"/><ellipse cx="383" cy="509" rx="87" ry="83"/><ellipse cx="578" cy="509" rx="83" ry="83"/><ellipse cx="489" cy="502" rx="110" ry="111"/><path d="M315 593Q478 566 642 593L642 632Q479 660 315 632Z"/><ellipse cx="478" cy="594" rx="163" ry="17"/></g></svg>';
    const matte=await sharp(Buffer.from(medalMask)).blur(.7).png().toBuffer();
    await sharp(siteDir).ensureAlpha().composite([{input:matte,blend:'dest-in'}]).png().toBuffer()
      .then(b=>sharp(b).extract({left:285,top:272,width:390,height:382}).webp({quality:92,alphaQuality:100,effort:6})
        .toFile(path.join(root,'assets/images/site/medals-reference.webp')));
    const map=await sharp(siteDir).extract({left:1140,top:270,width:532,height:335}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const mapBackground=await sharp(map.data,{raw:map.info}).blur(5).raw().toBuffer();
    for(let i=0;i<map.data.length;i+=4){const r=map.data[i],g=map.data[i+1],b=map.data[i+2],delta=(r-b)-(mapBackground[i]-mapBackground[i+2]);map.data[i]=212;map.data[i+1]=172;map.data[i+2]=85;map.data[i+3]=r>125&&r-g>7&&g-b>7&&delta>4?Math.min(255,delta*16):0;}
    await sharp(map.data,{raw:map.info}).webp({quality:90,alphaQuality:100,effort:6}).toFile(path.join(root,'assets/images/site/world-map-reference.webp'));
    const upper=await sharp(path.join(root,'assets/images/site/karen-champagne.webp')).extract({left:0,top:0,width:279,height:610}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
    const authentic=await sharp(path.join(athleteDir,'Karen.jpg')).extract({left:374,top:134,width:279,height:610}).sharpen({sigma:.6,m1:.5,m2:1}).ensureAlpha().raw().toBuffer();
    for(let y=0;y<upper.info.height;y++){
      const strength=y<145?.52:y<330?.52-(y-145)/185*.24:y<490?.28-(y-330)/160*.16:Math.max(0,.12-(y-490)/120*.12);
      for(let x=0;x<upper.info.width;x++){const i=(y*upper.info.width+x)*4;const edge=Math.min(1,x/12,(upper.info.width-1-x)/12),l=.2126*authentic[i]+.7152*authentic[i+1]+.0722*authentic[i+2];upper.data[i]=Math.min(255,.15*authentic[i]+.85*l+8);upper.data[i+1]=Math.min(255,.15*authentic[i+1]+.85*l+5);upper.data[i+2]=Math.min(255,.15*authentic[i+2]+.85*l);upper.data[i+3]=Math.round(upper.data[i+3]*strength*edge);}
    }
    await sharp(upper.data,{raw:upper.info}).webp({quality:90,alphaQuality:100,effort:6}).toFile(path.join(root,'assets/images/site/karen-upper-champagne.webp'));
    console.log('Prepared reference medals/map and selectively faded authentic Karen upper-body derivative. Profile photos untouched.');
    return;
  }
  if(process.argv.includes('--international')){
    await sharp(path.join(siteDir,'Karen2.jpg')).rotate().extract({left:176,top:450,width:880,height:1100})
      .resize(800,1000).webp({quality:84,effort:5}).toFile(path.join(root,'assets/images/athletes/karen-pastrana-2.webp'));
    await sharp(path.join(siteDir,'Samuel.jpg')).rotate().extract({left:230,top:0,width:853,height:1066})
      .resize(800,1000,{fit:'contain',background:'#222327'}).webp({quality:84,effort:5})
      .toFile(path.join(root,'assets/images/athletes/samuel-montalvo.webp'));
    // Hand-traced alpha matte removes only the old photograph's background; no generative reconstruction.
    const outline='M465 164 C476 143 511 131 549 136 C584 137 609 151 609 177 L619 197 621 206 637 215 637 220 626 224 629 235 620 247 606 254 604 270 622 287 C642 314 653 362 650 412 L637 468 628 510 632 554 627 597 632 650 628 704 618 718 614 763 615 824 609 891 619 927 609 958 594 1007 578 1061 576 1090 C592 1098 623 1099 629 1116 C628 1130 601 1134 575 1132 L549 1124 525 1139 518 1164 C537 1174 558 1177 564 1191 C563 1206 533 1217 500 1221 L450 1221 405 1210 378 1196 376 1177 385 1143 390 1079 403 1018 409 954 416 891 416 822 426 753 423 713 408 691 418 652 428 607 441 565 435 533 416 502 403 472 393 441 381 418 375 394 C370 369 393 332 420 307 L438 288 449 262 453 235 458 216 459 184 Z';
    const mask=await sharp(Buffer.from('<svg width="1079" height="1294" xmlns="http://www.w3.org/2000/svg"><path d="'+outline+'" fill="white"/></svg>')).blur(.6).png().toBuffer();
    await sharp(path.join(athleteDir,'Karen.jpg')).rotate().ensureAlpha()
      .composite([{input:mask,blend:'dest-in'}]).png().toBuffer()
      .then(buffer=>sharp(buffer).trim({threshold:1}).resize({height:1100,withoutEnlargement:true})
        .modulate({saturation:.45}).tint('#c6b38d').webp({quality:86,alphaQuality:100,effort:5})
        .toFile(path.join(root,'assets/images/site/karen-champagne.webp')));
    console.log('Prepared Karen2, Samuel and the transparent non-generative Karen cutout; originals unchanged.');
    return;
  }
  for(const item of portraits) await portrait(item);
  for(const [source,name] of [['Wushu.png','wushu'],['Sanda.png','sanda'],['GIMNASIA.png','gimnasia'],['Taichi.png','taichi']]){
    await sharp(path.join(siteDir,source)).rotate().resize(800,600,{fit:'contain',background:'#222327'})
      .webp({quality:85,effort:5}).toFile(path.join(root,'assets/images/site',name+'.webp'));
  }
  for(const [width,name] of [[967,'inicio'],[640,'inicio-small']]){
    await sharp(path.join(siteDir,'Inicio.png')).rotate().resize({width,withoutEnlargement:true})
      .webp({quality:87,effort:5}).toFile(path.join(root,'assets/images/site',name+'.webp'));
  }
  console.log(JSON.stringify(portraits.map(({name,note})=>({name,note})),null,2));
})().catch(error=>{console.error(error);process.exit(1);});