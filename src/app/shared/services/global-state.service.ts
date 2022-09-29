import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NoteFilters } from 'src/app/core/models/notes/NoteFilters.model';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { TopicFilters } from 'src/app/core/models/topics/TopicFilters.model';
import { User } from '../../core/models/login/User.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private topicFilters = new BehaviorSubject<TopicFilters>(
    new TopicFilters(0, 15, '')
  );
  private noteFilters = new BehaviorSubject<NoteFilters>(
    new NoteFilters(0, 15, '')
  );
  private user = new BehaviorSubject<User>(
    new User('631cda65e254720368a68d40', '', '')
  );
  private topics = new BehaviorSubject<Topic[]>([]);

  constructor() {}

  get user$() {
    return this.user.asObservable();
  }

  get topics$() {
    return this.topics.asObservable();
  }

  get topicFilters$() {
    return this.topicFilters.asObservable();
  }

  get noteFilters$() {
    return this.noteFilters.asObservable();
  }

  setTopic(topics: Topic[]) {
    this.topics.next(topics);
  }

  setUser(user: User) {
    this.user.next(user);
  }

  setTopicFilters({ search = '', page }: { search: string; page: number }) {
    this.topicFilters.next(new TopicFilters(page, 15, search));
  }

  setNoteFilters({ search = '', page }: { search: string; page: number }) {
    this.noteFilters.next(new NoteFilters(page, 15, search));
  }
}
