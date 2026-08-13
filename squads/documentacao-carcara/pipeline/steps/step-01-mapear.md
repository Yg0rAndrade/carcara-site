---
execution: subagent
agent: explorador
inputFile: docs-carcara/_mapa.md
outputFile: docs-carcara/_mapa.md
model_tier: powerful
---

# Step 01: Mapear o código

## Context Loading

Carregue antes de executar:
- `docs-carcara/_mapa.md` — o mapa de progresso, SE já existir (pode não existir na primeira vez).
- `C:\Users\Ygor Andrade\Documents\github\ygor-code` — código-fonte do app Carcará (SOMENTE LEITURA). Leia README.md, CHANGELOG.md, CLAUDE.md, a pasta docs/ e os arquivos de interface (index.html, componentes de UI, rótulos de botões/menus em main.js e no renderer).
- `pipeline/data/research-brief.md` — como examinar o código para documentar USO, não implementação.
- `_opensquad/_memory/company.md` — contexto do produto e regras de escrita.

## Instructions

### Process
1. Verifique se `docs-carcara/_mapa.md` existe. SE existir: carregue, conte quantas sub-abas estão `[x]` e quantas `[ ]`, identifique a PRIMEIRA pendente (de cima para baixo) e pule para o passo 5. NÃO reconstrua o mapa e NÃO apague progresso.
2. SE o mapa NÃO existe: varra o código-fonte procurando tudo que o usuário final vê e faz (telas, janelas, abas, botões, menus, ações como baixar/criar projeto/conversar/ver preview/alternar projetos).
3. Agrupe os recursos em abas (grandes temas) e sub-abas (páginas individuais), em ordem do mais básico ao mais avançado. Ignore bastidor: build, testes, configs, funções internas.
4. Escreva `docs-carcara/_mapa.md` com o cabeçalho de progresso e a checklist (cada sub-aba com status `[ ]` e o caminho do `.md` de destino). Crie também `docs-carcara/README.md` como índice inicial.
5. Produza um resumo: total de abas, total de sub-abas, quantas feitas e qual é a PRÓXIMA sub-aba pendente. Esse resumo alimenta o checkpoint do passo 2.

## Output Format

O mapa salvo deve seguir exatamente esta estrutura:
```
# Mapa da Documentação — Carcará Code
> Progresso: {feitas}/{total} páginas escritas
> Código-fonte: C:\Users\Ygor Andrade\Documents\github\ygor-code

## {N}. {Nome da aba}
- [ ] {N.M} {Nome da sub-aba}  → docs-carcara/{slug-aba}/{slug-sub-aba}.md
- [x] {N.M} {Nome da sub-aba}  → docs-carcara/{slug-aba}/{slug-sub-aba}.md
```

E o resumo devolvido ao pipeline deve seguir:
```
Progresso: {feitas}/{total}
Próxima pendente: {N.M} {Nome} → {caminho}
```

## Output Example

```
# Mapa da Documentação — Carcará Code
> Progresso: 0/9 páginas escritas
> Código-fonte: C:\Users\Ygor Andrade\Documents\github\ygor-code

## 1. Primeiros Passos
- [ ] 1.1 O que é o Carcará Code  → docs-carcara/primeiros-passos/o-que-e.md
- [ ] 1.2 Baixar e instalar        → docs-carcara/primeiros-passos/instalar.md
- [ ] 1.3 Criar um projeto novo    → docs-carcara/primeiros-passos/criar-projeto.md

## 2. Usando no dia a dia
- [ ] 2.1 Conversar com a IA        → docs-carcara/dia-a-dia/chat.md
- [ ] 2.2 Ver o preview do projeto  → docs-carcara/dia-a-dia/preview.md
- [ ] 2.3 Selecionar elementos      → docs-carcara/dia-a-dia/selecionar.md

## 3. Vários projetos ao mesmo tempo
- [ ] 3.1 A barra de projetos       → docs-carcara/projetos/barra.md
- [ ] 3.2 Alternar entre projetos   → docs-carcara/projetos/alternar.md
- [ ] 3.3 Rodar em paralelo         → docs-carcara/projetos/paralelo.md

Progresso: 0/9
Próxima pendente: 1.1 O que é o Carcará Code → docs-carcara/primeiros-passos/o-que-e.md
```

## Veto Conditions

Rejeite e refaça se QUALQUER uma for verdade:
1. O mapa já existia e o passo o reconstruiu ou apagou sub-abas marcadas como `[x]`.
2. Algum item do mapa descreve código interno (funções, arquitetura) em vez de algo que o usuário faz.

## Quality Criteria

- [ ] O mapa tem cabeçalho com progresso (X/Y) e caminho do código-fonte.
- [ ] Cada sub-aba tem status `[ ]`/`[x]` e o caminho do `.md` de destino.
- [ ] O resumo aponta corretamente a próxima sub-aba pendente.
- [ ] Nenhum arquivo dentro de `ygor-code` foi modificado.
