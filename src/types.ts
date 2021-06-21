export type ConstructionType = {
    name: string,
    _id: string,
    parts: PartType[]
}

export type PartType = {
    name: string,
    _id: string,
    type: partTypeEnum
}

export enum partTypeEnum {
    A,
    B,
    C
}