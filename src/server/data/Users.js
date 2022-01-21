import {Role} from "../../objects";

exports.users = [
    { id: 1, username: 'Admin', password: '1', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { id: 2, username: 'User', password: '1', firstName: 'Normal', lastName: 'User', role: Role.User }
];