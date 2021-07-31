export class Onlinepayment {
    private paymentMode: string = '';
    public get paymentmode(): string {
        return this.paymentMode;
    }
    public set paymentmode(value: string) {
        this.paymentMode = value;
    }
	private cardType: string = '';
    public get cardtype(): string {
        return this.cardType;
    }
    public set cardtype(value: string) {
        this.cardType = value;
    }
	private paymentDate:Date|null = null;
    public get paymentdate(): Date|null {
        if(this.paymentDate!=null)
        return this.paymentDate;
        else
        return null
    }
    public set paymentdate(value: Date|null) {
        this.paymentDate = value;
    }
	private amount: number = 0;
    public get amountValue(): number {
        return this.amount;
    }
    public set amountValue(value: number) {
        this.amount = value;
    }
}
