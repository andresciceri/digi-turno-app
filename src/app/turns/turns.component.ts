import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Client } from '../client-panel/client';
import { Turn } from '../business-areas/turn';

@Component({
  selector: 'app-turns',
  templateUrl: './turns.component.html',
  styleUrls: ['./turns.component.css']
})
export class TurnsComponent implements OnInit {

	listTurn: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) { }

  ngOnInit() {
  	this.listTurn = this.af.database.list('/actual',{
	      query: {
	        limitToLast: 1
	    	}
	      });

  }

}
