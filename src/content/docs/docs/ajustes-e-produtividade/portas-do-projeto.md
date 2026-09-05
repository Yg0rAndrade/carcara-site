---
title: "Portas do projeto"
description: "Veja e feche as portas que um projeto está usando, ou fixe uma porta para ele sempre abrir na mesma."
sidebar:
  order: 25
---

## Pra que serve
Quando um projeto está rodando, ele conversa com o navegador (o programa que
abre sites, tipo o Chrome) por um número chamado porta. É como o número de
uma sala num prédio: cada sala tem um número diferente, pra dar pra achar a
certa. Aqui você vê quais portas o seu projeto está usando agora e escolhe
uma porta fixa pra ele sempre abrir na mesma sala.

## Quando usar
- Quando quiser que um projeto sempre abra no mesmo número. Alguns projetos
  guardam esse número salvo em algum lugar e travam se ele mudar.
- Quando quiser ver e fechar portas que um projeto deixou abertas sem
  precisar.

## Como chegar lá
1. Clique no ícone de engrenagem, no rail (a barra de projetos, na esquerda).
   A tela de Configurações abre.
2. No menu à esquerda dela, clique em "Projetos". A lista dos seus projetos
   aparece.
3. Role até o projeto que você quer ajustar. Embaixo do nome dele tem duas
   colunas: "Porta fixa" e "Ver portas no ar".

## Fixar uma porta pro projeto
1. Na coluna "Porta fixa", clique no interruptor pra ligar ele. Um campinho
   de texto aparece embaixo.
2. Digite o número da porta nesse campo (o Carcará sugere um número entre
   3000 e 9999).
3. Clique fora do campo ou aperte Enter. Pronto, o número fica salvo. Da
   próxima vez, o projeto sempre sobe nessa mesma porta.

## Ver e fechar portas abertas
1. Na coluna "Ver portas no ar", clique no ícone de setas em círculo. O
   Carcará procura as portas que esse projeto está usando agora.
2. Etiquetas aparecem, uma pra cada porta encontrada, com o número dela.
3. Pra fechar uma, clique no X da etiqueta. Uma mensagem pergunta se você
   tem certeza.
4. Clique em "Fechar" pra confirmar. A porta fecha na hora.

## Escolher o comando que sobe o projeto
Na mesma tela de Configurações, embaixo de cada projeto, tem a opção
"Comando de run". É a linha que faz o seu projeto rodar pra aparecer no
preview. Na maioria das vezes você não precisa mexer nisso.
1. Deixe em "Automático" pra o Carcará descobrir sozinho como subir o
   projeto. Ele mostra o que vai rodar, tipo "O app vai rodar: npm run dev".
2. Se ele avisar "Nada detectado", ou se o seu projeto sobe de um jeito
   diferente, clique em "Personalizado" e escreva o comando no campo (por
   exemplo, algo como `npm run web -- --port {port}`).
3. Onde a porta entra no comando, escreva `{port}`: o Carcará troca isso pela
   porta certa na hora de rodar.

## Abrir o preview sozinho ou só quando você mandar
Logo ali também tem a opção "Abrir o Preview automaticamente".
- Ligada (o normal): assim que você abre o projeto, o Carcará já tenta subir
  o preview sozinho.
- Desligada: o preview só sobe quando você clica em "Reiniciar", no topo. É
  útil pra projeto que não é um site (uma pasta de scripts, por exemplo), pra
  ele não ficar tentando abrir uma prévia que não existe.

## Dica
Se aparecer o aviso "Outro projeto já usa essa porta fixa", escolha outro
número. Cada porta só pode ser usada por um projeto de cada vez.

## Deu errado?
Se aparecer "Porta muito conhecida", não é um erro, é só um aviso. Alguns
números de porta já são usados por outros programas famosos, e pode dar
conflito. Mesmo assim, você pode continuar usando esse número se quiser.
