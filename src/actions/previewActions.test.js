import { SET_PREVIEW_GROUP_NAME, ADD_DEV, REMOVE_DEV, setPreviewGroupName } from './previewActions';

describe('preview actions tests', () => {
  it('creates an action to set group name in preview', () => {
    const action = setPreviewGroupName(); 

    expect(action).toEqual({
      type: SET_PREVIEW_GROUP_NAME
    });
  });

  it('creates an action to add a dev to list in preview', () => {
    const action = ADD_DEV(); 

    expect(action).toEqual({
      type: ADD_DEV
    });
  });


});

