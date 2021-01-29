class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
    this.data[this.top] = element;
    this.top = this.top + 1;
    }
    isEmpty() {
        return this.top === 0;
    }
    pop() {
        if( this.isEmpty() === false ) {
        this.top = this.top -1;
            return this.data.pop(); // removes the last element
        }
    }
    peek() {
        return this.data[this.top -1 ];
    }
    print() {
        var str="";
        var top = this.top - 1; // because top points to index where new    element to be inserted
        while(top >= 0) { // print upto 0th index
        str+=(this.data[top])+" ";
        top--;
        }
        return str;
    }
}

var s=new Stack();
var step=1;
var parent=new Stack();
var adjNodes=new Array();

var push="";
var pop="";
async function dfs() {
    step=1;
    var treeContainerElement = document.getElementById("tree-container");
    while (treeContainerElement.hasChildNodes()) {
      treeContainerElement.removeChild(treeContainerElement.firstChild);
    }
    for(let j=1;j<=size;j++){
        //if(colorToBeChanged[j]==0){
            vertex.update([{id: j, color: {background: 'powderblue'}}]);
        //}
    }
    var pseudocode_div=document.getElementById("pseudocode-container");
    var pseudocode_content=
    `<h1>Pseudocode for DFS :</h1>
    <h4>Input: v as the start node</h4>
    <h4>DFS(G,v)</h4>
    <h4 style="padding-left:1em">Stack S := {};</h4>
    <h4 style="padding-left:1em">for each vertex u, set visited[u] := false;</h4>
    <h4 style="padding-left:1em">push S, v;</h4>
    <h4 style="padding-left:1em">while (S is not empty) do</h4>
    <h4 style="padding-left:2em">u := pop S;</h4>
    <h4 style="padding-left:2em">if (not visited[u]) then</h4>
    <h4 style="padding-left:3em">visited[u] := true;</h4>
    <h4 style="padding-left:3em">for each unvisited neighbour w of u</h4>
    <h4 style="padding-left:4em">push S, w;</h4>
    <h4 style="padding-left:2em">end if</h4>
    <h4 style="padding-left:1em">end while</h4>
    <h4>END DFS()</h4>
    
    `;
    pseudocode_div.innerHTML=pseudocode_content;

    treeNodes = [];
    treeLinks = [];

    var visited = new Array();
    for (let i = 0; i <= size; i++) {
      visited.push(0);
    }
    // visited[1] = 1;
    // treeNodes.push({id:1,label:""+1});
    // s.push(1);
    // generateTree("Start with node 1");
    
    DFS(1, visited);
}

async function DFS(vert, visited) {
    s.push(vert);
    push+=vert;
    push+=',';
    while (!s.isEmpty()) {
        vert = s.pop();
        vertex.update([{id: vert, color: {background: 'lightgreen'}}]);
        network.selectNodes([vert]);
        prev=parent.pop();
        if (visited[vert] == 0) {
            visited[vert] = 1;
            treeNodes.push({id:vert,label:""+vert});
            if(vert!=1){
                treeLinks.push({from:prev,to: vert});
            }
            var txt="Traverse from "+prev+" to "+vert;
            if(vert==1){
                txt="Start from node 1";
            }
            generateTree(txt,step++,vert,s,"dfs",push,vert);
            push="";
            let delay=get_speed();
            delay=delay*10;
            await sleep(delay);
            //await sleep(6000);
            //prev=vert;
            console.log(`we visited ${vert}`);
            s.print();
            for (let j = 1; j <= size; j++) {
                if (matrix[vert][j] >= 1 && visited[j]==0){
                    s.push(j);
                    push+=j;
                    push+=' , ';
                    parent.push(vert);
                }
            }
            //var txt="Traverse from ";
            //+vert+" to "+j;
            //generateTree(txt);
        }
        else{
            txt=""
            generateTree(txt,step++,vert,s,"dfs",push,vert);
            let delay=get_speed();
            delay=delay*10;
            await sleep(delay);
            // await sleep(6000);
        }
    }
    txt=" FINAL DFS TREE :"
    generateTree(txt,step++,vert,s,"dfs",push,vert);
    network.unselectAll();
}
