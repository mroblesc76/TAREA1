import { Component, OnInit } from '@angular/core';
import { CiclesService } from 'src/app/services/cicles.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-cicles',
  templateUrl: './cicles.component.html',
  styleUrls: ['./cicles.component.css']
})
export class CiclesComponent implements OnInit {

  constructor(private ciclesServices:CiclesService, private logger:LoggerService ) { }

  ngOnInit(): void {
  }

  getAllCicle(){
    try {
      console.log(this.ciclesServices.getAllCicle());
      this.logger.log("probando el paso por el logger.");
    } catch (error) {
      this.logger.error(error);
    }



  }


}
