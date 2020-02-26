<<<<<<< HEAD
const request = (path, method, body) => {
  return fetch(`http://localhost:7891${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};
=======
import { request } from './request';
>>>>>>> 61397648ef89de7f25f4eb487e0a5adfd0d15ceb

export const getSignupUser = user => (
  request('/api/v1/auth/signup', 'POST', { ...user, role: 'Admin' })
);

export const getLoginUser = user => request('/api/v1/auth/login', 'POST', user);

export const getVerifyUser = () => request('/api/v1/auth/verify', 'GET');
