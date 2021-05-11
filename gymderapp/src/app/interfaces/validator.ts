import { FormGroup} from "@angular/forms";


export class Validator{
  static checkPassword(group: FormGroup){
    if(group.value.password != group.value.confirmpassword){
      return ({checkPassword:true})
    }
    else{
      return null;
    }
  }


















}
