import { basicAuth } from '../services/auth.service.js';
import { validateSuccessfulAuth, validateFailedAuth,} from '../utils/authChecks.js';
import { authTestData } from '../data/testData.js';

export const options = {
    vus: 1,
    duration: '10s',
    thresholds: {
        http_req_failed: [
            'rate<0.50',
        ],
        http_req_duration: [
            'p(95)<1000',
        ],
        checks: [
            'rate>0.95',
        ],
    },
};

export default function () {

    // ============================
    // VALID CREDENTIALS
    // ============================

    const validResponse = basicAuth(
        authTestData.validUser.username,
        authTestData.validUser.password
    );

    validateSuccessfulAuth(validResponse);


    // ============================
    // INVALID CREDENTIALS
    // ============================

    const invalidResponse = basicAuth(
        authTestData.invalidUser.username,
        authTestData.invalidUser.password
    );

    validateFailedAuth(invalidResponse);
}