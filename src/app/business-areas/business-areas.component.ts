import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';
import { Client } from '../client-panel/client';
import { Turn } from './turn';

@Component({
  selector: 'app-business-areas',
  templateUrl: './business-areas.component.html',
  styleUrls: ['./business-areas.component.css']
})
export class BusinessAreasComponent implements OnInit {

	turns: FirebaseListObservable<any[]>;
	turn: FirebaseObjectObservable<any>;
	turnActual: FirebaseListObservable<any>;
	stateSubject: Subject<any>;
	turnList : Client[];

  constructor(private af: AngularFire) {
  	
   }

  ngOnInit() {
		this.stateSubject = new Subject();
  		this.turns = this.af.database.list('/servicios/cajas',{
	      query: {
	        orderByChild: 'state',
	        equalTo: false
	      }
	    });

	    // subscribe to changes
		this.turns.subscribe(queriedItems => {
		    console.log(queriedItems);
		    this.turnList = queriedItems;
		});
  }

  filterBy(state: boolean) {
    this.stateSubject.next(state); 
  }

  updateTurn(key : string, item : Client) {
  	this.turn = this.af.database.object('/servicios/cajas/' + key);
  	this.turn.update({state : true});
  	this.turnActual = this.af.database.list('/actual/');
  	this.turnActual.remove();
  	let client = new Turn();
  	client.name = item.name;
  	client.turn = item.turn;
  	this.turnActual.push(client);
  	//this.af.database.list('/servicios/cajas/' + key).update({state : true});
  	
  }

}
