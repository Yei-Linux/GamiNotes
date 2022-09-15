import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { catchError, throwError } from 'rxjs';
import { dropDownCardNotes } from 'src/app/dummy/dropdown/dropdown-card-note.dummy';
import { CardModel, Topic, TopicForm } from 'src/app/models';
import { TopicsService } from 'src/app/services/topics.service';
import { GlobalStateService } from 'src/app/store/global-state.service';
import { IDropDownCardNote } from 'src/app/types/dropdownDownCardNote.type';

@Component({
  selector: 'app-dropdown-cardnote',
  templateUrl: './dropdown-cardnote.component.html',
  styleUrls: ['./dropdown-cardnote.component.scss'],
})
export class DropdownCardnoteComponent implements OnInit {
  @ViewChild('SwalEditCardNote')
  swalEditCardNote?: SwalComponent;
  @Input()
  topic: Topic = new Topic();

  dropdownCardNotes: IDropDownCardNote[] = [];

  constructor(
    private topicService: TopicsService,
    private globalState: GlobalStateService
  ) {}

  handleShowModal() {
    this.swalEditCardNote?.fire();
  }

  handleCloseModal() {
    this.swalEditCardNote?.close();
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

  ngOnInit(): void {
    this.dropdownCardNotes = dropDownCardNotes();
  }

  handleClickListItem({ id, url }: IDropDownCardNote): void {
    if (url) return;

    if (id === 'edit') {
      this.handleShowModal();
      return;
    }
  }
}
