//Array default of JS
const array = ["Camilo", "Andres", "Karla"]
console.log(array)

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();
myArray.push("Juliana")
myArray.push("Camila")
console.log(myArray.push("Esteban"))