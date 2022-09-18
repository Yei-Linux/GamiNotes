import { Note } from './note.model';

export class SharedTopic {
  _id: string;
  username: string;
  topic_title: string;
  user_limit: number;
  create_at: string;

  notes: Note[];

  constructor(
    _id: string,
    username: string,
    topic_title: string,
    user_limit: number,
    create_at: string,
    notes: Note[]
  ) {
    this._id = _id;
    this.username = username;
    this.topic_title = topic_title;
    this.user_limit = user_limit;
    this.create_at = create_at;
    this.notes = notes;
  }
}
