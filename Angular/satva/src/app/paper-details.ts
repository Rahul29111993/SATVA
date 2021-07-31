import { Paper } from "./paper";

export class PaperDetails {
    private paperListObj: Paper[] = [];
    public get paperDetails(): Paper[] {
        return this.paperListObj;
    }
    public set paperDetails(value: Paper[]) {
        this.paperListObj= value;
    }

}
