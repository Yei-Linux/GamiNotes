import { Component, OnInit } from '@angular/core';
import { noteDropdownOptions } from 'src/app/core/constants/note.constants';

@Component({
  selector: 'app-note-dropdown',
  templateUrl: './note-dropdown.component.html',
  styleUrls: ['./note-dropdown.component.scss'],
})
export class NoteDropdownComponent implements OnInit {
  noteDropdownOptions = noteDropdownOptions;
  constructor() {}

  ngOnInit(): void {}
}
