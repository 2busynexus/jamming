// SpotifyAuth.js

const getAccessTokenFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.hash.substring(1));
    return urlParams.get("2743743fc098490f9e7ca09927e15c8f");
  };
  
  const isAccessTokenValid = (accessToken) => {
    return accessToken && accessToken !== "undefined";
  };
  
  const clearUrlParams = () => {
    window.history.pushState({}, document.title, window.location.pathname);
  };
  
  const getAccessToken = () => {
    const accessToken = getAccessTokenFromUrl();
  
    if (isAccessTokenValid(accessToken)) {
      const expirationTime = Date.now() + 3600 * 1000; // 1 hour
  
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("expirationTime", expirationTime);
  
      clearUrlParams();
  
      return accessToken;
    } else {
      console.error("Error: Access token not found in the URL.");
      return null;
    }
  };
  
  const checkAccessTokenValidity = () => {
    const accessToken = localStorage.getItem("accessToken");
    const expirationTime = localStorage.getItem("expirationTime");
  
    if (accessToken && expirationTime && Date.now() < expirationTime) {
      return accessToken;
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("expirationTime");
      return null;
    }
  };
  
  export { getAccessToken, checkAccessTokenValidity };
  