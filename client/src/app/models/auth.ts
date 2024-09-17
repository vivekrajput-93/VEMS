export interface User {
    id?: string;
    username: string;
    password: string;
    email: string;
    token? : string;
}


export interface Employee {
    id? : string
    firstName : string,
    lastName : string,
    email : string,
    position : string,
    status : string,
    phone : number,
    departmentId : string,
    hiredDate : number

}


export interface Department {
    deptName : string
}
