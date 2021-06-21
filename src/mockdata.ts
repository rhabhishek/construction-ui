import {ConstructionType, PartType, partTypeEnum} from "./types";

export const partA: PartType =
    {
        _id: '1abc',
        name: 'Part A',
        type: partTypeEnum.A
    };

export const partB: PartType =
    {
        _id: '2pqr',
        name: 'Part B',
        type: partTypeEnum.B
    };

export const partC: PartType =
    {
        _id: '3xyz',
        name: 'Part C',
        type: partTypeEnum.C
    };

export const mockConstructions: ConstructionType[] = [
    {
        _id: '123',
        name: 'Construction 1',
        parts: [partA, partB, partC, partA, partB, partC],
    },
    {
        _id: '456',
        name: 'Construction 2',
        parts: [partA, partB, partC],
    },
    {
        _id: '789',
        name: 'Construction 2',
        parts: [],
    }
];

export const mockPartsList: PartType[] = [
    partA, partB, partC
]