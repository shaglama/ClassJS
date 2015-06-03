var Child = new Klass({
	type: 'Child',
	parentClass: Parent,
	parentArgs:[
		{
			name : 'age',
			type: 'index',
			value: 1
		}
	],
	constructor: function Child(name, age) {
		this.name = name;
		this.id="child";
		//place private and priveleged members and methods here
		this.getPrivate = function(){
			return this._super.getPrivate() + " from child ";
		};
		this.changePrivate = function(change){
			this._super.changePrivate(change + " by child ");
		};
	},
	protoMembers:{
		getName: function(){
			return this.name;
		},
		getId: function(){
			return  "I'm a child with id " + this.id;
		}
	}	
});