import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-multicheckbox-form',
  templateUrl: './multicheckbox-form.component.html',
  styleUrls: ['./multicheckbox-form.component.scss'],
})
export class MulticheckboxFormComponent implements OnInit {
  @Input()
  title: string = 'Like Filters';
  @Input()
  buttonText: string = 'Apply';

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      like: [true],
      notike: [true],
    });
  }

  ngOnInit(): void {}
}
