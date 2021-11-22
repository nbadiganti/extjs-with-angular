import { Component } from '@angular/core';
declare var Ext: any;
declare var window: any;

@Component({
	selector: 'personnelnew-root',
	template: `
  <button type="button" (click)="storeItem()">Store Admin info</button>
  <button type="button" (click)="getItem()">Get User login info</button>

  <button type="button" (click)="storeSessionItem()">Session store</button>
  <button type="button" (click)="getSessionItem()">Get Session</button>

  <ExtGrid
    extname="grid"
    cls="personnelview"
    (select)="this.onItemSelected($event)"
    [store]='{
        "xtype": "store",
        "data": [
          { "name": "Jean Luc",   "email": "jeanluc.picard@enterprise.com", "phone": "555-111-1111", "address":"hyderabad" },
          { "name": "ModernWorf", "email": "worf.moghsson@enterprise.com",  "phone": "555-222-2222", "address":"hyderabad" },
          { "name": "Deanna",     "email": "deanna.troi@enterprise.com",    "phone": "555-333-3333", "address":"hyderabad" },
          { "name": "Data",       "email": "mr.data@enterprise.com",        "phone": "555-444-4444", "address":"hyderabad" }
        ]
    }'
    [columns]='[
      {
        "text":"Name",
        "dataIndex":"name",
        "width": 100,
        "cell": {"userCls": "bold"}
      },
      {"text": "Email Angular", "dataIndex": "email", "width": 230},
      {
        "text": "Phone",
        "dataIndex": "phone",
        "width": 150
      },
      {
        "text": "Address",
        "dataIndex": "address",
        "width": 200
      }
    ]'
  >
  </ExtGrid>
  `,
	styles: []
})
export class PersonnelnewComponent {
	onItemSelected({ sender, record }) {
		Ext.Msg.alert('data', JSON.stringify(record.data));
	}

	storeItem() {
		window.localStorage.setItem('isAdmin', 'true');
	}

	getItem() {
		console.log('Loading data in angular controller', window.localStorage.getItem('isUserLogged'));
	}

	storeSessionItem() {
		window.sessionStorage.setItem('username', 'secureworks');
	}

	getSessionItem() {
		console.log('Loading data in angular controller', window.sessionStorage.getItem('userEmail'));
	}
}
