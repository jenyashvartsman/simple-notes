export type NoteDto = {
  id: string;
  title: string;
  createdAt: Date;
};

export type NoteCreateDto = Omit<NoteDto, 'id' | 'createdAt'>;
