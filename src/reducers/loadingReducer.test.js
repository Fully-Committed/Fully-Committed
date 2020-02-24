import { LOADING_ON, LOADING_OFF } from '../actions/loadingActions';
import { loadingReducer } from './loadingReducer';

describe('loading reducer', () => {
  it('handles turning loading on', () => {
    const action = {
      type: LOADING_ON
    };
    const initialState = { loading: false };

    const newState = loadingReducer(initialState, action);
    expect(newState).toEqual({ loading: true });
  });

  it('handles turning loading off', () => {
    const action = {
      type: LOADING_OFF
    };
    const initialState = { loading: true };

    const newState = loadingReducer(initialState, action);
    expect(newState).toEqual({ loading: false });
  });

  it('can handle an action it does not recognize', () => {
    const action = {
      type: 'POOP'
    };

    const newState = loadingReducer(undefined, action);
    expect(newState).toEqual({ loading: false });
  });



});
