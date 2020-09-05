var btn = document.getElementById("btn");
btn.onclick = function(){
    var user_input  = document.getElementById("message").value;
    if(user_input === ''){
        document.getElementById("show_message").innerHTML = "You did not input anything!";
        document.getElementById("show_message").style.color = "red";
        setTimeout(function(){ 
            document.getElementById("show_message").innerHTML = "";

        },1000)


    }else{
        document.getElementById("show_message").style.color = "#64B8D1";
        document.getElementById("show_message").innerHTML = user_input;
        document.getElementById("message").value = "";
    }
    
    
}