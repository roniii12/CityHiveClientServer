import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translateService: TranslateService,
  ){

    this.translateService.addLangs(['en', 'he']);
    this.translateService.setDefaultLang('he');
    this.translateService.use('en');
    document.body.setAttribute('dir','ltr');
    this.translateService.onLangChange.subscribe(langChange=>{
      document.body.setAttribute('dir', langChange.lang !== 'he' ? 'ltr' : 'rtl');
    });
  }
}
