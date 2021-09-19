class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }

    peek() {
        return this.first
    }

    enqueue(value) {
        const node = new Node(value)
        if (this.length === 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }
        this.length++;
        return this
    }
    dequeue() {
        this.first = this.first.next
        return this
    }
}

const myQueue = new Queue()
myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
console.log(myQueue.enqueue(4))
console.log(myQueue.peek())
console.log(myQueue.dequeue())
console.log(myQueue.peek())