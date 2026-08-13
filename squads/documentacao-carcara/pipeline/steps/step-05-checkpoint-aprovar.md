---
type: checkpoint
---

# Step 05: Aprovar e marcar como feita

## Context Loading

Carregue antes de executar:
- A página aprovada pelo revisor no passo 4 (docs-carcara/{aba}/{sub-aba}.md).
- `docs-carcara/_mapa.md` — o mapa de progresso.
- `docs-carcara/README.md` — o índice.

## Instructions

### Process
1. Mostre ao usuário a página finalizada (ou o caminho dela) e a nota de simplicidade que o revisor deu.
2. Pergunte, via AskUserQuestion, se ele aprova a página como está. Opções sugeridas: "Aprovar e marcar como feita", "Pedir um ajuste" (volta ao passo 3), "Aprovar e já documentar a próxima".
3. Se APROVADA: marque a sub-aba como `[x]` em `docs-carcara/_mapa.md`, atualize o número de progresso no cabeçalho e adicione o link da página no `docs-carcara/README.md`. Registre a página em `_memory/runs.md`.
4. Informe quantas páginas faltam e diga que, para documentar a próxima, é só rodar `/opensquad run documentacao-carcara` de novo (ou, se o usuário escolheu "documentar a próxima", siga para uma nova rodada).

## Output Format

```
Página aprovada: {N.M} {Nome}
Marcada como [x] no mapa: sim
Índice atualizado: sim
Progresso agora: {feitas}/{total}
Próxima pendente: {N.M} {Nome} (rode o comando de novo para documentá-la)
```

## Output Example

```
Página aprovada: 1.3 Criar um projeto novo (nota 8/10)
Marcada como [x] no mapa: sim
Índice (README) atualizado: sim
Registrada em runs.md: sim

Progresso agora: 3/9 páginas escritas. Faltam 6.
Próxima pendente: 2.1 Conversar com a IA.
Para documentá-la, rode: /opensquad run documentacao-carcara
```

## Veto Conditions

Rejeite e refaça se QUALQUER uma for verdade:
1. A sub-aba foi marcada como `[x]` sem o usuário aprovar no AskUserQuestion.
2. A página foi aprovada mas o mapa ou o índice não foram atualizados.

## Quality Criteria

- [ ] A aprovação passou por AskUserQuestion.
- [ ] Ao aprovar, a sub-aba virou `[x]` e o contador de progresso subiu.
- [ ] O README (índice) recebeu o link da nova página.
- [ ] O usuário foi avisado de quantas faltam e de como documentar a próxima.
