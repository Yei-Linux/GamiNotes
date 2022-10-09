import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/core/models/notes/Note.model';
import { PatchNoteRequest } from 'src/app/core/models/notes/PatchNoteRequest.model';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input()
  note: Note = new Note();

  constructor(private noteService: NotesService) {}

  get isLike() {
    return this.note.is_liked ? 'heart-red' : 'heart';
  }

  get tooltipLikeText() {
    return this.note.is_liked ? 'Dislike' : 'Like';
  }

  ngOnInit(): void {}

  goToNoteForm() {
    return `edit/${this.note._id}`;
  }

  handleMarkAsFavorite() {
    const likeUpdated = !this.note.is_liked;
    const patchNoteRequest = new PatchNoteRequest({ is_liked: likeUpdated });
    this.noteService
      .patchNote(patchNoteRequest, this.note._id)
      .subscribe(() => {
        this.note.is_liked = likeUpdated;
      });
  }
}
