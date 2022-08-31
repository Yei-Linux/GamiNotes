import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss'],
})
export class TopicFormComponent implements OnInit {
  private id: string | null = null;
  public form: FormGroup = this.fb.group({
    title_topic_form: [
      '',
      {
        validator: [Validators.required, Validators.minLength(5)],
      },
    ],
    description_topic_form: [
      '',
      {
        validator: [],
      },
    ],
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  get isEditMode() {
    return this.id !== null;
  }

  get buttonText() {
    return this.isEditMode ? 'Update' : 'Add';
  }

  get buttonIcon() {
    return this.isEditMode ? 'pencil' : 'plus';
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (!this.isEditMode) return;
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
