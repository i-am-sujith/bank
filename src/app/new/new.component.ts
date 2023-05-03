import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
constructor(){}
ngOnInit(): void {
  
}
login(){
  alert("user logined")
}

unamechange(event:any){
  console.log(event.target.value);
  
}





}
