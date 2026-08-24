import { check } from 'k6';

export function validateSuccessfulAuth(response) {
    return check(response, {
        'auth status is 200':
            (r) => r.status === 200,
        'auth response contains authenticated':
            (r) => r.body.includes('"authenticated": true'),
        'auth response contains username':
            (r) => r.body.includes('"user"'),
    });
}


export function validateFailedAuth(response) {
    return check(response, {
        'invalid auth returns 401':
            (r) => r.status === 401,
    });
}