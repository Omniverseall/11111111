import { Document, DocumentStatus } from './types';

export const documentModel = {
  validateDocument: (document: Document): boolean => {
    return !!(document.title && document.type && document.id);
  },

  canSign: (document: Document): boolean => {
    return document.status === 'approved';
  },

  getStatusColor: (status: DocumentStatus): string => {
    const colors = {
      draft: 'text-gray-500',
      review: 'text-yellow-500',
      approved: 'text-green-500',
      signed: 'text-blue-500',
      archived: 'text-gray-400'
    };
    return colors[status];
  }
};
