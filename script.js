function val(result){
    form.disp.value = form.disp.value + result;

}


function calculate(){
    if(form.disp.value == ""){
        alert("Please Enter Number")
    }else{
        form.disp.value = eval(form.disp.value);
    }
}

var btn = form.veql;
btn.addEventListener('dblclick',()=>{
    form.disp.value = "";
});