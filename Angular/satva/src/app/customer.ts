import { Address } from "./address";

export class Customer { 
    private rewardPoints:number=0;
    public get rewardpoints(): number {
        return this.rewardPoints;
    }
    public set rewardpoints(value: number) {
        this.rewardPoints = value;
    }
   public firstName: string = "";
    public  get firstname(): string {
        return this.firstName;
    }
    public set firstname(value: string) {
        this.firstName = value;
    }
	private lastName: string = "";
    public get lastname(): string {
        return this.lastName;
    }
    public set lastname(value: string) {
        this.lastName = value;
    }
	private emailId: string = "";
    public get emailid(): string {
        return this.emailId;
    }
    public set emailid(value: string) {
        this.emailId = value;
    }
	private passWord: string = "";   
    public get password(): string {
        return this.passWord;
    }
    public set password(value: string) {
        this.passWord = value;
    }
    private address: Address = new Address();
    public get add(): Address {
        return this.address;
    }
    public set add(value: Address) {
        this.address = value;
    }
    
    
}
