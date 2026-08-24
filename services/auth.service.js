import http from 'k6/http';

const BASE_URL = __ENV.BASE_URL || 'https://httpbin.org';

export function basicAuth(username, password, params = {}) {
    return http.get(
        `${BASE_URL}/basic-auth/${username}/${password}`,
        {
            tags: {
                api: 'httpbin',
                endpoint: '/basic-auth',
                method: 'GET',
                feature: 'authentication',
                auth_type: 'basic',
            },
            ...params,
        }
    );
}