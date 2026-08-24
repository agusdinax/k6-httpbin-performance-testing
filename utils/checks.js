import { check } from 'k6';

export function validateSuccessfulResponse(response) {

    return check(response, {

        'status is 200': (r) =>
            r.status === 200,

        'response body exists': (r) =>
            r.body !== null &&
            r.body !== undefined &&
            r.body.length > 0,

        'response time < 1s': (r) =>
            r.timings.duration < 1000,
    });
}