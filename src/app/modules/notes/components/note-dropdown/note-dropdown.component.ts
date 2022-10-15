import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { noteDropdownOptions } from 'src/app/core/constants/note.constants';
import { Note } from 'src/app/core/models/notes/Note.model';
import { NoteFilters } from 'src/app/core/models/notes/NoteFilters.model';
import { PatchNoteRequest } from 'src/app/core/models/notes/PatchNoteRequest.model';
import { IDropDown } from 'src/app/core/types/IDropdown';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';
import { TopicsService } from 'src/app/shared/services/topics.service';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-dropdown',
  templateUrl: './note-dropdown.component.html',
  styleUrls: ['./note-dropdown.component.scss'],
})
export class NoteDropdownComponent implements OnInit {
  @Input()
  note: Note = new Note();

  notesFilters: NoteFilters = new NoteFilters(0, 15, '', false, false);
  noteDropdownOptions = noteDropdownOptions;
  constructor(
    private topicService: TopicsService,
    private noteService: NotesService,
    private globalState: GlobalStateService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  suscribers() {
    this.globalState.noteFilters$.subscribe((filters) => {
      this.notesFilters = filters;
    });
  }

  get topicId() {
    const topicId = this.route.snapshot.paramMap.get('id');
    return topicId;
  }

  fetchTopicWithNotes() {
    if (!this.topicId) return;

    this.topicService
      .findTopicWithNotes(this.notesFilters, this.topicId)
      .subscribe((topicWithNotes) => {
        topicWithNotes && this.globalState.setTopicWithNotes(topicWithNotes);
      });
  }

  handleAddAsIgnored() {
    const patchTopicRequest = new PatchNoteRequest({
      is_ignored: !this.note.is_ignored,
    });

    this.noteService
      .patchNote(patchTopicRequest, this.note._id)
      .subscribe(() => {
        this.fetchTopicWithNotes();
      });
  }

  handleDelete() {
    this.noteService.deleteNote(this.note._id).subscribe(() => {
      this.fetchTopicWithNotes();
    });
  }

  handleClickListItem({ id, url }: IDropDown): void {
    if (url) return;

    if (id === 'ignore') {
      this.handleAddAsIgnored();
      return;
    }

    if (id === 'delete') {
      this.handleDelete();
      return;
    }
  }
}
