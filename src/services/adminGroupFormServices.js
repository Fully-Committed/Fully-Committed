import { request } from './request';

export const fetchDevsByName = devName => request(`/api/v1/dev/dev-name/${devName}`, 'GET');

export const fetchDevsByGitHubHandle = devGitHubHandle => request(`/api/v1/dev/dev-handle/${devGitHubHandle}`, 'GET');

export const fetchPostNewDev = dev => request('/api/v1/dev', 'POST', { ...dev });

export const fetchPostNewGroup = group => request('/api/v1/group', 'POST', { ...group });
