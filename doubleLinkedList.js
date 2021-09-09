class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class MyDoubleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head

        this.length = 1
    }
    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        newNode.prev = firstPointer;
        holdingPointer.prev = newNode;
        this.length++;
        return this
    }

    remove(index) {
        if (index >= this.length) {
            return this.append(value);
        }

        const nextNode = this.getTheIndex(index + 1)
        const previusNode = this.getTheIndex(index - 1)
        previusNode.next.next = null;
        previusNode.next.prev = null;
        previusNode.next = nextNode
        return this
    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode
    }
}

let myDoubleList = new MyDoubleLinkedList(1);
myDoubleList.append(2);
myDoubleList.append(3);
myDoubleList.append(4);
myDoubleList.remove(3)
console.log(myDoubleList.insert(2, 8));