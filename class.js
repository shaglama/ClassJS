function Class(definition){
	//check to make sure new was used to call constructor
	if(!(this instanceof Class)){
		return new Class(definition);
	}
	var m_type = definition.type || 'Object';
	var m_ctor= definition.constructor || function(){};
	var m_parent = definition.parentClass || Object;
	var m_parentArgs = definition.parentArgs || null;
	var m_protoMembers = definition.protoMembers || {};
	var m_numInstances = 0;
	var m_super = null;
		
	function klass(){
		//check to make sure new was used to call constructor
		if(!(this instanceof klass)){
			return new klass();
		}
		var _super;// = Object.create(null);
	 	var _instID = m_numInstances;
	 	if(m_parent != Object){
	 		var parentArgs;
	 		if(m_parentArgs){	 		
	 			var arg;
	 			var index;
	 			var val;
	 			parentArgs = [];
	 			for(var i = 0; i < m_parentArgs.length; i++){
	 				arg = m_parentArgs[i];
	 				switch(arg.type){
	 					case "index":
	 						index = arg.value;
	 						if(arguments[index]){
	 							parentArgs.push(arguments[index]);
	 						}
	 						break;
	 					case "value":
	 						val = arg.value;
	 						parentArgs.push(val);
	 						break;
	 					default:
	 						//error
	 						break;
	 				}	 			 			
	 			}
	 		}	
	 		else{	 	
	 			parentArgs = arguments;
	 		}
	 		m_parent.apply(this,parentArgs);
	 		//_super = createSuper(_super,this,m_parent);
	 	} 
	 	
	 	_super = this._super || Object.create(new Object());
	 	_super = createSuper(_super,this,m_parent);
	 	
	 	m_ctor.apply(this,arguments);
	 	this._super = _super;
	 	this.get_instID = function(){
	 		return _instID;
	 	};
	 	m_numInstances++;
	 	function createSuper(mySuper, scope, myParent){
	 		var m_super = Object.create(myParent.prototype);
	 		for(var prop in scope){
	 			if(scope.hasOwnProperty(prop)){
	 				m_super[prop] = scope[prop];
	 			}
	 		}
	 		m_super._super = Object.create(mySuper);
	 		for(var sProp in mySuper){
	 			if(mySuper.hasOwnProperty(sProp)){
	 				m_super._super[sProp] = mySuper[sProp];
	 			}
	 		}
	 		return m_super;	 		
	 	}
	}
	
	klass.prototype = Object.create(m_parent.prototype);
	klass.prototype.constructor = m_ctor;
	for(var prop in m_protoMembers){
		klass.prototype[prop] = m_protoMembers[prop];
	}
	klass.prototype.get_numInsts = function(){
		return m_numInstances;
	};
	klass.prototype.get_type = function(){
		return m_type;
	};
	//klass.prototype._super = function (methodName, args){
	 		//return m_super[methodName].apply(this,args);
	//};
	return klass;
}