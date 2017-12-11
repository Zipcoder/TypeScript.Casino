/// <reference path="casino/utils/webutils/DisplayElement.ts"/>
/// <reference path="casino/utils/webutils/InputElement.ts"/>
/// <reference path="casino/utils/webutils/PageObject.ts"/>
class AliceBob{

	displayEle:DisplayElement;
	userInputEle:InputElement;

	constructor(){
		this.displayEle = PageObject.DISPLAY;
		this.userInputEle = PageObject.INPUT;
	}

	init(){
		this.askForName();
	}

	submitName() {
		let display = this.displayEle;
		let userInput= this.userInputEle;
		let userInputValue = userInput.getValue().toLowerCase();

		display.appendNewLine("");
		if(userInputValue == "bob" || userInputValue == "alice"){
			display.append("Greetings, " + userInputValue + "!");
		} else {
			display.append(userInputValue + "? Stranger Danger!!!");
		}
		this.askForName();
	}

	askForName(){
		this.displayEle.append("What is your name?");
	}
}
