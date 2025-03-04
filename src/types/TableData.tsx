
export type TableData = {
    headers:Array<string>;
    rows:Array<object>
}

export interface TableState {
    id:string;
    name:string;
    data:TableData;
    dateCreated: Date;
}