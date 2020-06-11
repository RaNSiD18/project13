export interface MyWorker{
    name: string;
    surname: string;
    type: number;
    id?: number;
    phone: string;
}

export enum MyWorkerType{
    programmer,
    designer,
    copywriter,
    manager,
}

export let MyWorkersDatabase: MyWorker[] = [
    {id:1, name:'Ivan', surname:'Ivanov', type:0, phone: '+7(967)-111-11-11'},
    {id:2, name:'Petr', surname:'Petrov', type:1, phone: '+7(967)-111-11-11'},
    {id:3, name:'Sidor', surname:'Sidorov', type:2, phone: '+7(967)-111-11-11'},
    {id:4, name:'Vasiliy', surname:'Vasilyev', type:3, phone: '+7(967)-111-11-11'}
];