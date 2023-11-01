export interface User{
    id?:number,
    profile_picture?:string,
    username:string,
    first_name?:string,
    last_name?:string,
    email:string,
    date_joined?:Date
}


export interface Plans{
    id?:number,
    user?:User | number,
    place:string,
    country:string,
    picture?:string,
    travel_date:string,
    days:number,
    completed:boolean
}

export interface ToDo{
    id?:number,
    plan?:Plans,
    task:string,
    description:string,
    due_date:Date,
    completed:boolean
}