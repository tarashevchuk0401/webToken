import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'angular-iban';


@Component({
  selector: 'app-iban',
  templateUrl: './iban.component.html',
  styleUrls: ['./iban.component.scss']
})
export class IbanComponent {
   reactiveForm!: FormGroup;
   ibanReactive!: FormControl;
   testIban: string = 'CR23015108410026012345';

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.ibanReactive = new FormControl(
      null,
      [
        Validators.required,
        ValidatorService.validateIban
      ]
    );

    this.reactiveForm = this.fb.group({
      ibanReactive: this.ibanReactive,
    });
  }
}
