import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Client } from './client';
import { ClientPanelService } from './client-panel.service';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.css'],
  providers: [ClientPanelService]
})
export class ClientPanelComponent implements OnInit {

	submitted = true;
	active = true;
	client : Client;
	clientTurn : Client;
	typeService : string;
	reponseTurn = true;
	lengthList = 0;
	listTurn: FirebaseListObservable<any[]>;

  
  constructor(private _panelClient : ClientPanelService, private af: AngularFire) { 
  	this.client = new Client();
  	this.clientTurn = new Client();
  	this.typeService = "";
  }

  ngOnInit() {
  	this.listTurn = this.af.database.list('/servicios/cajas');
  	this.listTurn.subscribe(items => {
  		this.lengthList = items.length;
	  
	});
  }

  onSubmit() { 
  	this.submitted = true;
  	if(this.typeService == "cajas") {
   		
		this.client.turn = "C" + this.lengthList;
		this.listTurn.push(this.client);
		this.reponseTurn = false;
  		
  	}	
  }

  onSelectTurn(option : string) {
  	this.submitted = false;
  	this.typeService = option;
  	this.reponseTurn = true;
  	this.client = new Client();
  }
}
