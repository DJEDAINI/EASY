
module.exports = function(express, userController) {
    const router = express.Router();
    router.get('/', function(req, res) {
      res.send('respond with a resource');
    });

    router.get('/oauth2-url', (req, res) => {
        //console.log(req);
        userController.getUrl((url) => {
            res.json({url: url});
        });    
    });

    router.get('/oauth2-tokens/:code', (req, res) => {
        let code = req.params.code + '#';
        userController.getAccessToken(code, (tokens) => {
            res.json(tokens);
        });
    });

    router.get('/',(req, res) => {
        let code = req.params.code + '#';
        userController.getAccessToken(code, (tokens) => {
            res.json(tokens);
        });
    });

   return router;
}
