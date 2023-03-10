import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageItemComponent } from './messages-list/message-item/message-item.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { TranslateModule } from '@ngx-translate/core'
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadingDialogModule } from '../shared/loading-dialog/loading-dialog.module';


@NgModule({
  declarations: [
    MessagesComponent,
    MessagesListComponent,
    MessageItemComponent,
    MessageEditComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSnackBarModule,
    LoadingDialogModule
  ],
  exports: [
    MessagesComponent,
  ]
})
export class MessagesModule { }
