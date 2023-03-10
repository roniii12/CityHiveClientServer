import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/cummon/base.component';
import { Message } from 'src/app/core/models/message.model';
import { MessageService } from 'src/app/core/services/message.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
})
export class MessagesListComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(
    private messageService: MessageService,
  ) {
    super();
   }
  messages!:Message[] | null;
  @Output() addMessage = new EventEmitter<boolean>();
  isEditMessage:boolean = false;
  

  ngOnInit(): void {
    this.messageService.getMessages().subscribe();
    this.messageService.messagesChange.pipe(takeUntil(this.destroyed$)).subscribe((messages)=>{
      this.messages = messages;
    });
  }
  onAddMessage(){
    this.addMessage.emit(true);
  }
  ngOnDestroy(): void {
    this.onDestroy();
  }
}
