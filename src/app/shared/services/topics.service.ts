import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, shareReplay } from 'rxjs';

import { environment } from 'src/environments/environment';

import { TopicWithNotesResponse } from 'src/app/core/models/topics/TopicWithNotesResponse.model';
import { UpdateTopicRequest } from 'src/app/core/models/topics/UpdateTopicRequest.model';
import { CreateTopicRequest } from 'src/app/core/models/topics/CreateTopicRequest.model';
import { Topic } from 'src/app/core/models/topics/Topic.model';
import { Response } from 'src/app/core/models/generic/Response.model';
import { TopicFilters } from 'src/app/core/models/topics/TopicFilters.model';
import { NoteFilters } from 'src/app/core/models/notes/NoteFilters.model';
import { PatchTopicRequest } from 'src/app/core/models/topics/PatchTopicRequest';

@Injectable({
  providedIn: 'root',
})
export class TopicsService {
  constructor(private http: HttpClient) {}

  findAllTopics(filters: TopicFilters): Observable<Topic[] | null> {
    const params = new HttpParams()
      .set('page', filters.page)
      .set('size', filters.size)
      .set('search', filters.search)
      .set('is_liked', filters.is_liked ?? false)
      .set('is_ignored', filters.is_ignored ?? false);

    return this.http
      .get<Response<Topic[]>>(environment.api.topics.findAll, {
        params,
      })
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  findTopicWithNotes(
    filters: NoteFilters,
    topicId: string
  ): Observable<TopicWithNotesResponse | null> {
    const params = new HttpParams()
      .set('page', filters.page)
      .set('size', filters.size)
      .set('search', filters.search)
      .set('is_liked', filters.is_liked ?? false)
      .set('is_ignored', filters.is_ignored ?? false);

    return this.http
      .get<Response<TopicWithNotesResponse>>(
        environment.api.topics.findTopicWithNotes.replaceParamsInUrl(topicId),
        {
          params,
        }
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  patchTopic(
    topic: PatchTopicRequest,
    topicId: string
  ): Observable<Topic | null> {
    return this.http
      .put<Response<Topic>>(
        environment.api.topics.udpate.replaceParamsInUrl(topicId),
        topic
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  udpateTopic(
    topic: UpdateTopicRequest,
    topicId: string
  ): Observable<Topic | null> {
    return this.http
      .put<Response<Topic>>(
        environment.api.topics.udpate.replaceParamsInUrl(topicId),
        topic
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  createTopic(topic: CreateTopicRequest): Observable<Topic | null> {
    return this.http
      .post<Response<Topic>>(environment.api.topics.create, topic)
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  deleteTopic(topicId: string) {
    return this.http
      .delete<Response<Topic>>(
        environment.api.topics.delete.replaceParamsInUrl(topicId)
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }
}
