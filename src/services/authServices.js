import { request } from './request';

export const getSignupUser = user => (
  request('/api/v1/auth/signup', 'POST', { ...user, role: 'Admin' })
);

export const getLoginUser = user => request('/api/v1/auth/login', 'POST', user);

export const getVerifyUser = () => request('/api/v1/auth/verify', 'GET');


