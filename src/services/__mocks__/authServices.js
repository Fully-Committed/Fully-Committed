export const getSignupUser = (user) => {
  return Promise.resolve({
    email: user.email,
    userName: user.userName
  });
};

export const getLoginUser = (user) => {
  return Promise.resolve({
    email: user.email
  });
};
