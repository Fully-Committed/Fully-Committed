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

export const getSignupUser = user => (
  request('/api/v1/auth/signup', 'POST', { ...user, role: 'Admin' })
);

export const getLoginUser = user => request('/api/v1/auth/login', 'POST', user);

export const getVerifyUser = () => request('/api/v1/auth/verify', 'GET');

//in the input for below user=a user ID, role is either 'Admin' or 'Dev' and group is a group id
export const changeRole = (userId, role) => request(`/api/v1/change-role/${userId}`, 'PATCH', role);

export const associateAdminWithGroup = (adminId, groupId) => request(`/api/v1/add-admin/:${groupId}`, 'PATCH', adminId);
