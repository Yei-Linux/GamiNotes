import { Component, OnInit } from '@angular/core';
import { dropDownCardNotes } from 'src/app/dummy/dropdown/dropdown-card-note.dummy';

@Component({
  selector: 'app-dropdown-cardnote',
  templateUrl: './dropdown-cardnote.component.html',
  styleUrls: ['./dropdown-cardnote.component.scss']
})
export class DropdownCardnoteComponent implements OnInit {
  dropdownCardNotes = dropDownCardNotes

  constructor() { }

  ngOnInit(): void {
  }

}
