import { print_names } from './juice';
import { animate } from './animation';
const name: string = "\x1b[3m I really like cranberry juice! \x1b[0m";
function main() {
  print_names();
  animate(name);
}

main();