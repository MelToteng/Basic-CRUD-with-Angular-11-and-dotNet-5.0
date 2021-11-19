import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styles: [
  ]
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:PaymentDetail){

    this.service.formData=Object.assign({},selectedRecord);
  }

  onDelete(id:number){

    if(confirm("Are you sure you want to delete this record"))
    
    this.service.deletPaymentDetails(id)
    .subscribe(
      res=>{
        this.service.refreshList();
        this.toastr.error("Deleted Successfully", "Payment Details Register");
      },
      err=>{console.log(err);}
    );
  }
}
