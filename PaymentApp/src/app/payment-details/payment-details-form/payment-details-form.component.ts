import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.service.postPaymentDetails().subscribe(
      res => {

        this.toastr.success('Submitted Successfully','Payment Detail Register');

        console.log(JSON.stringify(res));

        this.resetForm(form);
       },
      err => { 

        this.toastr.error('Error Encountered.','Payment Detail Register');
        console.log(`Error ${JSON.stringify(err)}`);}
    );

  }

  resetForm(form:NgForm){
    form.form.reset();

    this.service.formData=new PaymentDetail();
  }

}
