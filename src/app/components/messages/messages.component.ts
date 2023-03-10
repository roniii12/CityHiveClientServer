import { Component, OnDestroy, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from 'src/app/core/cummon/base.component';
import { MessageService } from 'src/app/core/services/message.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent extends BaseComponent implements OnInit, OnDestroy {

  constructor(
    private messageService: MessageService,
    private snackBar:MatSnackBar,
    private translateService:TranslateService,
    private cd: ChangeDetectorRef
  ) {
    super();
   }

  isEditMessage = false;
  isLoading: boolean = false;
  message?:string | null;

  ngOnInit(): void {
    this.messageService.isLoadingChange.pipe(takeUntil(this.destroyed$)).subscribe(isLoading=>{
      this.isLoading = isLoading;
      if(this.message || this.messageService.errorChange.value){
        const isError = !!this.messageService.errorChange.value;
        this.snackBar.open(isError ? this.translateService.instant('unkownError') : this.message, this.translateService.instant('close'),{
          verticalPosition: "top",
          horizontalPosition: "center",
          panelClass: isError ? 'snack-failed' : "snack-success",
          duration: 3000
        });
        this.message = "";
      }
      this.cd.detectChanges();
    })
  }

  onCloseMessageList(){
    this.isEditMessage = true;
  }

  onCloseEditMessage(message: string | null){
    this.message=message;
    this.isEditMessage = false;
  }

  ngOnDestroy(): void {
    this.onDestroy();
  }

}
