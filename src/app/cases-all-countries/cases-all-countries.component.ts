import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector: 'app-cases-all-countries',
  templateUrl: './cases-all-countries.component.html',
  styleUrls: ['./cases-all-countries.component.css']
})
export class CasesAllCountriesComponent implements OnInit {
  constructor(private rs :RestService ){
  }

  allData = {
    columns: [],
    users: []
  }


  ngOnInit(): void{

    this.rs.getAllCountriesData().subscribe
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
