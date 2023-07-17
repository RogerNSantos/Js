/*
Objetivo, capturar o nome do usuário e apresedntar uma saudação personaslizada
Definir as variáveis com o prefixo js_
Elementos de Entrada: método prompt do objeto window
Elementos de Saida: método write do objetivo document
*/

/* DEFENIÇÃO DE VARIÁVEIS */
var js_nome;

/*ENTRADA DE DADOS - window.prompet_aparece uma caixa de mensagem*/
js_nome = window.prompt('Entre com seu nome:', 'Digite seu nome')

/*SAÍDA DOS DADOS - Projeta a saida de dados*/
document.write('Olá'  + js_nome + 'Seja Bem Vindo!');


