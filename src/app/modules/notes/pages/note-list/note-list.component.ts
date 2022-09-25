import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { TopicWithNotesResponse } from 'src/app/core/models/topics/TopicWithNotesResponse.model';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  @ViewChild('SwalNotePracticeModes')
  swalNotePracticeModes?: SwalComponent;

  topicWithNotes$: Observable<TopicWithNotesResponse | null> = new Observable();
  constructor(
    private topicService: TopicsService,
    private route: ActivatedRoute
  ) {}

  get topicId() {
    const topicId = this.route.snapshot.paramMap.get('id');
    return topicId;
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
    this.fetchTopicWithNotes();
  }

  handleShowModal() {
    this.swalNotePracticeModes?.fire();
  }

  handleCloseModal() {
    this.swalNotePracticeModes?.close();
  }
}
