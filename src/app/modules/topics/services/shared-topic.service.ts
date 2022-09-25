import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Response } from 'src/app/core/models/generic/Response.model';
import { SharedTopic } from '../../../core/models/public/TopicShared.model';
import { CreateTopicSharedRequest } from 'src/app/core/models/topics/CreateTopicSharedRequest.model';
import { CreateTopicSharedResponse } from 'src/app/core/models/topics/CreateTopicSharedResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SharedTopicService {
  constructor(private http: HttpClient) {}

  findSharedTopicByTopicId(topicId: string): Observable<SharedTopic | null> {
    return this.http
      .get<Response<SharedTopic>>(
        environment.api.shared.topics.findById.replaceParamsInUrl(topicId)
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  createSharedTopic(
    sharedTopic: CreateTopicSharedRequest
  ): Observable<CreateTopicSharedResponse | null> {
    return this.http
      .post<Response<CreateTopicSharedResponse>>(
        environment.api.shared.topics.create,
        sharedTopic
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }
}
