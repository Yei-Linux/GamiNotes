import { formatDate } from 'src/app/shared/helpers/date';
import { Note } from '../notes/Note.model';
import { CreateTopicSharedResponse } from '../topics/CreateTopicSharedResponse.model';

export class SharedTopic {
  _id: string;
  username: string;
  topic_title: string;
  topic_id: string;
  user_limit: number;
  create_at: string;

  notes: Note[];
  warning: string;

  constructor(
    _id: string,
    username: string,
    topic_title: string,
    topic_id: string,
    user_limit: number,
    create_at: string,
    notes: Note[],
    warning: string
  ) {
    this._id = _id;
    this.username = username;
    this.topic_title = topic_title;
    this.topic_id = topic_id;
    this.user_limit = user_limit;
    this.create_at = formatDate(create_at);
    this.notes = notes;
    this.warning = warning;
  }

  buildFromCreateTopicResponse(
    createSharedTopicResponse: CreateTopicSharedResponse
  ) {
    this._id = createSharedTopicResponse._id;
    this.username = createSharedTopicResponse.username;
    this.topic_title = createSharedTopicResponse.topic_title;
    this.topic_id = createSharedTopicResponse.topic_id;
    this.user_limit = createSharedTopicResponse.user_limit;
    this.create_at = createSharedTopicResponse.create_at;
    this.notes = [];
    this.warning = '';
  }
}
