import { Component, OnInit } from '@angular/core';
import {  } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  controlform = new FormGroup({
    first: new FormControl('first name'),
    last: new FormControl('last name')
  });

}