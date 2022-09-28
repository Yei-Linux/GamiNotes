import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  topic_search_form: string = '';

  @Output()
  onChange = new EventEmitter();

  public form: FormGroup = this.fb.group({
    topic_search_form: [
      this.topic_search_form,
      {
        validator: [],
      },
    ],
  });

  constructor(private fb: FormBuilder) {}

  handleChangeSearch() {
    this.form.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.onChange.emit(value.topic_search_form);
      });
  }

  ngOnInit(): void {
    this.handleChangeSearch();
  }

  handleSubmit() {}
}
