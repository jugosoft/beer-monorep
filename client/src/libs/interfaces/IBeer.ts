import { Guid } from "guid-typescript";

export interface IBeerSteps {
    id: Guid;
    order: number;
    name: string;
    details: string;
    comment: string;
    imageUrl: string;
}

export interface IBeer {
    id: Guid;
    author: Guid;
    title: string;
    authorsNote: string;
    alcohol: number;
    bitterness: number;
    originalGravity: number;
    finalGravity: number;
    colourSRM: number;
    colourEBC: number;
    barrelAged: number;
    steps: IBeerSteps[];
    createdAt: Date;
    updatedAt: Date;
}
