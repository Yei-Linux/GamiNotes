import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CreateNoteRequest } from 'src/app/core/models/notes/CreateNoteRequest.model';
import { Note } from 'src/app/core/models/notes/Note.model';
import { NoteForm } from 'src/app/core/models/notes/NoteForm.model';
import { UpdateNoteRequest } from 'src/app/core/models/notes/UpdateNoteRequest.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss'],
})
export class NoteEditComponent implements OnInit {
  note: Note = new Note();

  constructor(
    private noteService: NotesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  get isEditMode() {
    return true;
  }

  get topicId() {
    const activeRouteParams = this.activeRoute.snapshot.paramMap;
    const topicId = activeRouteParams.get('id');

    if (!topicId) {
      throw new Error('TopicId was not provided');
    }

    return topicId;
  }

  get noteId() {
    const activeRouteParams = this.activeRoute.snapshot.paramMap;
    const noteId = activeRouteParams.get('noteId');

    if (!noteId) {
      throw new Error('NoteId was not provided');
    }

    return noteId;
  }

  makeCreateNoteRequest(noteRequest: NoteForm) {
    if (!this.topicId) throw new Error('Topic Id is empty!');

    const request = new CreateNoteRequest(
      noteRequest.title_note_form,
      noteRequest.description_note_form,
      false,
      false,
      false,
      this.topicId
    );

    return request;
  }

  updateNote(request: UpdateNoteRequest) {
    this.noteService
      .updateNote(request, this.noteId)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Error updating note.'));
        })
      )
      .subscribe((response: Note | null) => {
        this.router.navigate(['topics', this.topicId, 'notes']);
      });
  }

  fetchNoteById() {
    this.noteService
      .findById(this.noteId)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Error fetching note.'));
        })
      )
      .subscribe((response: Note | null) => {
        if (!response) {
          return throwError(() => new Error('Error fetching note.'));
        }
        this.note = response;
        return;
      });
  }

  onSubmit($event: NoteForm) {
    try {
      const request = this.makeCreateNoteRequest($event);
      this.updateNote(request);
    } catch (error) {
      console.warn(error);
    }
  }

  ngOnInit(): void {
    try {
      this.fetchNoteById();
    } catch (error) {
      console.warn(error);
    }
  }
}
