import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
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
      .pipe(take(1))
      .subscribe((note: Note | null) => {
        this.note = note;

        this.form.patchValue({
          title_note_form: this.note?.title,
          description_note_form: this.note?.description,
        });
      });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('cardid');

    if (!this.isEditMode) return;

    this.fetchNoteById();
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
