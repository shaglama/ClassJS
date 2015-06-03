var Parent = new Klass({
	type: 'Parent',
	parentClass: GrandParent,
	constructor: function Parent(age){
		this.age = age;
		this.id="parent";
		this.getPrivate = function(){
			return this._super.getPrivate() + "from parent ";
		};
		this.changePrivate = function(change){
			this._super.changePrivate(change + " by parent ");
		};
	},
	protoMembers:{
		getAge: function(){
			return this.age;
		},
		getId: function(){
			return  "I'm a parent with id " + this.id;
		}
	}	
});