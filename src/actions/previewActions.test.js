import { SET_PREVIEW_GROUP_NAME, ADD_DEV, REMOVE_DEV, setPreviewGroupName, addDev, removeDev } from './previewActions';

describe('preview actions tests', () => {
  it('creates an action to set group name in preview', () => {
    const action = setPreviewGroupName({ previewName: 'preview name' }); 

    expect(action).toEqual({
      type: SET_PREVIEW_GROUP_NAME, 
      payload: {
        previewName: 'preview name'
      }
    });
  });

  it('creates an action to add a dev to list in preview', () => {
    const action = addDev({ previewDev: { devName: 'dev name', devGitHubHandle: '@handle' } }); 

    expect(action).toEqual({
      type: ADD_DEV,
      payload: {
        previewDev: {
          devName: 'dev name', 
          devGitHubHandle: '@handle'
        }
      }
    });
  });

  it('creates an action to remove a dev to list in preview', () => {
    const action = removeDev({ previewDev: { devName: 'dev name', devGitHubHandle: '@handle' } }); 

    expect(action).toEqual({
      type: REMOVE_DEV,
      payload: {
        previewDev: {
          devName: 'dev name', 
          devGitHubHandle: '@handle'
        }
      }
    });
  });

});

