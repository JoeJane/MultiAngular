import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from "./header/header.component";
import {BasePageComponent} from "./base-page/base-page.component";

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [FooterComponent, HeaderComponent, BasePageComponent],
  exports: [FooterComponent, HeaderComponent, BasePageComponent]
})
export class PartialsModule{}
