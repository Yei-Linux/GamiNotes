import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Topic } from '../models';
import { User } from '../models/pojos/user.model';

@Injectable({
  providedIn: 'root',
})
export class GlobalStateService {
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

  setTopic(topics: Topic[]) {
    this.topics.next(topics);
  }

  setUser(user: User) {
    this.user.next(user);
  }
}
