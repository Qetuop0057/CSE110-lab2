
import { printSnacks } from "./snacks";
import { print_names } from "./juice";
import { animate } from "./animation";

const name: string = "Snacks Time";

function main() {
    animate(name);
    printSnacks();
    print_names();
}

main();