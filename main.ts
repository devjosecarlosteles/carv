import add from "./src/core/add";
import 'dotenv/config'

export function carv(args: any[]) {
  if (args[2] === "add") {
    add(args)
    return;
  }

  throw new Error("Comando inválido!")
}
