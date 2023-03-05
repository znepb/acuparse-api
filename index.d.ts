import { Health, Main, Archive } from "./src/index.d";

export class Acuparse {
  key?: string;
  endpoint: string;

  constructor(endpoint: string, key?: string);
  getHealth(): Promise<Health>;
  getMain(units?: "metric" | "imperial"): Promise<Main | undefined>;
  getArchive(units?: "metric" | "imperial"): Promise<Archive | undefined>;
}
