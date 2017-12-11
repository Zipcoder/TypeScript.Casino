class InputElement implements WebElement {
    inputEle:any;

    constructor(){
        this.inputEle = document.getElementById("user_input");
    }

    public getValue(): string {
        return this.inputEle.value
    }
}