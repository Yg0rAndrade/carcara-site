---
execution: inline
agent: revisor
inputFile: docs-carcara/PAGINA-ATUAL.md
outputFile: docs-carcara/PAGINA-ATUAL.md
---

# Step 04: Deixar simples de verdade

> Observação: o arquivo revisado é a página da sub-aba escolhida
> (docs-carcara/{aba}/{sub-aba}.md). O marcador acima é genérico.

## Context Loading

Carregue antes de executar:
- A página escrita no passo 3 (docs-carcara/{aba}/{sub-aba}.md).
- `pipeline/data/quality-criteria.md` — o "teste da vovó" e a escala de simplicidade.
- `pipeline/data/anti-patterns.md` — os defeitos que reprovam na hora.

## Instructions

### Process
1. Leia a página inteira como se fosse um leigo que nunca programou.
2. Passe por cada critério do "teste da vovó" e marque os que falham; cace jargão não explicado, frases acima de ~25 palavras e passos com mais de uma ação.
3. Dê uma nota de simplicidade de 0 a 10.
4. Se a nota for 7 ou mais e nenhum item crítico falhar, APROVE. Senão, REPROVE listando cada problema com o trecho exato e a sugestão de conserto, e devolva ao passo 3 (a Duda reescreve). O ciclo se repete até aprovar.

## Output Format

```
Veredito: {APROVADO | REPROVADO}
Nota de simplicidade: {n}/10

{Se reprovado, lista de problemas:}
- "{trecho}" ({onde}): {defeito}. Sugestão: {conserto}.

{Se aprovado:}
Conferido: {itens do teste da vovó marcados como OK}
```

## Output Example

```
Veredito: REPROVADO
Nota de simplicidade: 4/10

Problemas:
- "Basta configurar o ambiente de execução" (Pra que serve): jargão não explicado.
  Sugestão: "É só abrir o programa, não precisa configurar nada".
- Passo 3 junta baixar, instalar e abrir numa frase só: quebrar em três passos.
- Frase de abertura tem 37 palavras: dividir em duas.
- Falta explicar o que é "preview" antes de mandar o usuário olhar.

Ação: devolver ao passo 3 para a Duda reescrever com estes ajustes.
```

## Veto Conditions

Rejeite e refaça se QUALQUER uma for verdade:
1. O veredito não traz nota de simplicidade ou não é claramente APROVADO/REPROVADO.
2. A página foi aprovada mesmo tendo jargão não explicado ou travessão.

## Quality Criteria

- [ ] O veredito tem nota (0 a 10) e é APROVADO ou REPROVADO.
- [ ] Reprovações listam trecho problemático e sugestão de conserto.
- [ ] Aprovação só com nota >= 7 e sem itens críticos falhando.
- [ ] Ao reprovar, o fluxo volta ao passo 3.
