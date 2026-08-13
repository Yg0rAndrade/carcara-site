---
title: "Checkpoints (voltar no tempo)"
description: "Entenda os checkpoints do Carcará: como voltar no tempo se uma mudança não ficar boa, sem misturar com Git ou GitHub."
sidebar:
  order: 18
---

## Pra que serve
Um checkpoint é como um "salvar jogo": um retrato do seu projeto inteiro num
certo momento. Se a IA fizer uma mudança que você não gostou, você volta
para um checkpoint anterior. Se você quebrar alguma coisa sem querer, o
mesmo truque resolve: tudo fica como estava.

## Quando usar
- Quando uma mudança não ficou do jeito que você queria e quer voltar atrás.
- Quando quiser guardar um ponto seguro antes de pedir algo arriscado.

## Passo a passo
1. Clique no botão "Mais ferramentas" (a setinha ao lado das outras abas,
   em cima do painel da direita) e escolha "Histórico".
2. Veja a lista de checkpoints, do mais recente para o mais antigo, cada um
   com a hora em que foi criado.
3. Passe o mouse sobre o checkpoint que você quer. Um botão "Voltar"
   aparece.
4. Clique em "Voltar".
5. Uma janela de confirmação aparece, perguntando se você quer mesmo
   restaurar aquele momento.
6. Clique em "Restaurar" para confirmar.

## Como os checkpoints são criados
Você não precisa fazer nada: o Carcará cria um checkpoint automaticamente
toda vez que a IA termina de responder um pedido seu. Se quiser criar um na
mão, antes de pedir algo arriscado, clique no botão "Criar", no topo da aba
"Histórico".

## Onde os checkpoints ficam guardados
Os checkpoints não ficam dentro da pasta do seu projeto. Eles ficam numa
pasta separada, escondida dentro dos arquivos internos do próprio Carcará,
no seu computador.

## Checkpoint não é a mesma coisa que Git ou GitHub
Se você também usa o Git e o GitHub (outra forma de guardar cópias do
projeto, mais trabalhosa, pra quem já programa), fique tranquilo. Os
checkpoints não mexem nisso.

É como ter duas gavetas diferentes: uma é a sua, organizada por você (o
Git). A outra é automática, criada pelo Carcará só como uma rede de
segurança. Voltar num checkpoint não cria nem apaga nenhuma cópia guardada
no seu Git de verdade.

## Dica
Voltar no tempo é seguro: antes de restaurar, o Carcará guarda um checkpoint
do jeito que o projeto estava agora. Ou seja, se você voltar e se arrepender,
dá para voltar pra frente de novo.
