export class Papermaster {
    private type: string = '';
    public get Type(): string {
        return this.type;
    }
    public set Type(value: string) {
        this.type = value;
    }
	private quality: string = '';
    public get qual(): string {
        return this.quality;
    }
    public set qual(value: string) {
        this.quality = value;
    }
	private qoh: number = 0;
    public get qOH(): number {
        return this.qoh;
    }
    public set qOH(value: number) {
        this.qoh = value;
    }
	private pricePerUnit: number = 0;
    public get priceperUnit(): number {
        return this.pricePerUnit;
    }
    public set priceperUnit(value: number) {
        this.pricePerUnit = value;
    }
}
