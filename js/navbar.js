$(document).ready(function(){
    let url = window.location.pathname; 
    let filename = url.split("/");
    
    $("a").each(function(e, item) {
        if(item.href.substr(item.href.lastIndexOf("/")+1) == filename[1]){
            $(this).attr("class", "active");
        }
        else{
            $(this).attr("class", "menuItem");
            console.log("test");
        }
    })
});