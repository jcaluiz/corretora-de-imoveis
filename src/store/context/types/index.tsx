export type StateType = {
    name: string;
    cities: any[];
};

export type ActionType = {
    type: "NAME", payload: string,
} | {
    type: "CITIES", payload: any[],
};
