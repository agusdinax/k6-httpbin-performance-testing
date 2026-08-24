export const defaultThresholds = {
    http_req_failed: ['rate<0.01'],
    http_req_duration: [
        'p(95)<1000',
        'p(99)<1500',
    ],
    checks: [
        'rate>0.95',
    ],
};