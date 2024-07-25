import { CreateTable } from "../domain/use-case/create-table.use-case";
import { SaveFile } from "../domain/use-case/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  nameFile: string;
  destinationFile: string;
}

export class ServerApp {
  static run({
    limit,
    base,
    showTable,
    nameFile,
    destinationFile,
  }: RunOptions) {
    console.log("server is running...");

    const table = new CreateTable().execute({ base, limit });
    const wasFileCreated = new SaveFile().execute({
      fileContent: table,
      fileName: nameFile,
      fileDestination: destinationFile,
    });
    if (showTable) console.log(table);

    wasFileCreated
      ? console.log("file created")
      : console.log("file not created");
  }
}
