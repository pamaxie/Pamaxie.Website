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
