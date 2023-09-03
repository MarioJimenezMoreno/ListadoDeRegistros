export interface Record {
  time: string;
  position: string;
  company: string;
  offerlink: string;
  offerweb: string;
}

export type RecordId = string;

export interface RecordWithId extends Record {
  id: RecordId;
}
