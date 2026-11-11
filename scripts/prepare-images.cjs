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

