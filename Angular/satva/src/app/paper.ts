export class Paper {
    public get paperQuantity(): number {
        return this.quantity;
    }
    public set paperQuantity(value: number) {
        this.quantity = value;
    }
    public get paperQuality(): string {
        return this.quality;
    }
    public set paperQuality(value: string) {
        this.quality = value;
    }
    public get paperType(): string {
        return this.type;
    }
    public set paperType(value: string) {
        this.type = value;
    }
    constructor(private type: string,private quality: string,public quantity: number){}
}
