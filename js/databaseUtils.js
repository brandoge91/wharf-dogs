const db = require('quick.db')

if (process.argv[2] == '--wipe') {
  db.set('dogs',0)
  console.log('Wiping...')
  console.log('Wiped Database. Returning to menu...')
  setTimeout(() => {  return console.log('') }, 3000);
} else if (process.argv[2] == "--forceadd") {
  db.add('dogs',1)
  console.log('Adding Dog...')
  console.log('Success!')
  setTimeout(() => {  return console.log('') }, 3000);

}