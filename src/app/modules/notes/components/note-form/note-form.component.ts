import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from 'src/app/core/models/notes/Note.model';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  @Input()
  public isEditMode: boolean = false;

  onChangeNote() {
    this.form.patchValue({
      title_note_form: this._note.title,
      description_note_form: this._note.description,
    });
  }

  private _note: Note = new Note();
  @Input() set note(value: Note) {
    this._note = value;
    this.onChangeNote();
  }
  get note() {
    return this._note;
  }

  @Output()
  public onSubmit = new EventEmitter();

  createForm(): FormGroup {
    return this.fb.group({
      title_note_form: [
        this.note.title,
        {
          validators: [Validators.required, Validators.minLength(5)],
        },
      ],
      description_note_form: [
        this.note.description,
        [Validators.required, Validators.minLength(5)],
      ],
    });
  }

  public form: FormGroup = this.createForm();

  constructor(private fb: FormBuilder) {}

  get buttonText() {
    return this.isEditMode ? 'Update' : 'Add';
  }

  get buttonIcon() {
    return this.isEditMode ? 'pencil' : 'plus';
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.onSubmit.emit(this.form.value);
  }
}
