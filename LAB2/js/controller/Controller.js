
import Item from "../model/Item.js";




export default class Controllerr{
   
    constructor(itemlistmodel, views){
        this.itemlistmodel = itemlistmodel;
        this.V =views;
        this.USER_it;
      }
    additem(name,email,password,gender,bdate){
        const item = new Item(name,email,password,gender,bdate);
        this.itemlistmodel.add(item);
      }

    tabletoHtml (){

        const index = this.itemlistmodel.findEmail(this.USER_it);
        const user = this.itemlistmodel.items[index];
        return `<tr class="bg-col" >
        <th scope="row"> Name</th>
        <td> ${user.name}   </td>
        </tr>
        <tr class="bg-col" >
        <th scope="row">Surname</th>
        <td> ${user.surname}   </td>
        </tr>
        <tr class="bg-col" >
        <th scope="row">Email</th>
        <td> ${user.email}    </td>
        </tr>
        <tr class="bg-col" >
        <th scope="row">Birthday</th>
        <td> ${user.data} </td>
        </tr>
        <tr class="bg-col" >
        <th scope="row">Sex</th>
        <td> ${user.gender}   </td>
        </tr>
        <tr class="bg-col" >
        <th scope="row">Booking date</th>
        <td> ${user.bok_date} </td>
        </tr>
        <tr class="bg-col" >
        <th scope="row">Tell</th>
        <td> ${user.tell} </td>
        </tr>`;}
     
    contrl_choose(name,event){
        if(name == 'Sign_control'){
            this.control_valid_sing_in_form(this.validate_sing_in_form(),event);
        }
        if (name == 'forgot_passord'){
            this.control_valid_forgot_password(this.validate_form_for_restored_password(),event);
        }
        if (name == 'edit_p'){
            this.control_valid_edit_form(this.validate_form_for_edit_profile(),event);
        }
        if (name == 'registr'){
            this.control_valid_create_account_form(this.validate_form_for_registered(),event);
        }
        if(name== 'signout'){
            this.control_valid_sign_out(false,event);
        }
    }

    checkpassword(email, password){
        const index = this.itemlistmodel.findEmail(email);
        if (index > -1){
        
            if (this.itemlistmodel.items[index].password == password){
            this.USER_it = email;
            return true;
            }
            else{
            alert('error password');
            return false;
            }
        }else{
            alert('Please registered, account with this email not found');
            return false;
        }
        } 
    forgot_password(email){
        const index = this.itemlistmodel.findEmail(email);
        if (index > -1){
            return index;  
        }else{
            alert('Please registered, account with this email not found');
            return index;
        }
        }
    register_check_password(email){
        const index = this.itemlistmodel.findEmail(email);
        if (index > -1){
            return index;  
        }else{
            return index;
        }
        }


    callTable(){
            document.querySelector('#TABLE').innerHTML = tabletoHtml(this.USER_it);
          }

   validate(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(reg.test(email) == false) {
            alert("Incorrect email");
            return false;
        }
        return true;
        }
    control_valid_forgot_password(status,event){
        event.preventDefault();
        if(status){
            this.V.PageChoose('sign-in',false);
        }else{
            this.V.PageChoose('forgot-password-st',false);
        }
        }
    validate_form_for_restored_password(){
        var email=document.forms['forgot_password_form']['email'].value;
        var new_password=document.forms['forgot_password_form']['new_password'].value;
        var repeat_new_password=document.forms['forgot_password_form']['repeat_password'].value;
        
        if(email == '' ||   new_password == '' || repeat_new_password == '' ){
            alert("empty fields are present");
            return false;
        }else{
            if (this.validate(email)){
            if(new_password == repeat_new_password){
                const i = this.forgot_password(email);
                if (i >=0  ){
                this.itemlistmodel.items[i].change_password(new_password);
                return true;
                }else{
                return false;
                }
            }else{
                alert("Passwords do not match");
                return false;
            }
            }else{
            return false;
            }
        }
        }
    validate_form_for_restored_password(){
        var email=document.forms['forgot_password_form']['email'].value;
        var new_password=document.forms['forgot_password_form']['new_password'].value;
        var repeat_new_password=document.forms['forgot_password_form']['repeat_password'].value;
        
        if(email == '' ||   new_password == '' || repeat_new_password == '' ){
            alert("empty fields are present");
            return false;
        }else{
            if (this.validate(email)){
            if(new_password == repeat_new_password){
                const i = this.forgot_password(email);
                if (i >=0  ){
                    this.itemlistmodel.items[i].change_password(new_password);
                return true;
                }else{
                return false;
                }
            }else{
                alert("Passwords do not match");
                return false;
            }
            }else{
            return false;
            }
        }
        }
        
        
        control_valid_sing_in_form(status,event){
        event.preventDefault();
        if(status){
            this.V.PageChoose('fotozone',true);
        }else{
            this.V.PageChoose('sign-in',false);
        }
        }
        
    validate_sing_in_form(){
        var email=document.forms['sign-in-form']['email'].value;
        var password=document.forms['sign-in-form']['password'].value;
        
        if(email == '' || password ==''){
            alert("empty fields are present");
            return false;
        }else{
            if (this.validate(email)){
            return  this.checkpassword(email,password);
            
            }
            return false;
        }
        } 
        
        
    control_valid_create_account_form(status,event){
        event.preventDefault();
        if(status){
            this.V.PageChoose('sign-in',false);
        }else{
            this.V.PageChoose('registered',false);
        }
        }
        
    control_date (){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        today = yyyy + '-' +  mm  +'-' + dd ;
        console.log(today);
        return today;
        }
        
    validate_form_for_registered(){
        console.log('submit');
        var name = document.forms['registered-form']['name'].value;
        var email=document.forms['registered-form']['email'].value;
        var password=document.forms['registered-form']['password'].value;
        var repeat_password=document.forms['registered-form']['repeat_password'].value;
        var gender = document.forms['registered-form']['gender'].value;
        
        var bithday_date  = document.forms['registered-form']['date'].value;
        
        
        
        if(email == '' ||   password == '' || repeat_password == '' || name == '' || bithday_date == ''){
            alert("empty fields are present");
            return false;
        }else{
            if (this.validate(email)){
            if(password == repeat_password){
                if (bithday_date < this.control_date()){
                const i = this.register_check_password(email);
                if (i < 0 ){
                    this.additem(name,email,password,gender,bithday_date);
                return true;
                }else{
                    alert('account already exists');
                    return false;
                }
                }else{
                alert("inccorect date");
                return false;
                }
            }else{
                alert("Passwords do not match");
                return false;
            }
            }else{
            return false;
            }
        }
        }
        
    control_valid_sign_out(status,event){
        event.preventDefault();
        console.log(status);  
        this.USER_it='';
        this.V.PageChoose('fotozone',false);
        return;
        }
      control_valid_edit_form(status,event){
        event.preventDefault();
        console.log(status);
        if(status){
            this.V.PageProfile('profile',true,this);
        }else{
            this.V.PageChoose('Edit',true);
        }
        }
        
        control_number(number){
        var reg = /([0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9])/;
        if(number.length <13){
            if(reg.test(number) == false) {
            alert("Incorrect number");
            return false;
            }else{
            return true
            }
        }else{
            alert('inccorect number ');
            return false;
        }
        }
        
       validate_form_for_edit_profile(){
        console.log('submit');
        
        var name = document.forms['edit-name']['name'].value;
        var surname = document.forms['edit-name']['surname'].value;
        var email=document.forms['edit-name']['email'].value;
        var gender = document.forms['edit-name']['gender'].value;
        var bithday_date  = document.forms['edit-name']['date'].value;
        var book_date  = document.forms['edit-name']['bookdate'].value;
        var number = document.forms['edit-name']['number'].value;
        
        if( surname == '' || number == '' || bithday_date == '' || book_date == ''){
            alert("empty fields are present");
            return false;
        }else{  
            let ind;
            if (bithday_date < this.control_date()){
                if (book_date > this.control_date()){
                if(this.control_number(number)){
                    if (email == ''){
                    email = this.USER_it; 
                    }else{
                    if (this.USER_it != email){
                        const i = this.register_check_password(this.USER_it); 
                        ind = i ;
                    }else{
                        const i = this.register_check_password(email); 
                        ind = i ;
                    }
                    }
                    if (name == ''){
                         name = this.itemlistmodel.items[ind].name;
                    }
                if (ind >=0  ){
                    this.itemlistmodel.items[ind].Edit_add(name,surname,email,gender,bithday_date,book_date,number);
                    this.USER_it=email;
                    return true;
                    }
                }else{
                    return true; 
                }
                return true;
                }else{
                alert("inccorect  booking date");
                return false;
                }
            }else{
                alert("inccorect date");
                return false;
            }
            
        }
        } 
}
