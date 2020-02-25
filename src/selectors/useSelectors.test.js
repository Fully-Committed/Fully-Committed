import { toGetLoading, toGetUserSession } from './useSelectors';

describe('selectors', () => {
  it('can return correct loading info from state', () => {
    const state = {
      loadingReducer: {
        loading: false
      }
    };

    expect(toGetLoading(state)).toEqual(false);
  });

  it('cant return the correct user info from state', () => {
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
    expect(toGetUserSession(state)).toEqual('preview group name');
  });


});
