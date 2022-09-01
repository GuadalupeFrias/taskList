import { DatePipe } from "@angular/common";
import { Data } from "@angular/router";

export interface Task{
    id?: number;
    text:string;
    day: string;
    reminder:boolean;
}