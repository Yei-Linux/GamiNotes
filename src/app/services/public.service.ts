import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SharedTopic } from '../models/pojos/shared_topic.model';
import { Response } from '../models';

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
