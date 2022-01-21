import {BehaviorSubject} from 'rxjs';
import {HandleResponse} from '../helpers/';

const currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));

export const AuthenticationService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};

function login(credentials) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    };

    return fetch(`http://localhost:8080/users/authenticate`, requestOptions)
        .then(HandleResponse)
        .then(user => {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            currentUserSubject.next(user);
            return user;
        });
}

function logout() {
    sessionStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}