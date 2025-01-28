exports.paginaInicial = (req, res) => {
  res.render('index', {
    title: 'keep moving forward',
    numbers: [1,2,3,4,5,6]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
