import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Topic } from 'src/app/models';
import { User } from 'src/app/models/pojos/user.model';
import { CreateTopicRequest } from 'src/app/models/requests/CreateTopicRequest.model';
import { UpdateTopicRequest } from 'src/app/models/requests/UpdateTopicRequest.model';
import { TopicsService } from 'src/app/services/topics.service';
import { GlobalStateService } from 'src/app/store/global-state.service';

@Component({
  selector: 'app-topic-form',
  templateUrl: './topic-form.component.html',
  styleUrls: ['./topic-form.component.scss'],
})
export class TopicFormComponent implements OnInit {
  @Input()
  id: string | null = null;
  @Input()
  topic: Topic = new Topic();
  @Output()
  onCloseModal = new EventEmitter();
  user?: User;

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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private topicService: TopicsService,
    private globaStateService: GlobalStateService
  ) {}

  get isEditMode() {
    return this.id !== null;
  }

  get buttonText() {
    return this.isEditMode ? 'Update' : 'Add';
  }

  get buttonIcon() {
    return this.isEditMode ? 'pencil' : 'plus';
  }

  buildUpdateNoteRequest() {
    if (!this.topic) throw new Error('Topic is empty');

    const topicFormValue = this.form.value;
    const topicRequest = new UpdateTopicRequest(
      topicFormValue.title_topic_form,
      topicFormValue.description_topic_form
    );

    return topicRequest;
  }

  buildCreateNoteRequest(user: User) {
    const topicFormValue = this.form.value;
    const topicRequest = new CreateTopicRequest(
      topicFormValue.title_topic_form,
      topicFormValue.description_topic_form,
      user._id
    );

    return topicRequest;
  }

  udpateTopic() {
    if (!this.id) return;
    const request = this.buildUpdateNoteRequest();

    this.topicService
      .udpateTopic(request, this.id)
      .pipe(
        catchError((error) => {
          const message = 'Error on update note';
          console.warn(message);
          return throwError(() => message);
        })
      )
      .subscribe((response) => {
        this.onCloseModal.emit();
      });
  }

  createTopic() {
    if (!this.user) return;
    const request = this.buildCreateNoteRequest(this.user);

    this.topicService
      .createTopic(request)
      .pipe(
        catchError((error) => {
          const message = 'Error on create note';
          console.warn(message);
          return throwError(() => message);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['home']);
      });
  }

  suscribers() {
    this.globaStateService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
    this.id = this.id ?? this.route.snapshot.paramMap.get('id');
    this.suscribers();

    if (!this.isEditMode) return;

    this.form.patchValue({
      title_topic_form: this.topic.title,
      description_topic_form: this.topic.description,
    });
  }

  onSubmit(): void {
    if (!this.isEditMode) {
      this.createTopic();
      return;
    }

    this.udpateTopic();
  }
}
