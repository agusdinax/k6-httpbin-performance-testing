import {Trend, Rate, Counter,} from 'k6/metrics';

export const apiResponseTime =
    new Trend('api_response_time');

export const apiSuccessRate =
    new Rate('api_success_rate');

export const apiErrors =
    new Counter('api_errors');