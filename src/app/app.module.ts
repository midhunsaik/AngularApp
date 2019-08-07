import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { AgepipePipe } from './pipes/agepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    AgepipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
