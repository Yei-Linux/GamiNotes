import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { catchError, throwError } from 'rxjs';
import { topicDropdownOptions } from 'src/app/core/constants/topic.constants';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { IDropDown } from 'src/app/core/types/IDropdown';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-topic-dropdown',
  templateUrl: './topic-dropdown.component.html',
  styleUrls: ['./topic-dropdown.component.scss'],
})
export class TopicDropdownComponent implements OnInit {
  @ViewChild('SwalEditTopic')
  swalEditTopic?: SwalComponent;
  @Input()
  topic: Topic = new Topic();

  topicDropDownOptions: IDropDown[] = topicDropdownOptions;

  constructor(
    private topicService: TopicsService,
    private globalState: GlobalStateService
  ) {}

  handleShowModal() {
    this.swalEditTopic?.fire();
  }

  handleCloseModal() {
    this.swalEditTopic?.close();
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

  onCloseModal() {
    this.handleCloseModal();
    this.fetchAllTopics();
  }

  handleClickListItem({ id, url }: IDropDown): void {
    if (url) return;

    if (id === 'edit') {
      this.handleShowModal();
      return;
    }
  }

  ngOnInit(): void {}
}
