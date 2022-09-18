export class CreateSharedTopicResponse {
  _id: string;
  username: string;
  topic_title: string;
  user_limit: number;
  create_at: string;

  constructor(
    _id: string,
    username: string,
    topic_title: string,
    user_limit: number,
    create_at: string
  ) {
    this._id = _id;
    this.username = username;
    this.topic_title = topic_title;
    this.user_limit = user_limit;
    this.create_at = create_at;
  }
}
