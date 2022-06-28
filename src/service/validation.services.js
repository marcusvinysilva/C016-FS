function validPaleta(paleta) {
  if (paleta.descricao && paleta.sabor && paleta.preco && paleta.foto) {
    for (let key in paleta) {
      console.log(key, paleta[key]);
    }

    return true;
  } else {
    return false;
  }
}

function validUpdatePaleta(paleta) {
  if (paleta.descricao || paleta.sabor || paleta.preco || paleta.foto) {
    return paleta;
  } else {
    throw new Error('Nenhum dado para ser atualizado');
  }
}

module.exports = { validPaleta, validUpdatePaleta };
