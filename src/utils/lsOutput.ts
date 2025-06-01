interface ILSOuput {
  file: string[];
  directory: string[];
}

export class LSOutput {
  file: string[] = [];
  directory: string[] = [];

  constructor(data: ILSOuput) {
    this.file = data.file;
    this.directory = data.directory;
  }
}
