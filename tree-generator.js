async function generateTree(txt,i,nodeToBeSelected,queueOrstack,algo,push,pop){
    console.log(treeNodes);
    console.log(treeLinks);
    var treeContainerElement=document.getElementById("tree-container");
    var vertex=new vis.DataSet(treeNodes);
    var link=new vis.DataSet(treeLinks);
    var myDiv=document.createElement("div");
    myDiv.className="myDiv";
    //myDiv.style="height:300px;width:70%;border-style:solid";
    var height=i*50;
    height=""+height;
    height=height+"px";
    myDiv.style["height"]=height;
    myDiv.style["width"]="70%";
    var txtDiv=document.createElement("div");
    
    var ds_div=document.createElement("div");
    push=push.substring(0,(push.length)-2);
    if(algo=="bfs"){
    //var queue_copy=new Queue();
    
    let queue_copy = new Array();
    let str=queueOrstack.printQueue();
    
    let w="";
    for(let i=0;i<str.length;i++){
        if(str[i]!=" "){
            w+=str[i];
        }
        else{
            queue_copy.push(w);
            w="";
        }
    }
    if(txt!=" FINAL BFS TREE :"){
    var queuemsg=document.createElement("div");
    queuemsg.innerHTML=`<div style="display:inline-block;text-align:center;"><center>Queue elements : </center></div>`;
    ds_div["style"]="display:flex;";
    ds_div.appendChild(queuemsg);
    }
    var flag=-1;
    for(let i=0;i<queue_copy.length;i++){
        flag=1;
        var queElediv1=document.createElement("div");
        var queEle1=
        `<div style="width:25px;height:25px;display:inline-block;text-align:center;border:1px solid #000;"><center>${queue_copy[i]}</center></div>`;
        queElediv1.innerHTML=queEle1;
        ds_div.appendChild(queElediv1);
        
    }
    if(flag==-1 && txt!=" FINAL BFS TREE :"){
        var queElediv1=document.createElement("div");
        var queEle1=
        `<div style="width:35px;height:25px;display:inline-block;text-align:center;border:1px solid #000;"><center>NIL</center></div>`;
        queElediv1.innerHTML=queEle1;
        ds_div.appendChild(queElediv1);
    }
    var txtDivContents;
    if(txt==" FINAL BFS TREE :"){
        txtDivContents=
        `<h1>Final Step </h1>
        <h4>${txt}</h4>`;
    }
    else if(pop==""&&push!=""){
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
        <h4>Queue is empty</h4>
        <h4>Enqueue ${push} into the queue </h4>
        
        `;
    }
    
    else if(push==""){
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
        <h4>Dequeue ${pop} from the queue </h4>
        <h4>No neighbours present which are not already visited,so nothing enqueued</h4>
        
        `;
    }
    else{
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
        <h4>Dequeue ${pop} from the queue </h4>
        <h4>Enqueue ${push} into the queue </h4>
        
    `;}
    txtDiv.innerHTML=txtDivContents;
    }

    if(algo=="dfs"){
    //var queue_copy=new Queue();
    
    let stack_copy = new Array();
    let str=queueOrstack.print();
    
    let w="";
    for(let i=0;i<str.length;i++){
        if(str[i]!=" "){
            w+=str[i];
        }
        else{
            stack_copy.push(w);
            w="";
        }
    }
    for(let i=0;i<stack_copy.length;i++){
        //ds_div["style"]="display:flex;";
        var stackElediv1=document.createElement("div");
        var stackEle1=
        `<div style="width:25px;height:25px;display:inline-block;text-align:center;border:1px solid #000;"><center>${stack_copy[i]}</center></div>`;
        stackElediv1.innerHTML=stackEle1;
        ds_div.appendChild(stackElediv1);
        
    }
    var txtDivContents;
    if(txt==" FINAL DFS TREE :"){
        txtDivContents=
        `<h1>Final Step </h1>
        <h4>${txt}</h4>`;
    }
    else if(pop==""&&push!=""){
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
        <h4Stack is empty</h4>
        <h4>Push ${push} into the stack </h4>
        <h4>Stack elements:</h4>
        `;
    }
    
    else if(push==""&&nodeToBeSelected!=1){
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
        <h4>No neighbours present which are not already visited,so nothing pushed</h4>
        <h4>Pop ${pop} from the stack </h4>
        <h4>Stack elements:</h4>
        `;
    }
    else if(push==""&&nodeToBeSelected==1){
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
        <h4>Push 1 into the stack</h4>
        <h4>Pop ${pop} from the stack </h4>
        <h4>Stack elements:</h4>
        `;
    }
    else{
        txtDivContents=
        `<h1>Step ${i}</h1>
        <h4>${txt}</h4>
         <h4>Push ${push} into the stack </h4>
        <h4>Pop ${pop} from the stack </h4>
        <h4>Stack elements:</h4>
    `;}
    txtDiv.innerHTML=txtDivContents;
    }
    treeContainerElement.append(document.createElement("br"));
    treeContainerElement.appendChild(txtDiv);
    treeContainerElement.appendChild(ds_div);
    treeContainerElement.append(document.createElement("br"));
    treeContainerElement.appendChild(myDiv);
    treeContainerElement.append(document.createElement("hr"));

    

    var data={
        nodes:vertex,
        edges:link
    }
    var options={
        autoResize:false,
        nodes:{
            size:40,
            font:{
                size:20,
                color:"black"
            },
            shadow:true
        },
        edges:{
            shadow:true,
            size:30
        },
        layout:{
            hierarchical:{
                direction:"UD",
                sortMethod: "directed",
                nodeSpacing: 100,
                levelSeparation: 100
            }
        },
        interaction: {dragNodes :false},
        physics: {
            enabled: false
        }
    };
    var Treenetwork=new vis.Network(myDiv,data,options);
    Treenetwork.selectNodes([nodeToBeSelected]);
    
    myDiv.scrollIntoView({behavior: "smooth"});
    
    
}
