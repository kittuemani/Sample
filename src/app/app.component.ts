import { Component } from '@angular/core';
import { MovieComponent} from './movie/index';
import { DirectoryComponent} from './directory/index';
import {CardComponent} from './card/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works ooops';
    name = 'Vijaya Krishna Emani';
    isDarkTheme = false;
}
