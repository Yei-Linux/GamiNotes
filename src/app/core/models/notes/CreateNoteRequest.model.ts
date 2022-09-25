export class CreateNoteRequest {
  title: string = '';
  description: string = '';
  is_liked: boolean = false;
  is_memorized: boolean = false;
  is_ignored: boolean = false;
  topic_id: string = '';

  constructor(
    title: string,
    description: string,
    is_liked: boolean,
    is_memorized: boolean,
    is_ignored: boolean,
    topic_id: string
  ) {
    this.title = title;
    this.description = description;
    this.is_liked = is_liked;
    this.is_memorized = is_memorized;
    this.is_ignored = is_ignored;
    this.topic_id = topic_id;
  }
}
