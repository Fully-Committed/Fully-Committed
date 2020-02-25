export const toGetLoading = state => state.loadingReducer.loading;
export const toGetUserSession = state => state.authReducer.user;

export const toGetPreviewGroupName = state => state.previewReducer.previewName;
export const toGetPreviewDev = state => state.previewReducer.previewDev;
