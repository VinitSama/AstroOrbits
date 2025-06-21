export interface IPanchangTable {
    title: string;
    isOptions: boolean;
    options?: Array<"location" | "date">;
    details: IPanchangDetails[];
}

interface IPanchangDetails {
    name: string;
    value: string;
}