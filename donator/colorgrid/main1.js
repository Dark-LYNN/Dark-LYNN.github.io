
var colors1 = ["#00C9FF","#f46b45","#005C97","#e53935","#fc00ff","#acb6e5","#81FBB8","#E2B0FF","#F761A1","#43CBFF","#F1CA74","#F1CA74","#FFF886","#FF9D6C","#00C9FF","#f46b45","#005C97","#e53935","#fc00ff","#acb6e5","#81FBB8","#E2B0FF","#F761A1","#43CBFF","#F1CA74","#F1CA74","#FFF886","#FF9D6C","#00C9FF","#f46b45","#005C97","#e53935","#fc00ff","#acb6e5","#81FBB8","#E2B0FF","#F761A1","#43CBFF","#F1CA74","#F1CA74","#FFF886","#FF9D6C"];
var colors2 = ["#92FE9D","#eea849","#363795","#e35d5b","#00dbde","#86fde8","#28C76F","#9F44D3","#8C1BAB","#9708CC","#28C76F","#A64DB6","#F072B6","#BB4E75","#92FE9D","#eea849","#363795","#e35d5b","#00dbde","#86fde8","#28C76F","#9F44D3","#8C1BAB","#9708CC","#28C76F","#A64DB6","#F072B6","#BB4E75","#92FE9D","#eea849","#363795","#e35d5b","#00dbde","#86fde8","#28C76F","#9F44D3","#8C1BAB","#9708CC","#28C76F","#A64DB6","#F072B6","#BB4E75"];
var len1 = colors1.length;
var len2 = colors1.length;
var i;
function load(){

    for(i=0;i<len1;i++){
        
        var divibox = document.createElement("div");
        divibox.className = "divi"+ " "+"divi"+i;
        divibox.id = i;
        //var innerdiv = document.createElement("div");
        //innerdiv.className = "innerdiv";
        var innerbtn = document.createElement("button");
        innerbtn.className = "innerbtn" + " " + "innerbtn"+i;
        innerbtn.id = "innerbtn"+i;
        innerbtn.innerHTML ="Get CSS"
        
        //divi.style.backgroundColor = myArray[i];
        divibox.style.backgroundImage = 'linear-gradient(' + "to right" + ',' + colors1[i] + ',' + colors2[i] + ')';
        divibox.appendChild(innerbtn);
        
        //innerdiv.innerHTML = colors1[i];
        //divi.appendChild(innerdiv);
        document.getElementById("main").appendChild(divibox);



        divibox.onmouseover = function (){mouseOver(this.id)};
        divibox.onmouseout = function (){mouseOut(this.id)};
        innerbtn.onclick = function (){btnclicked(this.id)};

    }

}

function mouseOver(div_id){
    //alert(clicked_id);
    //var x = document.getElementsByTagName("button")[2];
    n = div_id;
    //if (x.id === "innerbtn2") { 
    var btnhovered = "innerbtn"+div_id;
    document.getElementById(btnhovered).style.visibility = "visible";
    //}
}

function mouseOut(div_id){
    var btnhovered = "innerbtn"+div_id;
    document.getElementById(btnhovered).style.visibility = "hidden";
}

function btnclicked(btn_id){
    var cssdiv = document.getElementById("css");
    cssdiv.style.visibility = "visible";
    document.getElementById("csscodetext").innerHTML = "background-image: linear-gradient(to right, "+ colors1[n] + ", " + colors2[n] + ");"
}

function cancel(){
    document.getElementById("css").style.visibility ="hidden";
    document.getElementById("csscodetext").style.color = "#000000";
    document.getElementById("copycssbtn").innerHTML = "Copy CSS";

}


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