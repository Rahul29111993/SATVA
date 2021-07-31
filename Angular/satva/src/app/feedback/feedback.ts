export class Feedback {
    private custConsumerId: number = 0;
    public get custConsumerid(): number {
        return this.custConsumerId;
    }
    public set custConsumerid(value: number) {
        this.custConsumerId = value;
    }
	private rating: number = 0;
    public get rate(): number {
        return this.rating;
    }
    public set rate(value: number) {
        this.rating = value;
    }
	private suggestions: string = '';
    public get suggest(): string {
        return this.suggestions;
    }
    public set suggest(value: string) {
        this.suggestions = value;
    }
}
