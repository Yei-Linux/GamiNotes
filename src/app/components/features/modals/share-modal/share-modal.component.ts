import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/models';

@Component({
  selector: 'app-share-modal',
  templateUrl: './share-modal.component.html',
  styleUrls: ['./share-modal.component.scss'],
})
export class ShareModalComponent implements OnInit {
  @Input()
  topic: Topic = new Topic();

  constructor() {}

  fetchSharedTopicById() {}

  ngOnInit(): void {}

  handleClickGettingUrl() {}
}
