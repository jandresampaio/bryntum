import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component'; 
import { GanttComponent } from './gantt.component'; 

@NgModule({ 
  imports: [BrowserModule], 
  declarations: [AppComponent,GanttComponent ], 
  bootstrap: [AppComponent] 
}) 

export class AppModule{}; 