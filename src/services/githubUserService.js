export const isHandleOnGitHub = handle => {
  return fetch(`https://api.github.com/users/${handle}`)
    .then(res => res.json())
    .then(user => {
      if(!user.login) return false;
      return true;
    });
};
