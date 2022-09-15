import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TopicsService } from 'src/app/services/topics.service';
import { GlobalStateService } from 'src/app/store/global-state.service';
import { TopicNotes } from '../../../dummy';
import { CardModel, Topic } from '../../../models';

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.scss'],
})
export class NotesHomeComponent implements OnInit {
  topics: Topic[] = [];

  noteCards: CardModel[] = TopicNotes;
  constructor(
    private topicService: TopicsService,
    private globalState: GlobalStateService
  ) {}

  fetchAllTopics() {
    this.topicService
      .findAllTopics()
      .pipe(
        catchError((error) => {
          console.warn('Error on getting all topics', error);
          return throwError(() => new Error('Error on getting all topics'));
        })
      )
      .subscribe((topics) => {
        topics && this.globalState.setTopic(topics);
      });
  }

  suscribeTopics() {
    this.globalState.topics$.subscribe((topics) => {
      this.topics = topics;
    });
  }

  ngOnInit(): void {
    this.suscribeTopics();
    this.fetchAllTopics();
  }

  goToTopicForm() {
    return `/topic/add`;
  }
}
