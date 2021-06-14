export class Address {
    private phoneNumber: number = 0;
    public get phonenumber(): number {
        return this.phoneNumber;
    }
    public set phonenumber(value: number) {
        this.phoneNumber = value;
    }
    private line1: string = "";
    public get lineOne(): string {
        return this.line1;
    }
    public set lineOne(value: string) {
        this.line1 = value;
    }
	private line2: string = "";
    public get lineTwo(): string {
        return this.line2;
    }
    public set lineTwo(value: string) {
        this.line2 = value;
    }
	private landmark: string = "";
    public get landMark(): string {
        return this.landmark;
    }
    public set landMark(value: string) {
        this.landmark = value;
    }
	private city: string = "";
    public get cityName(): string {
        return this.city;
    }
    public set cityName(value: string) {
        this.city = value;
    }
	private state: string = "";
    public get stateName(): string {
        return this.state;
    }
    public set stateName(value: string) {
        this.state = value;
    }
	private pinCode: number = 0;
    public get pincode(): number {
        return this.pinCode;
    }
    public set pincode(value: number) {
        this.pinCode = value;
    }
	
}
