import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { MessageService } from 'src/app/core/services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.scss']
})
export class MessageEditComponent implements OnInit {

  constructor(
    private messageService: MessageService,
    private translateService: TranslateService,
  ) { }

  smsForm!: FormGroup;
  message?:string;
  @Output() addedMessage = new EventEmitter<string | null>();

  ngOnInit(): void {
    this.initForm();
  }

  onClear(){
    this.smsForm.reset();
  }
  
  onClose(){
    this.addedMessage.emit(null);
  }

  onSubmit(){
    if(!this.smsForm?.valid) return;
    const sendMessage={
      ...this.smsForm.value,
    }
    this.messageService.sendMessage(sendMessage).subscribe(()=>{
      this.addedMessage.emit(this.message);
    });
    this.message = this.translateService.instant('messageSentSuccessfully');
  }

  private initForm(){
    const initPhone = '';
    const initMessage = "";
    this.smsForm = new FormGroup({
      phone: new FormControl(initPhone, Validators.required),
      message: new FormControl(initMessage, Validators.required)
    });
  }

}
