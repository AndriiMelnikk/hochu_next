export { userService } from './services/userService';
export type {
  IAccount,
  IProfile,
  IUser,
  IUpdateProfileRequest,
  ICreateProfileRequest,
  ProfileType,
  ContactChannel,
} from './types/User';
export { useUser, useMe } from './hooks/useUser';
export { useProfiles, useCreateProfile } from './hooks/useProfiles';
export { useUserContacts } from './hooks/useUserContacts';
export { hasFilledContacts, normalizeContacts } from './utils/contacts';
export {
  accountSchema,
  profileSchema,
  userSchema,
  updateProfileSchema,
  updateContactsSchema,
  createProfileSchema,
} from './schemas/userSchema';
