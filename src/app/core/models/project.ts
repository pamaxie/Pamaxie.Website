import {User} from ".";
import {ProjectFlags, ProjectPermissions} from "../enums";

export interface Project {
  Id: string;
  Name: string;
  Owner: {User: User, UserId: string};
  LastModifiedUser: {User: User, UserId: string};
  Users: {UserId: string, Permissions: ProjectPermissions}[];
  ApiTokens: {Token: string, TokenId: string}[];
  Flags: ProjectFlags;
  CreationDate: Date;
  LastModifiedAt: Date;
  TTL: Date;
}
