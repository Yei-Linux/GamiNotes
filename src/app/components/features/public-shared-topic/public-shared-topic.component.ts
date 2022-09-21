import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { formatDate } from 'src/app/helpers/date';
import { SharedTopic } from 'src/app/models/pojos/shared_topic.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-public-shared-topic',
  templateUrl: './public-shared-topic.component.html',
  styleUrls: ['./public-shared-topic.component.scss'],
})
export class PublicSharedTopicComponent implements OnInit {
  sharedTopic: SharedTopic | null = null;
  constructor(
    private publicService: PublicService,
    private route: ActivatedRoute
  ) {}

  fetchPublicSharedTopicByTopicId(sharedId: string) {
    this.publicService
      .findPublicSharedTopicById(sharedId)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error('Error on getting shared topic'));
        })
      )
      .subscribe((sharedTopic) => {
        if (!sharedTopic) return;
        this.sharedTopic = sharedTopic;
        this.sharedTopic.create_at = formatDate(this.sharedTopic.create_at);
      });
  }

  ngOnInit(): void {
    const publicId = this.route.snapshot.paramMap.get('id');
    if (!publicId) return;
    this.fetchPublicSharedTopicByTopicId(publicId);
  }
}
