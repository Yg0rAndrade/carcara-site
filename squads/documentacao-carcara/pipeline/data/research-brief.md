# Research Brief — Documentação para leigos

Base de conhecimento que orienta todos os agentes deste squad. O objetivo é
escrever documentação de uso do Carcará Code para pessoas que não sabem nada de
programação.

## Frameworks de referência

- **Minimalismo de John Carroll** — o usuário abre a documentação para realizar
  uma tarefa, não para estudar o sistema. Cada página resolve UMA tarefa real do
  usuário. Corta tudo que não ajuda a completar a tarefa.
- **Pirâmide invertida** — comece pelo resultado e pelo "pra que serve". O detalhe
  vem depois, para quem quiser. Um leigo decide em 5 segundos se está na página
  certa.
- **Every Page is Page One (Mark Baker)** — cada página se sustenta sozinha. O
  leitor pode cair ali vindo de uma busca, sem ter lido as anteriores. Sempre dê
  contexto mínimo no início.
- **Plain Language (plainlanguage.gov)** — frases curtas, voz ativa, palavras
  comuns, "você" direto no leitor, uma ideia por frase.

## Vocabulário

Termos que sinalizam qualidade (sempre traduzir para o cotidiano):
- "passo a passo", "é só clicar", "vai aparecer", "pronto", "do jeitinho".

Termos que sinalizam documentação ruim para leigo (evitar ou explicar sempre):
- "instanciar", "endpoint", "runtime", "flag", "deploy", "repositório", "IDE",
  "terminal", "prompt", "token", "dependência" — se precisar usar, explique na hora
  com uma analogia.

## Como examinar o código para documentar USO (não código)

O objetivo de ler o código é descobrir o que o usuário VÊ e FAZ, não como funciona
por dentro. Procure por:
- Rótulos de botões, títulos de telas, textos de menu e abas na interface.
- Nomes de janelas e telas (arquivos de UI, componentes, HTML).
- Ações que o usuário dispara (baixar, criar projeto, enviar mensagem, ver preview).
- Mensagens mostradas ao usuário (avisos, confirmações, erros amigáveis).
Ignore: detalhes de implementação, funções internas, build, testes, configs.

## Fontes de contexto do produto
- README.md, CHANGELOG.md, CLAUDE.md e docs/ dentro de ygor-code.
- A landing (carcara-code-site) descreve os recursos em linguagem de marketing.
