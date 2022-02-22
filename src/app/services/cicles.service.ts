import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CiclesService {

  constructor() { }

  private ciclesItems:any[]=[
    {
      name:"Chicago 292 SE2",
      description: "Chicago 292 SE2",
      price : "$100.000"
      },
      {
      name:"Lycan 27 Prime",
      description: "Lycan 27 Prime",
      price : "$200.000"
      },
      {
      name:"Macina Prowler Se3 CL",
      description: "Macina Prowler Se3 CL",
      price : "$300.000"
      },
      {
      name:"Myrron Ace Se1 Xt",
      description: "Myrron Ace Se1 Xt",
      price : "$400.000"
      },
      {
      name:"Prowler Sonic 12",
      description: "Prowler Sonic 12",
      price : "$500.000"
        }
    ]

    getAllCicle(){
      return this.ciclesItems;
    }

}
