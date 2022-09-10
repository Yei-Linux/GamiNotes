import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TopicForm } from 'src/app/models';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss'],
})
export class TopicFormComponent implements OnInit {
  @Input()
  id: string | null = null;
  @Input()
  topicForm: TopicForm = new TopicForm();

  public form: FormGroup = this.fb.group({
    title_topic_form: [
      this.topicForm.title,
      {
        validator: [Validators.required, Validators.minLength(5)],
      },
    ],
    description_topic_form: [
      this.topicForm.description,
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
    this.id = this.id ?? this.route.snapshot.paramMap.get('id');

    if (!this.isEditMode) return;

    this.form.patchValue({
      title_topic_form: this.topicForm.title,
      description_topic_form: this.topicForm.description,
    });
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.form.value);
    this.form.reset();
  }
}
