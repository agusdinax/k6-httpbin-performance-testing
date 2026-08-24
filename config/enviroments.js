export const environments = {
    dev: {
        baseUrl: 'https://httpbin.org',
    },
    staging: {
        baseUrl: 'https://httpbin.org',
    },
};

export function getEnvironment() {
    const environment = __ENV.ENV || 'dev';
    return environments[environment];
}