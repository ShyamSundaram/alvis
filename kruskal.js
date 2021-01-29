function edge(src, desn, weight) {
    this.src = src;
    this.desn = desn;
    this.weight = weight;
}

function node(parent,rank) {
    this.parent=parent;
    this.rank=rank;
}

function find(v)
{
    if(dsuf[v].parent==-1)
        return v;
    return dsuf[v].parent=find(dsuf[v].parent); //Path Compression
}

function union_op(fromP,toP)
{
    //fromP = find(fromP);
    //toP = find(toP);

    //UNION by RANK
    if(dsuf[fromP].rank > dsuf[toP].rank)   //fromP has higher rank
        dsuf[toP].parent = fromP;
    else if(dsuf[fromP].rank < dsuf[toP].rank)  //toP has higher rank
        dsuf[fromP].parent = toP;
    else
    {
        //Both have same rank and so anyone can be made as parent
        dsuf[fromP].parent = toP;
        dsuf[toP].rank +=1;     //Increase rank of parent
    }
}

let dsuf = new Array();
let mst = new Array();
let MSTNodes=new Array();
let MSTLinks=new Array();

async function kruskal(){
    dsuf=[];
    mst=[];
    MSTNodes=[];
    MSTLinks=[];
    var count=1;
    var choose="";
    var reject="";
    var reject1="";
    var total_cost=0;
    var sets="";
    var start=0;
    var end=0;
    //clear everything before starting the algorithm
    var treeContainerElement = document.getElementById("tree-container");
    while (treeContainerElement.hasChildNodes()) {
      treeContainerElement.removeChild(treeContainerElement.firstChild);
    }

    network.unselectAll();

    var pseudocode_div=document.getElementById("pseudocode-container");
    var pseudocode_content=
    `<h1>Pseudocode for Kruskal's :</h1>
    <h4 style="padding-left:1em">KRUSKAL(G,w):</h4>
    <h4 style="padding-left:1em">A = ∅</h4>
    <h4 style="padding-left:1em">for each vertex v ∈ G.V:</h4>
    <h4 style="padding-left:3em">    MAKE_SET(v)</h4>
    <h4 style="padding-left:1em">sort the edges of G.E in non-decreasing order by weight</h4>
    <h4 style="padding-left:1em">for each edge (u, v) ∈ G.E ordered by increasing order by weight:</h4>
    <h4 style="padding-left:3em">    if FIND_SET(u) ≠ FIND_SET(v):</h4>       
    <h4 style="padding-left:3em">    A = A ∪ {(u, v)}</h4>
    <h4 style="padding-left:3em">    UNION(u, v)</h4>
    <h4 style="padding-left:1em">return A</h4>
    `;
    pseudocode_div.innerHTML=pseudocode_content;

    var edgeList=new Array()
    for(let i=1;i<=size;i++){
        MSTNodes.push({id:i,label:""+i});
        for(let j=i;j<=size;j++){
            if(matrix[i][j]!=0){
                edgeList.push(new edge(i,j,matrix[i][j]));

            }
        }
    }
    edgeList.sort(function(a, b){return a.weight - b.weight})
    console.log(edgeList);

    let E=edgeList.length;
    let V=size;
    
    

    for(let i=0;i<=V;i++){
        dsuf.push(new node(-1,0));
    }


    var i=0;
    var j=0;
    mstEdgesToBeSelected=new Array();
    while(i<V-1 && j<E){
        choose="";
        //reject="";
        sets="";
        var visited=new Array();
        for(let a=0;a<=V;a++){
            visited.push(-1);
        }
        var table1=document.createElement("table");
        table1.border=1;
        var table_content=`
        <tr>
            <td style="text-align: center;"><b> Edge </b></td>
            <td style="text-align: center;"><b> Weight </b></td>
        </tr>
        `;
        table1.innerHTML=table_content;

        for(let a=0;a<E;a++){
            var new_row=table1.rows[0].cloneNode(true);
            new_row.cells[0].innerHTML="("+edgeList[a].src+" , "+edgeList[a].desn+")";
            new_row.cells[1].innerHTML=edgeList[a].weight;
            if(a<j){
                new_row.cells[0].style["text-decoration"]="line-through";
                new_row.cells[1].style["text-decoration"]="line-through";
            }
            table1.appendChild(new_row);
        }
        var fromP=find(edgeList[j].src);
        var toP=find(edgeList[j].desn);
        if(fromP == toP){
            reject+="( "+edgeList[j].src+" , "+edgeList[j].desn+" )";
            j++;
            continue;
        }

        union_op(fromP,toP);
        mst.push(edgeList[j]);
       // MSTNodes.push({id:edgeList[j].src,label:""+edgeList[j].src});
       // MSTNodes.push({id:edgeList[j].desn,label:""+edgeList[j].desn});
        MSTLinks.push({from:edgeList[j].src,to:edgeList[j].desn,label:""+edgeList[j].weight});
        mstEdgesToBeSelected.push(""+edgeList[j].src+","+edgeList[j].desn);
        //link.updateEdge([{id:""+edgeList[j].src+","+edgeList[j].desn, color: '#aa0000'}]);
        console.log(mstEdgesToBeSelected);
        choose+="( "+edgeList[j].src+" , "+edgeList[j].desn+" )";
        total_cost+=edgeList[j].weight;
        ++i;

        //make sets
        for(let a=1;a<=V;a++){
            if(visited[a]==1){
                continue;
            }
            visited[a]=1;
            var temp="{ "+a+" , ";
            for(let b=a+1;b<=V;b++){
                if(visited[b]==-1 && find(a)==find(b)){
                    temp+=""+b+" , ";
                    visited[b]=1;
                }
            }
            temp=temp.substring(0,temp.length-2);
            temp+=" } , ";
            sets+=temp;
        }
        sets=sets.substring(0,sets.length-2);
        network.selectEdges(mstEdgesToBeSelected);
        
        generate_mst(table1,count++,choose,reject,total_cost,sets);
        start=j+1;
        reject="";
        let delay=get_speed();
        delay=delay*10;
        await sleep(delay);
        //await sleep(6000);
        
    }
    generate_mst(table1,count,"FINAL MST:",reject,total_cost,sets);
    console.log(mst);
    
}

var MSTnetwork;

function generate_mst(table1,count,choose,reject,total_cost,sets){
    var treeContainerElement=document.getElementById("tree-container");
    var vertex=new vis.DataSet(MSTNodes);
    var link=new vis.DataSet(MSTLinks);
    var myDiv=document.createElement("div");
    myDiv.className="myDiv";
    myDiv.style="height:300px;width:70%;border-style:solid";
    var txtDiv=document.createElement("div");
    txtDiv["style"]="display:flex;";
    var stepdiv=document.createElement("div");
    var stepCountDiv=document.createElement("div");
    stepCountDiv.innerHTML=`<h1>Step ${count} </h1>`;

    if(choose=="FINAL MST:"){
        stepCountDiv.innerHTML=`<h1>FINAL STEP</h1>`;
    }
    treeContainerElement.appendChild(stepCountDiv);
    txtDivContents=
        `<div style="display:inline-block;width:400px;">
        
        <h4>We choose the edge ${choose} as it is the
         next minimum cost edge which doesn't form a cycle</h4>
        
        <h4>Total cost = ${total_cost}</h4>
        <h4 style="padding-right:4em">Disjoint sets = ${sets}</h4>
        </div>
        `;
    if(choose=="FINAL MST:"){
        txtDivContents=
        `<div style="display:inline-block;width:400px;">
        <h4>Total cost of MST = ${total_cost}</h4>
        <h4>Final minimum spanning tree:</h4>
        </div>
        `;
    }
    stepdiv.innerHTML=txtDivContents;
    var tablediv=document.createElement("div");
    tableDivContents=
    `<div style="display:inline-block;"></div>`;    
    tablediv.innerHTML=tableDivContents;
    txtDiv.appendChild(stepdiv);
    if(choose!="FINAL MST:"){
    txtDiv.appendChild(table1);
    }
    treeContainerElement.appendChild(txtDiv);
    treeContainerElement.appendChild(document.createElement("br"));
    treeContainerElement.appendChild(myDiv);
    treeContainerElement.append(document.createElement("hr"));
   
    var data={
        nodes:vertex,
        edges:link
    }
    var options={
        autoResize:true,
        nodes:{
            size:20,
            font:{
                size:20,
                color:"black"
            }
        },
        edges:{
            font:{
                size:20,
                align:'top'
            },
            selectionWidth: function (width) {return width*5;}
        }
        
        
        /*,
        
        physics: {
            enabled: false
        }*/
    }
    ;
    MSTnetwork=new vis.Network(myDiv,data,options);
    myDiv.scrollIntoView({behavior: "smooth"});
}