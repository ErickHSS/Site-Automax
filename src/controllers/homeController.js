exports.paginaInicial = (req, res) => {
    res.render('index', {
      titulo:'Intranet - 2022'
    });
    return;
};

exports.trataPost = (req, res) => {
    res.send('teste ');
}

exports.teste = (req, res) => {
  res.render('test');
}
