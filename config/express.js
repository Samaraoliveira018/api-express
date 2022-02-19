const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');

module.exports = ()  => {
    const app = express();
//setando variaveis da aplicação
app.set('port',process.env.PORT || config.get('server.port'));
//middlewares
app.use(bodyParser.json());

//ENDPOINTS
consign({cwd:'api'})
.then('data')
.then('controllers')
.then('routes')
.into(app);

require('../api/routes/customerWallets')(app);

return app;
};
