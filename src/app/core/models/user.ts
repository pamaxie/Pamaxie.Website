import {Project} from "./project";
import {User_flags} from "../enums";

export interface User {
  Id: string;
  Email: string;
  UserName: string;
  LastName: string;
  FirstName: string;
  PasswordHash: string;
  KnownIps: string[];
  Projects: {Item1: Project, Item2: string}[];
  Flags: User_flags;
  CreationDate: Date;
  TTL: Date;
}
