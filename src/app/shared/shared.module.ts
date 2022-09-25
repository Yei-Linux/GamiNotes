import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { IconComponent } from './components/icon/icon.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TagComponent } from './components/tag/tag.component';
import { TextComponent } from './components/text/text.component';
import { TopicPracModal } from './components/topic-practice-modal/topic-practice-modal.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { CustomTooltipComponent } from './components/custom-tooltip/custom-tooltip.component';
import { CustomTooltipDirective } from './directives/custom-tooltip.directive';
import { TooltipDirective } from './directives/tooltip.directive';
import { WrapperComponent } from './layouts/wrapper/wrapper.component';
import { GlobalStateService } from './services/global-state.service';
import { TopicsService } from './services/topics.service';
import { RouterModule } from '@angular/router';

const schema = [
  //UI Components
  ButtonComponent,
  CardComponent,
  FormFieldComponent,
  IconComponent,
  ListItemComponent,
  TagComponent,
  TextComponent,
  TooltipComponent,
  CustomTooltipComponent,

  //Reused Components
  TopicPracModal,

  //Directives
  TooltipDirective,
  CustomTooltipDirective,

  //Layouts
  WrapperComponent,
];

@NgModule({
  declarations: schema,
  imports: [CommonModule, RouterModule],
  exports: schema,
})
export class SharedModule {}
