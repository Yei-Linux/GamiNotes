import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTooltipDirective } from './custom-tooltip.directive';
import { CustomTooltipComponent } from './custom-tooltip.component';

@NgModule({
  declarations: [CustomTooltipComponent, CustomTooltipDirective],
  imports: [CommonModule],
  exports: [CustomTooltipDirective],
})
export class CustomTooltipModule {}
