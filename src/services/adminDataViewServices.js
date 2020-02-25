export const getGroups = (adminId) => {
  return fetch(`http://localhost:7891/api/v1/group/groups-by-admin/${adminId}`, {
    credentials: 'include'
  })
    .then(res => res.json());

};
