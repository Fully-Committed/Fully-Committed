import { SET_PREVIEW_GROUP_NAME, ADD_DEV, REMOVE_DEV, setPreviewGroupName } from './previewActions';

describe('preview actions tests', () => {
  it('creates an action to set group name in preview', () => {
    const action = setPreviewGroupName(); 

    expect(action).toEqual({
      type: SET_PREVIEW_GROUP_NAME
    });
  });




});

