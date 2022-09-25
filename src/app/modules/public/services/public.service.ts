import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Response } from 'src/app/core/models/generic/Response.model';
import { SharedTopic } from '../../../core/models/public/TopicShared.model';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  constructor(private http: HttpClient) {}

  findPublicSharedTopicById(sharedId: string): Observable<SharedTopic | null> {
    return this.http
      .get<Response<SharedTopic>>(
        environment.api.shared.public.findById.replaceParamsInUrl(sharedId)
      )
      .pipe(
        map((response) => response.data),
        shareReplay()
      );
  }
}
