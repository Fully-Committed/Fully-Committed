//selectors for loadingReducer
export const toGetLoading = state => state.loadingReducer.loading;

//selectors for authReducer
export const toGetUserSession = state => state.authReducer.user;

export const toGetUserError = state => state.authReducer.authError;


//selectors for previewGroupReducer
export const toGetPreviewGroupName = state => state.previewGroupReducer.previewName;

export const toGetPreviewGroupDescription = state => state.previewGroupReducer.previewDescription;

export const toGetPreviewDevs = state => state.previewGroupReducer.previewDevs;

export const toGetSuggestedDevs = state => {
  const suggestedDevs = state.previewGroupReducer.suggestedDevs;
  const previewDevs = toGetPreviewDevs(state).map(dev => dev._id);

  return suggestedDevs.filter(dev => !previewDevs.includes(dev._id));
};

//selectors for groupsReducer
export const toGetGroupArray = state => state.groupsReducer.groups;

export const toGetGroupError = state => state.groupsReducer.groupError;

//selectors for currentGroupReducer
export const toGetCurrentGroup = state => state.currentGroupReducer.currentGroup;


//selectors for previewGroupAdminsReducer
export const toGetPreviewUsers = state => state.previewGroupAdminsReducer.previewUsers;

export const toGetSuggestedAdmins = state => state.previewGroupAdminsReducer.suggestedAdmins;
