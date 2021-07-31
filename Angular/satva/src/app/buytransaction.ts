import { Onlinepayment } from "./onlinepayment";
import { Transaction } from "./transaction";

export class Buytransaction extends Transaction {
	private consumerId: number = 0;
	public get consumerid(): number {
		return this.consumerId;
	}
	public set consumerid(value: number) {
		this.consumerId = value;
	}
    private onlinePayment: Onlinepayment = new Onlinepayment();
	public get onlinepayment(): Onlinepayment {
		return this.onlinePayment;
	}
	public set onlinepayment(value: Onlinepayment) {
		this.onlinePayment = value;
	}

	
}
