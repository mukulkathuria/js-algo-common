const Queue = {
	queue:[],
  set({ value , priority = null }){
   if (!this.queue.length) {
      const valuesToPush = {
        value,
        priority: priority || 1,
      };
      this.queue.push(valuesToPush);
    } else if (!priority && this.queue.length) {
      const valuesToPush = {
        value,
        priority: this.queue[this.queue.length - 1].priority + 1,
      };
      this.queue.push(valuesToPush);
    }else{
    	const tempqueue = [];
      let tempi = null;
    	for(let i=0; i < this.queue.length;i+=1){
      	if(this.queue[i].priority > priority && i==0){
        	const values={
          	value,
            priority
          }
        	this.queue = [values, ...this.queue];
          return;
        }else if(this.queue[i].priority <= priority){
        	tempqueue.push(this.queue[i]);
          tempi = i;
        }else if(this.queue[i].priority > priority){
        	if(tempi){
          	tempqueue.push({value , priority});
            tempi = null;
          }
        	tempqueue.push(this.queue[i]);
        } 

				if(tempi !== null && i === this.queue.length - 1){
        	tempqueue.push({ value, priority });
        }
      }
      this.queue = tempqueue;
    }
  },
  
  get(){
  	console.log(this.queue);
  }
}
Queue.set({ value: 2, priority: 2 });
Queue.set({ value: 4 , priority: 4});
Queue.set({value: 10 , priority: 10});
Queue.set({value: 6 , priority: 6});
Queue.set({ value: 11});
Queue.set({ value: 5, priority: 5 });
Queue.set({ value: 12 , priority: 12 });
Queue.set({ value: 13 });
Queue.get();
