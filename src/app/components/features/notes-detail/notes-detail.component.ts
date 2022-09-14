import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { TopicWithNotesResponse } from 'src/app/models/responses/TopicWithNotesResponse.model';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.scss'],
})
export class NotesDetailComponent implements OnInit {
  @ViewChild('SwalPracticeModes')
  swalPracticeModes?: SwalComponent;

  topicId: string | null = '';
  topicWithNotes$: Observable<TopicWithNotesResponse | null> = new Observable();
  constructor(
    private topicService: TopicsService,
    private route: ActivatedRoute
  ) {}

  getTopicId() {
    this.topicId = this.route.snapshot.paramMap.get('id');
  }

  fetchTopicWithNotes() {
    if (!this.topicId) return;

    this.topicWithNotes$ = this.topicService.findTopicWithNotes(
      {
        size: 15,
        page: 0,
        sort_by: '',
      },
      this.topicId
    );
  }
  ngOnInit(): void {
    this.getTopicId();
    this.fetchTopicWithNotes();
  }

  goToNoteForm() {
    return `add`;
  }

  handleShowModal() {
    this.swalPracticeModes?.fire();
  }

  onCloseModal() {
    this.swalPracticeModes?.close();
  }
}
