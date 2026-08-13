# Mapa da Documentação do Carcará Code
> Progresso: 24 páginas escritas + 14/14 itens do backlog de recursos não documentados (ver seção "Backlog" abaixo de cada bloco)
> Código-fonte: C:\Users\Ygor Andrade\Documents\github\ygor-code
> Ordem de execução do backlog: seguir a numeração dos itens marcados "(backlog)" de cima pra baixo neste arquivo (1 a 14), não a ordem das seções.

## 1. Primeiros passos
- [x] 1.1 O que é o Carcará Code  → src/content/docs/docs/primeiros-passos/o-que-e.md
- [x] 1.2 Instalar no seu computador  → src/content/docs/docs/primeiros-passos/instalar.md
- [x] 1.3 Preparar seu PC (ferramentas necessárias)  → src/content/docs/docs/primeiros-passos/preparar-pc.md
- [x] 1.4 Conhecer a tela (rail, chat e preview)  → src/content/docs/docs/primeiros-passos/conhecer-a-tela.md

## 2. Seus projetos
- [x] 2.1 Adicionar um projeto que já existe  → src/content/docs/docs/seus-projetos/adicionar-projeto.md
- [x] 2.2 Criar um projeto do zero  → src/content/docs/docs/seus-projetos/criar-projeto.md
- [x] 2.3 Organizar o rail (pastas, cores e ícones)  → src/content/docs/docs/seus-projetos/organizar-rail.md
- [x] 2.4 Projetos remotos via SSH (backlog 1, página nova) → src/content/docs/docs/seus-projetos/projetos-remotos-ssh.md
  - Fonte: RemoteProjectModal.jsx (senha ou chave, import do ~/.ssh/config). Hoje "Adicionar um projeto" só fala de pasta local.

## 3. Conversar com a IA
- [x] 3.1 Chat com a IA  → src/content/docs/docs/conversar-com-a-ia/chat-claude-code.md
- [x] 3.2 Várias sessões de chat  → src/content/docs/docs/conversar-com-a-ia/sessoes-de-chat.md
- [x] 3.3 Escolher a IA de cada projeto  → src/content/docs/docs/conversar-com-a-ia/escolher-a-ia.md
- [x] 3.4 Instalar e gerenciar as IAs  → src/content/docs/docs/conversar-com-a-ia/gerenciar-ias.md
- [x] 3.5 Arrastar arquivo pro terminal (backlog 11, atualização) → src/content/docs/docs/conversar-com-a-ia/chat-claude-code.md
  - Pequeno, incluir junto da explicação de chat/terminal.

## 4. Ver o projeto ao vivo
- [x] 4.1 Preview: seu site rodando ao lado do chat  → src/content/docs/docs/ver-ao-vivo/preview.md
- [x] 4.2 Testar em celular, tablet e computador  → src/content/docs/docs/ver-ao-vivo/tamanhos-de-tela.md
- [x] 4.3 Tirar e anotar prints  → src/content/docs/docs/ver-ao-vivo/prints.md
- [x] 4.4 Selecionar um elemento na tela  → src/content/docs/docs/ver-ao-vivo/selecionar-elemento.md
- [x] 4.5 Abas do Preview e recolher o Preview (backlog 4, atualização) → src/content/docs/docs/ver-ao-vivo/preview.md
  - Área com mais mudanças no changelog (0.1.5, 0.1.8, 0.1.9, 0.1.10); doc atual é rasa nisso.
- [x] 4.6 Atalhos de print (Ctrl+P, Ctrl+Shift+P) e hard reload (Ctrl+F5, Ctrl+Shift+R, Ctrl+Click) (backlog 9, atualização) → src/content/docs/docs/ver-ao-vivo/prints.md
  - Hoje só o clique no ícone está documentado.

## 5. Código, versões e ferramentas
- [x] 5.1 Editor de código e árvore de arquivos  → src/content/docs/docs/codigo-e-ferramentas/editor-de-codigo.md
- [x] 5.2 Git e GitHub (salvar e publicar versões)  → src/content/docs/docs/codigo-e-ferramentas/git-github.md
- [x] 5.3 Checkpoints (voltar no tempo)  → src/content/docs/docs/codigo-e-ferramentas/checkpoints.md
- [x] 5.4 Testar APIs (aba REST)  → src/content/docs/docs/codigo-e-ferramentas/testar-apis.md
- [x] 5.5 Conectar MCP  → src/content/docs/docs/codigo-e-ferramentas/conectar-mcp.md
- [x] 5.6 Visualizadores de HTML/CSV/mídia no editor (backlog 3, atualização) → src/content/docs/docs/codigo-e-ferramentas/editor-de-codigo.md
  - Barra de navegador no .html etc. Hoje a doc só diz que binário "não edita".
- [x] 5.7 Seleção por arraste (marquee) na árvore de arquivos (backlog 6, atualização) → src/content/docs/docs/codigo-e-ferramentas/editor-de-codigo.md
- [x] 5.8 "Abrir no Explorador" no menu de contexto da busca de arquivos (backlog 7, atualização) → src/content/docs/docs/codigo-e-ferramentas/editor-de-codigo.md
- [x] 5.9 Quebra de linha (word-wrap) no editor (backlog 8, atualização) → src/content/docs/docs/codigo-e-ferramentas/editor-de-codigo.md
- [x] 5.10 Checkpoints: git-sombra separado e onde tudo fica salvo no disco (backlog 12, atualização) → src/content/docs/docs/codigo-e-ferramentas/checkpoints.md
  - Doc atual explica "como restaurar" mas não "onde isso vive" nem a diferença pro Git/GitHub de verdade.

## 6. Ajustes e produtividade
- [x] 6.1 Configurações (tema, idioma, terminal)  → src/content/docs/docs/ajustes-e-produtividade/configuracoes.md
- [x] 6.2 Vários projetos ao mesmo tempo  → src/content/docs/docs/ajustes-e-produtividade/varios-projetos.md
- [x] 6.3 Paleta de comandos e atalhos  → src/content/docs/docs/ajustes-e-produtividade/paleta-e-atalhos.md
- [x] 6.4 Kanban, tarefas e quadro branco  → src/content/docs/docs/ajustes-e-produtividade/kanban-tarefas-quadro.md
- [x] 6.5 Portas do projeto (backlog 2, página nova) → src/content/docs/docs/ajustes-e-produtividade/portas-do-projeto.md
  - Ver/fechar portas abertas, porta fixa por projeto. Recurso da aba Configurações que ninguém acha sozinho.
- [x] 6.6 Aba "Novidades" e como funciona o auto-update (backlog 10, página nova) → src/content/docs/docs/ajustes-e-produtividade/novidades-e-atualizacoes.md
  - Ninguém explica de onde vêm as notas de versão nem como o app atualiza.

## 7. Privacidade e dados
- [x] 7.1 Onde ficam meus dados (backlog 5, página nova) → src/content/docs/docs/privacidade-e-dados/onde-ficam-meus-dados.md
  - Projetos, checkpoints e configurações não vão pro servidor. Argumento de venda forte pra quem desconfia de IDE com IA.

## 8. Ajuda e suporte
- [x] 8.1 Perguntas frequentes e solução de problemas (backlog 13, página nova) → src/content/docs/docs/ajuda-e-suporte/faq-solucao-de-problemas.md
  - Hoje só tem caixinhas "Deu errado?" espalhadas por página; consolidar aqui.
- [x] 8.2 Contribuir e pedir suporte (backlog 14, página nova) → src/content/docs/docs/ajuda-e-suporte/contribuir-e-suporte.md
  - Repo é MIT público, já recebeu PRs de fora (#9, #11).
