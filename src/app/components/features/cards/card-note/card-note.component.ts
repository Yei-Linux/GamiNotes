import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Topic } from '../../../../models';

@Component({
  selector: 'app-card-note',
  templateUrl: './card-note.component.html',
  styleUrls: ['./card-note.component.scss'],
})
export class CardNoteComponent implements OnInit {
  @ViewChild('SwalPracticeModes')
  swalPracticeModes?: SwalComponent;
  @ViewChild('SwalShareTopic')
  swalShareTopic?: SwalComponent;
  @Input()
  topic: Topic = new Topic();

  constructor() {}

  ngOnInit(): void {}

  hasNotes(): boolean {
    return this.topic.notes > 0;
  }

  getCardMemorizedText(): string {
    const memorizedText = `${this.topic.notes_memorized}/${this.topic.notes} cartas memorizadas`;

    return memorizedText;
  }

  goToNoteDetail(): string {
    return `/topic/${this.topic._id}/notes`;
  }

  handleShowModal() {
    this.swalPracticeModes?.fire();
  }

  onCloseModal() {
    this.swalPracticeModes?.close();
  }

  handleShowSharedModal() {
    this.swalShareTopic?.fire();
  }

  onCloseSharedModal() {
    this.swalShareTopic?.close();
  }
}
