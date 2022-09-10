export class TopicForm {
  public title: string = '';
  public description: string = '';

  setTitle(title: string) {
    this.title = title;

    return this;
  }
  setDescription(description: string) {
    this.description = description;

    return this;
  }
}
