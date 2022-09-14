import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { TopicsService } from 'src/app/services/topics.service';
import { TopicNotes } from '../../../dummy';
import { CardModel, Topic } from '../../../models';

@Component({
  selector: 'app-notes-home',
  templateUrl: './notes-home.component.html',
  styleUrls: ['./notes-home.component.scss'],
})
export class NotesHomeComponent implements OnInit {
  topics$: Observable<Topic[] | null> = new Observable();

  noteCards: CardModel[] = TopicNotes;
  constructor(private topicService: TopicsService) {}

  fetchAllTopics() {
    this.topics$ = this.topicService.findAllTopics().pipe(
      catchError((error) => {
        console.warn('Error on getting all topics', error);
        return throwError(() => new Error('Error on getting all topics'));
      })
    );
  }

  ngOnInit(): void {
    this.fetchAllTopics();
  }

  goToTopicForm() {
    return `/topic/add`;
  }
}
