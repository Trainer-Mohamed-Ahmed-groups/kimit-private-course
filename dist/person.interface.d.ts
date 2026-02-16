export interface Person {
    name: string;
    age: number;
    major?: string;
}
export interface Employee extends Person {
    employeeId: number;
}
export type PersonType = "pending" | "active" | "inactive";
export type Add = (a: number, b: number) => number;
export interface Doctor {
    name: string;
    age: number;
    specialization: string;
}
export interface Engineer {
    name: string;
    weight: number;
    category: string;
}
export declare enum Status {
    Pending = "PENDING",
    Active = "ACTIVE",
    Inactive = "INACTIVE"
}
//# sourceMappingURL=person.interface.d.ts.map