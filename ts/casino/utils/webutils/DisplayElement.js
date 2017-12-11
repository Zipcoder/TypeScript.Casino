var DisplayElement = /** @class */ (function () {
    function DisplayElement() {
        this.displayEle = document.getElementById("display");
    }
    DisplayElement.prototype.append = function (val) {
        this.setInnerHtml(this.getInnerHtml() + val);
        return this;
    };
    DisplayElement.prototype.appendNewLine = function (val) {
        return this.append("<br/>" + val);
    };
    DisplayElement.prototype.appendNewLine = function () {
        return this.appendNewLine("");
    };
    DisplayElement.prototype.clear = function () {
        this.setInnerHtml("");
    };
    DisplayElement.prototype.getInnerHtml = function () {
        return this.displayEle.innerHTML;
    };
    DisplayElement.prototype.setInnerHtml = function (val) {
        this.displayEle.innerHTML = val;
    };
    return DisplayElement;
}());
