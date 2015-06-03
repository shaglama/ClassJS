var ClassName = new Klass({
	parentClass: ParentClass,//name of the Parent Class (parents constructor)
	parentArgs:[
		//used to create an arguments array for calling the parent constructor
		//maps from provided arguments for child constructor to arguments for parent constructor using index from child arguments array or by providing a value for the argument
		//each element in this array is an object with members name, type, and value
		//elements should be placed in this array in the order that the parent class constructor expects them	
		//the name memeber of each element should contain the name of the argument
		//the type member of element should contain 'index' if an array index from the child constructor arguments will be specified
		//the type member of element should contain 'value' if a value will be specified
		//the value member of element should contain an integer if type is index or any value if type is value
		//parentArgs array can be omitted and if so the arguments array from the child constructor will be passed to parent constructor instead
		{
			name: 'argumentName', //should be name of argument parent constructor expects
			type: 'argumentType', // can be 'index' or 'value'
			value: 'value for argumnet' //can be an integer if type is 'index' or any value if type is 'value'
		},
		{
			name: 'arg1',
			type: 'index',
			value: 1
		},
		{
			name: 'arg2',
			type: 'value',
			value: 'my value'
		}
	],
	constructor: function ClassName(arg1, arg2) {
		//private members and methods as well as public members and priveleged methods should be placed in the constructor function as well as any initilization code for the class
		var privateMember = 'private';
		this.publicMember = 'public';
		this.privelegedMethod = function(){
			return privateMember;
		};
	},
	protoMembers:{
		//any members or methods that should be shared by all instances of the class should be placed here
		sharedMethod: function(){
			return this.publicMember;
		},
		staticMember: 0;
	}

});
