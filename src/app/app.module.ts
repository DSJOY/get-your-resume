import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DatePipe } from "@angular/common";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
