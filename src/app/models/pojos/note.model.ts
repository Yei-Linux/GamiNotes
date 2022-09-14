export class Note {
  _id: string = '';
  title: string = '';
  description: string = '';
  is_liked: boolean = false;
  is_memorized: boolean = false;
  is_ignored: boolean = false;
  topic_id: string = '';

  public setId(id: string) {
    this._id = id;
    return this;
  }

  public setTitle(title: string) {
    this.title = title;
    return this;
  }

  public setDescription(description: string) {
    this.description = description;
    return this;
  }

  public setIsLiked(isLiked: boolean) {
    this.is_liked = isLiked;
    return this;
  }

  public setIsMemorized(is_memorized: boolean) {
    this.is_memorized = is_memorized;
    return this;
  }

  public setIsIgnored(is_ignored: boolean) {
    this.is_ignored = is_ignored;
    return this;
  }

  public setTopic(topic_id: string) {
    this.topic_id = topic_id;
    return this;
  }
}
