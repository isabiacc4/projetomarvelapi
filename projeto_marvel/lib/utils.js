import crypto from 'crypto' //biblioteca de criptografia

export function generateMarvelHash(timestamp, privateKey, publicKey) { //tres valores
    const hash = crypto.createHash('md5'); //cria um tipo de criptografia, chamado md5, que o proprio site da marvel exige
    hash.update(`${timestamp}${privateKey}${publicKey}`); //atualiza e embaralha as informações obtidas pelos valores
    return hash.digest('hex'); //retorna hexadecimal - (digest) => calcula os digitos de todos os dados hashados
}