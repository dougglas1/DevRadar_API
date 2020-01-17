module.exports = function parseStringAsArray(arrayAsString) {
    // separar cada item ao encontrar vírgula e retirar os espaços (antes e depois)
    return arrayAsString.split(',').map(tech => tech.trim());
}