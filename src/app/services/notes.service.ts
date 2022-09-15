import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response, UpdateNoteRequest } from '../models';
import { Note } from '../models/pojos/note.model';
import { CreateNoteRequest } from '../models/requests/CreateNoteRequest.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  findById(noteId: string): Observable<Note | null> {
    return this.http
      .get<Response<Note>>(
        environment.api.notes.findById.replace(/{{id}}/g, noteId)
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  udpateNote(note: UpdateNoteRequest, noteId: string): Observable<Note | null> {
    return this.http
      .put<Response<Note>>(
        environment.api.notes.udpate.replace(/{{id}}/g, noteId),
        note
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  createNote(note: CreateNoteRequest): Observable<Note | null> {
    return this.http
      .post<Response<Note>>(environment.api.notes.create, note)
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }
}
