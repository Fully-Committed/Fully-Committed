export const SET_CURRENT_GROUP = 'SET_CURRENT_GROUP';
export const CLEAR_CURRENT_GROUP = 'CLEAR_CURRENT_GROUP';

export const setCurrentGroup = (group) => ({
  type: SET_CURRENT_GROUP,
  payload: group
});

export const clearCurrentGroup = () => ({
  type: CLEAR_CURRENT_GROUP
});
