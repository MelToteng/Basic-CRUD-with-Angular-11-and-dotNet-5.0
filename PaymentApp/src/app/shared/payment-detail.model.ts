export class PaymentDetail {
    paymentDetailId: number;
    cardOwnerName: string;
    cardNumber: string;
    expirationDate: string;
    securityCode: string;

    constructor() {
        paymentDetailId: 0;
        cardOwnerName: "";
        cardNumber: '';
        expirationDate: "";
        securityCode: "";
    }
}
