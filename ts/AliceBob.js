/// <reference path="utils/DisplayElement.ts"/>
/// <reference path="utils/InputElement.ts"/>
/// <reference path="utils/WebElement.ts"/>
var AliceBob = /** @class */ (function () {
    function AliceBob() {
        this.displayEle = WebElement.DISPLAY;
        this.userInputEle = WebElement.INPUT;
    }
    AliceBob.prototype.init = function () {
        this.askForName();
    };
    AliceBob.prototype.submitName = function () {
        var display = this.displayEle;
        var userInput = this.userInputEle;
        var userInputValue = userInput.getValue().toLowerCase();
        display.appendNewLine();
        if (userInputValue == "bob" || userInputValue == "alice") {
            display.append("Greetings, " + userInputValue + "!");
        }
        else {
            display.append(userInputValue + "? Stranger Danger!!!");
        }
        display.appendNewLine().appendNewLine();
        this.askForName();
    };
    AliceBob.prototype.askForName = function () {
        this.displayEle.append("What is your name?");
    };
    return AliceBob;
}());
