export interface Document {
  id: string;
  title: string;
  type: DocumentType;
  status: DocumentStatus;
  createdAt: Date;
  updatedAt: Date;
  content?: string;
  signatures?: Signature[];
}

export type DocumentType = 
  | 'contract' 
  | 'agreement' 
  | 'report' 
  | 'proposal' 
  | 'other';

export type DocumentStatus = 
  | 'draft' 
  | 'review' 
  | 'approved' 
  | 'signed' 
  | 'archived';

export interface Signature {
  id: string;
  userId: string;
  documentId: string;
  signedAt: Date;
  isValid: boolean;
}
