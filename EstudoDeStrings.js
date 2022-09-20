//delimitação de string

const aspasSimples = 'olá mundo'
//console.log(aspasSimples)

//caracteres de escapa \n = quebra linha]

const aspasDuplas = " outra mensagem\n tudo bem"
//console.log(aspasDuplas)
 const textoComCrase = `olá eu sou aline 
  estou bem obrigda`
 // console.log(textoComCrase)

// métodos das strings

const texto ="É loucura odiar todas as rosas porque uma te espetou.as pessoas são solitárias porque constroem muros ao invés de pontes"

console.log(texto)
console.log(texto.toLowerCase())//maiuscula
console.log(texto.toUpperCase())//minuscula
console.log(texto.concat(`As pessoas são solitárias porque constroem muros ao invés de pontes`))
//case sensitive, ele diferencia maiusculas de minusculas
console.log(texto.replace("rosas", "aline"))// substitui a primeira ocorrencia da pesquisa
//console.log(texto.replaceALL("as,amor"))// não está atualizado

//console.log(texto.replace(/[as]/g,´amor'))//regulares
 const html = '<!DOCTYPE html>\n,html></html>'

 console.log(html.startsWith('<!DOCTYPE html>'))// starsWith verifica o inicio
 console.log(html.endsWith('</body>'))// endsWith verifica o fim

 const mensagem = '                        olá,mundo                         '

 console.log(mensagem)
 console.log(mensagem.trim())// apaga o espaço em excesso

 let senha = 'cuscuz'

 console.log(senha.length>=8)