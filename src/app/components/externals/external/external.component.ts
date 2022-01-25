import { Component, OnInit } from '@angular/core';
import { ExternalSerivice } from 'src/services/external.service';
import { Person } from 'src/app/models/person';

@Component({
  providers : [ExternalSerivice],
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css']
})
export class ExternalComponent implements OnInit {
  public personList : Array<Person>;

  constructor(public externalService : ExternalSerivice) {
    this.personList = [];
   }

  ngOnInit(): void {
    this.externalService.getUserList().subscribe(
      (res:any) => {        
        for (let i = 0; i < res.data.length; i++) {
          this.personList.push(new Person(res.data[i]['avatar'],res.data[i]['first_name'], res.data[i]['last_name'],res.data[i]['id'],res.data[i]['email']));
        }
        
      }, (err) => {
        console.log(err);
      }
    )
  }

}
