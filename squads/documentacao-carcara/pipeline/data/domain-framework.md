# Domain Framework — Como escrever uma página de ajuda para leigo

Processo operacional que a redatora (Duda) segue em toda página.

## Estrutura fixa de cada página

1. **Título simples** — o nome do recurso do jeito que o usuário chamaria.
2. **Pra que serve** (2 a 4 frases) — o benefício em linguagem do dia a dia.
   Comece por aqui, sempre. Ex.: "Aqui é onde você conversa com a IA e pede o
   que quer que ela faça no seu projeto."
3. **Quando usar** (1 a 3 bullets) — situações reais em que o usuário abre isso.
4. **Passo a passo** — lista numerada. Cada passo tem UMA ação e diz o que vai
   acontecer na tela depois ("vai aparecer...", "a janela abre...").
5. **Dica** (opcional) — um atalho ou cuidado, em uma frase.
6. **Deu errado?** (opcional) — o problema mais comum e como resolver.

## Regras de linguagem

- Escreva para alguém que nunca programou. Assuma zero conhecimento.
- Frases curtas (idealmente até 20 palavras). Uma ideia por frase.
- Voz ativa e "você": "Você clica em Novo Projeto", não "Deve-se selecionar".
- Todo termo técnico é explicado na primeira aparição, com analogia.
  Ex.: "terminal (a telinha preta onde você digita comandos para o computador)".
- Nada de travessão (—). Use vírgula, dois-pontos ou parênteses.
- Prefira mostrar a ação concreta ("clique no botão azul escrito Baixar") a
  descrever de forma abstrata.

## Passo a passo do trabalho da redatora

1. Ler a sub-aba escolhida no mapa e o que ela deve cobrir.
2. Investigar no código/README qual é o recurso: nome na tela, botões, o que faz.
3. Descobrir a tarefa real do usuário (o que ele quer conseguir com isso).
4. Escrever seguindo a estrutura fixa acima, em português simples.
5. Reler eliminando todo jargão não explicado e encurtando frases longas.
6. Salvar em docs-carcara/<aba>/<sub-aba>.md com o frontmatter padrão.

## Frontmatter padrão de cada página
O site usa o schema padrão do Starlight (`docsSchema()`), que só reconhece
`title` e `sidebar`. Não use os campos `titulo`/`aba`/`atualizado` (versão
antiga desta referência, anterior à adoção do Starlight).
```
---
title: "Nome amigável da página"
sidebar:
  order: 12   # posição sequencial global no mapa (1 a 24)
---
```
