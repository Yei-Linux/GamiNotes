import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/app/core/models/login/User.model';
import { CreateTopicRequest } from 'src/app/core/models/topics/CreateTopicRequest.model';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { TopicForm } from 'src/app/core/models/topics/TopicForm.model';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.scss'],
})
export class TopicCreateComponent implements OnInit {
  user: User | null = null;
  topic: Topic = new Topic();
  hasSearchSection = false;

  constructor(
    private topicService: TopicsService,
    private router: Router,
    private globalState: GlobalStateService
  ) {}

  get isEditMode() {
    return false;
  }

  suscribers() {
    this.globalState.user$.subscribe((user) => {
      this.user = user;
    });
  }

  makeCreateTopicRequest(topicForm: TopicForm) {
    if (!this.user) throw new Error('Error making request');

    const topicRequest = new CreateTopicRequest(
      topicForm.title_topic_form,
      topicForm.description_topic_form,
      this.user._id
    );

    return topicRequest;
  }

  createTopic(request: CreateTopicRequest) {
    this.topicService
      .createTopic(request)
      .pipe(
        catchError((error) => {
          const message = 'Error on create note';
          console.warn(message);
          return throwError(() => message);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['topics']);
      });
  }

  ngOnInit(): void {
    this.suscribers();
  }

  onSubmit(topicForm: TopicForm) {
    try {
      const request = this.makeCreateTopicRequest(topicForm);

      this.createTopic(request);
    } catch (error) {
      console.warn(error);
    }
  }
}
