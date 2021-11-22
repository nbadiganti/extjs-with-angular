import { Component } from '@angular/core';
const Ext = window['Ext'];

@Component({
	selector: 'contactview-root',
	template: `
    <div class="content-container">
    <h1>
       Angular Button Click Event Example
    </h1>
    <button  (click)="clickEvent()">Click Me</button>
    <h2>{{msg}}</h2>
 	</div>`,
	styles: []
})
export class ContactComponent {
	msg: string;
	constructor() {}

	clickEvent() {
		this.msg = 'Button is Clicked';
		return this.msg;
	}
}
