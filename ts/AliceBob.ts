class AliceBob{

	displayEle:any;
	userInputEle:any;

	constructor(){
		this.displayEle = document.getElementById("display");
		this.userInputEle = document.getElementById("user_input")
	}

	init(){
		this.askForName();
	}

	submitName() {
		this.displayEle.innerHTML += "<br/>";
		if(this.userInputEle.value.toLowerCase() == "bob" || this.userInputEle.value.toLowerCase() == "alice"){
			this.displayEle.innerHTML += "Greetings, " + this.userInputEle.value + "!" ;
		}else{
			this.displayEle.innerHTML +=  this.userInputEle.value + "? " + "Stranger Danger!!!";
		}
		this.displayEle.innerHTML += "<br/><br/>";
		this.askForName();
	}

	askForName(){
		this.displayEle.innerHTML += "What is your name?"
	}
}
