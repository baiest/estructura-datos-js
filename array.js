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

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem
    }

    delete(index) {
        const shiftIndex = (index) => {
            for (let i = index; i < this.length; i++) {
                this.data[i] = this.data[i + 1];
            }
            delete this.data[this.length - 1]
            this.length--;
        }

        const item = this.data[index]
        shiftIndex(index)
        return item
    }

    deleteFirst() {
        return this.delete(0)
    }

    insert(item) {
        const shiftIndex = () => {
            let previus = this.data[0]
            let next;
            for (let i = 0; i < this.length; i++) {
                next = this.data[i + 1]
                this.data[i + 1] = previus
                previus = next
            }
            this.length++;
        }

        shiftIndex()
        this.data[0] = item
        return this.data
    }
}

const myArray = new MyArray();
myArray.push("Juliana")
myArray.push("Camila")
myArray.push("Sebastian")
console.log(myArray.push("Esteban"))
console.log(myArray.pop())
console.log(myArray.data)
console.log(myArray.delete(0))
console.log(myArray.data)
console.log(myArray.insert('Juan'))
console.log(myArray.deleteFirst())
console.log(myArray.data)