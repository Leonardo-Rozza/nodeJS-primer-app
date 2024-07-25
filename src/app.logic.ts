import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;

let ouputMessage = "";
const headerMessage = `
========================================
               Tabla del ${base}              
========================================

`;

for (let i = 1; i <= limit; i++) {
  ouputMessage += `${base} x ${i} = ${i * base}\n`;
}

ouputMessage = headerMessage + ouputMessage;

if (showTable) console.log(ouputMessage);

const outputPath = `output`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/table-${base}.txt`, ouputMessage);

console.log("file created");
