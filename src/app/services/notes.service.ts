import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models';
import { Note } from '../models/pojos/note.model';

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
}
