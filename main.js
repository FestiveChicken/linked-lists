class LinkedList {
    //Initilizes head and tail
    constructor() {
        this.head = null
        this.tail = null
    }

    //Add node to end of list
    append(value) {
        const newNode = new node(value)

        //If there is no head, this will be the head and tail
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.nextNode = newNode
            this.tail = newNode
        }
        return this
    }

    //Add node to front of list
    prepend(value) {
        const newNode = new node(value)

        //If there is no head, this will be the head and tail
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.nextNode = this.head
            this.head = newNode
        }
        return this
    }

    //Returns the size of the list
    size() {
        //If there is no head, it will return 0
        if (!this.head) {
            return 0
        }
        let currentNode = this.head
        let count = 1
        //If the current node is not the tail, move to the next node and add 1 to the count
        while (currentNode != this.tail) {
            currentNode = currentNode.nextNode
            count++
        }
        return count
    }

    //Return the node at the specified index
    at(index) {
        let currentNode = this.head
        let count = 0
        if (index > this.size() - 1) {
            return console.log('Please pick an index from 0 to ' + this.size())
        }
        while (index != count) {
            currentNode = currentNode.nextNode
            count++
        }
        return currentNode
    }

    //Removes the last node
    pop() {
        const secondToLast = this.size() - 2
        this.tail = this.at(secondToLast)
        this.tail.nextNode = null
        return this
    }
    contains(value) {
        let currentNode = this.head
        while (currentNode.value != value) {
            if (currentNode == this.tail) {
                return false
            }
            currentNode = currentNode.nextNode
        }
        return true
    }
    find(value) {
        let currentNode = this.head
        let index = 0
        while (currentNode.value != value) {
            currentNode = currentNode.nextNode
            if (currentNode == null) {
                return console.log('Not in the list')
            }
            index++
        }
        return index
    }
    toString() {
        let string = ''
        let currentNode = this.head
        string = currentNode.value
        while (currentNode != this.tail) {
            currentNode = currentNode.nextNode
            string = string + ' > ' + currentNode.value
        }
        return string + ' > null'
    }
}

//Creates new nodes
class node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.nextNode = nextNode 
    }
}


//Initilizing sample list
const list = new LinkedList
list.append(5)
list.append(51)
list.append(52)
list.append(54)