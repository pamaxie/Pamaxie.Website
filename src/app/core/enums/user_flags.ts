export enum User_flags {
  /**
   * No user flags are set
   */
  None = 0,

  /**
   * User account is locked and cannot be accessed or used
   */
  Locked = 1,

  /**
   * Is the user account confirmed?
   */
  ConfirmedAccount = 2,

  /**
   * Is the user account secured via 2Fa
   */
  //TwoFactorSecured = 4,

  /**
   * Type of user
   */
  PamaxieStaff = 8,

  /**
   * Does the user have access to closed access features
   */
  HasClosedAccess = 16
}
