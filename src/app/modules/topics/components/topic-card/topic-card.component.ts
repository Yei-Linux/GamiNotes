import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Topic } from 'src/app/core/models/topics/Topic.model';

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

  constructor() {}

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
}
