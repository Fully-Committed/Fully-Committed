import { request } from './request';

export const fetchUsersByUserName = userName => request(`/api/v1/auth/user-name/${userName}`, 'GET');

//STILL NEED TO MAKE ROUTE ON BACKEND
export const fetchUsersByEmail = email => request(`/api/v1/auth/user-email/${email}`, 'GET');


//in the input for below user=a user ID, role is either 'Admin' or 'Dev' and group is a group id
export const changeRole = (userId, role) => request(`/api/v1/auth/change-role/${userId}`, 'PATCH', role);

export const associateAdminWithGroup = (adminId, groupId) => request(`/api/v1/auth/add-admin/:${groupId}`, 'PATCH', adminId);
