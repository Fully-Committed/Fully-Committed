export const isHandleOnGitHub = handle => {
  return fetch(`https://api.github.com/users/${handle}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) {
        console.log(json);
        throw json; 
      }
      else {
        return json;
      }
    });
};
