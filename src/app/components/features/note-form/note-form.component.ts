import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { noteFormTitleValidator } from 'src/app/validators/note-form-title-validator';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  form = this.fb.group({
    title_note_form: [
      '',
      {
        validators: [Validators.required, Validators.minLength(5)],
        asyncValidators: [noteFormTitleValidator],
        updateOn: 'blur',
      },
    ],
    description_note_form: ['', [Validators.required, Validators.minLength(5)]],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
