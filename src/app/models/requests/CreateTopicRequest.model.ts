export class CreateTopicRequest {
  public title: string;
  public description: string;
  public user_id: string;

  constructor(title: string, description: string, user_id: string) {
    this.title = title;
    this.description = description;
    this.user_id = user_id;
  }
}
