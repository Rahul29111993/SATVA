import { Paper } from "./paper";

export class Transaction {
    
    private transactionId: number = 0;
    public get transactionid(): number {
        return this.transactionId;
    }
    public set transactionid(value: number) {
        this.transactionId = value;
    }
    private paperList: Paper[] = [];
    public get paperlist(): Paper[] {
        return this.paperList;
    }
    public set paperlist(value: Paper[]) {
        this.paperList = value;
    }
    private dateOfTransaction: Date|null = null;
    public get dateofTransaction(): Date|null {
        if(this.dateOfTransaction!=null)
        return this.dateOfTransaction;
        else
        return null
    }
    public set dateofTransaction(value: Date|null) {
        this.dateOfTransaction = value;
    }
   

}
