const request = (path, method, body) => {
  return fetch(`http://localhost:7890${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: body && JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if (!ok) throw json;

      return json;
    });
};


export const getSignupUser = user => request('/api/v1/auth/signup', 'POST', user);

export const getLoginUser = user => request('/api/v1/auth/login', 'POST', user);
