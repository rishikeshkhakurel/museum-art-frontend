const httpConfig = {
    BASE_URL:
      document?.domain === 'localhost'
        ? 'http://127.0.0.1:4000/api'
        : window.origin.concat(''),
  };
  
  export default httpConfig;
  