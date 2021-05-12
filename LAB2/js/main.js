import itemlistmodel from "./model/ItemList.js"
import View from "./view/view.js"
import Controllerr from "./controller/Controller.js"



let v = new  View();
v.PageChoose('fotozone', false);
let itlm = new itemlistmodel();
let C = new Controllerr(itlm,v);
console.log(C);
let USER_it ;

window.pageChoose = (name, isSignIn) => {
  C.V.PageChoose(name, isSignIn);
}

window.contrl = (func,event) =>{
  C.contrl_choose(func,event);
}
window.pageProf  = (name, isSignIn) => {
  C.V.PageProfile(name, isSignIn,C);
}

