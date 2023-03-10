import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { SendMessage } from '../models/send-message.model';
import { BehaviorSubject, of, catchError, tap } from 'rxjs';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService extends BaseService {

  constructor(
    http:HttpClient,
    translateService:TranslateService
  ) {
    super(http,`api/Messages`, translateService);
   }

  messagesChange = new BehaviorSubject<Message[] | null>(null);
  errorChange = new BehaviorSubject<string | null>(null);
  isLoadingChange = new BehaviorSubject<boolean>(false);

  handleErrorMessage(error:any){
    const errMsg = this.generalErrorMessage(error);
    this.errorChange.next(errMsg);
    this.isLoadingChange.next(false);
    setTimeout(() => {
      this.errorChange.next(null);
    }, 10);
    return of(errMsg);
  }

  getMessages(){
    this.isLoadingChange.next(true);
    return this.get<Message[]>('All').pipe(
      tap(messages=>{
        this.messagesChange.next(messages);
        this.isLoadingChange.next(false);
      }),
      catchError(error => this.handleErrorMessage(error))
    )
   }

   sendMessage(message: SendMessage){
    this.isLoadingChange.next(true);
    return this.put<any>('SendSMS', message).pipe(
      tap(()=>{
        this.isLoadingChange.next(false);
      }),
      catchError(error => this.handleErrorMessage(error))
    )
   }   
}
