import { smokeScenario } from '../scenarios/smoke.scenario.js';
import { defaultThresholds } from '../config/thresholds.js';

export const options = {
    vus: 2,
    duration: '30s',
    thresholds: {
        ...defaultThresholds,
        api_response_time: [
            'p(95)<1000',
        ],
        api_success_rate: [
            'rate>0.95',
        ],
    },
};

export default function () {
    smokeScenario();
}