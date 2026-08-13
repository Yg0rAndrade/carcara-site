---
execution: inline
agent: redatora
inputFile: docs-carcara/_mapa.md
outputFile: src/content/docs/docs/PAGINA-ATUAL.md
---

# Step 03: Escrever a página de ajuda

> Observação: o `outputFile` real é o caminho da sub-aba escolhida, indicado na
> coluna do mapa (src/content/docs/docs/{aba}/{sub-aba}.md). As páginas são
> servidas pelo Starlight em /docs. O campo acima é só um marcador.

## Context Loading

Carregue antes de executar:
- A sub-aba escolhida no passo 2 (nome, número e caminho do `.md`).
- `C:\Users\Ygor Andrade\Documents\github\ygor-code` — código-fonte (SOMENTE LEITURA), para descobrir como o recurso aparece na tela: nome do botão, o que faz, mensagens ao usuário.
- `pipeline/data/domain-framework.md` — a estrutura fixa da página e as regras de linguagem.
- `pipeline/data/output-examples.md` — o nível de simplicidade esperado.
- `_opensquad/_memory/company.md` — tom de voz e regra do "sem travessão".

## Instructions

### Process
1. Leia qual é a sub-aba escolhida e onde ela será salva.
2. Investigue o recurso no código e nos documentos: qual tela/botão, o que acontece ao usar, qual a tarefa real do usuário.
3. Escreva a página seguindo a estrutura fixa: Título › Pra que serve › Quando usar › Passo a passo › Dica/Deu errado (opcionais), em português de leigo total.
4. Releia eliminando jargão não explicado e quebrando frases longas; garanta uma ação por passo com o resultado na tela.
5. Salve no caminho indicado na coluna do mapa (`src/content/docs/docs/{aba}/{sub-aba}.md`) com o frontmatter do Starlight (title + sidebar.order). NÃO coloque um H1 (`# ...`) no corpo: o Starlight usa o `title` como título. O corpo começa direto em `## Pra que serve`. Não marque nada no mapa ainda: isso acontece só na aprovação do passo 5.

## Output Format

O arquivo salvo deve seguir exatamente (frontmatter do Starlight, sem H1 no corpo):
```
---
title: "{Nome amigável}"
sidebar:
  order: {número da sub-aba}
---

## Pra que serve
{2 a 4 frases de benefício, em linguagem do dia a dia}

## Quando usar
- {situação real 1}
- {situação real 2}

## Passo a passo
1. {uma ação} {o que aparece na tela}
2. {uma ação} {o que aparece na tela}

## Dica
{uma frase, opcional}
```

## Output Example

```
---
titulo: "Criar um projeto novo"
aba: "Primeiros Passos"
ordem: 3
atualizado: "2026-07-24"
---

# Criar um projeto novo

## Pra que serve
É aqui que tudo começa. Um projeto é a pasta onde a sua ideia vira realidade: um
site, um app ou um sisteminha. Você cria um projeto para cada ideia diferente.

## Quando usar
- Quando teve uma ideia nova e quer começar do zero.
- Quando quer separar dois trabalhos para não misturar.

## Passo a passo
1. Abra o Carcará Code. A tela inicial aparece.
2. Clique no botão "Novo Projeto", no canto de cima. Uma janelinha abre.
3. Digite um nome para a sua ideia e clique em Criar.
4. Pronto. O projeto aparece na barra da esquerda e a IA já espera o seu pedido.

## Dica
Dê nomes que você reconheça depois. "Loja da Ana" é melhor que "projeto 2".
```

## Veto Conditions

Rejeite e refaça se QUALQUER uma for verdade:
1. A página explica como o recurso funciona por dentro em vez de como usar.
2. Há termo técnico sem explicação, ou algum travessão (—) no texto.

## Quality Criteria

- [ ] Abre com "Pra que serve" antes de qualquer passo.
- [ ] Passo a passo numerado, uma ação por passo, com o resultado na tela.
- [ ] Frontmatter completo e arquivo salvo no caminho da sub-aba escolhida.
- [ ] Linguagem de leigo total, frases curtas, sem travessão.
