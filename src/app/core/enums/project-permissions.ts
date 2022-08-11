/*!
 project-permissions.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

export enum ProjectPermissions {
  /**
   * No Permissions for this user (User is not part for this project or no permissions have been granted to them)
   */
  None = 0,

  /**
   * Read the projects current properties
   */
  Read = 1,

  /**
   * Write project properties
   */
  Write = 2,

  /**
   * Mange Users, read / write and do anything really in the Project
   */
  Administrator = 128
}
