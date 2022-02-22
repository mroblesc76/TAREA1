import { Component } from '@angular/core';
import { CiclesService } from 'src/app/services/cicles.service';
import { LoggerService } from 'src/app/services/logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarea1';

  constructor(private logger:LoggerService, private cicles:CiclesService){}

  getAllCicle(){
    try {
      console.log(this.cicles.getAllCicle());
    } catch (error) {
      this.logger.error(error);
    }

}}
