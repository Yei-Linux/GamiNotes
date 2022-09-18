export class CreateSharedTopicRequest {
  public topic_id: string;
  public user_id: string;

  constructor(topic_id: string, user_id: string) {
    this.topic_id = topic_id;
    this.user_id = user_id;
  }
}
