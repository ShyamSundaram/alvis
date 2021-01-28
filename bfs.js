class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    // Functions to be implemented 
    // enqueue(item) 
    enqueue(element) 
    {     
        // adding element to the queue 
        this.items.push(element); 
    }
    // dequeue() 
    dequeue() 
    { 
        // removing element from the queue 
        // returns underflow when called  
        // on empty queue 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift(); 
    } 
    // front()
    front() 
    { 
        // returns the Front element of  
        // the queue without removing it. 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    }  
    // isEmpty() 
    isEmpty() 
    { 
        // return true if the queue is empty. 
        return this.items.length == 0; 
    }
     
    isNotEmpty(){
        return this.items.length != 0;
    }
    // printQueue() 
    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    } 
} 



async function bfs(){
    for(let j=1;j<=size;j++){
        //if(colorToBeChanged[j]==0){
            vertex.update([{id: j, color: {background: 'powderblue'}}]);
        //}
    }
    let count=1;
    //to clear div before making new bfs trees
    var treeContainerElement=document.getElementById("tree-container");
    while(treeContainerElement.hasChildNodes()){
        treeContainerElement.removeChild(treeContainerElement.firstChild);        
    }

    var pseudocode_div=document.getElementById("pseudocode-container");
    var pseudocode_content=
    `<h1>Pseudocode for BFS :</h1>
    <h4>Input: s as the start node</h4>
 
    <h4>BFS (G, s)</h4>
    <h4 style="padding-left:1em">let Q be queue.</h4>
    <h4 style="padding-left:1em">Q.enqueue( s )</h4>
     
    <h4 style="padding-left:1em">mark s as visited</h4>
    <h4 style="padding-left:1em">while ( Q is not empty)</h4>
    <h4 style="padding-left:3em">v = Q.dequeue( )</h4>
     
    <h4 style="padding-left:3em">for all neighbors w of v in Graph G</h4>
    <h4 style="padding-left:5em">if w is not visited</h4>
    <h4 style="padding-left:7em">Q.enqueue( w )</h4>
    <h4 style="padding-left:7em">mark w as visited</h4>
    `;
    pseudocode_div.innerHTML=pseudocode_content;
    treeNodes=[];
    treeLinks=[];
    var q=new Queue();
    var bfsSpanningTree=new Array();
    var visited=new Array();
    var push="";
    var pop="";
    for(let i=0;i<=size;i++){
        visited.push(0);
    }
    q.enqueue(1);
    push="1,";
    visited[1]=1;
    //1==visited
    //0==not visited
    
    bfsSpanningTree.push(1);
    treeNodes.push({id:1,label:""+1});
    generateTree("Start with node 1:",count++,1,q,"bfs",push,pop);
    vertex.update([{id:1, color: {background: 'lightgreen'}}]);
    var nodeToBeselected=1;
    while(q.isNotEmpty()){
        push="";
        var adjacentNodes=new Array();
        nodeToBeselected=q.front();
        for(let j=1;j<=size;j++){
            if(matrix[q.front()][j]!=0){
                adjacentNodes.push(j);
            }
        }
        var txt="Traverse to all adjacent  nodes of "+q.front()+" which are not already visited i.e. : ";
        var flag=-1;
        var colorToBeChanged=new Array();
        for(let j=0;j<adjacentNodes.length;j++){
            if(visited[adjacentNodes[j]]==0){
                var adjNode=adjacentNodes[j];
                bfsSpanningTree.push(adjNode);
                treeNodes.push({id:adjNode,label:""+adjNode});
                treeLinks.push({from:q.front(),to:adjNode});
                q.enqueue(adjNode);
                push+=adjNode+" , ";
                
                visited[adjNode]=1;
                txt=txt+adjNode;
                colorToBeChanged.push(adjNode);
                if(j<adjacentNodes.length){
                    txt=txt+" , ";
                }
                flag=0;
            }
        }
        
        if(flag==-1){
            txt="No adjacent nodes present for "+q.front()+" which are not already visited";
        }
        else{
            txt=txt.substring(0,(txt.length)-2);
        }
        pop=q.front();
        q.dequeue();
        
        /*if(q.isEmpty()){
            txt=txt+"\n Final BFS spanning tree:";
        }*/

        let delay=get_speed();
        delay=delay*10;
        await sleep(delay);
        //await sleep(10000);
        network.selectNodes([nodeToBeselected]);
        generateTree(txt,count++,nodeToBeselected,q,"bfs",push,pop);
        for(let j=0;j<colorToBeChanged.length;j++){
            //if(colorToBeChanged[j]==0){
                var adjNode=colorToBeChanged[j];
                vertex.update([{id: adjNode, color: {background: 'lightgreen'}}]);
            //}
        }
        /*if(bfsSpanningTree.length==size){
            break;
        } */
        
    }
    let delay=get_speed();
    delay=delay*10;
    await sleep(delay);
    //await sleep(10000);
    console.log(bfsSpanningTree);
    var txt=" FINAL BFS TREE :";
    generateTree(txt,count++,0,q,"bfs",push,pop);
    network.unselectAll();
}