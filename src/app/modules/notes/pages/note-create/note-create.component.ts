import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { CreateNoteRequest } from 'src/app/core/models/notes/CreateNoteRequest.model';
import { Note } from 'src/app/core/models/notes/Note.model';
import { NoteForm } from 'src/app/core/models/notes/NoteForm.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss'],
})
export class NoteCreateComponent implements OnInit {
  note: Note = new Note();

  constructor(
    private noteService: NotesService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  get isEditMode() {
    return false;
  }

  get topicId() {
    const activeRouteParams = this.activeRoute.snapshot.paramMap;
    const topicId = activeRouteParams.get('id');

    return topicId;
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

  postNote(request: CreateNoteRequest) {
    this.noteService
      .createNote(request)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Error creating note.'));
        })
      )
      .subscribe((response: Note | null) => {
        this.router.navigate(['topics', this.topicId, 'notes']);
      });
  }

  onSubmit($event: NoteForm) {
    try {
      const request = this.makeCreateNoteRequest($event);
      this.postNote(request);
    } catch (error) {
      console.warn(error);
    }
  }
}
