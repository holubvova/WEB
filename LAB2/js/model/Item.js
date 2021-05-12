export default class Item{
  constructor(name, email,password,gender,bdate){
    this.name = name;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.data = bdate;
    this.surname = '';
    this.bok_date = '';
    this.tell = '';
  }

  Edit_add(name,surname ,email,gender,bdate,bok_date,tell){
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.data = bdate;
    this.surname = surname;
    this.bok_date = bok_date;
    this.tell = tell;
  }
  change_password(password){
    this.password = password;
  }
}




 
  

  
  