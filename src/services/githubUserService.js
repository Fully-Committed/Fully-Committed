export const isHandleOnGitHub = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(user => {
      if(!user) return false;
      return true;
    });
};
