import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service'
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  providers:[LoggingService,DataService]
})
export class DirectoryComponent implements OnInit {
 movies =[];res =[];
  constructor(private logger: LoggingService, private dataService: DataService) { }

 @ViewChild('sidenav') sidenav : MdSidenav;

  logIt(){
    this.logger.log("i m here 2");
  }
  showInfo(movie){
//this.sidenav.open();
  }
  ngOnInit() {
     this.dataService.fetchMovies().subscribe(
    (data)=>this.res =data,
    error => alert(error),
    () => console.log("finished")
  );


  }

}
