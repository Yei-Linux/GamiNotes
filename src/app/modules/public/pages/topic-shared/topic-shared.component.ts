import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { formatDate } from 'src/app/shared/helpers/date';
import { SharedTopic } from 'src/app/core/models/public/TopicShared.model';
import { PublicService } from '../../services/public.service';

@Component({
  selector: 'app-topic-shared',
  templateUrl: './topic-shared.component.html',
  styleUrls: ['./topic-shared.component.scss'],
})
export class TopicSharedComponent implements OnInit {
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
