const container = document.querySelector(".data-container");
let pseudo=document.getElementById("Demo").children;
var ele=document.getElementById('exp');
var hope=document.getElementById('hope');
var sort=-1; var cus=0;
var flag=0;

var call=0;
states=[];
texts=[];
pseudos=[];
function custom(){
  cus=1;
}

let index_pls=0;
let gg=1;
let standby=1;
let called=0;
const sleep=(delay)=>new Promise((resolve)=>setTimeout(resolve,delay))
async function generateBlocks(n=1) {
  called+=1;
  document.getElementById('c').src='pics/blackplay2.png';
  document.getElementsByClassName('container').id="0";
  index_pls=0;
  gg=1;
  standby=1;
  document.getElementById("exp").innerHTML="";
  flag=0;

  call=0;
  states=[];
  texts=[];
  pseudos=[];
    $(".data-container").empty();
     $('#Demo').find('p').each(function(){
        $(this).empty();
      });
  let num=10;
  document.getElementById("start").style.display="none";
  document.getElementById("title").style.display="none";
  document.getElementById("tab").style.display="block";
  document.getElementById("code").style.display="block";
  //document.getElementById("legend").style.display="block";
  document.getElementById("psu").style.display="block";
  //document.getElementById("exp").style.display="block";
  // document.getElementById("control").style.display="block";
  if (num && typeof num !== "number") {
    alert("First argument must be a typeof Number");
    return;
  }
  for (let i = 0; i < num; i += 1) {
    var value;
    if(cus==0) value = Math.floor(Math.random() * 100)+1;
    else value= prompt("enter values (for binary search please enter in sorted order)");
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.height = `${value}px`;
    block.style.transform = `translateX(${i * 30}px)`;

    const blockLabel = document.createElement("label");
    blockLabel.classList.add("block__id");
    blockLabel.innerHTML = value;

    block.appendChild(blockLabel);
    container.appendChild(block);
  }
  if(n==0){
    //console.log("g");
    await quickbubbleSort();
  }
}
function control(q){

  if(0){
    if(q=="0"){
      moveforward();
    }
    else p();
  }
  else {
    if(q=="1"){
      moveforward();
    }
    else p();
  }
}
function get_speed()
{
  var speed= document.getElementById('output').innerHTML;
  return 1010-10*speed;
}

function stepbackward(){
  if(sort==1){
    step_backward();
  }
  else if(sort==2){
    step_backwards();
  }
  else if(sort==3){
    step_backwardi();
  }
  else if (sort==4) {
    step_backwardl();
  }
  else if(sort==5){
    step_backwardb();
  }
}
function stepforward(){
  if(sort==1){
    step_forward();
  }
  else if(sort==2){
    step_forwards();
  }
  else if(sort==3){
    step_forwardi();
  }
  else if (sort==4) {
    step_forwardl();
  }
  else if(sort==5){
    step_forwardb();
  }
}
function moveforward(){
  if(sort==1){
    move_forward();
  }
  else if(sort==2){
    move_forwards();
  }
  else if(sort==3){ 
    move_forwardi();
  }
  else if(sort==4){
    move_forwardl();
  }
  else if(sort==5){
    move_forwardb();
  }
}
function Pseudo(opt) //0 for bubble and 1 for insertion
{
  //var code=["procedure bubbleSort( list : array of items )","&nbsp;&nbsp;loop = list.count;","&nbsp;&nbsp;for i = 0 to loop-1 do:", "&nbsp;&nbsp;&nbsp;&nbsp;swapped = false","&nbsp;&nbsp;&nbsp;&nbsp;for j = 0 to loop-1 do:","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if list[j] > list[j+1] then","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap( list[j], list[j+1] )","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swapped = true", "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end if","&nbsp;&nbsp;&nbsp;&nbsp;end for","&nbsp;&nbsp;&nbsp;&nbsp;if(not swapped) then","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;break","&nbsp;&nbsp;&nbsp;&nbsp;end if","&nbsp;&nbsp;&nbsp;&nbsp;end for","end procedure return list"];
  if(opt==-1)
  var code=["l,r=0,|A|-1","while(l<=r):","&nbsp;&nbsp;m=(l+r)//2","&nbsp;&nbsp;if(A[m]==x)","&nbsp;&nbsp;&nbsp;&nbsp;return m","&nbsp;&nbsp;else if(A[m]<=x)","&nbsp;&nbsp;&nbsp;&nbsp;l=m+1","&nbsp;&nbsp;else","&nbsp;&nbsp;&nbsp;&nbsp;r=m-1"];
  if(opt===3)
  var code=["for i: 0 to n","&nbsp;&nbsp;min = i","&nbsp;&nbsp;for j: i+1 to n","&nbsp;&nbsp;&nbsp;&nbsp;if a[j] > a[min]:","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; min =j","&nbsp;&nbsp;swap(a[i],a[min])"];
  if(opt==0)
  var code=["for i: 1 to n","&nbsp;&nbsp;for j: 1 to n-i+1","&nbsp;&nbsp;&nbsp;&nbsp;if a[j]>a[j+1]:","&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;swap(a[j],a[j+1])"];
  if(opt==2)
  var code=["for i: 0 to n","&nbsp;&nbsp;if a[i]==value ","&nbsp;&nbsp;&nbsp;&nbsp;element found at index i","&nbsp;&nbsp;&nbsp;&nbsp;break","&nbsp;&nbsp;continue"];
  if(opt===1)
  var code=["for i=1 to length(array)","&nbsp;&nbsp;key=array[i]","&nbsp;&nbsp;j=i-1","&nbsp;&nbsp;while j>0 and array[j]>key","&nbsp;&nbsp;&nbsp;&nbsp;array[i+1]=array[i]","&nbsp;&nbsp;&nbsp;&nbsp;j=j-1","&nbsp;&nbsp;array[i+1]=key"];
  
  if(opt==-1){
    console.log("h");
    document.getElementById("Demo").style.fontSize='5px';
  }
  for(let i=0;i<code.length;i+=1)
  { 
    let line=document.createElement("p");
    line.innerHTML=code[i];
    if(opt==-1) line.style.fontSize='15px';
    document.getElementById("Demo").appendChild(line);
  }
}
function Explanation(opt)
{
  if(opt===0)
  var exp=["We now compare the bars in red.","Since the bars in red are in order, we leave them as it is.","Since the left bar is bigger than the right bar, we now swap them.","Finished, the array is now sorted."];
  else if (opt===1)
  var exp=["Select a key (which is now highlighted in Red).","We now compare it to values before it. Since the key is lesser than the value preceding it, we swap them.","Now, the key is \'inserted\' into it\'s proper position.","The array is now sorted!"];
  return exp;
}
function swap(el1, el2) {
  return new Promise(resolve => {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("transform");
    const transform2 = style2.getPropertyValue("transform");

    el1.style.transform = transform2;
    el2.style.transform = transform1;
   // document.getElementById("Demo").innerHTML="Swapping "+el1.childNodes[0].innerHTML+" and "+el2.childNodes[0].innerHTML;
    // Wait for the transition to end!
    window.requestAnimationFrame(function() {
      setTimeout(() => {
        container.insertBefore(el2, el1);
        resolve();
      }, 250);
    });
  });
}
var pause=0;
var last_cmp=0;
async function p() {
	pause=!pause;
}


async function appender(arr,txt,p)
{ console.log(pseudos,"yeas");
  pseudos.push(p);
	states.push(arr);
  texts.push(txt);
}

async function step_backward(){ //will execute the indexTH state

	
	let index=index_pls;
		//console.log(":((((((",index);
	index_pls-=1;
	if(!pause)	p();
	//document.getElementById('lol').innerHTML='play';
    let blocks = document.querySelectorAll(".block");
    await sleep(1);
      for (let i =index;i<=index;i += 1){
         if(pseudos[i]!=-1) {
          if(pseudos[i]==0){
            pseudo[2].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i<pseudos.length && pseudos[i+1]!=-1){
            if(pseudos[i+1]==0){
              pseudo[2].style.color="white";
            }
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
        else{
            if(i<pseudos.length && pseudos[i+1]!=-1){
            if(pseudos[i+1]==0){
              pseudo[2].style.color="white";
            }
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
         document.getElementById("exp").innerHTML=texts[i];
      		j=states[i][1];
      		//console.log(j);
          if(states[i][0]==0){
          	//console.log("holaa amigos");
          	await sleep(1)
          	blocks[j].style.backgroundColor = "#58B7FF";
      		blocks[j + 1].style.backgroundColor = "#58B7FF";
      		await sleep(1)
          }
          else if(states[i][0]==1){
          	await sleep(1);
        	await swap(blocks[j], blocks[j + 1]);
        	blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
          	 continue;
          }
          else if(states[i][0]==3){
          	await sleep(1)
	      blocks[j].style.backgroundColor = "#FF4949";

	      blocks[j + 1].style.backgroundColor = "#FF4949";
	      await sleep(1)
          }
          else{
          	  await sleep(1);
          	 blocks[j].style.backgroundColor = "#58B7FF";
          }

      }
}
async function step_forward(){ //will execute the indexTH state
	if(!pause)	p();
	let index=index_pls;
		//console.log(":((((((",index);
	index_pls+=1;
	//document.getElementById('lol').innerHTML='play';
    let blocks = document.querySelectorAll(".block");
    await sleep(1);
      for (let i =index;i<=index;i += 1){
         if(pseudos[i]!=-1) {
          if(pseudos[i]==0){
            pseudo[2].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
            if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        j=states[i][1];
          document.getElementById("exp").innerHTML=texts[i];
      		//console.log(j);
          if(states[i][0]==0){
          	//console.log("holaa amigos");
          	await sleep(1)

          	blocks[j].style.backgroundColor = "#FF4949";
      		blocks[j + 1].style.backgroundColor = "#FF4949";
      		await sleep(1)
          }
          else if(states[i][0]==1){
          	await sleep(1);
        	await swap(blocks[j], blocks[j + 1]);
        	blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
          	 continue;
          }
          else if(states[i][0]==3){
          	await sleep(1)
	      blocks[j].style.backgroundColor = "#58B7FF";

	      blocks[j + 1].style.backgroundColor = "#58B7FF";
	      await sleep(1)
          }
          else{
          	  await sleep(1);
          	 blocks[j].style.backgroundColor = "#13CE66";
          }

      }
}

async function move_forward(){ //will execute the indexTH upto the end 
	if(pause) p();
	
	let index=index_pls;
    let delay=get_speed();
	//document.getElementById('lol').innerHTML='pause';
	//console.log(":))))))))))))))))",index);
    let blocks = document.querySelectorAll(".block");
    await sleep(delay);
      for (let i =index;i<states.length;i += 1){
                let delay=get_speed();
          if(pseudos[i]!=-1) {
          if(pseudos[i]==0){
            pseudo[2].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
            if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
      	  //await new Promise(resolve =>setTimeout(() => {resolve();}, 1000));
      		await sleep(delay);
          if(pause) break;
      		while(pause){await sleep(1);}
          document.getElementById("exp").innerHTML=texts[i];
      		index_pls+=1;
      		j=states[i][1];
      		console.log("operating at index ",j);
          if(states[i][0]==0){
          	//console.log("holaa amigos");
          	await sleep(delay);
          	blocks[j].style.backgroundColor = "#FF4949";
      		blocks[j + 1].style.backgroundColor = "#FF4949";
      		await sleep(delay);          }
          else if(states[i][0]==1){
          	await sleep(delay);
        	await swap(blocks[j], blocks[j + 1]);
        	blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
          	 continue;
          }
          else if(states[i][0]==3){
          	await sleep(delay);
	      blocks[j].style.backgroundColor = "#58B7FF";

	      blocks[j + 1].style.backgroundColor = "#58B7FF";
	      await sleep(delay);
          }
          else{
          	  await sleep(delay);          	 blocks[j].style.backgroundColor = "#13CE66";
          }

          while(pause){await sleep(1);}
      }
}
async function fwd(){
    let blocks = document.querySelectorAll(".block");
   // await sleep(1);
      for (let i =states.length-1;i>=0;i -= 1){

      		j=states[i][1];
          if(states[i][0]==0){
          //	await sleep(1)
          	blocks[j].style.backgroundColor = "#58B7FF";
      		blocks[j + 1].style.backgroundColor = "#58B7FF";
      		//await sleep(1)
          }
          else if(states[i][0]==1){
          	//await sleep(1);
        	await swap(blocks[j], blocks[j + 1]);
        	blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
          	 continue;
          }
          else if(states[i][0]==3){
          //	await sleep(1);
	      blocks[j].style.backgroundColor = "#FF4949";

	      blocks[j + 1].style.backgroundColor = "#FF4949";
	     // await sleep(1);
          }
          else{
          	//await sleep(1);
          	 blocks[j].style.backgroundColor = "#13CE66";
          }
      }
      //ends , 
      //document.getElementById("load").style.display="none";
      //document.getElementById("exp").style.marginTop="-130px";
      document.getElementById("Bale_loadz").style.display="none";
      document.getElementById("Demo").style.display="block";
      document.getElementById("exp").style.display="block";
      document.getElementById("control").style.display="block";
      document.getElementById("legend").style.display="block";
      container.style.visibility="visible";
    document.getElementById("exp").style.marginTop='1px';
}
async function appender_bubbleSort(delay=0) 
{ sort=1;
 // $("#Demo").empty();
 /// $("#exp").empty();
 /// $("#hope").empty();
  generateBlocks();
  openCity("one","bubble");
  container.style.visibility="hidden";
document.getElementById("exp").style.marginTop="-230px";
document.getElementById("Bale_loadz").style.display="inline";
    Pseudo(0);
    document.getElementById("pyt").addEventListener("click",function(){openCity("one","bubble");});
  document.getElementById("cpp").addEventListener("click",function(){openCity("two","bubble");});
  document.getElementById("jav").addEventListener("click",function(){openCity("three","bubble");});
  //document.getElementById("editor").innerHTML="Iam changing";
  delay=parseInt(delay);
  document.getElementById("sort-header").innerHTML="Bubble Sort";
  let blocks = document.querySelectorAll(".block");
  let pseudo=document.getElementById("Demo").children;
 
  for (let i = 0; i < blocks.length ; i += 1) 
  {       
   // await sleep(1);
    for (let j = 0; j < blocks.length - i - 1; j += 1) {

     // await sleep(1);

      blocks[j].style.backgroundColor = "#FF4949";

      blocks[j + 1].style.backgroundColor = "#FF4949";

      appender([0,j,j+1],"Comparing "+blocks[j].childNodes[0].innerHTML+" and "+blocks[j + 1].childNodes[0].innerHTML,2);

      await new Promise(resolve =>setTimeout(() => {resolve();}, delay));

      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
      //await sleep(1);
      if (value1 > value2) 
      {  
       // await sleep(1);
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
        
        appender([1,j,j+1],value1+" is greater than "+value2+", hence we swap",3);
      }
      else
      {  

       // document.getElementById('exp').innerHTML=exp[1];
      //  await sleep(1);
        appender([2,j,j+1],value1+" is smaller than "+value2+", hence we don't swap",-1);
      }

       appender([3,j,j+1],"Next, ",0);
      blocks[j].style.backgroundColor = "#58B7FF";

      blocks[j + 1].style.backgroundColor = "#58B7FF";



    //document.getElementById("g").innerHTML="";
    }
    blocks[blocks.length - i - 1].style.backgroundColor = "#13CE66";
    appender([4,blocks.length-i-1],blocks[blocks.length - i - 1].childNodes[0].innerHTML+" is now sorted",-1);
  }
    blocks[0].style.backgroundColor = "#13CE66";
    fwd(0);
 // await sleep(1);

}

async function step_forwards(){ //will execute the indexTH state
  if(!pause)  p();
  let index=index_pls;
  index_pls+=1;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
      for (let i =index;i<=index;i += 1){
         if(pseudos[i]!=-1) {
          if(pseudos[i]==0){
            pseudo[2].style.color="#ff4499";
            pseudo[3].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
            if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        document.getElementById("exp").innerHTML=texts[i];
        
          min=states[i][1];
          j=states[i][2];
          //document.getElementById("exp").innerHTML=texts[i];
          //console.log(j);
          if(states[i][0]==0){
            //console.log("holaa amigos");
            await sleep(1)

            blocks[min].style.backgroundColor = "#FF4949";
          blocks[j].style.backgroundColor = "#FF4949";
          await sleep(1)
          }
          else if(states[i][0]==1){
            await sleep(1);
         // await swap(blocks[j], blocks[j + 1]);
         blocks[min].style.backgroundColor="#58B7FF";
          blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
             continue;
          }
          else if(states[i][0]==3){
            await sleep(1)
        blocks[min].style.backgroundColor = "#58B7FF";

        blocks[j].style.backgroundColor = "#58B7FF";
        await sleep(1)
          }
          else{
              await sleep(1);
             let i=j 

                  let f=blocks[i].childNodes[0].innerHTML;
                  blocks[i].childNodes[0].innerHTML=blocks[min].childNodes[0].innerHTML;
                  blocks[min].childNodes[0].innerHTML=f;
    
                  let height=blocks[i].style.height;
                  blocks[i].style.height=blocks[min].style.height;
                  blocks[min].style.height=height;
                           blocks[i].style.backgroundColor="#58B7FF";
             blocks[min].style.backgroundColor = "#13CE66";
          }

      }
}
async function move_forwards(){ //will execute the indexTH upto the end 
  if(pause) p();
      let delay=get_speed();

  let index=index_pls;

  //document.getElementById('lol').innerHTML='pause';
 
    let blocks = document.querySelectorAll(".block");
    await sleep(delay);
      for (let i =index;i<states.length;i += 1){
            let delay=get_speed();

        if(pseudos[i]!=-1) {
          if(pseudos[i]==0){
            pseudo[2].style.color="#ff4499";
            pseudo[3].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            console.log(pseudos[i-1]+1);
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
            if(i>=1 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
           document.getElementById("exp").innerHTML=texts[i];
          await new Promise(resolve =>setTimeout(() => {resolve();}, delay));
          if(pause) break;
          while(pause){await sleep(1);}
          //document.getElementById("exp").innerHTML=texts[i];
          index_pls+=1;
          min=states[i][1];
          j=states[i][2];
          if(states[i][0]==0){
            //console.log("holaa amigos");
             await sleep(delay);

            blocks[min].style.backgroundColor = "#FF4949";
          blocks[j].style.backgroundColor = "#FF4949";
           await sleep(delay);
          }
          else if(states[i][0]==1){
             await sleep(delay);
         // await swap(blocks[j], blocks[j + 1]);
         blocks[min].style.backgroundColor="#58B7FF";
          blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
             continue;
          }
          else if(states[i][0]==3){
             await sleep(delay);
        blocks[min].style.backgroundColor = "#58B7FF";

        blocks[j].style.backgroundColor = "#58B7FF";
         await sleep(delay);
          }
          else{
               await sleep(delay);
             let i=j 

                  let f=blocks[i].childNodes[0].innerHTML;
                  blocks[i].childNodes[0].innerHTML=blocks[min].childNodes[0].innerHTML;
                  blocks[min].childNodes[0].innerHTML=f;
    
                  let height=blocks[i].style.height;
                  blocks[i].style.height=blocks[min].style.height;
                  blocks[min].style.height=height;
                           blocks[i].style.backgroundColor="#58B7FF";
             blocks[min].style.backgroundColor = "#13CE66";
          }

      }
          
}
async function step_backwards(){ //will execute the indexTH state


  let index=index_pls;
    console.log(pseudos,index);
    //console.log(":((((((",index);
  index_pls-=1;
  if(!pause)  p();
  //document.getElementById('lol').innerHTML='play';
    let blocks = document.querySelectorAll(".block");
    await sleep(1);
      for (let i =index;i<=index;i += 1){
        if(pseudos[i]!=-1) {
          if(pseudos[i]==0){
            pseudo[2].style.color="#ff4499";
            pseudo[3].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i<pseudos.length && pseudos[i+1]!=-1){
            if(pseudos[i+1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            console.log(pseudos[i+1]+1);
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
        else{
            if(i<pseudos.length && pseudos[i+1]!=-1){
            if(pseudos[i+1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
           document.getElementById("exp").innerHTML=texts[i];
        // document.getElementById("exp").innerHTML=texts[i];
          min=states[i][1];
          j=states[i][2];
          //console.log(j);
          if(states[i][0]==0){
            //console.log("holaa amigos");
            await sleep(1)
              blocks[min].style.backgroundColor = "#58B7FF";
          blocks[j].style.backgroundColor = "#58B7FF";
          await sleep(1)
          }
          else if(states[i][0]==1){
            await sleep(1);
            blocks[min].style.backgroundColor = "#FF4949";
         // await swap(blocks[j], blocks[j + 1]);
          blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
             continue;
          }
          else if(states[i][0]==3){
            await sleep(1)
        blocks[min].style.backgroundColor = "#FF4949";

        blocks[j].style.backgroundColor = "#FF4949";
        await sleep(1)
          }
          else{
              await sleep(1);
             let i=j 

                  let f=blocks[i].childNodes[0].innerHTML;
                  blocks[i].childNodes[0].innerHTML=blocks[min].childNodes[0].innerHTML;
                  blocks[min].childNodes[0].innerHTML=f;
    
                  let height=blocks[i].style.height;
                  blocks[i].style.height=blocks[min].style.height;
                  blocks[min].style.height=height;
             blocks[i].style.backgroundColor="#FF4949";
             blocks[min].style.backgroundColor = "#58B7FF";
          }

      }
}

async function fwds(){
  console.log(states);
    let blocks = document.querySelectorAll(".block");
    await sleep(1);
      for (let i =states.length-1;i>=0;i -= 1){
          min=states[i][1];
          j=states[i][2];
          if(states[i][0]==0){
            await sleep(1)
            blocks[min].style.backgroundColor = "#58B7FF";
            blocks[j].style.backgroundColor = "#58B7FF";
            await sleep(1)
          }
          else if(states[i][0]==1){
            await sleep(1);
            blocks[min].style.backgroundColor = "#FF4949";
            blocks = document.querySelectorAll(".block");
          }
          else if(states[i][0]==2){
             continue;
          }
          else if(states[i][0]==3){
            await sleep(1);
            blocks[min].style.backgroundColor = "#FF4949";
            blocks[j].style.backgroundColor = "#FF4949";
            await sleep(1);
          }
          else{
             await sleep(1);
             let i=j 
             let f=blocks[i].childNodes[0].innerHTML;
             blocks[i].childNodes[0].innerHTML=blocks[min].childNodes[0].innerHTML;
             blocks[min].childNodes[0].innerHTML=f;
             let height=blocks[i].style.height;
             blocks[i].style.height=blocks[min].style.height;
             blocks[min].style.height=height;
             blocks[i].style.backgroundColor="#FF4949";
             blocks[min].style.backgroundColor = "#13CE66";
          }
      }
      document.getElementById("Bale_loadz").style.display="none";
      document.getElementById("Demo").style.display="block";
      document.getElementById("exp").style.display="block";
      document.getElementById("control").style.display="block";
      document.getElementById("legend").style.display="block";
      container.style.visibility="visible";
      document.getElementById("exp").style.marginTop="20px";
}

async function selectionSort(delay = 1) {
  sort=2;
  generateBlocks();
  openCity("one","selection");
  container.style.visibility="hidden";
  document.getElementById("exp").style.marginTop="-220px";
  document.getElementById("Bale_loadz").style.display="inline";
  Pseudo(3);
  document.getElementById("pyt").addEventListener("click",function(){openCity("one","selection");});
  document.getElementById("cpp").addEventListener("click",function(){openCity("two","selection");});
  document.getElementById("jav").addEventListener("click",function(){openCity("three","selection");});
  document.getElementById("sort-header").innerHTML="Selection Sort";
  let blocks = document.querySelectorAll(".block");
  for (let i = 0; i < blocks.length; i += 1) {
    let min=i;
    //await sleep(1);
   // await sleep(1);
    for (let j = i+1; j < blocks.length ; j += 1) {
      appender([0,min,j],"Comparing "+blocks[min].childNodes[0].innerHTML+" and "+blocks[j].childNodes[0].innerHTML,3);
      blocks[min].style.backgroundColor = "#FF4949";
      blocks[j].style.backgroundColor = "#FF4949";
      //await sleep(1);
      //await sleep(1);
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
    
      const value1 = Number(blocks[min].childNodes[0].innerHTML);
      const value2 = Number(blocks[j].childNodes[0].innerHTML);

      if (value1 > value2) {
        appender([1,min,j],value1+" > "+value2+", we update min",4);
        //await sleep(1);
        //await sleep(1);
        blocks[min].style.backgroundColor = "#58b7ff";
        min=j;
      }
      else{
      //  await sleep(1);
        appender([2,min,j],value1+" < "+value2+", we don't update min",-1);
       // await sleep(1);
      }
      appender([3,min,j],"Next, ",0);
      blocks[min].style.backgroundColor = "#58B7FF";
      blocks[j].style.backgroundColor = "#58B7FF";
    }
   // await sleep(1);
    appender([4,i,min],blocks[min].childNodes[0].innerHTML+" is now sorted",5);
    let f=blocks[i].childNodes[0].innerHTML;
    blocks[i].childNodes[0].innerHTML=blocks[min].childNodes[0].innerHTML;
    blocks[min].childNodes[0].innerHTML=f;
    
    let height=blocks[i].style.height;
    blocks[i].style.height=blocks[min].style.height;
    blocks[min].style.height=height;
    blocks[i].style.backgroundColor = "#13CE66";
  }
  fwds(0);
  blocks[blocks.length-1].style.backgroundColor = "#13CE66";
}
async function move_forwardi(){ //will execute the indexTH state

  if(pause) p();
  let index=index_pls;
  let delay=get_speed();
  let blocks = document.querySelectorAll(".block");
  await sleep(delay);
  for (let i =index;i<states.length;i += 1){
      let delay=get_speed();
     await sleep(delay);
          if(pseudos[i]!=-1) {
             await sleep(delay);
          if(pseudos[i]==0){
             await sleep(delay);
            pseudo[2].style.color="#ff4499";
            pseudo[3].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>0 && pseudos[i-1]!=-1){
             await sleep(delay);
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            if(pseudos[i-1]==4){
               await sleep(delay);
              console.log(pseudos.length);
              pseudo[6].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
           await sleep(delay);
            if(i>0 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            if(pseudos[i-1]==4){
              console.log(pseudos.length);
              pseudo[6].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
          if(pause) break;
          while(pause){await sleep(1);}
    document.getElementById("exp").innerHTML=texts[i];
    index_pls+=1;
     await sleep(delay);
    if(states[i][0]==0){
       await sleep(delay);
      states[i][1].style.backgroundColor="#FF4949";
    }
    else if(states[i][0]==1){
       await sleep(delay);
      continue;
    }
    else if(states[i][0]==2){
      await sleep(delay);
      continue;
    }
    else if(states[i][0]==3){
       await sleep(delay);
      await swap(states[i][1],states[i][2]);
    }
    else if(states[i][0]==4){
       await sleep(delay);
      states[i][1].style.backgroundColor = "#6DDE4E";
    }
    else{
      await sleep(delay);
      states[i][1].style.backgroundColor = "#58B7FF";
    }
  }
}
async function step_forwardi(){ //will execute the indexTH state
  if(!pause)  p();
  let index=index_pls;
  index_pls+=1;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
  for (let i =index;i<=index;i += 1){
    if(pseudos[i]!=-1) {
            await sleep(5);
          if(pseudos[i]==0){
            await sleep(5);
            pseudo[2].style.color="#ff4499";
            pseudo[3].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>0 && pseudos[i-1]!=-1){
            await sleep(1);
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            if(pseudos[i-1]==4){
              await sleep(1);
              console.log(pseudos.length);
              pseudo[6].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
          await sleep(1);
            if(i>0 && pseudos[i-1]!=-1){
            if(pseudos[i-1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            if(pseudos[i-1]==4){
              console.log(pseudos.length);
              pseudo[6].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
    document.getElementById("exp").innerHTML=texts[i];
    await sleep(1);
    if(states[i][0]==0){
      states[i][1].style.backgroundColor="#FF4949";
    }
    else if(states[i][0]==1){
      continue;
    }
    else if(states[i][0]==2){
      continue;
    }
    else if(states[i][0]==3){
      await swap(states[i][1],states[i][2]);
    }
    else if(states[i][0]==4){
      states[i][1].style.backgroundColor = "#6DDE4E";
    }
    else{
      states[i][1].style.backgroundColor = "#58B7FF";
    }
  }
}
async function step_backwardi(){ //will execute the indexTH state
  if(!pause)  p();
  let index=index_pls;
  index_pls-=1;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
  for (let i =index;i<=index;i += 1){
    if(pseudos[i]!=-1) {
            await sleep(5);
          if(pseudos[i]==0){
            await sleep(5);
            pseudo[2].style.color="#ff4499";
            pseudo[3].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i<pseudos.length && pseudos[i+1]!=-1){
            await sleep(1);
            if(pseudos[i+1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            if(pseudos[i+1]==4){
              await sleep(1);
              console.log(pseudos.length);
              pseudo[6].style.color="white";
            }
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
        else{
          await sleep(1);
            if(i<pseudos.length && pseudos[i+1]!=-1){
            if(pseudos[i+1]==0){
              pseudo[2].style.color="white";
              pseudo[3].style.color="white";
            }
            if(pseudos[i+1]==4){
              console.log(pseudos.length);
              pseudo[6].style.color="white";
            }
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
  
    let j=states[i][1];

    document.getElementById("exp").innerHTML=texts[i];
    await sleep(1);
    if(states[i][0]==0){
      states[i][1].style.backgroundColor = "#58B7FF";
    }
    else if(states[i][0]==1){ 
      blocks[j].style.backgroundColor = "#58B7FF";
      continue;
    }
    else if(states[i][0]==2){
      continue;
    }
    else if(states[i][0]==3){
      states[i][2].style.backgroundColor="#FF4949";
      await swap(states[i][1],states[i][2]);
      blocks=document.querySelectorAll(".block");
    }
    else if(states[i][0]==4){
      continue;
    }
    else{
      states[i][1].style.backgroundColor="6DDE4E";
    }
  }
}
async function fwdi(){
    let blocks = document.querySelectorAll(".block");
  //  await sleep(1);
      for (let i =states.length-1;i>=0;i -= 1){
          let j=states[i][1];
       //   await sleep(1);
          if(states[i][0]==0){
              states[i][1].style.backgroundColor = "#58B7FF";
          }
          else if(states[i][0]==1){ 
            blocks[j].style.backgroundColor = "#58B7FF";
            continue;
          }

          else if(states[i][0]==2){
            continue;
          }
          else if(states[i][0]==3){
            states[i][2].style.backgroundColor="#FF4949";
            await swap(states[i][1],states[i][2]);
            blocks=document.querySelectorAll(".block");
          }
          else if(states[i][0]==4){
              continue;
          }
          else{
              states[i][1].style.backgroundColor="6DDE4E";
          }
      }
      document.getElementById("Bale_loadz").style.display="none";
      document.getElementById("Demo").style.display="block";
      document.getElementById("exp").style.display="block";
      document.getElementById("control").style.display="block";
      document.getElementById("legend").style.display="block";
      container.style.visibility="visible";
      document.getElementById("exp").style.marginTop="50px";
}
async function insertionSort(delay=0)
{ sort=3;
  generateBlocks();
  openCity("one","insertion");
 container.style.visibility="hidden";
document.getElementById("exp").style.marginTop="-220px";
document.getElementById("Bale_loadz").style.display="inline";
  document.getElementById("sort-header").innerHTML="Insertion Sort";
  Pseudo(1);
    document.getElementById("pyt").addEventListener("click",function(){openCity("one","insertion");});
  document.getElementById("cpp").addEventListener("click",function(){openCity("two","insertion");});
  document.getElementById("jav").addEventListener("click",function(){openCity("three","insertion");});
  let blocks=document.querySelectorAll(".block");
  let pseudo=document.getElementById("Demo").children;
  for(let i=1;i<=blocks.length-1;i+=1)
  {
    let j=i;
    blocks=document.querySelectorAll(".block");

    await new Promise(resolve =>
      setTimeout(() => {
        resolve();
      }, 0)
    );

    let value1=Number(blocks[j].childNodes[0].innerHTML);
    let value2=Number(blocks[j-1].childNodes[0].innerHTML);

    //document.getElementById('exp').innerHTML=exp[0];

    blocks[j].style.backgroundColor = "#FF4949";
    appender([0,blocks[j]],"Placing "+value1,0);
   // await sleep(5);
   // pseudo[2].style.color="white";

    while(j>0)
    {
      appender([1,j,j-1],"Comparing "+value1+" and "+value2,3);
      if(value1>=value2){
        appender([2,j,j-1],value2+" is smaller than "+value1+", hence we DON'T SWAP",5);
      break;
      }
      appender([3,blocks[j-1],blocks[j]],value2+" is greater than "+value1+", hence we SWAP",4);
      await swap(blocks[j-1],blocks[j]);
      blocks=document.querySelectorAll(".block");
      j-=1;
     // await sleep(5);
      if(j===0)
      {
        break;
      }

      value1=Number(blocks[j].childNodes[0].innerHTML);
      value2=Number(blocks[j-1].childNodes[0].innerHTML);

  //    pseudo[3].style.color="white";
    }
     appender([4,blocks[j]],"Placed",6);
    //document.getElementById('exp').innerHTML=exp[2];

    blocks[j].style.backgroundColor = "#6DDE4E";
    
    if(i==blocks.length-1) {appender([5,blocks[j],j-1],"Sorted!!",-1);} 
    else {appender([5,blocks[j],j-1],"Next",-1);}
    blocks[j].style.backgroundColor = "#58B7FF";
  }
  fwdi();
  //document.getElementById('exp').innerHTML=exp[3];
}
var flag=0;
async function step_forwardl(){ //will execute the indexTH state
  if(!pause)  p();
  index_pls=Math.min(index_pls,states.length-1);
  let index=index_pls;
  index_pls+=1;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
  console.log(states);
  for (let i =index;i<=index;i += 1){
        document.getElementById("exp").innerHTML=texts[i];
        if(pseudos[i]!=-1) {
          await sleep(5);
          if(pseudos[i]==2){
            pseudo[4].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>0 && pseudos[i-1]!=-1){
            await sleep(1);
            if(pseudos[i-1]==2){
              pseudo[4].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
          await sleep(1);
            if(i>0 && pseudos[i-1]!=-1){
              await sleep(1);
              if(pseudos[i-1]==2){
                pseudo[4].style.color="white";
              }
              pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
      if(states[i][0]==0){

          states[i][1].style.backgroundColor="#FF4949";
        }
        if(states[i][0]==1){

        
          states[i][1].style.backgroundColor="#13CE66";
        }
        if(states[i][0]==4){
          states[i][1].style.backgroundColor="#58b7ff";
        }
        blocks=document.querySelectorAll(".block");
  }
}
async function move_forwardl(){ //will execute the indexTH state
    if(pause) p();
    index_pls=Math.min(index_pls,states.length-1);
  let index=index_pls;
  let blocks = document.querySelectorAll(".block");
  let delay=get_speed();
  await sleep(delay);
  console.log(states);
  for (let i =index;i<states.length;i += 1){
      let delay=get_speed();

      await sleep(delay);
              if(pseudos[i]!=-1) {
            await sleep(delay);
          if(pseudos[i]==2){
            pseudo[4].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i>0 && pseudos[i-1]!=-1){
              await sleep(delay);
            if(pseudos[i-1]==2){
              pseudo[4].style.color="white";
            }
            pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        else{
            await sleep(delay);
            if(i>0 && pseudos[i-1]!=-1){
                await sleep(delay);
              if(pseudos[i-1]==2){
                pseudo[4].style.color="white";
              }
              pseudo[pseudos[i-1]+1].style.color="white";
          }
        }
        document.getElementById("exp").innerHTML=texts[i];
      if(states[i][0]==0){

          states[i][1].style.backgroundColor="#FF4949";
        }
        if(states[i][0]==1){

        
          states[i][1].style.backgroundColor="#13CE66";
        }
        if(states[i][0]==4){
          states[i][1].style.backgroundColor="#58b7ff";
        }
        blocks=document.querySelectorAll(".block");
        index_pls+=1;
  }
}
async function fwdl(){
    let blocks = document.querySelectorAll(".block");
    await sleep(1);
    
    for (let i =states.length-1;i>=0;i -= 1){

       
        if(states[i][0]==0){

          states[i][1].style.backgroundColor="#58B7FF";
        }
        if(states[i][0]==1){
          states[i][1].style.backgroundColor="#13CE66";
        }
        if(states[i][0]==4){
          states[i][1].style.backgroundColor="#FF4949";
        }

        blocks=document.querySelectorAll(".block");
    }
         document.getElementById("Bale_loadz").style.display="none";
         document.getElementById("Demo").style.display="block";
         document.getElementById("exp").style.display="block";
         document.getElementById("control").style.display="block";
         document.getElementById("legend").style.display="block";
      container.style.visibility="visible";
      document.getElementById("exp").style.marginTop="50px";
}
async function step_backwardl(){ //will execute the indexTH state
  if(!pause)  p();
  index_pls=Math.min(index_pls,states.length-2);
  let index=index_pls;
  index_pls-=1;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
  console.log("index",index);
  for (let i =index;i<=index;i += 1){
        if(pseudos[i]!=-1) {
          await sleep(5);
          if(pseudos[i]==2){
            pseudo[4].style.color="#ff4499";
          }
          pseudo[pseudos[i]+1].style.color="#ff4499";
          if(i<pseudos.length && pseudos[i+1]!=-1){
            await sleep(1);
            if(pseudos[i+1]==2){
              pseudo[4].style.color="white";
            }
            pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
        else{
          await sleep(1);
            if(i<pseudos.length && pseudos[i+1]!=-1){
              await sleep(1);
              if(pseudos[i+1]==2){
                pseudo[4].style.color="white";
              }
              pseudo[pseudos[i+1]+1].style.color="white";
          }
        }
    await sleep(1);
        document.getElementById("exp").innerHTML=texts[i];
      if(states[i][0]==0){

          states[i][1].style.backgroundColor="#58B7FF";
        }
        if(states[i][0]==1){
          states[i][1].style.backgroundColor="#13CE66";
        }
        if (states[i][0]==2) {
          states[i][1].style.backgroundColor="#FF4949";
        }
        if(states[i][0]==4){
          continue;
        }
        blocks=document.querySelectorAll(".block");

  }
}
async function lsearch(delay = 1000) {
  sort=4;
  Pseudo(2);
  generateBlocks();
    document.getElementById("sort-header").innerHTML="Linear Search";
  let value2=0;
  setTimeout(function() { value2=prompt("Enter the value, to be searched"); }, 100);
  await sleep(2000);
  container.style.visibility="hidden";
  document.getElementById("exp").style.marginTop="-220px";
  document.getElementById("Bale_loadz").style.display="inline";
  let blocks = document.querySelectorAll(".block");
  document.getElementById("1").innerHTML="Array";
  document.getElementById("2").innerHTML="Current&nbsp;Element";
  document.getElementById("3").innerHTML="Element&nbsp;Found!";
  openCity("one","linear");
  document.getElementById("pyt").addEventListener("click",function(){openCity("one","linear");});
  document.getElementById("cpp").addEventListener("click",function(){openCity("two","linear");});
  document.getElementById("jav").addEventListener("click",function(){openCity("three","linear");});
  //let value2=prompt("enter a value to be searched");
  let flag=0;
      while(pause){
      await sleep(1);
    }
  //let blocks1 = document.querySelectorAll(".block1");
  let pseudo=document.getElementById("Demo").children;
    //value2=value2=document.getElementById("yeah").value;
  await sleep(100);
  for (let i = 0; i < blocks.length; i += 1) {
     // pseudo[1].style.color="red";
          while(pause){
      await sleep(1);
    }
      blocks[i].style.backgroundColor = "#FF4949";
     // blocks1[i].style.display='inline';
      await sleep(5);
    //  pseudo[1].style.color="white";
    //  ele.innerHTML="Is the element highlighted equal to the value ?";
      await new Promise(resolve =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
          while(pause){
      await sleep(1);
    }
      const value1 = Number(blocks[i].childNodes[0].innerHTML);
    //  pseudo[2].style.color="red";
    //  await sleep(500);
     // pseudo[2].style.color="white";
     appender([0,blocks[i]],"Is the element highlighted equal to the value?",1);
      if (value1 == value2) {
          flag=1;
          await sleep(5);
            while(pause){await sleep(1);}
        // pseudo[4].style.color="white";
        // pseudo[3].style.color="white";
        // ele.innerHTML="Yes ! the element highlighted is equal to the value to be searched !";
        appender([1,blocks[i]],"Yes! the element is found at index "+i,2);
        blocks[i].style.backgroundColor="#13CE66";
        console.log(ele);
      }
      else{
            while(pause){
      await sleep(1);
    }
        //pseudo[5].style.color="red";
        appender([2,blocks[i]],"No! the element highlighted is not equal to the value",4);
        //ele.innerHTML="No ! the element highlighted is not equal to the value to be searched !";
        await sleep(5);
        //pseudo[5].style.color="white";
        blocks[i].style.backgroundColor = "#58b7ff";
        appender([4,blocks[i]],"Next",0);
      }
        if(flag==1){
          break;
        }  
            while(pause){
      await sleep(1);
    }
  }
    if(flag==0){
      appender([9,blocks[i]],"The element is not present in the array",0);
    }
    fwdl();
}
async function move_forwardb(){ //will execute the indexTH state
      if(pause) p();
  //  index_pls=Math.min(index_pls,states.length-1);
  let index=index_pls;
  let blocks = document.querySelectorAll(".block");
  let delay=get_speed();
  await sleep(delay);
  console.log(states);
  for (let i =index;i<states.length;i += 1){
    await sleep(10000);
          pseudo[pseudos[i]+1].style.color="#ff4499";
      pseudo[pseudos[i]].style.color="#ff4499";
      if(i>0 && pseudos[i-1]!=-1){
            await sleep(1);
            pseudo[pseudos[i-1]].style.color="white";
            pseudo[pseudos[i-1]+1].style.color="white";
      }
    index_pls+=1;
    //await sleep(10000);
    document.getElementById("exp").innerHTML=texts[i];
        if(states[i][0]==0){
          blocks[states[i][1]].style.backgroundColor="#FF4949"; //red
       }
       if(states[i][0]==1){
          blocks[states[i][1]].style.backgroundColor="#26e05c"; //green
       }
       if(states[i][0]==2){
          let mid=states[i][1];
          for(let k=0;k<=mid;k+=1)
            blocks[k].style.backgroundColor="#9daca1"; //grey
       }
       if(states[i][0]==3){
          let mid=states[i][1];
          for(let k=mid;k<blocks.length;k+=1)
            blocks[k].style.backgroundColor="#9daca1"; //grey
       }

    }
}
let prev=0;
async function step_forwardb(){ //will execute the indexTH state
  if(!pause)  p();
  //index_pls=Math.min(index_pls,states.length-1);
  let index=index_pls;
  prev=1;
  console.log("step fwd",index);
  index_pls+=1;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
  console.log(states);
  for (let i =index;i<=index;i += 1){
      //pseudo[i].style.color="#ff4499";
      pseudo[pseudos[i]+1].style.color="#ff4499";
      pseudo[pseudos[i]].style.color="#ff4499";
      if(i>0 && pseudos[i-1]!=-1){
            await sleep(1);
            pseudo[pseudos[i-1]].style.color="white";
            pseudo[pseudos[i-1]+1].style.color="white";
      }
    document.getElementById("exp").innerHTML=texts[i];
        if(states[i][0]==0){
          blocks[states[i][1]].style.backgroundColor="#FF4949"; //red
       }
       if(states[i][0]==1){
          blocks[states[i][1]].style.backgroundColor="#26e05c"; //green
       }
       if(states[i][0]==2){
          let mid=states[i][1];
          for(let k=0;k<=mid;k+=1)
            blocks[k].style.backgroundColor="#9daca1"; //grey
       }
       if(states[i][0]==3){
          let mid=states[i][1];
          for(let k=mid;k<blocks.length;k+=1)
            blocks[k].style.backgroundColor="#9daca1"; //grey
       }
    }
}
async function step_backwardb(){ //will execute the indexTH state
  if(!pause)  p();
  //index_pls=Math.min(index_pls,states.length-2);
  console.log("step bck",index_pls);
  let index=index_pls;
  index_pls-=1;
  prev=0;
  let blocks = document.querySelectorAll(".block");
  await sleep(1);
  console.log("index",index);
  for (let i =index;i<=index;i += 1){
    pseudo[pseudos[i]+1].style.color="#ff4499";
      pseudo[pseudos[i]].style.color="#ff4499";
      if(i+1<pseudos.length && pseudos[i+1]!=-1){
            await sleep(1);
            pseudo[pseudos[i+1]].style.color="white";
            pseudo[pseudos[i+1]+1].style.color="white";
      }
    document.getElementById("exp").innerHTML=texts[i];
      if(states[i][0]==0){
          blocks[states[i][1]].style.backgroundColor="#FF4949"; //blue 
       }
       if(states[i][0]==1){
          blocks[states[i][1]].style.backgroundColor="#FF4949"; //red
       }
       if(states[i][0]==2){
          let mid=states[i][1];
          //blocks[mid].style.backgroundColor="#FF4949";
          for(let k=0;k<=mid;k+=1)
            blocks[k].style.backgroundColor="#58b7ff"; //blue 
       }
       if(states[i][0]==3){
          let mid=states[i][1];
          //blocks[mid].style.backgroundColor="#FF4949";
          for(let k=mid;k<blocks.length;k+=1)
            blocks[k].style.backgroundColor="#58b7ff"; //blue 
       }
    }
}
  
async function fwdb(){
    let blocks = document.querySelectorAll(".block");
    await sleep(1);
    console.log("fosdsds");
    for (let i =states.length-1;i>=0;i -= 1){
      //await sleep(100);
       console.log(states[i][0]);
       if(states[i][0]==0){
          blocks[states[i][1]].style.backgroundColor="#58b7ff"; //blue 
       }
       if(states[i][0]==1){
          blocks[states[i][1]].style.backgroundColor="#FF4949"; //red
       }
       if(states[i][0]==2){
          let mid=states[i][1];
          for(let k=0;k<=mid;k+=1)
            blocks[k].style.backgroundColor="#58b7ff"; //blue 
       }
       if(states[i][0]==3){
          let mid=states[i][1];
          for(let k=mid;k<blocks.length;k+=1)
            blocks[k].style.backgroundColor="#58b7ff"; //blue 
       }
    }
      document.getElementById("Bale_loadz").style.display="none";
      document.getElementById("Demo").style.display="block";
      document.getElementById("exp").style.display="block";
      document.getElementById("control").style.display="block";
      document.getElementById("legend").style.display="block";
      container.style.visibility="visible";
}
async function binarySearch(delay=100)
{ sort=5;
  container.style.visibility="hidden";

  document.getElementById("Bale_loadz").style.display="inline";
    Pseudo(-1);
  let pseudo=document.getElementById("Demo").children;
  openCity("one","binary");
  document.getElementById("sort-header").innerHTML="Binary Search";
  await generateBlocks(0);
  document.getElementById("Bale_loadz").style.display="none";
  document.getElementById("Demo").style.display="block";
  document.getElementById("exp").style.display="block";
  document.getElementById("control").style.display="block";
  container.style.visibility="visible";
  
  document.getElementById('code').style.marginTop='200px';

  while(pause){
      await sleep(1);
  }
  if (delay && typeof delay !== "number") {
    alert("sort: First argument must be a typeof Number");
    return;
  }
      while(pause){
      await sleep(1);
    }
      document.getElementById("1").innerHTML="Array";
  document.getElementById("2").innerHTML="Current&nbsp;Element";
  document.getElementById("3").innerHTML="Element&nbsp;Found!";
  //document.getElementById('exp').innerHTML="    Sorting the sequence...";
  
  //await quickbubbleSort(1);

  let x=0;
  document.getElementById("pyt").addEventListener("click",function(){openCity("one","binary");});
  document.getElementById("cpp").addEventListener("click",function(){openCity("two","binary");});
  document.getElementById("jav").addEventListener("click",function(){openCity("three","binary");});
await sleep(100);
  setTimeout(function() { x=prompt("Enter the value, to be searched"); }, 500);
    while(pause){
      await sleep(1);
    }

await sleep(5000);
 container.style.visibility="hidden";
  document.getElementById("Bale_loadz").style.display="inline";

  let blocks=document.querySelectorAll(".block");
    let flag=0;
  var l=0;
  var r=blocks.length-1
      while(pause){
      await sleep(1);
    };
  let highlight_delay=500;
//  pseudo[1+0].style.color="#ff4949";
  await sleep(highlight_delay);
  // pseudo[1+0].style.color="white";
  // pseudo[1+1].style.color="#ff4949";
  await sleep(highlight_delay);
//  pseudo[1+1].style.color="white";
  var f=0;
  while(l<=r)
  { 
    while(pause){
      await sleep(1);
    }
    
  //  pseudo[1+2].style.color="#ff4949";
    await sleep(highlight_delay);
    // pseudo[1+2].style.color="white";
    // pseudo[1+3].style.color="#ff4949";
    await sleep(highlight_delay);
 //   pseudo[1+3].style.color="white";

    let mid=Math.floor((l+r)/2);
    appender([0,mid],"Now, mid = "+mid+". We now compare this to the value. L= "+l+", R = "+r,2);
    blocks[mid].style.backgroundColor="#ff4949";
    //document.getElementById('exp').innerHTML='This is the new Mid value. We now compare this to the value \'x\'';
    await sleep(1000);
    let midvalue=Number(blocks[mid].childNodes[0].innerHTML);
        while(pause){
      await sleep(1);
    }
    
    if(midvalue==x)
    { flag=1;
      appender([1,mid],'Element found at position'+mid,5);
      //pseudo[1+4].style.color="#ff4949";
      await sleep(highlight_delay);
      // pseudo[1+4].style.color="white";
      // pseudo[1+5].style.color="#ff4949";
      await sleep(highlight_delay);
     // pseudo[1+5].style.color="white";  
      while(pause){
      await sleep(1);
    }
      //document.getElementById('exp').innerHTML='Element found at position '+mid;
      blocks[mid].style.backgroundColor="#26e05c";
      f=1;
      break;
    }
    else if(midvalue<x)
    { appender([2,mid],"The new mid is lesser than the value we are looking for. So, we will ignore the left half of this array henceforth.",7);
      //pseudo[1+6].style.color="#ff4949";
      await sleep(highlight_delay);
      // pseudo[1+6].style.color="white";
      // pseudo[1+7].style.color="#ff4949";
      await sleep(highlight_delay);
     // pseudo[1+7].style.color="white";  
      while(pause){
      await sleep(1);
        }
      //document.getElementById('exp').innerHTML='The new mid is lesser than the value we are looking for. So, we will ignore the left chunk of this arraay henceforth.';
      await sleep(1000);
      for(let k=0;k<=mid;k+=1)
      blocks[k].style.backgroundColor="#9daca1";
      l=mid+1;
    }
    else{   
      appender([3,mid],"The new mid is greater than the value we want to search for. So we now ignore the right half of the array from now on.",9);
      while(pause){
      await sleep(1);
    }
   // pseudo[1+8].style.color="#ff4949";
    await sleep(highlight_delay);
    // pseudo[1+8].style.color="white";
    // pseudo[1+9].style.color="#ff4949";
    await sleep(highlight_delay);
   // pseudo[1+9].style.color="white";
      //document.getElementById('exp').innerHTML='The new mid is greater than the value we want to search for. So we now ignore the right half of the array from now on.';
      await sleep(1000);
          while(pause){
      await sleep(1);
    }
      for(let k=mid;k<blocks.length;k+=1)
      blocks[k].style.backgroundColor="#9daca1";
      r=mid-1;
    }
        while(pause){
      await sleep(1);
    }
  }   while(pause){
      await sleep(1);
    }
    if(flag==0){

      appender([9,i],"The element is not present in the array",-1);
    
    }
    fwdb();
}
async function quickbubbleSort(delay = 0) 
{
  
  // if (delay && typeof delay !== "number") {
  //   alert("sort: First argument must be a typeof Number");
  //   return;
  // }
  //ClearEveryThing();

  let blocks = document.querySelectorAll(".block");
  
  for (let i = 0; i < blocks.length - 1; i += 1) 
  {
    for (let j = 0; j < blocks.length - i - 1; j += 1) 
    {
      await new Promise(resolve =>setTimeout(() => {resolve();}, delay));
      const value1 = Number(blocks[j].childNodes[0].innerHTML);
      const value2 = Number(blocks[j + 1].childNodes[0].innerHTML);
      if (value1 > value2) 
      {  
        await swap(blocks[j], blocks[j + 1]);
        blocks = document.querySelectorAll(".block");
      } 
    }
  }
  
}



//selectionSort();
//bubbleSort();
//insertionSort();

