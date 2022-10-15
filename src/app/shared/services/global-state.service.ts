import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from 'src/app/core/models/notes/Note.model';
import { NoteFilters } from 'src/app/core/models/notes/NoteFilters.model';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { TopicFilters } from 'src/app/core/models/topics/TopicFilters.model';
import { TopicWithNotesResponse } from 'src/app/core/models/topics/TopicWithNotesResponse.model';
import { User } from '../../core/models/login/User.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
  private topicFilters = new BehaviorSubject<TopicFilters>(
    new TopicFilters(0, 15, '', false, false)
  );
  private noteFilters = new BehaviorSubject<NoteFilters>(
    new NoteFilters(0, 15, '', false, false)
  );
  private user = new BehaviorSubject<User>(
    new User('631cda65e254720368a68d40', '', '')
  );
  private topics = new BehaviorSubject<Topic[]>([]);
  private topicWithNotes = new BehaviorSubject<TopicWithNotesResponse>(
    new TopicWithNotesResponse()
  );

  constructor() {}

  get user$() {
    return this.user.asObservable();
  }

  get topics$() {
    return this.topics.asObservable();
  }

  get topicWithNotes$() {
    return this.topicWithNotes.asObservable();
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

  setTopicWithNotes(topicWithNotes: TopicWithNotesResponse) {
    this.topicWithNotes.next(topicWithNotes);
  }

  setUser(user: User) {
    this.user.next(user);
  }

  setTopicFilters({
    search = '',
    page,
    is_ignored,
    is_liked,
  }: {
    search: string;
    page: number;
    is_liked?: boolean;
    is_ignored?: boolean;
  }) {
    this.topicFilters.next(
      new TopicFilters(page, 15, search, is_liked ?? false, is_ignored ?? false)
    );
  }

  setNoteFilters({
    search = '',
    page,
    is_ignored,
    is_liked,
  }: {
    search: string;
    page: number;
    is_liked?: boolean;
    is_ignored?: boolean;
  }) {
    this.noteFilters.next(
      new NoteFilters(page, 15, search, is_liked ?? false, is_ignored ?? false)
    );
  }
}
