import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { Observable, Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { FormControl } from '@angular/forms';
import { SpeechService } from './services/speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat-boat';
  hidespeech: Observable<any>;
  completeQuery$: Observable<any>;
  searchData: String;

  constructor (
    private speech: SpeechService,
    private store: Store<fromRoot.State>,
		private router: Router,
  ) {
    this.hidespeech = store.select(fromRoot.getspeechStatus);
    this.hidespeech.subscribe(hidespeech => {
        if (!hidespeech) {
            this.speech.stoprecord();
        }
    });
    // this.completeQuery$ = store.select(fromRoot.getQuery);
    this.completeQuery$.subscribe(data => {
        this.searchData = data;
    });
  }
  
}
