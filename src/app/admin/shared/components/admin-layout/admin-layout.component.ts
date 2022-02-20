import { Component, OnInit } from '@angular/core';
import {faPaintBrush, IconDefinition} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {
  faBrush: IconDefinition   = faPaintBrush;


  constructor() { }

  ngOnInit(): void {

  }

}
