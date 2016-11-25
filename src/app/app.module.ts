import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { DirectoryComponent } from './directory/directory.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    DirectoryComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
