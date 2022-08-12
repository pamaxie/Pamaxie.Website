/*
 user.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

import {Project} from "./project";
import {UserFlags} from "../enums";

export interface User {
  Id: string;
  Email: string;
  UserName: string;
  LastName: string;
  FirstName: string;
  PasswordHash: string;
  KnownIps: string[];
  Projects: { Item1: Project, Item2: string }[];
  Flags: UserFlags;
  CreationDate: Date;
  TTL: Date;
}
