var InputElement = /** @class */ (function () {
    function InputElement() {
        this.inputEle = document.getElementById("user_input");
    }
    InputElement.prototype.getValue = function () {
        return this.inputEle.value;
    };
    return InputElement;
}());
