import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  topic_search_form: string = '';
  constructor(private fb: FormBuilder) {}

  public form: FormGroup = this.fb.group({
    topic_search_form: [this.topic_search_form],
  });

  handleChangeSearch() {
    this.form.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        console.log(value);
      });
  }

  ngOnInit(): void {
    this.handleChangeSearch();
  }

  handleSubmit() {}
}
