
/*
 * POST messsage
 */

exports.create = function(req, res){
  var Message = global.db.Message;
  var name = req.body.name;
  var message = req.body.message;
  Message.create({
    author: name,
    content: message
  })
  .error(function(err){
    console.log(err);
  })
  .success(function(result){
    res.redirect('/');
  });
};

/*
 * DELETE message
 */

exports.delete = function(req, res){
  var Message = global.db.Message;
  var id = req.params.id
  Message.destroy({id: id})
    .error(function(err){
      console.log(err);
    })
    .success(function(result){
      res.redirect('/');
    });
};
