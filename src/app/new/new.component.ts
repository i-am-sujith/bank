import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  uname:any
  psw:any

constructor(private ds: DataService ){}
ngOnInit(): void {
  
}


login(){

console.log(this.uname);
alert(this.ds.checkData())

}

}
