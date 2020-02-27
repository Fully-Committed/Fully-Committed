//selectors for authReducer
export const toGetLoading = state => state.loadingReducer.loading;

export const toGetUserSession = state => state.authReducer.user;

//selectors for previewGroupReducer
export const toGetPreviewGroupName = state => state.previewGroupReducer.previewName;

export const toGetPreviewGroupDescription = state => state.previewGroupReducer.previewDescription;

export const toGetPreviewDevs = state => state.previewGroupReducer.previewDevs;

export const toGetSuggestedDevs = state => {
  const suggestedDevs = state.previewGroupReducer.suggestedDevs;
  const previewDevs = toGetPreviewDevs(state).map(dev => dev._id);

  return suggestedDevs.filter(dev => !previewDevs.includes(dev._id));
};


export const toGetGroupArray = state => state.groupsReducer.groups;

export const toGetGroupError = state => state.groupsReducer.groupError;


export const toGetCurrentGroup = state => state.currentGroupReducer.currentGroup;

export const toGetUserError = state => state.authReducer.authError;

