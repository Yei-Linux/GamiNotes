import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layouts/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DebounceDirective } from './directives/debounce.directive';
import { FiltersComponent } from './layouts/filters/filters.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { MulticheckboxFormComponent } from './components/multicheckbox-form/multicheckbox-form.component';

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
  SearchComponent,
  BreadcrumbComponent,
  ToggleComponent,
  CheckboxComponent,
  MulticheckboxFormComponent,

  //Reused Components
  TopicPracModal,

  //Directives
  TooltipDirective,
  CustomTooltipDirective,
  DebounceDirective,

  //Layouts
  WrapperComponent,
  HeaderComponent,
  FiltersComponent,
];

@NgModule({
  declarations: schema,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: schema,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
