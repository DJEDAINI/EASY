module.exports = function(google, googleConfig ){

    var OAuth2Client = google.auth.OAuth2;
    var jwt = require('jsonwebtoken');
    var plus = google.plus('v1');
    var oauth2Client = new OAuth2Client(googleConfig.CLIENT_ID,
                                        googleConfig.CLIENT_SECRET,
                                        googleConfig.REDIRECT_URL);
    function getUrl(callback) {
      // generate consent page url
      var url = oauth2Client.generateAuthUrl({
        access_type: 'offline', // will return a refresh token
        scope: ['https://www.googleapis.com/auth/plus.me'  , 'profile', 'email'] // can be a space-delimited string or an array of scopes
      });
      callback(url)
  }

    function getAccessToken(code, callback){
        oauth2Client.getToken(code, function (err, tokens) {
          if (err) {
            return callback(err);
          }
          oauth2Client.setCredentials(tokens);
         console.log("token = "  + tokens.id_token);
          console.log("access_token = "  + tokens.access_token);
          oauth2Client.verifyIdToken(
          tokens.id_token,
          googleConfig.CLIENT_ID,
          function(e, login) {
            //var payload = login.getPayload();
            if(e) throw e ;
           console.log(login.getPayload());
           if (login.getPayload().hd != "esi.dz"){
             console.log("Not Allowed"); 
           }
          });

          callback(tokens);
        });
    }

    function verifyToken(token){
        oauth2Client.verifyIdToken(
          token,
          googleConfig.CLIENT_ID,
          // Or, if multiple clients access the backend:
          //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3],
          function(e, login) {
            //var payload = login.getPayload();
            //var userid = payload['sub'];
            return login.getPayload();
        //callback(e , login));
            // If request specified a G Suite domain:
            //var domain = payload['hd'];
          });
        
    }

    return{
      getUrl,
      getAccessToken ,
      verifyToken
    }
}
