class DisplayElement implements WebElement {
    displayEle:any;

    constructor(){
        this.displayEle = document.getElementById("display");
    }

    public append(val :string): DisplayElement {
        this.setInnerHtml(this.getInnerHtml() + val)
        return this;
    }


    public appendNewLine(val: string): DisplayElement {
        return this.append("<br/>" + val);
    }

    public clear() {
        this.setInnerHtml("");
    }

    public getInnerHtml(): any {
        return this.displayEle.innerHTML;
    }

    private setInnerHtml(val: string) {
        this.displayEle.innerHTML = val;
    }

}
