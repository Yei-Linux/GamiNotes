import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Observable } from 'rxjs';
import { NoteFilters } from 'src/app/core/models/notes/NoteFilters.model';
import { TopicWithNotesResponse } from 'src/app/core/models/topics/TopicWithNotesResponse.model';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notesFilters: NoteFilters = new NoteFilters(0, 15, '');

  @ViewChild('SwalNotePracticeModes')
  swalNotePracticeModes?: SwalComponent;

  topicWithNotes: TopicWithNotesResponse | null = new TopicWithNotesResponse();
  constructor(
    private topicService: TopicsService,
    private route: ActivatedRoute,
    private globalState: GlobalStateService
  ) {}

  get topicId() {
    const topicId = this.route.snapshot.paramMap.get('id');
    return topicId;
  }

  handleSearch(searcher: string) {
    this.globalState.setNoteFilters({ search: searcher, page: 0 });
  }

  fetchTopicWithNotes() {
    if (!this.topicId) return;

    this.topicService
      .findTopicWithNotes(this.notesFilters, this.topicId)
      .subscribe((topicWithNotes) => {
        this.topicWithNotes = topicWithNotes;
      });
  }

  suscribers() {
    this.globalState.noteFilters$.subscribe((filters) => {
      this.notesFilters = filters;
      this.fetchTopicWithNotes();
    });
  }

  ngOnInit(): void {
    this.suscribers();
  }

  handleShowModal() {
    this.swalNotePracticeModes?.fire();
  }

  handleCloseModal() {
    this.swalNotePracticeModes?.close();
  }
}
