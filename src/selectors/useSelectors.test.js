import { toGetLoading, toGetUserSession, toGetGroupArray, toGetCurrentGroup } from './useSelectors';

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

  it('can return the correct groups array from state', () => {
    const state = {
      groupReducer: {
        groups: null
      }
    };
    expect(toGetGroupArray(state)).toEqual(null);
  });

  it('can return the current group from state', () => {
    const state = {
      groupReducer: {
        currentGroup: null
      }
    };
    expect(toGetCurrentGroup(state)).toEqual(null);
  });
});
