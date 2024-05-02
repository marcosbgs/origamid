/*
=> STRING
    - construtor de String
    - const comida = 'Pizza';//retorna direto uma string
    - const agua = new String('água'); //retorna um objeto
    --> string.length
         - TOTAL DE CARACTERES DA STRING
         - console.log([comida.length - 1]); RETORNA O NÚMERO DE ÍNDICES
    --> string.charAt(n)
        - RETORNA O CARACTERE DE ACORDO COM O ÍNDICE DE N

    --> string.concat(string2, string3, ...)
        - concatena as strings e retorna o resultado
        - const frase = comida.concat(agua);

    --> string.includes(search, position)
        - procura uma string dentro de outra. Letra maiúscula e minúscula importa
        - const fruta = 'banana'; //vai dar FALSE porque tá com LETRAS MINÚSCULAS
            const listaFrutas = 'Melancia, Banana, Laranja';
            console.log(listaFrutas.includes(fruta)); 

    --> string.endsWith() e string.startsWith()
        - procura por uma string exata dentro de outra
    
    --> string.slice(inicio, fim)
        const transacao1 = 'Depósito de cliente';
        const transacao2 = 'Depósito de fornecedor';
        const transacao3 = 'Taxa de camisas';

        transacao1.slice(0, 3); // Dep
        transacao2.slice(0, 3); // Dep
        transacao3.slice(0, 3); // Tax

        transacao1.slice(12); // cliente // CORTA OS 10 PRIMEIROS CARACTERES
        transacao1.slice(-4); // ente //RETORNA OS 4 ÚLTIMOS CARACTERES
        transacao1.slice(3, 6); // ósi

    --> string.substring(inicio, fim)
        - não funciona com número negativo
        - mesma função do SLICE

    --> string.indexOf() e string.lastIndexOf()
        - Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

    --> string.repeat(n)
        - repete a string (n) vezes
            const frase = 'Ta';
            frase.repeat(5); // TaTaTaTaTa

    --> 


*/






