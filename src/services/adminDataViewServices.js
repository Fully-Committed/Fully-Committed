export const getGroups = (adminId) => {
  return fetch(`http://localhost:7891/api/v1/group/groups-by-admin/${adminId}`, {
    credentials: 'include'
  })
    .then(res => res.json());
};

const access_token = document.cookie.split[1];

export const getDevCommits = (arrayOfDevs) => {
  return Promise.all(arrayOfDevs.map(dev => {
    return fetch(`https://api.github.com/users/${dev}/repos?sort=pushed`, {
      access_token
    })
      .then(res => res.json())
      .then(repos => repos[0])
      .then(repo => fetch(`https://api.github.com/repos/${dev}/${repo.name}/commits?sha=dev`, {
        access_token
      }))
      .then(commits => commits.json())
      .then(coms => { 
        return {
          date: coms[0].commit.author.date,
          message: coms[0].commit.message
        };
      });
  }));
};

