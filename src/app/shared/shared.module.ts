import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatIconModule,
    FilterPipe
  ],
  declarations: [
    FilterPipe
  ]
})
export class SharedModule {}
