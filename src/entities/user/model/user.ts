import { User, UserRole } from './types';

export const userModel = {
  validateUser: (user: User): boolean => {
    return !!(user.id && user.name && user.email);
  },

  getRoleColor: (role: UserRole): string => {
    const colors = {
      admin: 'text-red-500',
      manager: 'text-blue-500',
      user: 'text-green-500'
    };
    return colors[role];
  }
};
