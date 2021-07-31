import { Transaction } from "./transaction";

export class Selltransaction extends Transaction{
    private custId: number = 0;
    public get customerid(): number {
        return this.custId;
    }
    public set customerid(value: number) {
        this.custId = value;
    }
    private rewardPoints: number = 0;
    public get rewardpoints(): number {
        return this.rewardPoints;
    }
    public set rewardpoints(value: number) {
        this.rewardPoints = value;
    }
}
