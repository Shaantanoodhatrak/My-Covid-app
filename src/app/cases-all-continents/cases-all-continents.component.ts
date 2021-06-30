import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: 'app-cases-all-continents',
  templateUrl: './cases-all-continents.component.html',
  styleUrls: ['./cases-all-continents.component.css']
})
export class CasesAllContinentsComponent implements OnInit {
  constructor(private rs :RestService ){
  }

  allData = {
    columns: [],
    users: []
  }


  ngOnInit(): void{

    this.rs.getAllContinentsData().subscribe
      (
        (response)=>
        {
          this.allData.columns = Object.keys(response[0]);
          this.allData.users = response;
        },
        (error)=>
        {
          console.log("Error Occured : "+error);
        }
      )
  }

}
