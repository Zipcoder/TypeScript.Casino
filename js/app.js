var AliceBob = (function () {
    function AliceBob() {
        this.displayEle = document.getElementById("display");
        this.userInputEle = document.getElementById("user_input");
    }
    AliceBob.prototype.init = function () {
        this.askForName();
    };
    AliceBob.prototype.submitName = function () {
        this.displayEle.innerHTML += "<br/>";
        if (this.userInputEle.value.toLowerCase() == "bob" || this.userInputEle.value.toLowerCase() == "alice") {
            this.displayEle.innerHTML += "Greetings, " + this.userInputEle.value + "!";
        }
        else {
            this.displayEle.innerHTML += this.userInputEle.value + "? " + "Stranger Danger!!!";
        }
        this.displayEle.innerHTML += "<br/><br/>";
        this.askForName();
    };
    AliceBob.prototype.askForName = function () {
        this.displayEle.innerHTML += "What is your name?";
    };
    return AliceBob;
}());
/// <reference path="AliceBob.ts" />
var aliceBob = new AliceBob();
aliceBob.init();
//# sourceMappingURL=app.js.map