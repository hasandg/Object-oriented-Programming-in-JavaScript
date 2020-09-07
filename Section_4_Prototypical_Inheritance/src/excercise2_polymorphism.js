function HtmlElement() {
    this.click = function () {
        console.log("clicked");
    };
}

HtmlElement.prototype.focus = function () {
    console.log("focused");
};

function HtmlSelectElement(items = []) {

    this.items = items;
    this.addItem = function (item) {
        this.items.push(item);
    };

    this.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };

    this.render = function () {
        let str = "<select>\n";
        for (const item of items) {
            str = str.concat(`<option>${item}</option>\n`)
        }
        str = str + "</select>\n"
        return str;
    }
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

function HtmlImageElement(src) {

    this.src = src;


    this.renderNormalFunc = function () {
        return this.src ? "<img></img>" : `<img src="${this.src}"></img>`;
    }

    this.render = () => {
        return this.src ? "<img></img>" : `<img src="${this.src}"></img>`;
    }
}

HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlSelectElement;
