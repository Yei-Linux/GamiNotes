import { ITopic } from '../../types/ITopic';

export class PatchTopicRequest {
  public _id?: string;
  public title?: string;
  public description?: string;
  public user_id?: string;
  public notes?: number;
  public notes_memorized?: number;
  public is_liked?: boolean;
  public is_ignored?: boolean;

  constructor({
    _id,
    title,
    description,
    user_id,
    notes,
    notes_memorized,
    is_liked,
    is_ignored,
  }: ITopic) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.user_id = user_id;
    this.notes = notes;
    this.notes_memorized = notes_memorized;
    this.is_liked = is_liked;
    this.is_ignored = is_ignored;
  }
}
