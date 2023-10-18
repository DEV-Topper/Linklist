class Nodes {
	public value: number;
	public next: Nodes | null | any;

	constructor(value: number) {
		this.value = value;
		this.next = null;
	}
}

class Linklist {
	public head: Nodes | null | any;
	public tail: Nodes | null | any;
	public length: number;

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//push
	addTail(value: number) {
		let node = new Nodes(value);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
		return this;
	}

	//unshift
	addHead(value: number) {
		let node = new Nodes(value);

		if (!this.head) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.head = node;
			node.next = this.head;
		}
		this.length++;
		return this;
	}

	//pop
	removeTail() {
		if (!this.head) {
			return undefined;
		} else {
			let current = this.tail;
			let nextTail = current;

			while (current.next) {
				this.tail = nextTail;
				this.tail.next = null;
			}
			this.length--;
			return current;
		}
	}
	removeHead() {
		if (!this.head) {
			return undefined;
		} else {
			let current = this.head;
			let newHead = current;

			while (current.next) {
				this.head = newHead;
				this.head.next = null;
			}
			this.length--;
			return current;
		}
	}

	get(index: number) {
		if (index < 0 || index >= this.length) {
			return undefined;
		} else {
			let count: number = 0;
			let current = this.head;

			while (index !== count) {
				current = current.next;
				count++;
			}

			return current;
		}
	}

	set(index: number, val: number) {
		let node = this.get(index);

		if (node) {
			node.val = val;
			return true;
		} else {
			return false;
		}
	}

	insert(index: number, value: number) {
		let node = new Nodes(value);

		if (index < 0 || index > this.length) return "Out Of Range";
		if (index === 0) return !!this.addHead(value);
		if (index === this.length) return this.addTail(value);

		let prev = this.get(index - 1);
		let temp = prev.next;

		prev.next = node;
		node.next = temp;

		return true;
	}

	remove(index: number) {
		if (index < 0 || index > this.length) return "Out Of Range";
		if (index === 0) return !!this.removeHead();
		if (index === this.length) return this.removeTail();

		let prev = this.get(index - 1);
		let temp = prev.next;

		prev.next = temp.next;

		this.length--;
		return temp;
	}
}

let linkList = new Linklist();

linkList.addTail(3);
linkList.addTail(31);
linkList.addTail(4);
linkList.addTail(9);
// linkList.addHead(90);
// linkList.addHead(20);

console.clear();
// console.log(linkList);
// console.log("Node removed from the List: ", linkList.removeTail());
// console.log("Node removed from the List: ", linkList.length);
// console.log("Node removed from the List: ", linkList.removeHead());
// console.log("Node removed from the List: ", linkList.length);
// console.log("get nodes by position in the List: ", linkList.get(2));
// console.log("Already replaced by index: ", linkList.set(3, 30));
// console.log(linkList.insert(2, 55));
console.log(linkList);
console.log(linkList.remove(1));
