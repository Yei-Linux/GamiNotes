import { Component, Input, OnInit } from '@angular/core';
import { NoteFilters } from 'src/app/core/models/notes/NoteFilters.model';
import { TopicFilters } from 'src/app/core/models/topics/TopicFilters.model';
import { GlobalStateService } from '../../services/global-state.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input()
  type?: 'TopicFilters' | 'NoteFilters';
  @Input()
  title: string = 'My Filters';
  topicFilters: TopicFilters | null = null;
  noteFilters: NoteFilters | null = null;

  constructor(private globalState: GlobalStateService) {}

  suscribers() {
    this.globalState.topicFilters$.subscribe((topicFilters) => {
      this.topicFilters = topicFilters;
    });
    this.globalState.noteFilters$.subscribe((noteFilters) => {
      this.noteFilters = noteFilters;
    });
  }

  ngOnInit(): void {
    this.suscribers();
  }

  handleToggleLike(is_liked: boolean) {
    if (!this.type) return;

    if (this.type === 'TopicFilters') {
      this.topicFilters &&
        this.globalState.setTopicFilters({
          ...this.topicFilters,
          is_liked,
        });

      return;
    }

    this.noteFilters &&
      this.globalState.setNoteFilters({
        ...this.noteFilters,
        is_liked,
      });
  }

  handleToggleIgnored(is_ignored: boolean) {
    if (!this.type) return;

    if (this.type === 'TopicFilters') {
      this.topicFilters &&
        this.globalState.setTopicFilters({
          ...this.topicFilters,
          is_ignored,
        });

      return;
    }

    this.noteFilters &&
      this.globalState.setNoteFilters({
        ...this.noteFilters,
        is_ignored,
      });
  }
}
