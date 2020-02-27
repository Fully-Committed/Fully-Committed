export const toGetLoading = state => state.loadingReducer.loading;
export const toGetUserSession = state => state.authReducer.user;
export const toGetGroupArray = state => state.groupReducer.groups;
export const toGetCurrentGroup = state => state.currentGroupReducer.currentGroup;
export const toGetUserError = state => state.authReducer.error;


