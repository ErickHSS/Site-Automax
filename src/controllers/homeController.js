exports.paginaInicial = (req, res) => {
    res.render('index', {
      titulo:'Automax Fiat'
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send('teste ');
}

exports.teste = (req, res) => {
  res.render('test');
}
