export type NoteDto = {
  id: string;
  note: string;
  createdAt: Date;
};

export type NoteCreateDto = Omit<NoteDto, 'id' | 'createdAt'>;
