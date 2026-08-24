import { getRequest } from '../services/httpbin.service.js';
import { validateSuccessfulResponse } from '../utils/checks.js';
import { apiResponseTime, apiSuccessRate, apiErrors,} from '../utils/metrics.js';

export function smokeScenario() {

    const response = getRequest();
    validateSuccessfulResponse(response);
    apiResponseTime.add(
        response.timings.duration
    );
    const success =
        response.status >= 200 &&
        response.status < 300;
    apiSuccessRate.add(success);
    if (!success) {
        apiErrors.add(1);
    }
}