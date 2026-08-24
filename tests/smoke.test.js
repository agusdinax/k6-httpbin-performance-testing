import http from 'k6/http';
import { check } from 'k6';

const BASE_URL = __ENV.BASE_URL || 'https://httpbin.org';

export const options = {
    vus: 2,
    duration: '30s',

    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(95)<1000'],
        checks: ['rate>0.95'],
    },
};

export default function () {

    const response = http.get(`${BASE_URL}/get`);

    check(response, {
        'status is 200': (r) => r.status === 200,
        'response body exists': (r) => r.body.length > 0,
    });
}