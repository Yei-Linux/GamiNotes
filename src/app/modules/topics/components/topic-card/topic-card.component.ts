import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { PatchTopicRequest } from 'src/app/core/models/topics/PatchTopicRequest';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss'],
})
export class TopicCardComponent implements OnInit {
  @ViewChild('SwalPracticeModes')
  swalPracticeModes?: SwalComponent;
  @ViewChild('SwalShareTopic')
  swalShareTopic?: SwalComponent;
  @Input()
  topic: Topic = new Topic();

  @ViewChild('btnFav', { read: ElementRef })
  btnFav: ElementRef = new ElementRef(null);

  constructor(
    private topicService: TopicsService,
    private globaState: GlobalStateService
  ) {}

  ngOnInit(): void {}

  get isEmptyTopic(): boolean {
    return this.topic.notes > 0;
  }

  get cardMemorizedText(): string {
    const memorizedText = `${this.topic.notes_memorized}/${this.topic.notes} cartas memorizadas`;

    return memorizedText;
  }

  get notesURL(): string {
    return `/topics/${this.topic._id}/notes`;
  }

  get isLike() {
    return this.topic.is_liked ? 'heart-red' : 'heart';
  }

  get tooltipLikeText() {
    return this.topic.is_liked ? 'Dislike' : 'Like';
  }

  handleShowModal() {
    this.swalPracticeModes?.fire();
  }

  handleCloseModal() {
    this.swalPracticeModes?.close();
  }

  handleShowSharedModal() {
    this.swalShareTopic?.fire();
  }

  handleCloseSharedModal() {
    this.swalShareTopic?.close();
  }

  handleMarkAsFavorite() {
    const likeUpdated = !this.topic.is_liked;
    const patchTopicRequest = new PatchTopicRequest({ is_liked: likeUpdated });
    this.topicService
      .patchTopic(patchTopicRequest, this.topic._id)
      .subscribe(() => {
        this.topic.is_liked = likeUpdated;
      });
  }
}
