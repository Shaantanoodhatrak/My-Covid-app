import { Component, OnInit } from "@angular/core";
import { RestService } from "../rest.service";

@Component({
  selector:'app-default',
  templateUrl:'./default.component.html',
  styleUrls: ['./deafult.component.css']
})
export class DefaultComponent implements OnInit{

  constructor(private rs :RestService ){
  }

  ngOnInit(): void{

    this.rs.getDefault().subscribe
      (
        (response)=>
        {},
        (error)=>
        {
          console.log("Error Occured : "+error);
        }
      )
  }

}
