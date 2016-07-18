var EventEmitter = function () {
   this.events = []
}

/* Add invoke func in fire*/
EventEmitter.prototype.subscribe = function (param) {
	this.events.push(param)
   		return this
}

/*Delete invoke func from fire*/
EventEmitter.prototype.unsubscribe = function (param) {
	var idx = this.events.findIndex(handler => handler === param);
       if (idx > -1) {
           this.events.splice(idx, 1)
       }
   return this
}

/*Invoke func*/
EventEmitter.prototype.fire = function (event) {
    for (var i = 0; i < this.events.length; i++) {
       if (typeof this.events[i] === 'function'){
			this.events[i].apply(this, arguments)
   		}
	}
	return this
}

const myEventEmitter = new EventEmitter()

const handler1 = str => console.log(`i'm handler1 this is my str: ${str}`)
const handler2 = (str, num) => console.log(`i'm handler2 this is my num: ${num}`)

myEventEmitter
	.subscribe(handler1)
	.subscribe(handler2)
	.fire('hello', 10) // both handlers invocation
	.unsubscribe(handler2)
	.fire('world') // just 1st handler invoke
