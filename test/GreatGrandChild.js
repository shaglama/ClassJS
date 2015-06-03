var GreatGrandChild = new Klass({
	type: 'GreatGrandChild',
	parentClass: GrandChild,
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
	constructor: function GreatGrandChild(name, age) {
		//var private = 'private';
		this.name = 'name';
		//place private and priveleged members and methods here
		this.getPrivate = function(){
			return this._super.getPrivate() + " from greatGrandChild!";
		};
		this.changePrivate = function(change){
			this._super.changePrivate(change + " by greatGrandChild ");
		};
	},
	protoMembers:{
		getName: function(){
			return this.name;
		},
		getId: function(){
			return  "I'm a great grandchild with id " + this.id;
		}
	}	
});