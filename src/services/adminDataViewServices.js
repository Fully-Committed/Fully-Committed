// let access_token = null;
// export const setAccesToken = token => access_token = token;

const access_token = localStorage.getItem('token');
console.log('token in services', access_token);

export const isHandleOnGitHub = handle => {
  return fetch(`https://api.github.com/users/${handle}`, {
    headers: {
      'Authorization': `token ${access_token}`
    }
  })
    .then(res => res.json());
};

export const getGroups = (adminId) => {
  return fetch(`${process.env.API_URL}/api/v1/group/groups-by-admin/${adminId}`, {
    credentials: 'include'
  })
    .then(res => res.json());
};

const handleMissingDevBranch = () => ([
  {
    commit: {
      author: {
        date: new Date('December 10, 1988').toString()
      },
      message: 'NO DEV BRANCH'
    }
  }
]);

const getAllCommitData = (commits) => ({
  total: commits.length,
  messages: commits.map(commitObj => commitObj.commit.message),
  dates: commits.map(commitObj => commitObj.commit.author.date)
});



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
        console.log('repo', repo);
        results.repoName = repo.name;
        results.image = repo.owner.avatar_url;
        return fetch(`https://api.github.com/repos/${dev.gitHubHandle}/${repo.name}/commits?sha=dev`, {
          headers: {
            'Authorization': `token ${access_token}`
          }
        });
      })
      .then(commits => commits.json())
      .then(commits => {
        if(commits.message === 'Not Found') commits = handleMissingDevBranch();
        else results.allCommits = getAllCommitData(commits);
        return commits;
      })
      .then(commits => commits[0])
      .then(commitObj => { 
        results.date = commitObj.commit.author.date;
        results.message = commitObj.commit.message;
        return results;
      });
  }));
};

