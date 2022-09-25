import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

import { Response } from 'src/app/core/models/generic/Response.model';
import { Note } from 'src/app/core/models/notes/Note.model';
import { UpdateNoteRequest } from 'src/app/core/models/notes/UpdateNoteRequest.model';
import { environment } from 'src/environments/environment';
import { CreateNoteRequest } from '../../../core/models/notes/CreateNoteRequest.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private http: HttpClient) {}

  findById(noteId: string): Observable<Note | null> {
    return this.http
      .get<Response<Note>>(
        environment.api.notes.findById.replaceParamsInUrl(noteId)
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  updateNote(note: UpdateNoteRequest, noteId: string): Observable<Note | null> {
    return this.http
      .put<Response<Note>>(
        environment.api.notes.udpate.replaceParamsInUrl(noteId),
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
