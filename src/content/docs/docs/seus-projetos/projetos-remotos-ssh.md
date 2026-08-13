---
title: "Projetos remotos via SSH"
description: "Conecte o Carcará a um projeto hospedado num servidor remoto via SSH, com senha, chave ou importação do arquivo ~/.ssh/config."
sidebar:
  order: 26
---

## Pra que serve
Às vezes o projeto não está no seu computador, e sim num servidor: um
computador que fica ligado o tempo todo, na internet, como uma central que
nunca fecha. SSH é a tecnologia que conecta os dois computadores com
segurança, como uma chave especial que abre a porta desse computador de
longe. Com um projeto remoto, você conecta o Carcará nesse servidor e
trabalha nele como se estivesse na sua própria máquina.

## Quando usar
- Quando o código do seu projeto já mora num servidor, não no seu computador.
- Quando você já entra em servidores usando SSH por outro programa (como o
  Termius) e quer fazer isso pelo Carcará também.

## Passo a passo
1. No rail, a barra de projetos na lateral esquerda, clique no botão com o
   sinal de mais (+). Um menuzinho aparece.
2. Escolha a opção "Remoto (SSH)…". A janela "Novo projeto remoto (SSH)" abre.
3. No campo "Host", digite o endereço do servidor, por exemplo 203.0.113.10.
   O host é como o endereço de uma casa: sem ele, o Carcará não sabe qual
   computador procurar.
4. No campo "Usuário", digite o nome de usuário que você usa pra entrar nesse
   servidor.
5. Deixe o campo "Porta" como está. A porta é como o número da entrada da
   casa. Quase todo servidor usa a mesma, por isso raramente precisa mudar.
6. Digite sua senha no campo "Senha". É a forma mais simples de entrar no
   servidor.
7. Se preferir, clique em "Usar chave SSH" pra usar um arquivo de chave em
   vez de senha (a chave funciona como uma senha mais segura). O campo muda
   pra pedir o caminho do arquivo.
8. Digite o caminho desse arquivo no campo que apareceu.
9. Clique em "Testar conexão". Uma mensagem verde aparece se deu certo, ou uma
   vermelha avisa o que corrigir.
10. Clique em "Salvar". A janela fecha e o projeto remoto aparece no rail,
    junto dos seus outros projetos.

## Dica
Se você já usa outro programa pra entrar em servidores, como o Termius, ele
guarda essa lista num arquivo dentro do computador. Esse arquivo funciona
como uma agenda escondida, com o endereço dos servidores que você já usou.

No topo da janela tem um botão com um nome estranho, cheio de barrinhas e
pontos: "Importar do ~/.ssh/config". Não se preocupe em entender esse nome,
é só o jeito técnico de dizer "a tal agenda escondida". Clique nele. Uma
lista de servidores aparece pronta, e é só clicar num deles pra preencher
tudo sozinho.

## Deu errado?
Se aparecer o aviso "Não foi possível salvar a senha com segurança neste
sistema", não se preocupe. Isso só significa que o Carcará vai pedir sua senha
de novo na próxima vez que você conectar nesse projeto.
