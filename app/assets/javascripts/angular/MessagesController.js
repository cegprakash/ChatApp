app.controller('MessagesController',function(){

	this.messages = [];
	this.currentMessage = "";
	var controller = this;

	this.init = function(){
		controller.messages = [];
		for(var i = 0; i < 10; i++)
			controller.messages.push('');
		controller.currentMessage = "";
	};

	this.addMessage = function(message){
		controller.messages.push(message);
		controller.messages.shift();
		controller.currentMessage = "";
	};

	this.getMessages = function(){
		return controller.messages;
	};

});