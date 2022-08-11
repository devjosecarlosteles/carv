export default function add (args: any[]) {
  for (let index = 3; index < args.length; index++) {
    console.log(process.env.PATH_NODE_MODULES_GLOBAL)
  }
  
  return;
}