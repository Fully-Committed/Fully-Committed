import { toGetLoading, toGetUserSession, toGetPreviewGroupName, toGetPreviewDevs, toGetGroupArray, toGetCurrentGroup } from './useSelectors';

describe('selectors', () => {
  it('can return correct loading info from state', () => {
    const state = {
      loadingReducer: {
        loading: false
      }
    };

    expect(toGetLoading(state)).toEqual(false);
  });

  it('can return the correct user info from state', () => {
    const state = {
      authReducer: {
        user: null
      }
    };
    expect(toGetUserSession(state)).toEqual(null);
  });

  it('cant return the correct preview name from state for preview reducer', () => {
    const state = {
      previewReducer: {
        previewName: 'preview group name'
      }
    };
    expect(toGetPreviewGroupName(state)).toEqual('preview group name');
  });

  it('cant return the correct preview dev from state for preview reducer', () => {
    const state = {
      previewReducer: {
        previewDevs: {
          _id: '1234',
          devName: 'tess',
          devGitHubHandle: '@tess-jl'
        }
      }
    };
    expect(toGetPreviewDevs(state)).toEqual({
      _id: '1234',
      devName: 'tess',
      devGitHubHandle: '@tess-jl'
    });
  });


  it('can return the correct groups array from state', () => {
    const state = {
      groupsReducer: {
        groups: null
      }
    };
    expect(toGetGroupArray(state)).toEqual(null);
  });

  it('can return the current group from state', () => {
    const state = {
      currentGroupReducer: {
        currentGroup: null
      }
    };
    expect(toGetCurrentGroup(state)).toEqual(null);
  });
});
