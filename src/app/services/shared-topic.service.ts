import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Response } from '../models';
import { SharedTopic } from '../models/pojos/shared_topic.model';
import { CreateSharedTopicRequest } from '../models/requests/CreateSharedTopicRequest.model';
import { CreateSharedTopicResponse } from '../models/responses/CreateSharedTopicResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SharedTopicService {
  constructor(private http: HttpClient) {}

  findSharedTopicById(shared_topic_id: string): Observable<SharedTopic | null> {
    return this.http
      .get<Response<SharedTopic>>(
        environment.api.shared.topics.findById.replaceParamsInUrl(
          shared_topic_id
        )
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }

  findSharedTopicByTopicId() {
    
  }

  createSharedTopic(
    sharedTopic: CreateSharedTopicRequest
  ): Observable<CreateSharedTopicResponse | null> {
    return this.http
      .post<Response<CreateSharedTopicResponse>>(
        environment.api.shared.topics.create,
        sharedTopic
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }
}
