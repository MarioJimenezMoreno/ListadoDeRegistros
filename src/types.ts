export interface RecordType {
  time: string;
  company: string;
  companyweb: string;
  position: string;
  offerlink: string;
}

export type RecordId = string;

export interface RecordWithId extends RecordType {
  id: RecordId;
}
