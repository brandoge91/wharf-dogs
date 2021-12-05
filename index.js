// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
const fs = require('fs');
const db = require('quick.db')
const exec = require('child_process').exec

async function go () {
const debug = process.argv[3]
if (!process.argv == "--debug") {
  debug = false
}
// Creates a client
const client = new vision.ImageAnnotatorClient();
if (debug) {
  console.log('[DEBUG] Client is created.')
}
  //Gets the file name using command arguments.
  if (!process.argv[2]) {
    if (debug) {
          console.log('[DEBUG] No arguments provided. Loading database.')    
    }
     console.log('Dogs seen: ' + db.get('dogs'))
       setTimeout(() => {  return console.log('') }, 3000);
  }
 const fileName = process.argv[2];
 if (debug) {
   console.log('[DEBUG] Grabbing file...')
 }
const request = {
  image: {content: fs.readFileSync('./cur/'+fileName)},
};
  //Requests the ai to do stuff
const [result] = await client.objectLocalization(request);
if (debug) {
  console.log('[DEBUG] Requesting API...')
}
const objects = result.localizedObjectAnnotations;
  if (debug) {
    console.log('[DEBUG] There are ' + objects.length + " objects.")
  }
  let hasADog = false
objects.forEach(object => {

  let isDog;
  //if the object is a dog and the ai is confident it is, then it is a dog.
  if (object.name == "Dog" && object.score >= 0.3) {
    isDog = true;
    console.log('Database recorded!')
    db.add('dogs', 1)
    hasADog = true
      setTimeout(() => {  return console.log('') }, 3000);
  } else {
    const myShellScript = exec('sh bash/run.sh ' + false);
myShellScript.stdout.on('data', (data)=>{
    console.log("\nBash script output:\n" + data); 
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});
    //console.log("You silly goose! That isn't a dog!")
    return isDog = false;
  }

  if (isDog) {
    //the dog stats
  console.log(`Name: ${object.name}`);
  console.log(`Confidence: ${object.score}/1.0`);
  console.log(`Dog?: ${isDog}`)


//runs the bash script
if (debug) { 
  console.log('[DEBUG] Running Bash script...')
}
const myShellScript = exec('sh bash/run.sh ' + hasADog);
myShellScript.stdout.on('data', (data)=>{
    console.log("\nBash script output:\n" + data); 
});
myShellScript.stderr.on('data', (data)=>{
    console.error(data);
});
  setTimeout(() => {  return console.log('') }, 5000);

  }
  //const vertices = object.boundingPoly.normalizedVertices;
  //vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
});
}

go()