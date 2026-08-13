---
type: checkpoint
---

# Step 02: Revisar o mapa e escolher a próxima página

## Context Loading

Carregue antes de executar:
- `docs-carcara/_mapa.md` — o mapa atualizado pelo passo 1, com o progresso.
- O resumo devolvido pelo passo 1 (progresso e próxima pendente).

## Instructions

### Process
1. Mostre ao usuário o estado atual: quantas páginas já foram escritas e quantas faltam, e liste as sub-abas pendentes (as `[ ]`).
2. Na PRIMEIRA execução (mapa recém-criado), avise que este é o mapa proposto e pergunte se ele aprova a estrutura de abas e sub-abas ou quer ajustar algo antes de começar.
3. Pergunte qual sub-aba documentar agora, oferecendo como opção padrão a próxima pendente. Use AskUserQuestion (regra do Claude Code: todo checkpoint é AskUserQuestion, com 2 a 4 opções).
4. Registre a sub-aba escolhida (nome, número e caminho do `.md`) e passe adiante para o passo 3.

Sugestão de opções para o AskUserQuestion:
- "Documentar a próxima pendente ({N.M} {Nome})" — segue a ordem do mapa.
- "Escolher outra sub-aba" — o usuário indica qual.
- "Ajustar o mapa antes" — mudar abas/sub-abas (só faz sentido logo após criar o mapa).

## Output Format

```
Sub-aba escolhida: {N.M} {Nome}
Arquivo de destino: docs-carcara/{slug-aba}/{slug-sub-aba}.md
Ajustes no mapa pedidos: {sim, quais / não}
```

## Output Example

```
Progresso atual: 2 de 9 páginas escritas. Faltam 7.
Pendentes: 1.3 Criar um projeto, 2.1 Conversar com a IA, 2.2 Preview, ...

Você escolheu: documentar a próxima pendente.
Sub-aba escolhida: 1.3 Criar um projeto novo
Arquivo de destino: docs-carcara/primeiros-passos/criar-projeto.md
Ajustes no mapa pedidos: não
```

## Veto Conditions

Rejeite e refaça se QUALQUER uma for verdade:
1. O passo seguiu sem o usuário escolher uma sub-aba (nenhuma seleção registrada).
2. A sub-aba escolhida já está marcada como `[x]` no mapa e o usuário não pediu para refazê-la.

## Quality Criteria

- [ ] A escolha foi feita via AskUserQuestion, com a próxima pendente como padrão.
- [ ] O usuário viu o progresso (feitas/faltando) antes de escolher.
- [ ] A sub-aba escolhida e o arquivo de destino ficaram registrados para o passo 3.
