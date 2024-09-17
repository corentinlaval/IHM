var Box = /** @class */ (function () {
    function Box(value) {
        this.contents = value;
    }
    Box.prototype.showContent = function () {
        return this.contents;
    };
    return Box;
}());
var b = new Box("hello!");
var b_content = b.showContent();
console.log(b_content);
var c = new Box(1);
var c_content = c.showContent();
console.log(c_content);
var d = new Box(true);
var d_content = d.showContent();
console.log(d_content);
