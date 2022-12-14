export class Topic {
  public _id: string = '';
  public title: string = '';
  public description?: string = '';
  public user_id: string = '';
  public notes: number = 0;
  public notes_memorized: number = 0;

  public is_liked?: boolean = false;
  public is_ignored?: boolean = false;
}
