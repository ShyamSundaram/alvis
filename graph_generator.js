if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
function ready(){
    var edgeInputs=document.getElementsByClassName('cell');
    for(var i=0;i<edgeInputs.length;i++){
        var button=edgeInputs[i];
        button.addEventListener('click',valueChanged);
    }
}

let matrix=new Array();
let vertices=new Array();
let links=new Array();
let size=0;

//only for unweighted graph
function valueChanged(event){
    var input=event.target;
    if(isNaN(input.value)||input.value<0){
        input.value=0;
    }
    var id=input.id.split(",");
    var i=id[0];
    var j=id[1];
    var cellToBeChanged=document.getElementById(""+j+","+i);
    cellToBeChanged.value=parseInt(input.value);

}

function generateInputMatrix(n,algo){
    console.log(algo);
    size=parseInt(n);
    var txt="\nFill in the adjacency matrix\n";
    var container=document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    container.appendChild(document.createTextNode(txt));
    container.appendChild(document.createElement("br"));
    container.appendChild(document.createElement("br"));

    // for displaying matrix indices
    for(let i=0;i<=size;i++){
        var indexDiv=document.createElement("div");
        if(i!=0){
        indexDiv.innerText=""+i;}
        else{
            indexDiv.innerText="";
        }
        indexDiv.style="width:6%;display:inline-block;text-align:center;";
        container.appendChild(indexDiv);
    }
    container.appendChild(document.createElement("br"));
    //*/
    for(let i=1;i<=size;i++){
        //var matrixRow=document.createElement("div");
        if(i<=10){
            var indexDiv=document.createElement("div");
            indexDiv.innerText=""+i;
            indexDiv.style="width:6%;display:inline-block;text-align:center;";
            container.appendChild(indexDiv);
        //container.appendChild(document.createTextNode(" " + (i)+"  "));
        }
        else{
            container.appendChild(document.createTextNode(" " + (i)));
        }
        for(let j=1;j<=size;j++){
            var cell=document.createElement("input");
            cell.type="number";
            cell.id=String(""+i+","+j);
            cell.className="cell";
            cell.style="width:6%;";
            /*cell.min=0;
            cell.max=100;*/
            cell.value=0;
            cell.addEventListener('click',valueChanged);
            container.appendChild(cell);
            
        }
        container.appendChild(document.createElement("br"));
    }

    var area=document.getElementById("graph-generator-area");
    var button=document.createElement("button");
    var text=document.createTextNode("Generate graph");
    button.appendChild(text);
    button.onclick=function(){
        generateGraph(algo);
    }
    button.className="graph_button";
    container.appendChild(document.createElement("br"));
    container.appendChild(button);
    
}
var vertex;
var network;


function generateGraph(algo){
    adjmatrix();
    var vertexArray=new Array();
    for(let i=1;i<=size;i++){
        var ob={id:i,label:""+i};
        vertexArray.push(ob);
    }
    vertex=new vis.DataSet(vertexArray);

    var linkArray=new Array();
    for(let i=1;i<=size;i++){
        for(let j=i;j<=size;j++){
            if(matrix[i][j]!=0){
                if(algo=='prims' || algo=='kruskal'){
                var ob={id:""+i+","+j,from:i,to:j,label:""+matrix[i][j]};
                }
                else{
                    var ob={id:""+i+","+j,from:i,to:j};
                }
                linkArray.push(ob);
            }
        }
    }
    var link=new vis.DataSet(linkArray);

    var myDiv=document.getElementById("media");
    var legend=document.getElementById("legend");
    legend.style["display"]="block";
    // legend.style["postion"]="relative";
    // legend.style["top"]="200px";
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
    };

    if(algo=='kruskal'){
        options={
            autoResize:true,
            nodes:{
                size:20,
                font:{
                    size:20,
                    color:"black"
                }
            },/*,
            
            physics: {
                enabled: false
            }*/
            edges:{
                color:{
                    highlight:'#800000'
                },
                font:{
                    size:20,
                    align:'top'
                },
                selectionWidth: function (width) {return width*5;}
            }
        };
    }

    network=new vis.Network(myDiv,data,options);
    var buttonElement=document.getElementById("button-area");
    var buttonContent;
    if(algo=='bfs'){
    buttonContent=`
    <center><table width=80%>
        <tr>
        <td><button type="button" onclick="bfs()"  class="graph_button">Run Algorithm</button></td>
        </tr>
        </table></center>
    
    `;
    }
    else if(algo=='dfs'){
        buttonContent=
        `<center><table width=80%>
        <tr>
        <td><button type="button" onclick="dfs()"  class="graph_button">Run Algorithm</button></td>
        </tr>
        </table></center>
        `;
    }
    else if(algo=='prims'){
        buttonContent=
        `<table>
        <tr>
        <td><button type="button" onclick="prims()"  class="graph_button">Run Algorithm</button></td>
        </tr>
        </table>
        `;
    }
    else if(algo=='kruskal'){
        buttonContent=
        `<center><table width=80%>
        <tr>
        <td><button type="button" onclick="kruskal()"  class="graph_button">Run Algorithm</button></td>
        </tr>
        </table></center>
        `;
    }
    buttonElement.innerHTML=buttonContent;

    for(let j=1;j<=size;j++){
        //if(colorToBeChanged[j]==0){
            vertex.update([{id: j, color: {background: 'powderblue'}}]);
        //}
    }
}

function call_algo(algo){
    if(algo=="bfs"){
        bfs();
    }
    else if(algo=="dfs"){
        dfs();
    }
    else if(algo=="prims"){
        prims();
    }
    else if(algo=="kruskal"){
        kruskal();
    }
}

function get_speed()
{
  var speed= document.getElementById('output').innerHTML;
  return 1010-10*speed;
}

async function p() {
	pause=!pause;
}

function adjmatrix(){
    var container=document.getElementById("container");
    for(let i=0;i<=size;i++){
        var currentRow=new Array();
        for(let j=0;j<=size;j++){
            currentRow.push(0);
        }
        matrix.push(currentRow);
    }
    for(let i=1;i<=size;i++){
        for(let j=1;j<=size;j++){
            var cellElement=document.getElementById(""+i+","+j);
            matrix[i][j]=parseInt(cellElement.value);
            
        }
    }
}


var treeNodes=new Array();
var treeLinks=new Array();


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
/*
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }*/








