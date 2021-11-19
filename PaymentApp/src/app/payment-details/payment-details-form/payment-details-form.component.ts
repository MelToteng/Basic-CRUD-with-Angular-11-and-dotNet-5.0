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

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    if (this.service.formData.paymentDetailId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);

     
  }

  resetForm(form: NgForm) {
    form.form.reset();

    this.service.formData = new PaymentDetail();
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentDetails().subscribe(
      res => {

        this.toastr.success('Submitted Successfully', 'Payment Detail Register');

        console.log(JSON.stringify(res));

        this.service.refreshList();

        this.resetForm(form);
      },
      err => {

        this.toastr.error('Error Encountered.', 'Payment Detail Register');
        console.log(`Error ${JSON.stringify(err)}`);
      });
  }

  updateRecord(form: NgForm) {

    this.service.putPaymentDetails().subscribe(
      res => {

        this.toastr.info('Updated Successfully', 'Payment Detail Register');

        console.log(JSON.stringify(res));

        this.service.refreshList();

        this.resetForm(form);
      },
      err => {
        this.toastr.error('Error Encountered.', 'Payment Detail Register');
        console.log(`Error ${JSON.stringify(err)}`);
      });
  }

}
