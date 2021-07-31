export class Login {
    private custId: number = 0;
    public get custid(): number {
        return this.custId;
    }
    public set custid(value: number) {
        this.custId = value;
    }
 private password: string = '';
    public get passWord(): string {
        return this.password;
    }
    public set passWord(value: string) {
        this.password = value;
    }

}
