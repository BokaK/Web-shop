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
  MegaMenuModule, DropdownModule, DialogModule
} from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';

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
    MegaMenuModule,
    DataViewModule,
    DropdownModule,
    TableModule,
    DialogModule
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
    MegaMenuModule,
    DataViewModule,
    DropdownModule,
    TableModule,
    DialogModule
  ]
})
export class PrimengModule { }
