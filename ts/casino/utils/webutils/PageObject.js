var WebElement;
(function (WebElement) {
    WebElement[WebElement["DISPLAY"] = new DisplayElement()] = "DISPLAY";
    WebElement[WebElement["INPUT"] = new InputElement()] = "INPUT";
})(WebElement || (WebElement = {}));
;
