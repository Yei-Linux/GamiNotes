import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/login/User.model';
import { Topic } from 'src/app/core/models/topics/Topic.model';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss'],
})
export class TopicFormComponent implements OnInit {
  @Input()
  isEditMode: boolean = false;

  onChangeTopicInput() {
    this.form.patchValue({
      title_topic_form: this._topic.title,
      description_topic_form: this._topic.description,
    });
  }

  private _topic: Topic = new Topic();
  @Input() set topic(value: Topic) {
    this._topic = value;
    this.onChangeTopicInput();
  }
  get topic() {
    return this._topic;
  }

  public form: FormGroup = this.fb.group({
    title_topic_form: [
      this.topic.title,
      {
        validator: [Validators.required, Validators.minLength(5)],
      },
    ],
    description_topic_form: [
      this.topic.description,
      {
        validator: [],
      },
    ],
  });

  @Output()
  onSubmit = new EventEmitter();

  user?: User;

  constructor(private fb: FormBuilder) {}

  get buttonText() {
    return this.isEditMode ? 'Update' : 'Add';
  }

  get buttonIcon() {
    return this.isEditMode ? 'pencil' : 'plus';
  }

  handleSubmit(): void {
    this.onSubmit.emit(this.form.value);
  }

  ngOnInit(): void {}
}
