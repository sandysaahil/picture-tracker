import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {
  NzAvatarModule,
  NzCardModule,
  NzDividerModule,
  NzGridModule,
  NzSwitchModule,
  NzTableModule
} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzGridModule,
    NzCardModule,
    NzSwitchModule,
    NzTableModule,
    NzDividerModule
  ],
  declarations: [WelcomeComponent],
  exports: [
    WelcomeComponent,
    NzGridModule,
    NzCardModule,
    NzSwitchModule,
    NzTableModule,
    NzDividerModule
  ]
})
export class WelcomeModule { }
