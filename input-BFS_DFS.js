function input_bfs_dfs(algo){

    //to remove loading gif
    document.querySelector(".loading-gif").classList.add("remove-loading-gif");

    var treeContainerElement=document.getElementById("tree-container");
    while(treeContainerElement.hasChildNodes()){
        treeContainerElement.removeChild(treeContainerElement.firstChild);        
    }
    console.log(algo);
    var input_size;
    if(algo=='bfs'){
    var algo_name_div=document.getElementById("algo-name");

        algo_name_div.innerHTML="Breadth first search";
    input_size=`
    <h2><label for="sizeOfMatrix">Enter number of nodes:</label>
            <input type="number" id="sizeOfMatrix" name="sizeOfMatrix" min="2" max="7">
            <button  class="graph_button" type="button" onclick="generateInputMatrixforBFS_DFS(document.getElementById('sizeOfMatrix').value,'bfs')">Submit</button></h2>
            <br><br>
            <div id="container" style="width:90%;"></div>   
            <div id="container" style="width:95%;display: flex;overflow:hidden;">         
                <table> 

                    <tr><td><div id="media" style="width:60%;height:500px;"></div></td></tr>
                    <tr><td><div style="display:none" id="legend"><img src="legend1.png" alt="legend"></div></td></tr>
                    </table>
                <div id="pseudocode-container" style="width:40%;height:620px;"></div>
            </div>
            <br><br>
            <div id="button-area" style="width:95%;"></div>
    `;}
    else if(algo=='dfs'){
        var algo_name_div=document.getElementById("algo-name");

        algo_name_div.innerHTML="Depth first search";
        input_size=`
        <h2><label for="sizeOfMatrix">Enter number of nodes:</label>
                <input type="number" id="sizeOfMatrix" name="sizeOfMatrix" min="2" max="7">
                <button  class="graph_button" type="button" onclick="generateInputMatrixforBFS_DFS(document.getElementById('sizeOfMatrix').value,'dfs')">Submit</button></h2>
                <br><br>
                <div id="container" style="width:90%;"></div>   
                <div id="container" style="width:95%;display: flex;overflow:hidden;">         
                    <table> 

                    <tr><td><div id="media" style="width:60%;height:500px;"></div></td></tr>
                    <tr><td><div style="display:none" id="legend"><img src="legend1.png" alt="legend"></div></td></tr>
                    </table>
                <div id="pseudocode-container" style="width:40%;height:620px;"></div>
                </div>
                <br><br>
                <div id="button-area" style="width:95%;"></div>
    `;}
        
    var graph_generator_area=document.getElementById("graph-generator-area");
    graph_generator_area.innerHTML=input_size;
}


function generateInputMatrixforBFS_DFS(n,algo){
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
            cell.min=0;
            cell.max=1;
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
    button.className="graph_button";
    button.onclick=function(){
        generateGraph(algo);
    }
    container.appendChild(document.createElement("br"));
    container.appendChild(button);
    
}