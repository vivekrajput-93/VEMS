export interface User {
    id?: string;
    username: string;
    password: string;
    email: string;
    token? : string;
}


export interface Employee {
    firstName : string,
    lastName : string,
    email : string,
    position : string,
    status : string,
    phone : number,
    departmentId : number,
    hiredDate : number

}


export interface Department {
    deptName : string
}
