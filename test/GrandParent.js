var GrandParent = new Klass({
	type: 'GrandParent',
	parentClass: Object,
	constructor: function GrandParent(){
		var weight = 25;
		var private = "private ";
		this.id = 'grandParent';
		this.getWeight = function(){
			return "gp weight " + weight;
		};
		this.getPrivate = function(){
			return private + " from grandParent ";
		};
		this.changePrivate = function(change){
			private = change + " by grandParent ";
		};
	},
	protoMembers:{
		getId: function(){
			return  "I'm a grandparent with id " + this.id;
		}
	}
});