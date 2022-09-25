import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from 'src/app/core/models/login/User.model';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { TopicForm } from 'src/app/core/models/topics/TopicForm.model';
import { UpdateTopicRequest } from 'src/app/core/models/topics/UpdateTopicRequest.model';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-topic-edit-modal',
  templateUrl: './topic-edit-modal.component.html',
  styleUrls: ['./topic-edit-modal.component.scss'],
})
export class TopicEditModalComponent implements OnInit {
  @Input()
  topic: Topic = new Topic();
  @Output()
  onCloseModal: EventEmitter<any> = new EventEmitter();

  user: User | null = null;

  constructor(
    private globalState: GlobalStateService,
    private topicService: TopicsService
  ) {}

  get isEditMode() {
    return true;
  }

  makeUpdateNoteRequest(topicForm: TopicForm) {
    if (!this.topic) throw new Error('Topic is empty');

    const topicRequest = new UpdateTopicRequest(
      topicForm.title_topic_form,
      topicForm.description_topic_form
    );

    return topicRequest;
  }

  udpateTopic(topicRequest: UpdateTopicRequest) {
    this.topicService
      .udpateTopic(topicRequest, this.topic._id)
      .pipe(
        catchError((error) => {
          const message = 'Error on update note';
          console.warn(message);
          return throwError(() => message);
        })
      )
      .subscribe((response) => {
        this.onCloseModal.emit();
      });
  }

  handleCloseModal() {
    this.onCloseModal.emit();
  }

  suscribers() {
    this.globalState.user$.subscribe((user) => {
      this.user = user;
    });
  }

  onSubmit(topicForm: TopicForm) {
    try {
      const request = this.makeUpdateNoteRequest(topicForm);
      this.udpateTopic(request);
    } catch (error) {
      console.warn(error);
    }
  }

  ngOnInit(): void {
    this.suscribers();
  }
}
