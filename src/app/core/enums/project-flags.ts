/*!
 project-flags.ts
 Pamaxie - https://Pamaxie.com/
 Licensed under the Apache 2.0 Licensing - http://www.apache.org/licenses/

 Copyright © Pamaxie™ 2021 all rights reserved
 */

export enum ProjectFlags {
  /**
   * No flags are set
   */
  None = 0,

  /**
   * Project is locked from being used / accessed or modified
   */
  Locked = 1,

  /**
   * Project is shared with multiple users
   */
  Shared = 2
}
