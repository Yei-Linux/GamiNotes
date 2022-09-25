import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {
  topics: Topic[] = [];
  constructor(
    private topicService: TopicsService,
    private globalState: GlobalStateService
  ) {}

  get newTopicUrl() {
    return `/topics/add`;
  }

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
}
