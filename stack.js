class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }

    peek() {
        return this.top
    }

    push(value) {
        const node = new Node(value)
        if (this.length === 0) {
            this.top = node
            this.bottom = node
        } else {
            const holdingPointer = this.top
            this.top = node
            this.top.next = holdingPointer
        }

        this.length++;
        return this
    }
}

const stack = new Stack()
stack.push("lechuga")
stack.push("tomate")
stack.push("pan")

console.log(stack.peek())
console.log(stack.push("arroz"))