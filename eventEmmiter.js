/*func for delete*/

 var  deleteFunc = function (allFunc, funcForDelete) {
       var i = 0, length = allFunc.length, index = -1, found = false;

       while (i < length && !found) {
           if (allFunc[i] === funcForDelete) {
               index = i;
               found = true;
           }
           i++;
       }
       return index;
}


function handler1(str) {
 console.log(`i'm handler1 this is my str: ${str}`)
}

function handler2(str, num) {
 console.log(`i'm handler2 this is my num: ${num}`)
}

var EventEmitter = function () {
   this.events = [];
};

/* Add invoke func in fire*/
EventEmitter.prototype.subscribe = function (param) {
   this.events.push(param);
};


/*Delete invoke func from fire*/
EventEmitter.prototype.unsubscribe = function (param) {

   if (typeof this.events === 'object') {
       var index = deleteFunc(this.events, param);

       if (index > -1) {
           this.events.splice(index, 1);
       }
   }
};

/*Invoke func*/
EventEmitter.prototype.fire = function (event) {

   for (var i = 0; i < this.events.length; i++) {
       if (typeof this.events[i] === 'function'){
       this.events[i].apply(this, arguments);
   }

   }
};


const myEventEmitter = new EventEmitter();

myEventEmitter.subscribe(handler1)
myEventEmitter.subscribe(handler2)
myEventEmitter.fire('hello', 10) // both handlers invocation
myEventEmitter.unsubscribe(handler2)
myEventEmitter.fire('world'); // just 1st handler invoke
