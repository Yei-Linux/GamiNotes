import { INote } from '../../types/INote';

export class PatchNoteRequest {
  title?: string = '';
  description?: string = '';
  is_liked?: boolean = false;
  is_memorized?: boolean = false;
  is_ignored?: boolean = false;

  constructor({
    title,
    description,
    is_ignored,
    is_liked,
    is_memorized,
  }: INote) {
    this.title = title;
    this.description = description;
    this.is_liked = is_liked;
    this.is_memorized = is_memorized;
    this.is_ignored = is_ignored;
  }
}
