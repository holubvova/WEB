
  
export default class itemlistmodel{
    constructor(){
      this.items = [];
    }
  
    add(item){
      this.items.push(item);
    }
    findEmail(email){
      const i = this.items.findIndex((item)=>item.email === email);
      return i;
    }
  }
   