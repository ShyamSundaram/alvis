function input_MST(algo){

    //to remove loading gif
    document.querySelector(".loading-gif").classList.add("remove-loading-gif");


    var treeContainerElement=document.getElementById("tree-container");
    while(treeContainerElement.hasChildNodes()){
        treeContainerElement.removeChild(treeContainerElement.firstChild);        
    }
    console.log(algo);
    if(algo=='prims'){
        var algo_name_div=document.getElementById("algo-name");

        algo_name_div.innerHTML="Prim's algorithm";
        input_size=`
        <h2><label for="sizeOfMatrix">Enter number of nodes:</label>
                <input type="number" id="sizeOfMatrix" name="sizeOfMatrix" min="2" max="7">
                <button  class="graph_button" type="button" onclick="generateInputMatrix(document.getElementById('sizeOfMatrix').value,'prims')">Submit</button></h2>
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
        else if(algo=='kruskal'){
            var algo_name_div=document.getElementById("algo-name");

            algo_name_div.innerHTML="Kruskal's algorithm";
            input_size=`
            <h2><label for="sizeOfMatrix">Enter number of nodes:</label>
                    <input type="number" id="sizeOfMatrix" name="sizeOfMatrix" min="2" max="7">
                    <button  class="graph_button" type="button" onclick="generateInputMatrix(document.getElementById('sizeOfMatrix').value,'kruskal')">Submit</button></h2>
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