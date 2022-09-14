import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic, Response, TopicWithNotesRequest } from '../models';
import { environment } from 'src/environments/environment';
import { map, Observable, shareReplay } from 'rxjs';
import { TopicWithNotesResponse } from '../models/responses/TopicWithNotesResponse.model';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  findAllTopics(): Observable<Topic[] | null> {
    return this.http
      .get<Response<Topic[]>>(environment.api.topics.findAll)
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  findTopicWithNotes(
    request: TopicWithNotesRequest,
    topicId: string
  ): Observable<TopicWithNotesResponse | null> {
    return this.http
      .post<Response<TopicWithNotesResponse>>(
        environment.api.topics.findTopicWithNotes.replace(/{{id}}/g, topicId),
        request
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }
}
