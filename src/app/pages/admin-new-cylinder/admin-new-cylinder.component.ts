import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CylinderDTO } from 'src/app/interfaces';
import { AlertService } from 'src/app/services/alert.service';
import { CylinderService } from 'src/app/services/cylinder.service';

@Component({
  selector: 'app-admin-new-cylinder',
  templateUrl: './admin-new-cylinder.component.html',
  styleUrls: ['./admin-new-cylinder.component.css']
})
export class AdminNewCylinderComponent {

  prices: number[] = [900, 1000, 1100, 1200, 1300, 1400, 1500, 1600];
  weights: number[] = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  types: string[] = ["Small", "Medium", "Large" , "HP" , "Indane" ,"Commercial"];
  colors: string[] = ["Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Black", "White", "Gray"];


  constructor(private cylinder: CylinderService, private alert: AlertService) { }

  onSubmit(ngForm: NgForm) {
    if (ngForm.form.invalid) {
      this.alert.error("Please fill required elements");
      return;
    }
    const credentials: CylinderDTO = { ...ngForm.form.value, cylinderId: 0 };
    this.cylinder.create(credentials);

  }
}
