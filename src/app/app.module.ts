import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UserServices } from "./services/UserServices";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [UserServices],
  bootstrap: [AppComponent]
})
export class AppModule {}
