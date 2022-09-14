import { Note } from '../pojos/note.model';

export class TopicWithNotesResponse {
  total_notes: number = 0;
  total_memorized: number = 0;
  notes: Note[] = [];
}
