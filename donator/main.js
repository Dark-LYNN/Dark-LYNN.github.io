document.getElementById("maindiv").style.backgroundImage = 'linear-gradient(' + "to right" + ',' + "white" + ',' + "black" + ')';
document.getElementById("color1nametext").innerHTML = "#ffffff";
document.getElementById("color2nametext").innerHTML = "#000000";
var cd2 = document.getElementById("color2display");
cd2.style.backgroundColor = "#000000";
var cd1 = document.getElementById("color1display");
cd1.style.backgroundColor = "#ffffff";
var i=0,j=0,count=0;
var col1 = "#ffffff",col2 ="#000000";

//document.getElementById("nxtbtn").addEventListener("click", displaynext);
//document.getElementById("prevbtn").addEventListener("click", displayprev);

var colors1 = ["#00C9FF","#f46b45","#005C97","#e53935","#fc00ff","#acb6e5","#81FBB8","#E2B0FF","#F761A1","#43CBFF","#F1CA74","#F1CA74","#FFF886","#FF9D6C"];
var colors2 = ["#92FE9D","#eea849","#363795","#e35d5b","#00dbde","#86fde8","#28C76F","#9F44D3","#8C1BAB","#9708CC","#28C76F","#A64DB6","#F072B6","#BB4E75"];
var len1 = colors1.length;
var len2 = colors1.length;

//display next gradient
function displaynext() {
    document.getElementById("csstext").style.visibility ="hidden";    
    document.getElementById("csscodetext").style.color = "#000000";
    document.getElementById("copycssbtn").innerHTML = "Copy CSS";
    if(count<len1){
        col1 =colors1[count];
        col2 =colors2[count];
        document.getElementById("maindiv").style.backgroundImage = 'linear-gradient(' + "to right" + ',' + col1 + ',' + col2 + ')';
        document.getElementById("color1nametext").innerHTML = col1;
        document.getElementById("color2nametext").innerHTML = col2;
        cd2.style.backgroundColor = col2;
        cd1.style.backgroundColor = col1;
        j=count;
        count=count+1;
    }
    else if(count>len1){
        count=len1;
        
    }
            

}
//display previous gradient
function displayprev() {

    document.getElementById("csstext").style.visibility ="hidden";    
    document.getElementById("csscodetext").style.color = "#000000";
    document.getElementById("copycssbtn").innerHTML = "Copy CSS";
    if(j>=0){
        document.getElementById("maindiv").style.backgroundImage = 'linear-gradient(' + "to right" + ',' + colors1[j] + ',' + colors2[j] + ')';
        document.getElementById("color1nametext").innerHTML = colors1[j];
        document.getElementById("color2nametext").innerHTML = colors2[j];
        cd2.style.backgroundColor = colors2[j];
        cd1.style.backgroundColor = colors1[j];
        count=j;
        j=j-1;
    }
    else if(j<0){

        j=0
    }


  }
  //get the css for the selected gradient
  function getcss(){
    document.getElementById("csstext").style.visibility ="visible";
    document.getElementById("csscodetext").innerHTML = "background-image: linear-gradient(to right,"+ col1 + "," + col2 + ");"
  }
//close the css dialog box
function cancelclicked(){
    document.getElementById("csstext").style.visibility ="hidden";
    document.getElementById("csscodetext").style.color = "#000000";
    document.getElementById("copycssbtn").innerHTML = "Copy CSS";

}
// copy the selected css
function copy(){
    var range = document.createRange();
    range.selectNode(document.getElementById("csscodetext"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    document.getElementById("csscodetext").style.color = "#5ed371";
    document.getElementById("copycssbtn").innerHTML = "Copied!";

    }