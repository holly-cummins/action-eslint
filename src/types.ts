export interface Inputs {
  token: string;
  annotations: boolean;
  eslintArgs: string[];
  workingDirectory: string;
  extensions: string[];
  ignoreFile: string;
  ignorePatterns: string[];
}

export type FileNamesList = string[];

export type File = {
  filename: string;
  status: string;
};
