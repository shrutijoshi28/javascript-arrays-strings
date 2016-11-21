// implement queue funtions
// queue is a data structure which can be implemented using arrays, stacks, linkedlists.
//queues typically have a head and a tail pointer 


function Queue(){

	this.queue = [10];
	this.head = -1;
	this.tail = -1;
	console.log("New Queue is created"); 
}

Queue.prototype = {

	enqueue : function(data){
		console.log("New element in queue to be added");
		console.log(this.head);
		console.log(this.tail);

		if(this.head == -1){
			console.log("Queue is empty");
			this.queue[++this.tail] = data;
			this.head = 0;
			console.log(data +" has been added with tail at "+this.tail+ " and head at "+this.head);
			console.log(this.queue);
		}
		else{
			this.queue[++this.tail] = data;
			console.log(data +" has been added with tail at "+this.tail+ " and head at "+this.head);
			console.log(this.queue);
		}
	},

	dequeue : function(){
		console.log("New element in queue to be deleted");
		console.log(this.head);
		console.log(this.tail);
		
			console.log("Queue is not empty");
			var temp = this.queue[this.head];

			for (i = 0; i <= this.tail-1; i++)     
				{
				  this.queue[i]= this.queue[i+1];
				}
				this.tail--;				
			
			console.log(temp + " has been removed");
	},

	display : function(){
		console.log("The queue is");
			for (i = 0; i <= this.tail; i++)      
				{
				  console.log(this.queue[i]);
				}				
	},

	peek : function(){
		console.log("The top element in the queue is " +this.queue[this.head]);			
	},

}

var queue = new Queue();

queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);

console.log(" *********************** DE QUEUE *************************");
queue.dequeue();

console.log(" *********************** DISPLAY *************************");
queue.display();


console.log(" *********************** PEEK *************************");
queue.peek();












