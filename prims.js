async function generateMST(table1,txt,s,cost_txt){
    console.log(MST_cost);


    var treeContainerElement=document.getElementById("tree-container");
    var vertex=new vis.DataSet(treeNodes);
    var link=new vis.DataSet(treeLinks);
    var txtDiv=document.createElement("div");
    var step_name=document.createElement("div");
    var myDiv=document.createElement("div");
    myDiv.className="myDiv";
    var height=size*100;
    height=""+height;
    height=height+"px";
    myDiv.style["height"]=height;
    myDiv.style["width"]="70%";
    
    var txtDivContent=`
    <h4>${txt}<h4>
    <h4>${cost_txt}</h4>
    `;
    if(txt=="Final minimum spanning tree "){
        var step_no=`
            <h2>Final step</h2>
        `;
    step_name.innerHTML=step_no;
    }
    else{
        var step_no=`
            <h2>STEP ${s}</h2>
        `;
    step_name.innerHTML=step_no;
    }
    var height=i*30;
    height=""+height;
    height=height+"px";
    myDiv.style["height"]=height;
    myDiv.style["width"]="70%";
    
    txtDiv.innerHTML=txtDivContent;
    treeContainerElement.appendChild(step_name);
    treeContainerElement.appendChild(table1);
    treeContainerElement.appendChild(txtDiv);
    treeContainerElement.appendChild(myDiv);
    treeContainerElement.append(document.createElement("hr"));

    

    var data={
        nodes:vertex,
        edges:link
    }
    var options={
        autoResize:true,
        nodes:{
            size:40,
            font:{
                size:20,
                color:"black"
            },
            shadow:true
        },
        // edges:{
        //     shadow:true,
        //     size:30
        // },
        edges:{
            shadow:true,
            size:30,
            font:{
                size:20,
                align:'top'
            },
            selectionWidth: function (width) {return width*5;}
        },
        
        
        interaction: {dragNodes :false},
        physics: {
            enabled: false
        }
    };
    var Treenetwork=new vis.Network(myDiv,data,options);
    //Treenetwork.selectNodes([nodeToBeSelected]);
    myDiv.scrollIntoView({behavior: "smooth"});
}

let V;

// PRIMS ALGORITHM 
let parent=new Array();		//Stores MST
let value=new Array();	//Used for edge relaxation
let setMST=new Array();
function selectMinVertex()
{
	let minimum = 1000;
	let  vertex;
	for(let i=1;i<V;++i)
	{
		if(setMST[i]==false && value[i]<minimum)
		{
			vertex = i;
			minimum = value[i];
		}
	}
	return vertex;
}


let j=1;
let k=1;
var MST_cost=0;
async function prims()
{
    step=1;
    treeNodes=[];
    treeLinks=[];
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
    `<h1>Pseudocode for Prim's :</h1>

    <h4 >Input: Graph G=(V,E) with edge-weights.</h4>

       <h4>initialize MST to vertex 0.</h4>
       <h4>priority[0] = 0</h4>
       <h4>for all other vertices, set priority[i] = infinity</h4>
       <h4>initialize prioritySet to all vertices;</h4>
       <h4>while prioritySet.notEmpty()</h4>
           <h4 style="padding-left:2em">v = remove minimal-priority vertex from prioritySet;</h4>
           <h4 style="padding-left:2em">for each neighbor u of v</h4>
               <h4 style="padding-left:3em">w = weight of edge (v, u)</h4>
               <h4 style="padding-left:3em">if w < priority[u]</h4>
                   <h4 style="padding-left:4em">priority[u] = w</h4>
    
    
    `;
    pseudocode_div.innerHTML=pseudocode_content;


      //TRUE->Vertex is included in MST
   V=size+1;
   console.log(V);
   let U=0;
   let i=1;
   for(i=1;i<V;i++){
      value[i]=1000;
      setMST[i]=false;
      parent[i]=-1;
   }
	//Assuming start point as Node-0
	//parent[1] = -1;	//Start node has no parent
	value[1] = 0;	//start node has value=0 to get picked 1st
    MST_cost=0;
	//Form MST with (V-1) edges
	for(i=1;i<V;++i)
	{
		//Select best Vertex by applying greedy method
        U = selectMinVertex();
        //console.log(U);
		setMST[U] = true;	//Include new Vertex in MST
        treeNodes.push({id:U,label:""+U});
        treeLinks.push({from:parent[U],to: U,label:""+matrix[U][parent[U]]});
        if(step!=1){
            MST_cost+=parseInt(matrix[U][parent[U]]);
        }
        var table1=document.createElement("table");
        table1.border=1;
        var table_content=`
        <tr>
            <td><b>Node</b></td>
            <td><b>Cost</b></td>
            <td><b>Visited</b></td>
            <td><b>Parent</b></td>
        </tr>
        `;
        table1.innerHTML=table_content;
        for(k=1;k<V;k++){
            var cost=matrix[U][k];
            var new_row=table1.rows[0].cloneNode(true);
            new_row.cells[0].innerHTML=k;
            if(cost!=0){
            new_row.cells[1].innerHTML=matrix[U][k];
            }
            else{
                if(U==k){
                    new_row.cells[1].innerHTML=0;
                }
                else{
                 new_row.cells[1].innerHTML="∞";//INF
                }
            }
            new_row.cells[2].innerHTML=setMST[k];
            new_row.cells[3].innerHTML=parent[k];
            if(parent[k]==-1){
                new_row.cells[3].innerHTML="  ";
            }
            table1.appendChild(new_row);
        }
        vertex.update([{id: U, color: {background: 'lightgreen'}}]);
        network.selectNodes([U]);
        var txt="New edge from "+parent[U]+" to "+U;
        if(step==1){
            txt="Start with node 1";
        }
        var cost_txt="Cost of MST = "+MST_cost;
        generateMST(table1,txt,step,cost_txt);
        let delay=get_speed();
        delay=delay*10;
        await sleep(delay);
        //await sleep(6000);
        step++;
		//Relax adjacent vertices (not yet included in MST)
		
			/* 3 constraints to relax:-
			      1.Edge is present from U to j.
			      2.Vertex j is not included in MST
                  3.Edge weight is smaller than current edge weight
                  
                  
            */
        for(j=1;j<V;j++){
			if((matrix[U][j]!=0) && (setMST[j]!=true))
			{
                
                if((matrix[U][j]<value[j])){
                    value[j] = matrix[U][j];
                    parent[j] = U;
                }
            }
        }
    }
    var table1=document.createElement("table");
        table1.border=1;
        var table_content=`
        <tr>
            <td><b>Node</b></td>
            <td><b>Cost</b></td>
            <td><b>Visited</b></td>
            <td><b>Parent</b></td>
        </tr>
        `;
        table1.innerHTML=table_content;
        for(k=1;k<V;k++){
            //var cost=matrix[U][k];
            var new_row=table1.rows[0].cloneNode(true);
            new_row.cells[0].innerHTML=k;
            new_row.cells[1].innerHTML=value[k];
            new_row.cells[2].innerHTML=setMST[k];
            new_row.cells[3].innerHTML=parent[k];
            table1.appendChild(new_row);
        }
        vertex.update([{id: U, color: {background: 'lightgreen'}}]);
        let delay=get_speed();
        delay=delay*10;
        await sleep(delay);
        //await sleep(6000);
        generateMST(table1,"Final minimum spanning tree ",-1,cost_txt);
        network.unselectAll();
}

	//Print MST
	// for(i=1;i<V;++i){
    //     j=parent[i];
    //     console.log("U->V: "+parent[i]+"->"+i+"  wt = "+matrix[j][i]);
    // }