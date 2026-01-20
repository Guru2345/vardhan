var count=0;
function display(){
    if (count==0){
        document.getElementById('myImage').src="on.gif";
        count+=1;
    }
    else{
        document.getElementById('myImage').src="off.gif";
        count=0;

    }
}