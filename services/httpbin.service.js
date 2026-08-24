import http from 'k6/http';

const BASE_URL = __ENV.BASE_URL || 'https://httpbin.org';

export function getAnything(params = {}) {
    return http.get(
        `${BASE_URL}/anything`,
        {
            tags: {
                api: 'httpbin',
                endpoint: '/anything',
                method: 'GET',
            },
            ...params,
        }
    );
}

export function getRequest(params = {}) {
    return http.get(
        `${BASE_URL}/get`,
        {
            tags: {
                api: 'httpbin',
                endpoint: '/get',
                method: 'GET',
            },
            ...params,
        }
    );
}