export interface Experience {
    id: number;
    designation: string;
    type: string;
    startDate: Date;
    endDate: Date;
    /**
     * TODO: change type to candidate
     */
    candidates: any[];
}