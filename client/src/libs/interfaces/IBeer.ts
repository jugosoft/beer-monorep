import { Guid } from "guid-typescript";

export interface IBeerSteps {
    id: Guid;
    order: number;
    name: string;
    details: string;
    comment: string;
    image: string;
}

export interface IBeer {
    id?: Guid;
    author: Guid;
    image?: string,
    title: string;
    authorsNote?: string;
    colour: string;
    type: string;
    alcohol: number;
    bitterness?: number;
    originalGravity?: number;
    finalGravity?: number;
    colourSRM?: number;
    colourEBC?: number;
    barrelAged?: number;
    steps?: IBeerSteps[];
    createdAt: Date;
    updatedAt: Date;
}
