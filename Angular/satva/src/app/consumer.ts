import { Address } from "./address";

export class Consumer {
    private consumerId: number = 0;
    public get consumerid(): number {
        return this.consumerId;
    }
    public set consumerid(value: number) {
        this.consumerId = value;
    }
     firmName: string = "";
    public get firmname(): string {
        return this.firmName;
    }
    public set firmname(value: string) {
        this.firmName = value;
    }
	private gstin: string = "";
    public get GSTiN(): string {
        return this.gstin;
    }
    public set GSTiN(value: string) {
        this.gstin = value;
    }
	private emailId: string = "";
    public get emailid(): string {
        return this.emailId;
    }
    public set emailid(value: string) {
        this.emailId = value;
    }
	private password: string = "";   
    public get passWord(): string {
        return this.password;
    }
    public set passWord(value: string) {
        this.password = value;
    }
    private firmAddress:Address  = new Address();
    public get add(): Address {
        return this.firmAddress;
    }
    public set add(value: Address) {
        this.firmAddress = value;
    }
}

