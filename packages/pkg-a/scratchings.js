const spawn = require('spawndamnit');

async function main() {
  let child = spawn('npm', ['publish']);
 
  child.on('stdout', data => console.log(data.toString()));
  child.on('stderr', data => console.error(data.toString()));
 
  let { code, stdout, stderr } = await child;
 
  console.log(code === 0 ? 'success' : 'error');
}

main()