---
title: "Testar APIs"
description: "Use a aba API do Carcará para testar se um serviço externo, como pagamento ou e-mail, está respondendo direito."
sidebar:
  order: 19
---

## Pra que serve
Aqui você confere, com os próprios olhos, se um serviço de fora (como
pagamento ou envio de e-mail) está respondendo direito, sem precisar pedir
pra IA testar por você. Isso é possível porque uma API é um jeito de dois
programas conversarem entre si, como um garçom que leva seu pedido até a
cozinha e traz a resposta. A aba "API" deixa você fazer esse pedido na mão.

## Quando usar
- Quando quiser conferir se um serviço externo (por exemplo, de pagamento
  ou de e-mail) está respondendo direito.
- Quando a IA disser que algo não está funcionando numa API e você quiser
  ver com os próprios olhos.

## Passo a passo
1. Clique no botão "Mais ferramentas", no topo da tela, perto das abas
   Código e Git.
2. Escolha "API" na lista que aparece. A aba de testes abre.
3. Escolha o tipo de pedido na lista, como GET (buscar algo) ou POST
   (enviar algo). GET já vem escolhido por padrão.
4. Escreva o endereço que você quer testar na caixa de URL.
5. Clique em "Enviar".
6. A resposta aparece embaixo, com um número colorido mostrando se deu certo
   (verde) ou deu problema (vermelho), e o resultado completo logo abaixo.

## Guardando o que você já testou
Toda vez que você envia um pedido, ele fica guardado numa lista chamada
"Histórico", do lado direito da tela. Clique em qualquer item dessa lista
para ver de novo o que foi enviado e o que voltou como resposta.

## Dica
Se você já tem um comando de teste em outro programa (chamado de cURL),
clique em "Importar" e cole ele ali. O Carcará organiza tudo sozinho nos
campos certos.
