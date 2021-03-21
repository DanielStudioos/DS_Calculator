function start() {
$('#show_keys').click();
swal({
  text: "Welcome",
   icon: "success",
});

}
function calc() {
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
finale.setAttribute("value", chapa);
}
function add_arg(toadd) {
argss2 = document.querySelector("#disp_arg"); 
chapa2 = argss2.value;
argss2.setAttribute("value", chapa2.toString() + toadd.toString());


calc();
}

function add_func(toadd) {
argss2 = document.querySelector("#disp_arg"); 
chapa2 = eval(argss2.value) ? eval(argss2.value) : 0;
argss2.setAttribute("value", chapa2.toString() + toadd);

}
function hide() {
hido = document.querySelector("#hidden"); 
if (hido.style.display != "none") {
norm = document.querySelector("#normal"); 
norm.style.height = "100%";
}else{
norm = document.querySelector("#normal"); 
norm.style.height = "75%";	
}
$('#hidden').fadeToggle();
}
function add_kin(toadd) {
	argss2 = document.querySelector("#disp_arg"); 
chapa2 = argss2.value;
argss2.setAttribute("value", chapa2.toString() + toadd);
}
function slic() {
	argss2 = document.querySelector("#disp_arg"); 
	chapa2 = argss2.value.toString();
	capa2 = chapa2.slice(0, -1);
	argss2.setAttribute("value", capa2.toString());
	calc();
}
function clare() {
	argss2 = document.querySelector("#disp_arg"); 
	argss2.setAttribute("value", "");
}
function sin() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.sin(chapa * r2d);
finale.setAttribute("value", capa);
}
function cos() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.cos(chapa * r2d);
finale.setAttribute("value", capa);
}
function tan() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.tan(chapa * r2d);
finale.setAttribute("value", capa);
}
function sign_cahge() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = chapa * -1;
finale.setAttribute("value", capa);
argss.setAttribute("value", capa);
}
function sqr() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.pow(chapa, 2);
finale.setAttribute("value", capa);
argss.setAttribute("value", capa);
}
function rai() {
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
torai = prompt("Raise X to: ");
capa = Math.pow(chapa, torai);
finale.setAttribute("value", capa);
argss.setAttribute("value", capa);
}
function pi() {
argss = document.querySelector("#disp_arg"); 
capa = 3.14;
argss.setAttribute("value", capa);
}
function log() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.log10(chapa);
finale.setAttribute("value", capa);
}
function ten() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.pow(10, chapa);
finale.setAttribute("value", capa);
}
function chan() {
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = finale.value;
argss.setAttribute("value", chapa);
}
function abs() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
capa = Math.abs(chapa);
finale.setAttribute("value", capa);
}
function log_base() {
r2d = Math.PI/180;
argss = document.querySelector("#disp_arg"); 
finale = document.querySelector("#disp_fin"); 
chapa = eval(argss.value) ? eval(argss.value) : 0;
base = prompt("Enter the base: ");
capa = Math.log(chapa) / Math.log(base);
finale.setAttribute("value", capa);
}
//alert(eval(document.querySelector("#disp_arg").value));