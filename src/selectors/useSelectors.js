//selectors for authReducer
export const toGetLoading = state => state.loadingReducer.loading;

export const toGetUserSession = state => state.authReducer.user;

//selectors for previewReducer
export const toGetPreviewGroupName = state => state.previewReducer.previewName;

export const toGetPreviewGroupDescription = state => state.previewReducer.previewDescription;

export const toGetPreviewDevs = state => state.previewReducer.previewDevs;

export const toGetSuggestedDevs = state => {
  const suggestedDevs = state.previewReducer.suggestedDevs;
  const previewDevs = toGetPreviewDevs(state).map(dev => dev._id);

  return suggestedDevs.filter(dev => !previewDevs.includes(dev._id));
};
