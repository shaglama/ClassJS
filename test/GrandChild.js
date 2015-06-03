var GrandChild = new Klass({
	type: 'GrandChild',
	parentClass: Child,
	parentArgs:[
		{
			name: 'name',
			type: 'index',
			value: 0
		},
		{
			name : 'age',
			type: 'index',
			value: 1
		}
	],
	constructor: function GrandChild(name, age) {
		//var private = 'private';
		this.name = name;
		//place private and priveleged members and methods here
		this.getPrivate = function(){
			return this._super.getPrivate() + " from grandChild ";
		};
		this.changePrivate = function(change){
			this._super.changePrivate(change + " by grandChild ");
		};
	},
	protoMembers:{
		getName: function(){
			return this.name;
		},
		getId: function(){
			return  "I'm a grandchild with id " + this.id;
		}
	}	
});