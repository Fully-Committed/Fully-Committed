import { turnLoadingOn, turnLoadingOff } from './loadingActions';


describe('Loading Actions', () => {
  it('call loading on', () => {
    const action = turnLoadingOn();
    expect(action.type).toEqual('LOADING_ON');
  });

  it('can call loading off', () => {
    const action = turnLoadingOff();
    expect(action.type).toEqual('LOADING_OFF');
  });
});
