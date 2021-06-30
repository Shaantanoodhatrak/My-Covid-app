import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";
import { Users } from "../Users";

@Component({
  selector:'app-cases-display',
  templateUrl:'./cases-display.component.html',
  styleUrls: ['./cases-display.component.css']
})
export class CasesDisplayComponent implements OnInit{

  constructor(private rs :RestService ){
  }

  allData = {
    columns: [],
    users: []
  }


  ngOnInit(): void{

    this.rs.getUsers().subscribe
      (
        (response)=>
        {
          this.allData.columns = Object.keys(response['Users'][0]);
          this.allData.users = response['Users'];
        },
        (error)=>
        {
          console.log("Error Occured : "+error);
        }
      )
  }

}
