import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, take, throwError } from 'rxjs';
import { UpdateNoteRequest } from 'src/app/models';
import { Note } from 'src/app/models/pojos/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  public note: Note | null = null;
  public form: FormGroup = this.createForm();

  private id: string | null = null;
  private topicId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NotesService
  ) {}

  get isEditMode() {
    return this.id !== null;
  }

  createForm(): FormGroup {
    return this.fb.group({
      title_note_form: [
        '',
        {
          validators: [Validators.required, Validators.minLength(5)],
          //asyncValidators: [noteFormTitleValidator],
          //updateOn: 'blur',
        },
      ],
      description_note_form: [
        '',
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }

  get buttonText() {
    return this.isEditMode ? 'Update' : 'Add';
  }

  get buttonIcon() {
    return this.isEditMode ? 'pencil' : 'plus';
  }

  fetchNoteById() {
    if (!this.id) return;
    this.noteService
      .findById(this.id)
      .pipe(
        take(1),
        catchError((error) => {
          console.warn(error);
          return throwError(() => new Error('Error on getting note by id'));
        })
      )
      .subscribe((note: Note | null) => {
        this.note = note;

        this.form.patchValue({
          title_note_form: this.note?.title,
          description_note_form: this.note?.description,
        });
      });
  }

  buildUpdateNoteRequest() {
    if (!this.note) throw new Error('Note is empty');

    const noteFormValue = this.form.value;
    const noteRequest = new UpdateNoteRequest(
      noteFormValue.title_note_form,
      noteFormValue.description_note_form,
      this.note.is_liked,
      this.note.is_memorized,
      this.note.is_ignored
    );

    return noteRequest;
  }

  udpateNote() {
    if (!this.id) return;
    const request = this.buildUpdateNoteRequest();

    this.noteService
      .udpateNote(request, this.id)
      .pipe(
        catchError((error) => {
          const message = 'Error on update note';
          console.warn(message);
          return throwError(() => message);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['topic', this.topicId, 'notes']);
      });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('cardid');
    this.topicId = this.route.snapshot.paramMap.get('id');

    if (!this.isEditMode) return;

    this.fetchNoteById();
  }

  onSubmit(): void {
    this.udpateNote();
  }
}
