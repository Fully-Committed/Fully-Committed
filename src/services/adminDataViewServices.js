export const getGroups = (adminId) => {
  return fetch(`http://localhost:7891/api/v1/group/groups-by-admin/${adminId}`);
  // return Promise.resolve([
  //   {
  //     _id: 'poop',
  //     groupName: 'fall 2019 cohort', 
  //     groupDescription: 'best cohort ever, spot loves them',
  //     adminIds: [1],
  //     devsInGroup: [{
  //       devName: 'Jbj',
  //       devGitHubHandle: 'jodinkansagor'
  //     }, {
  //       devName: 'Joel',
  //       devGitHubHandle: 'joelpdurham' 
  //     }]
  //   }
  // ]);
};
