cake = require('../controllers/cakes.js')

module.exports = function(app){
    app.get('/cakes', cake.index);
    app.get('/cake/:id', cake.show_one);
    app.post('/cake', cake.create);
    app.put('/cake/:id', cake.update);
   // app.delete('/cake/:id', cake.destroy);
};