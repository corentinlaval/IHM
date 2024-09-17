class Box<T>{
    contents: T;
    constructor(value: T) {
        this.contents = value;
    }

    showContent():T {
        return this.contents;
    }
}

const b = new Box("hello!");
let b_content: string = b.showContent();
console.log(b_content);


const c = new Box(1);
let c_content: number = c.showContent();
console.log(c_content);

const d = new Box(true);
let d_content: boolean = d.showContent();
console.log(d_content);