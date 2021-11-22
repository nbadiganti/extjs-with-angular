Ext.define('AngularInExtJsClassic.view.personnel.PersonnelViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.personnelviewcontroller',

	onItemSelected: function(sender, record) {
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	storeItem: function() {
		localStorage.setItem('isUserLogged', 'true');
	},

	getItem: function() {
		console.log('Loading data in extjs controller', localStorage.getItem('isAdmin'));
	},

	storeSessionItem: function() {
		window.sessionStorage.setItem('userEmail', 'nbadiganti@secureworks.com');
	},

	getSessionItem: function() {
		console.log('Loading data in extjs controller', window.sessionStorage.getItem('username'));
	},

	onConfirm: function(choice) {
		if (choice === 'yes') {
			this.storeSessionItem();
		} else {
			this.getSessionItem();
		}
	}
});
