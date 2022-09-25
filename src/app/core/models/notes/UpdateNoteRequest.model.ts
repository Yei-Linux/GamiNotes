export class UpdateNoteRequest {
  title: string = '';
  description: string = '';
  is_liked: boolean = false;
  is_memorized: boolean = false;
  is_ignored: boolean = false;

  constructor(
    title: string,
    description: string,
    is_liked: boolean,
    is_memorized: boolean,
    is_ignored: boolean
  ) {
    this.title = title;
    this.description = description;
    this.is_liked = is_liked;
    this.is_memorized = is_memorized;
    this.is_ignored = is_ignored;
  }
}
