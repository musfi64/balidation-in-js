function valitateform() {
    var a=document.forms["myform"]["fname"].value;
    if (a==""){
        alert("pls fill your name");
        return false;
    }
}