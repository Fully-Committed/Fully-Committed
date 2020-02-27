import { request } from './request';

export const getSignupUser = user => (
  request('/api/v1/auth/signup', 'POST', { ...user, role: 'Admin' })
);

export const getLoginUser = user => request('/api/v1/auth/login', 'POST', user);

export const getVerifyUser = () => request('/api/v1/auth/verify', 'GET');

export const logoutUser = () => request('/api/v1/auth/logout', 'POST');

export const changeRole = (userId, role) => request(`/api/v1/change-role/${userId}`, 'PATCH', role);

export const associateAdminWithGroup = (adminId, groupId) => request(`/api/v1/add-admin/:${groupId}`, 'PATCH', adminId);
