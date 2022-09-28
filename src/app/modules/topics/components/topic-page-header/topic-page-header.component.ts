import { Component, Input, OnInit } from '@angular/core';
import { GlobalStateService } from 'src/app/shared/services/global-state.service';

@Component({
  selector: 'app-topic-page-header',
  templateUrl: './topic-page-header.component.html',
  styleUrls: ['./topic-page-header.component.scss'],
})
export class TopicPageHeaderComponent implements OnInit {
  @Input()
  hasSearchSection: boolean = true;

  constructor(private globalState: GlobalStateService) {}

  ngOnInit(): void {}

  handleSearch(searcher: string) {
    this.globalState.setTopicFilters({ search: searcher, page: 0 });
  }
}
