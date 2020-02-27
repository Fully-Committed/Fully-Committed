
export const getGroups = (adminId) => {
  return fetch(`http://localhost:7891/api/v1/group/groups-by-admin/${adminId}`, {
    credentials: 'include'
  })
    .then(res => res.json());
};

const access_token = document.cookie.split('=')[1];

export const getDevCommits = (arrayOfDevs) => {
  return Promise.all(arrayOfDevs.map(dev => {
    const results = { name: dev.name };
    return fetch(`https://api.github.com/users/${dev.gitHubHandle}/repos?sort=pushed`, {
      headers: {
        'Authorization': `token ${access_token}`
      }
    })
      .then(res => res.json())
      .then(repos => repos[0])
      .then(repo => {
        results.repoName = repo.name;
        results.image = repo.owner.avatar_url;
        return fetch(`https://api.github.com/repos/${dev.gitHubHandle}/${repo.name}/commits?sha=dev`, {
          headers: {
            'Authorization': `token ${access_token}`
          }
        });
      })
      .then(commits => commits.json())
      .then(commits => commits[0])
      .then(commit => { 
        results.date = commit.commit.author.date;
        results.message = commit.commit.message;
        return results;
      });
  }));
};

