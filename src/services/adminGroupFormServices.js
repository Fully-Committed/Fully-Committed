import { request } from './request';

export const fetchDevsByName = devName => request(`/api/v1/dev/dev-name/:${devName}`, 'GET');


