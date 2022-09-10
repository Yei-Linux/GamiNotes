import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { dropDownCardNotes } from 'src/app/dummy/dropdown/dropdown-card-note.dummy';
import { CardModel, TopicForm } from 'src/app/models';
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
  card: CardModel = new CardModel();

  dropdownCardNotes: IDropDownCardNote[] = [];

  constructor() {}

  get topicForm(): TopicForm {
    return new TopicForm()
      .setTitle(this.card.title)
      .setDescription(this.card.title);
  }

  handleShowModal() {
    this.swalEditCardNote?.fire();
  }

  onCloseModal() {
    this.swalEditCardNote?.close();
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
