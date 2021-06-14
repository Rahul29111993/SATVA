import { Address } from "./address";

export class Customer {    
    private firstName: string = "";
    public get firstname(): string {
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
    private _address: Address = new Address();
    public get address(): Address {
        return this._address;
    }
    public set address(value: Address) {
        this._address = value;
    }
    
    
   
}
