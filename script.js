function swap(q,f,maxvalue){
    var container = document.getElementById("elements");
    var dnl = container.getElementsByTagName("li");
    var temp1=dnl.item(f).innerHTML;
    var temp2=dnl.item(q).innerHTML;
    dnl.item(f).innerHTML=`${temp2}`;
    dnl.item(q).innerHTML=`${temp1}`;
    var height1=(temp1*470)/maxvalue;
    var height2=(temp2*470)/maxvalue;
    dnl.item(f).style.transition="all 1s ease";
    dnl.item(f).style.height=height2+"px";
    dnl.item(f).style.backgroundColor="green";
    if(q!=f){
        dnl.item(q).style.transition="all 1s ease";
        dnl.item(q).style.height=height1+"px";
        dnl.item(q).style.backgroundColor="red";
    }
}

function makehistogram(){
    var container = document.getElementById("elements");
    var labels = document.getElementById("elements");
    var dnl = container.getElementsByTagName("li");
    var value3=-9339839399;
    for(var i=0;i<dnl.length;i++){
        var item = dnl.item(i);
        var value = item.innerHTML;
        if(Number(value) >= Number(value3)){
            value3=value;
        }
    }
    for(var i = 0; i < dnl.length; i++)
    {
        var item = dnl.item(i);
        var value = item.innerHTML;
        var value4=(value*470)/value3;	
        item.style.height=value4+"px";
        item.style.marginRight="30px";
        item.style.width="40px";
        item.style.backgroundColor="red";    
    }	 
}

function new_array(){
    var p=document.body.innerHTML;
    document.body.innerHTML=`<form><label for="arr_elements" id="arr_element"><h1>Enter all elements of an array:</h1></label><br><input type="text" id="arr" name="arr"><button type="submit" id="submitBtn">Submit</button></form>`;
    submitBtn.addEventListener("click",function(event){
        const arra=arr.value;
        var array=arra.split(' ');
        document.body.innerHTML=p;
        var temp=document.getElementById("elements");
        temp.innerHTML=``;
        for(var i=0;i<array.length;i++){
            temp.innerHTML+=`<li>${array[i]}</li>`;
        }
        makehistogram();
  }); 
}

function selection_sort(){
    var container = document.getElementById("elements");
    var dnl = container.getElementsByTagName("li");
    var swaps=[];
    var maxvalue=-874748878474;
    for(var k=0;k<dnl.length;k++){
       var item=dnl.item(k);
       var value=item.innerHTML;
       if(Number(value)>Number(maxvalue)){
           maxvalue=value;
       }
       swaps.push(value)
    }
    interval = 1300,
    increment = 1;
    f=0;
    swaps.forEach(async function() {
    var runner = setTimeout(async function() {
        var minvalue=837376373;
        for(var p=f;p<dnl.length;p++){
            var value=dnl.item(p).innerHTML;
            if(Number(value)<Number(minvalue)){
                minvalue=value;
            }
        }
        for(var q=f;q<swaps.length;q++){
            if(Number(swaps[q])==minvalue){
                swap(q,f,maxvalue);
                var tempi=swaps[q];
                swaps[q]=swaps[f];
                swaps[f]=tempi;
                break;
            }
        }
        f=f+1;
    }, interval * increment);
    increment = increment + 1;
    });
}

function insertion_sort(){
    var container = document.getElementById("elements");
    var dnl = container.getElementsByTagName("li");
    var swaps=[];
    for(var k=0;k<dnl.length;k++){
       var item=dnl.item(k);
       var value=item.innerHTML;
       swaps.push(value)
    }
    interval = 800,
    increment = 1;
    var d=dnl.length;
    var f=0;
    var z=1;
    var s=0;
    var maxi=-282782;
    for(var i=0;i<swaps.length;i++){
        if(swaps[i]>maxi){
            maxi=swaps[i];
        }
    }
    dnl.item(0).style.backgroundColor="green";
    swaps.forEach(function(){
        swaps.forEach(function(){
            var runner = setTimeout(async function() {
                var value1=dnl.item(f).innerHTML;
                var value2=dnl.item(z).innerHTML;
                if(Number(value2)<Number(value1)){
                    swap(f,z,maxi);
                    if(f>=0){
                        s=s+1;
                        f=f-1;
                        z=z-1;
                    }
                    if(f==-1 && s!=0){
                        dnl.item(0).style.backgroundColor="green";
                        f=f+s+1;
                        z=f+1;
                        s=0;
                    }
                }else{
                    dnl.item(z).style.backgroundColor="green";
                    f=f+s+1;
                    z=f+1;
                    s=0;
                }
            }, interval * increment);
            increment = increment + 1;
            });
    });
}

function bubble_sort(){
    var container = document.getElementById("elements");
    var dnl = container.getElementsByTagName("li");
    var swaps=[];
    for(var k=0;k<dnl.length;k++){
       var item=dnl.item(k);
       var value=item.innerHTML;
       swaps.push(value)
    }
    interval = 500,
    increment = 1;
    var d=dnl.length;
    var f=0;
    var z=1;
    var s=0;
    var maxi=-282782;
    for(var i=0;i<swaps.length;i++){
        if(swaps[i]>maxi){
            maxi=swaps[i];
        }
    }
    swaps.forEach(function(){
        swaps.forEach(function(){
            var runner = setTimeout(async function() {
                var value1=dnl.item(f).innerHTML;
                var value2=dnl.item(z).innerHTML;
                if(Number(value2)<Number(value1)){
                    swap(f,z,maxi);
                    dnl.item(z).style.backgroundColor="red";
                    dnl.item(f).style.backgroundColor="red";
                }
                f=f+1;
                z=z+1;
                if(z==d-s){
                    dnl.item(d-s-1).style.backgroundColor="green";
                    if(d-s-1==1){
                        dnl.item(0).style.backgroundColor="green";
                    }
                    s=s+1;
                    z=1;
                    f=0;
                }
                if(z==dnl.length){
                    z=1;
                    f=0;
                }
            }, interval * increment);
            increment = increment + 1;
            });
    });
}

function merge_sort(){
    var container = document.getElementById("elements");
    var dnl = container.getElementsByTagName("li");
    var swaps=[];
    for(var k=0;k<dnl.length;k++){
       var item=dnl.item(k);
       var value=item.innerHTML;
       swaps.push(value)
    }
    var maxi=-282782;
    for(var i=0;i<swaps.length;i++){
        if(Number(swaps[i])>maxi){
            maxi=swaps[i];
        }
    }
    interval = 700,
    increment = 1;
    var s=0;
    var e=dnl.length-1;
    var array=[];
    function bc(s,e,v){
        if((e-s)<1 && v!=1){
            return;
        }
        var t=String(s)+" "+String(e);
        array.push(t);
        var mid=Math.floor(s+(e-s)/2);
        if((e-s)==2){
            bc(s,mid,0);
            bc(mid+1,e,1);
        }else{
            bc(s,mid,0);
            bc(mid+1,e,0);
        }    
    }
    bc(0,dnl.length-1,0);
    var s1=0;
    var e1=0;
    var s2=0;
    var e2=0;
    var s3=0;
    var e3=0;
    var k=1;
    var k1=0;
    var flag=0;
    var flag1=0;
    var flag2=0;
    var d=array.length;
    swaps.every(async function(){
        swaps.every(async function(){
            var runner = setTimeout(async function() {
                d=array.length;
                for(var i=0;i<array.length;i++){
                    var present=array[i];
                    var presentarray=present.split(' ');
                    s1=Number(presentarray[0]);
                    e1=Number(presentarray[1]);
                    if(i!=(d-1)){
                        var present2=array[i+1];
                        var presentarray2=present2.split(' ');
                        s2=Number(presentarray2[0]);
                        e2=Number(presentarray2[1]);
                    }else{
                        break;
                    }
                    if(i!=(d-2)){
                        var present3=array[i+2];
                        var presentarray3=present3.split(' ');
                        s3=Number(presentarray3[0]);
                        e3=Number(presentarray3[1]);
                    }else{
                        s3=e2+1
                    }
                    if((s2-e1)==1 && (s3-e2==1) && (flag==0) && (e1-s1)<=1){
                        if(k==(i+1)){
                            flag=1;
                            break;
                        }
                        var present4=array[k];
                        var presentarray4=present4.split(' ');
                        var m2=Number(presentarray4[1]);
                        dnl.item(m2).style.marginRight="100px";
                        k=k+1;
                        break;
                    }else if((((s2-e1)==1) && (s3-e2==1) && (flag2==0))){
                        if((e1-s1)<=1 && (e2-s2)<=1){
                            if(k1==0){
                                k1=1;
                                var magnitude1=dnl.item(s1).innerHTML;
                                var magnitude2=dnl.item(e1).innerHTML;
                                if(Number(magnitude1)>Number(magnitude2)){
                                    swap(e1,s1,maxi);
                                }
                                dnl.item(e1).style.backgroundColor="green";
                                dnl.item(s1).style.backgroundColor="green";
                                break;
                            }else if(k1==1){
                                flag=2;
                                var magnitude3=dnl.item(s2).innerHTML;
                                var magnitude4=dnl.item(e2).innerHTML;
                                if(Number(magnitude3)>Number(magnitude4)){
                                    swap(e2,s2,maxi);
                                }
                                dnl.item(e2).style.backgroundColor="green";
                                dnl.item(s2).style.backgroundColor="green";
                                k1=0;
                                flag2=1;
                                break;
                            }
                        }else if((e1-s1)>1 && (e2-s2)<=1){
                                var magnitude9=dnl.item(s2).innerHTML;
                                var magnitude10=dnl.item(e2).innerHTML;
                                if(Number(magnitude9)>Number(magnitude10)){
                                    swap(e2,s2,maxi);
                                }
                                dnl.item(e2).style.backgroundColor="green";
                                dnl.item(s2).style.backgroundColor="green";
                                k1=0;
                                flag=2;
                                flag2=1;
                                break;
                        }
                        flag2=1;
                    }else if(((s2-e1)==1 && (s3-e2==1))){
                            var presentarray5=array[i].split(' ');
                            var w3=Number(presentarray5[0]);
                            var w4=Number(presentarray5[1]);
                            var presentarray6=array[i+1].split(' ');
                            var w7=Number(presentarray6[0]);
                            var w8=Number(presentarray6[1]);
                            while(w3<=w4 && w7<=w8){
                                dnl.item(w4).style.marginRight="20px";
                                var magnitude5=dnl.item(w3).innerHTML;
                                var magnitude6=dnl.item(w7).innerHTML;
                                if(Number(magnitude5)>Number(magnitude6)){
                                    swap(w3,w7,maxi);
                                    dnl.item(w4).style.marginRight="20px";
                                    dnl.item(w3).style.backgroundColor="green";
                                    for(var g=w7;g<w8;g++){
                                        var magnitude7=dnl.item(g).innerHTML;
                                        var magnitude8=dnl.item(g+1).innerHTML;
                                        if(Number(magnitude7)>Number(magnitude8)){
                                            swap(g,g+1,maxi);
                                            dnl.item(g).style.backgroundColor="green";
                                            dnl.item(g+1).style.backgroundColor="green";
                                        }
                                    }
                                    w3=w3+1;
                                }else{
                                    w3=w3+1;
                                }    
                            }
                            flag=0;
                            flag2=0;
                            array.splice(i,2);
                            k=i;
                            break;
                    }
                }
            }, interval * increment);
            increment = increment + 1;
            });
    });   
}
window.onload=makehistogram;