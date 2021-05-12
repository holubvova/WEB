// import Item from "./model/Item.js";
// import itemlistmodel from "./model/Item.js"
import  "../main.js";
let pages = ['profile', 'sign-in','about-site', 'registered', 'fotozone', 'forgot-password-st', 'Edit'];

let count = 0;

export default class View{
    PageChoose = function(thepage, sign_in){
        console.log(thepage);
        for (let index = pages.length-1; index >= 0; --index){
          if (thepage == pages[index]){
            if (thepage == 'profile'){
                this.DoneRegister(sign_in);
                document.getElementById(pages[index]).hidden=false;
                this.callTable();
            } else {
                this.DoneRegister(sign_in);
                document.getElementById(pages[index]).hidden=false;
            }
          } else {
            this.DoneRegister(sign_in);
            document.getElementById(pages[index]).hidden=true;
          }
        } 
      }

      DoneRegister  = function(status){

        if (status){
          document.getElementById('YES-sing-in').hidden=false; 
          document.getElementById('NO-sing-in').hidden=true;
        }else{
          document.getElementById('YES-sing-in').hidden=true; 
          document.getElementById('NO-sing-in').hidden=false; 
        }
      }

      tabletoHtml = function(contrller,email){
        const index = contrller.itemlistmodel.findEmail(email);
        const user = contrller.itemlistmodel.items[index];
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

        PageProfile = function(thepage, sign_in,profile){
            console.log(thepage);
            for (let index = pages.length-1; index >= 0; --index){
              if (thepage == pages[index]){
                if (thepage == 'profile'){
                    this.DoneRegister(sign_in);
                    document.getElementById(pages[index]).hidden=false;
                    this.callTable(profile);
                } else {
                    this.DoneRegister(sign_in);
                    document.getElementById(pages[index]).hidden=false;
                }
              } else {
                this.DoneRegister(sign_in);
                document.getElementById(pages[index]).hidden=true;
              }
            } 
          }
        callTable(profile){
            document.querySelector('#TABLE').innerHTML = profile.tabletoHtml();
          }
}