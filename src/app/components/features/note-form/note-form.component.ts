import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CardsToStudy } from 'src/app/dummy/cardsToStudy';
import { noteFormTitleValidator } from 'src/app/validators/note-form-title-validator';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss'],
})
export class NoteFormComponent implements OnInit {
  public form: FormGroup = this.createForm();

  private cardToStudyDummy = CardsToStudy[0];
  private id: string | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

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

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('cardid');

    if (!this.isEditMode) return;

    this.form.patchValue({
      title_note_form: this.cardToStudyDummy.title,
      description_note_form: this.cardToStudyDummy.description,
    });
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
