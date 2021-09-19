class Node {
    constructor(value) {
        this.left = null
        this.rigth = null
        this.value = value
    }

}
class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
            return this
        } else {
            let currentNode = this.root
            while (true) {
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = node
                        return this
                    }
                    currentNode = currentNode.left
                } else {
                    if (!currentNode.rigth) {
                        currentNode.rigth = node
                        return this
                    }
                    currentNode = currentNode.rigth
                }
            }
        }
    }
}

const tree = new BinarySearchTree()
console.log(tree.insert(10))
console.log(tree.insert(4))
console.log(tree.insert(20))
console.log(tree.insert(2))
console.log(tree.insert(8))
console.log(tree.insert(17))
console.log(tree.insert(170))