---
title: "Instalar no seu computador"
description: "Guia completo para baixar e instalar o Carcará Code, o Node.js e o Git, resolver o aviso de segurança do Windows e deixar sua IA pronta para usar."
sidebar:
  order: 2
---

## Assista ao passo a passo

<div class="docs-video">
  <iframe
    src="https://www.youtube-nocookie.com/embed/MigLr1LFhm0"
    title="Como instalar o Carcará Code"
    loading="lazy"
    referrerpolicy="strict-origin-when-cross-origin"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>
</div>

O texto abaixo cobre tudo o que aparece no vídeo, com calma e por escrito.

## Pra que serve
O Carcará Code é o programa onde você abre vários projetos ao mesmo tempo e
conversa com uma inteligência artificial para construir cada um deles. Antes de
usar, você instala ele no computador, do mesmo jeito que instala qualquer outro
programa. É de graça, é rápido, e você só faz isso uma vez.

## O que você vai instalar
São três programas. Baixe os três primeiro e instale depois, assim você não fica
parado esperando um download terminar para começar o outro.

- **Carcará Code**: o programa em si. É pequeno, baixa e instala em pouco tempo.
- **Node.js**: a ferramenta que faz o seu projeto rodar ao vivo. É ela que liga
  aquele endereço `localhost` que mostra o site funcionando dentro do Carcará.
  Sem o Node, o preview não abre.
- **Git**: a ferramenta que guarda o histórico das versões do seu trabalho. Ele
  é o irmão do GitHub que fica no seu computador, e o GitHub precisa dele para
  funcionar.

Os três são gratuitos.

## Passo 1: baixar os arquivos
1. Abra o seu navegador (o programa que você usa para ver sites, como o Chrome
   ou o Edge) e entre em [carcaracode.net](https://carcaracode.net).
2. Clique no botão de download e escolha a versão do seu computador: Windows,
   Linux ou macOS (com opção para Mac Intel e Mac ARM).
3. O download começa. Deixe rolando e siga para o próximo item, o arquivo é
   pequeno e termina rápido.
4. Em outra aba, entre em [nodejs.org](https://nodejs.org/pt-br/download).
   Selecione o seu sistema (Windows, Mac ou Linux) e clique para baixar. Se
   aparecer escolha de versão, pegue a marcada como **LTS**, que é a mais
   estável.
5. Em mais uma aba, entre em [git-scm.com](https://git-scm.com/downloads) e
   clique em "Install for Windows" (ou no seu sistema). Ele mostra algumas
   opções, escolha a da sua máquina e baixe.

Agora você tem três arquivos na pasta de Downloads.

## Passo 2: instalar o Carcará
1. Clique no arquivo do Carcará que você baixou.
2. Pode aparecer uma tela do Windows dizendo que o programa não é seguro ou que
   veio de um "editor desconhecido". Isso é esperado, e a seção
   [Deu errado?](#deu-errado) explica o porquê e o que fazer.
3. Escolha instalar para todos os usuários e clique em "Próximo".
4. Ele mostra a pasta onde vai instalar. Clique em "Instalar".
5. Espere terminar. É bem rápido, mesmo em computador simples.
6. No fim, deixe marcada a opção de abrir o Carcará e clique em "Concluir".

## Passo 3: instalar o Git
1. Clique no arquivo do Git que você baixou e confirme em "Sim" quando o
   Windows perguntar.
2. Aparece a tela dos termos de uso. Clique em "Next".
3. Nas telas seguintes você não precisa mudar nada. Vá clicando em "Next" até o
   fim e depois em "Install". Quem usa essas configurações é a própria IA e o
   Carcará, e eles já sabem lidar com o padrão.
4. Se você programa e prefere outras opções, escolha as suas nessas mesmas
   telas.
5. Se você já tinha o Git instalado, ele oferece remover a versão antiga e
   colocar a nova. Pode aceitar.

## Passo 4: instalar o Node.js
1. Clique no arquivo do Node que você baixou e confirme em "Sim".
2. Vá clicando em "Next" até chegar em "Install". A instalação do Node é ainda
   mais simples que a do Git.
3. Espere terminar e clique em "Finish".

## Passo 5: reiniciar o computador
Quando você abre o Carcará pela primeira vez, aparece a tela "Vamos preparar seu
PC", com a lista de ferramentas e um selo do lado de cada uma.

Aqui acontece uma coisa que assusta: mesmo tendo acabado de instalar o Node e o
Git, os dois aparecem como não instalados. Está tudo certo. O Windows só passa a
enxergar as ferramentas novas depois que você reinicia.

1. Nessa tela, clique no botão de reiniciar o computador.
2. Espere o computador voltar e abra o Carcará de novo.
3. Os selos agora mostram "Instalado".

Se você fechou essa tela antes de terminar, ela não volta sozinha. Abra as
Configurações e vá na parte de Dependências, ou aperte as teclas Ctrl e K juntas
e escreva "Preparar meu PC". Tem mais detalhe em
[Preparar seu PC](/docs/primeiros-passos/preparar-pc/).

## Passo 6: instalar a IA (a CLI)
Com o Carcará instalado, falta a parte que faz o trabalho: a inteligência
artificial. Ela vem de um programa separado, chamado de **CLI**, que fica no seu
computador e conversa com o Carcará.

Você escolhe qual quer usar. As mais conhecidas são o Claude Code, o Codex, o
OpenCode e o Antigravity. Dá para instalar mais de uma e trocar depois.

1. Abra o Carcará.
2. No rail (a barra de projetos, na esquerda), clique no botão com o sinal de
   mais (+) e escolha "Pasta local".
3. Uma janela do computador abre. Procure uma pasta de projeto sua, selecione e
   confirme. Se você ainda não tem nenhuma, crie uma pasta vazia em qualquer
   lugar e use ela por enquanto.
4. O projeto aparece no rail. Clique nele para abrir.
5. Vá em Configurações, abra "Gerenciar IAs", clique nos três pontinhos ao lado
   da IA que você quer e escolha "Instalar". O Carcará mostra o comando oficial
   dela, já pronto. Também dá para pegar esse comando no site da própria IA, que
   costuma oferecer três versões: Mac, Windows PowerShell e Windows CMD. No
   Windows, use a do PowerShell.
6. Clique em "Colar no terminal". O comando aparece na telinha preta.
7. Aperte Enter e espere a instalação terminar.
8. Reinicie o computador mais uma vez. Esse passo é chato, mas é o que deixa
   tudo funcionando direito.

O passo a passo completo dessa tela está em
[Instalar e gerenciar as IAs](/docs/conversar-com-a-ia/gerenciar-ias/).

## Passo 7: começar a usar
1. Abra o Carcará e clique no seu projeto no rail.
2. Clique no sinal de mais (+) do chat para abrir uma conversa.
3. A IA que você instalou abre ali dentro. Escreva o que você quer e aperte
   Enter.

Daqui pra frente você pode pedir mudanças pelo chat, clicar num elemento do
preview para a IA mexer nele, aumentar e diminuir o tamanho da tela, salvar
versões com o Git, procurar erros e tirar prints, tudo pela mesma janela.

## Deu errado?

**O Windows disse que o programa não é seguro.**
O Carcará é novo e ainda não tem o certificado que o Windows usa para
reconhecer programas conhecidos. Não tem vírus nem nada de errado nele: o código
é aberto, e você pode ler tudo no
[repositório no GitHub](https://github.com/Yg0rAndrade/carcara-code). Quando
essa tela aparecer, clique em "Mais informações" e depois em "Executar assim
mesmo".

**Cliquei e o instalador não abriu.**
Instale pelo caminho do administrador:

1. No navegador, abra a lista de downloads e clique no ícone de pasta ao lado do
   arquivo do Carcará, em vez de clicar no nome dele. A pasta de Downloads abre.
2. Clique com o botão direito no arquivo.
3. No Windows 11, clique em "Mostrar mais opções". No Windows 10 as opções já
   aparecem direto.
4. Clique em "Executar como administrador" e confirme em "Sim".

**Instalei o Node e o Git, mas o Carcará diz que faltam.**
Reinicie o computador e abra o Carcará de novo. Se ainda faltar alguma, clique
em "Verificar de novo" na tela de Dependências.

**O terminal não abriu na hora de instalar a IA.**
Aparece uma mensagem dizendo o motivo. Feche a janela e tente outra vez. Se
insistir em não abrir, clique em "Copiar" e cole o comando num terminal do
próprio Windows, fora do Carcará.

## Dica
Ficou com dúvida em qualquer ponto? Clique na engrenagem do rail, vá em "Sobre &
créditos" e role até "Onde me encontrar". Ali estão o site, o e-mail, o GitHub,
o LinkedIn, o Instagram, o YouTube e o WhatsApp de quem fez o Carcará. Pode
chamar sem medo, inclusive no WhatsApp.
