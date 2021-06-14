export class Paper {
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get quality(): string {
        return this._quality;
    }
    public set quality(value: string) {
        this._quality = value;
    }
    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }
    constructor(private _type: string,private _quality: string,private _quantity: number){}
}
