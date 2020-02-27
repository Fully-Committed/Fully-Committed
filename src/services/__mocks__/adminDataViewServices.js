export const getGroups = adminId => {
  return Promise.resolve([{
    admindIds: ['12', '34', adminId],
    devsInGroups: [{
      devName: 'dev1',
      devGitHubHandle: 'gitbud'
    }, {
      devName: 'dev2',
      devGitHubHandle: 'gitfriend'
    }],
    groupName: 'My group'
  }]);
};

