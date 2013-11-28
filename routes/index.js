
/*
 * GET home page.
 */

exports.index = function(req, res){
  var Message = global.db.Message;
  Message.findAll({order: 'id DESC'})
    .error(function(err){
       console.log(err);
    })
    .success(function(results){
      res.render('index', { title: 'Express' , messages: results});
    });
};
