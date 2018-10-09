import {NgModule} from '@angular/core';
import {
  AccordionModule, ButtonModule,
  FieldsetModule,
  InputTextModule,
  MessageModule,
  MessagesModule,
  PasswordModule,
  MenuModule,
  MenubarModule,
  MegaMenuModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    AccordionModule,
    FieldsetModule,
    PasswordModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule
  ],
  exports: [
    AccordionModule,
    FieldsetModule,
    PasswordModule,
    InputTextModule,
    MessagesModule,
    MessageModule,
    ButtonModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule
  ]
})
export class PrimengModule { }
