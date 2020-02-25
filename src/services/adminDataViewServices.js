export const getGroups = (adminId) => {
  return fetch(`http://localhost:7891/api/v1/group/groups-by-admin/${adminId}`, {
    credentials: 'include'
  })
    .then(res => res.json());

};

export const getDevCommits = (dev) => {
  // return Promise.all(arrayOfDevs.map(dev => {
  return fetch(`https://api.github.com/users/${dev}/repos?sort=pushed`)
    .then(res => res.json())
    .then(repos => repos[0])
    .then(repo => fetch(`https://api.github.com/repos/${dev}/${repo.name}/commits?sha=dev`))
    .then(commits => commits.json())
    .then(coms => { 
      return {
        date: coms[0].commit.author.date,
        message: coms[0].commit.message
      };
    });
};

