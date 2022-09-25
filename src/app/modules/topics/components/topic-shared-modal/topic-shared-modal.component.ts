import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { formatDate } from 'src/app/shared/helpers/date';
import { SharedTopic } from 'src/app/core/models/public/TopicShared.model';
import { SharedTopicService } from 'src/app/modules/topics/services/shared-topic.service';
import { CreateTopicSharedRequest } from 'src/app/core/models/topics/CreateTopicSharedRequest.model';

@Component({
  selector: 'app-topic-shared-modal',
  templateUrl: './topic-shared-modal.component.html',
  styleUrls: ['./topic-shared-modal.component.scss'],
})
export class TopicShareModalComponent implements OnInit {
  @Output()
  onCloseModal: EventEmitter<any> = new EventEmitter();
  @Input()
  topic: Topic = new Topic();

  sharedTopic: SharedTopic | null = null;

  constructor(private sharedTopicService: SharedTopicService) {}

  get sharedTitle() {
    return this.sharedTopic
      ? `You have created one shared url in ${this.sharedTopic.create_at}, check this:`
      : 'Do you want to share your notes of this topic with someone else?';
  }

  get sharedDescription() {
    return this.sharedTopic
      ? `Please click in button below to see your url content`
      : 'Please click in button below for getting your url.';
  }

  get sharedUrlText() {
    return this.sharedTopic ? 'See url' : 'Get url';
  }

  get sharedTimeExpiration() {
    return this.sharedTopic?.warning;
  }

  get sharedUrl() {
    return `/public/topic/${this.sharedTopic?._id}/notes`;
  }

  handleCloseModal() {
    this.onCloseModal.emit();
  }

  fetchSharedTopicByTopicId() {
    this.sharedTopicService
      .findSharedTopicByTopicId(this.topic._id)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Error on getting shared topic'));
        })
      )
      .subscribe((sharedTopic) => {
        if (!sharedTopic) return;
        this.sharedTopic = sharedTopic;
        this.sharedTopic.create_at = formatDate(this.sharedTopic.create_at);
      });
  }

  createSharedTopic() {
    if (this.sharedTopic) return;

    const createSharedTopicRequest = new CreateTopicSharedRequest(
      this.topic._id,
      '631cda65e254720368a68d40'
    );

    this.sharedTopicService
      .createSharedTopic(createSharedTopicRequest)
      .pipe(
        catchError((error) => {
          return throwError(
            () => new Error('Error on creating create shared topic')
          );
        })
      )
      .subscribe((response) => {
        if (!response) {
          throwError(() => new Error('Response empty.'));

          return;
        }
        const sharedTopic: SharedTopic = new SharedTopic(
          response._id,
          response.username,
          response.topic_title,
          response.topic_id,
          response.user_limit,
          response.create_at,
          [],
          ''
        );
        this.sharedTopic = sharedTopic;
      });
  }

  ngOnInit(): void {
    this.fetchSharedTopicByTopicId();
  }

  handleClickGettingUrl() {
    try {
      this.createSharedTopic();
    } catch (error) {
      console.warn(error as string);
    }
  }
}
