# Informações do Projeto
`TÍTULO DO PROJETO`  

MindMate

`CURSO` 

Ciência da Computação

## Participantes

Os membros do grupo são:

- Daniel Victor Rocha Costa
- Felipe Bragança Godinho
- Maria Eduarda Pinto Martins
- Victor Ferraz de Moraes
- Vitor Alexandre Moreira Amaral

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A falta de ferramentas adequadas para ajudar e tratar pessoas com a doença de Alzheimer é um grande problema. As opções de tratamento atualmente disponíveis são limitadas e muitas vezes inalcançáveis para parte da população. Além disso, o suporte para os cuidadores e familiares desses pacientes também pode ser limitado, levando a altos níveis de estresse e sobrecarga emocional. O que leva a necessidade de criação de um sistema interativo onde os idosos poderão cuidar de sua saúde mental com facilidade e a comodidade de sua casa.

## Objetivos

O objetivo geral deste trabalho é a criação de um aplicativo que melhore a qualidade de vida daqueles com Alzheimer e também daqueles que convivem com os portadores da doença.
Como objetivos específicos, pode-se ressaltar:
Fornecer funcionalidades que permitam canais de comunicação com médicos especializados em saúde do idoso, sobretudo Alzheimer.
Oferecer exercícios cognitivos na forma de jogos virtuais que ajudem a estimular e manter as funções cognitivas, como memória, linguagem, atenção e pensamento abstrato.
Promover rotas de caminho à clínicas e hospitais perto da residência dos usuários.
Fornecer testes de nivelamento da doença, a fim de dar uma noção básica ao paciente, o mesmo, dependendo do resultado poderá procurar, ou não, ajuda profissional. 

## Justificativa

A Organização Mundial da Saúde (OMS) estima que aproximadamente 55 milhões de pessoas vivem com algum tipo de demência. A mais comum é a doença de Alzheimer, que afeta 7 em cada 10 pessoas em todo o mundo. A OMS alerta para uma preocupante tendência ascendente desses números à medida que a população envelhece. A Alzheimer's International, com sede no Reino Unido, estima que os casos globais podem chegar a 74,7 milhões em 2030 e 131,5 milhões em 2050.

Aqui no Brasil, cerca de 1,2 milhão de pessoas contraem a doença a cada ano, segundo dados do Ministério da Saúde, com 100 mil novos diagnósticos. Tais dados preocupantes evidenciam a necessidade de novas técnicas no combate ao agravamento da doença. Logo, o “MindMate” poderia ser uma ferramenta importante nesse combate oferecendo serviços que muitas pessoas no Brasil e no mundo não têm fácil acesso ou conhecimento, acerca das terapias, do acompanhamento médico, dos jogos, etc. 

## Público-Alvo

Pessoas que tenham ou suspeitam que possuem a doença de Alzheimer em seus vários níveis. Além disso, familiares, cuidadores e médicos que, em seu cotidiano, convivem com pessoas com tal enfermidade, também podem aproveitar as várias funcionalidades que o aplicativo pode oferecer.
 
# Especificações do Projeto

## Personas, Empatia e Proposta de Valor

> ![](images/Persona1.jpg)

> ![](images/Persona2.jpg)

> ![](images/Persona3.jpg)

> ![](images/Persona4.jpg)

> ![](images/Persona5.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Alan Ferreira       | receber cuidados/entretenimento    | melhora na qualidade de vida           |
|Carol Zaghetti      | Cuidar da pessoa, auxiliar no uso do app, fazer companhia e ajudar a compreender                 | Para ajudar o familiar portador de Alzheimer a ter uma qualidade de vida melhor |
|Felipe Zaghetti     | Cuidar de idosos, orientar o cuidador, indicar medicamentos, sugerir tratamentos e melhorias ao serviço | Ajudar idosos e pessoas com a doença |
|Rafael Lange        | Verificar se possui Alzheimer      | Para auxiliar no tratamento caso o pré-diagnóstico seja positivo |
|Gabriela Cattuzzo   | Ajuda no tratamento do Alzheimer por meios dos exercícios cognitivos | Forma de terapia ocupacional para melhorar a qualidade de vida |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O aplicativo deve indicar e sugerir medicamentos, profissionais e clínicas que possam ajudar na terapia. | ALTA | 
|RF-002| O aplicativo deve fornecer testes de nivelamento para descobrir o grau de Alzheimer de cada paciente.   | ALTA |
|RF-003| O aplicativo deve oferecer exercícios cognitivos na forma de jogos como forma de terapia ocupacional para cada usuário. | ALTA |
|RF-004| O aplicativo deve fornecer rotas para clínicas e hospitais perto da casa do usuário em casos de emergências. | ALTA |
|RF-005| O aplicativo deve possuir um sistema de chat interativo com os médicos e profissionais da saúde. | MÉDIA |
|RF-006| O aplicativo deve fornecer um guia de ajuda para os usuários. | MÉDIA |
|RF-007| O aplicativo deve ter uma tela para fazer login e cadastro. | MÉDIA |
|RF-008| O aplicativo deve possuir uma interface simples e de fácil uso. | BAIXA |
|RF-009| O aplicativo deve possuir um sistema de notificação funcional para os usuários. | BAIXA |
|RF-010| O aplicativo deve possuir uma área de edição de perfil para fotos, nome e senha. | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku);  | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA |
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade  |  MÉDIA |
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho. |

# Projeto de Interface

Dentre as preocupações para a montagem da interface do sistema, estamos estabelecendo foco em questões como agilidade, acessibilidade e usabilidade. Desta forma, o projeto tem uma identidade visual padronizada em todas as telas que são projetadas para funcionamento em desktops e dispositivos móveis.

## User Flow

> ![](images/FluxoUsuario.png)

## Wireframes

> ![](images/TelaInicial.jpeg)

> ![](images/TelaLogin.jpeg)

> ![](images/TelaAlterarSenha.jpeg)

> ![](images/Homepage.png)

> ![](images/TelaChat.jpeg)

> ![](images/TelaPerfil.jpeg)


# Metodologia

A metodologia contempla as definições de ferramental utilizado pela equipe tanto para a manutenção dos códigos e demais artefatos quanto para a organização do time na execução das tarefas do projeto.

## Divisão de Papéis

A equipe utiliza metodologias ágeis, tendo escolhido o Scrum como base para definição do processo de desenvolvimento.

A equipe está organizada da seguinte maneira:
- Scrum Master: Ilo Amy Saldanha Rivero
- Product Owner: Ilo Amy Saldanha Rivero
- Equipe de Desenvolvimento
- Daniel Victor Rocha Costa (Desenvolvedor Front End)
- Felipe Bragança Godinho  (Desenvolvedor Front End, Designer) 
- Maria Eduarda Pinto Martins (Desenvolvedor Front End, Analista de Negócios)
- Victor Ferraz de Moraes (Desenvolvedor Front End)
- Vitor Alexandre Moreira Amaral (Desenvolvedor Front End)


## Ferramentas

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/app/board/uXjVMT7eBnU=/ | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-mindmate | 
|Hospedagem do site | Replit |  https://mindmate.vferraz.repl.co | 
|Protótipo Interativo | MavelApp | https://marvelapp.com/prototype/9g597ab |

## Controle de Versão

Para gestão do código fonte do software desenvolvido pela equipe, o grupo utiliza um processo baseado no Git Feature Branch Workflow, mostrado na Figura a seguir. Desta forma, todas as manutenções no código são realizadas em branches separadas. Uma explicação rápida sobre este processo é apresentada no site "5 Git Workflows & Branching Strategy to deliver better code".

> ![Github-Workflow](images/Github-Workflow.png)

# Projeto da Solução

## Tecnologias Utilizadas

Foram utilizadas as linguagens HTML5, CSS3 e Javascript para o desenvolvimento web, com o auxílio do Framework Bootstrap para responsividade. Toda parte de desenvolvimento foi feito na IDE Visual Studio Code e a hospedagem foi feita utilizando o Replit.

## Arquitetura da solução

> ![](images/arquitetura.png)

A solução implementada conta com os seguintes módulos:
- Navegador - Interface básica do sistema 
- Páginas Web - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
- Local Storage - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
- Clínicas - local onde mostram as clínicas próximas.
- Maps - parte da qual o usuário pode ver onde estão as clínicas mais próximas de sua localidade atual.
- Login - área na qual tanto o usuário quanto o profissional da saúde podem criar e entrar em suas contas.
- Google Maps API - plataforma que permite o acesso às notícias exibidas no site.
- Hospedagem - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 


# Avaliação da Aplicação

O processo de realização dos testes da solução desenvolvida está documentado na seção que se segue e traz os planos de testes de software e de usabilidade, na sequência, o registro dos testes realizados.

## Plano de Testes

| Caso de Teste  | CT-01              |
|-----------|----------------------------------------|
|Requisitos associados  | RF-01 -Espaço para entrar na conta. Caso não tenha uma conta cadastrada. Aplica-se o RF2. RF-02 - Link para cadastro de conta. | 
|Objetivo do Teste | Verificar se com os dados passados para login o acesso a conta do usuário é permitido. | 
|Passos | 1) Acessar o Navegador 2) Informar na página de login usuário e senha 3) Ir para página de menu principal 4) Caso não tenha conta cadastrada, clique em criar conta. | 
|Critérios de Êxito | Deve haver uma requisição dos dados do usuário mantidos no navegador pelo Local storage. Em caso de criação de conta dados devem ser salvos em formato JSON para o local storage do navegador. Login efetuado com sucesso. Cadastro realizado com sucesso |

| Caso de Teste  | CT-02 - Visualizar menu              |
|-----------|----------------------------------------|
|Requisitos associados  | RF-03 - O site deve permitir ao usuário após realizar o login de acesso exibir o menu com as funcionalidades do app | 
|Objetivo do Teste | Verificar se após o login o usuário é direcionado para o menu | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu | 
|Critérios de Êxito | A página deve apresentar todas as funcionalidades contempladas pelo app. |

| Caso de Teste  | CT-03 - Funcionalidades da página principal              |
|-----------|----------------------------------------|
|Requisitos associados  | RF-04 - O site deve possibilitar ao usuário alterar seu dados, voltar para o menu, em caso de acesso a uma funcionalidade e entrar no canal de comunicação através de ícones na parte superior do site | 
|Objetivo do Teste | Verificar se os requisitos 04 estão de acordo com a proposta | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu 4)Escolher entre acessar Canal de Comunicação, voltar para o menu, ou clicar no ícone de usuário para alterar dados  | 
|Critérios de Êxito | A página responde ao comandos do usuário, direcionando ele para as respectivas páginas que ele deseja acessar |

> ![](images/CT1.png)

> ![](images/CT2.png)

> ![](images/CT3.png)

> ![](images/CT32.png)

## Registros de Testes

| Teste U-1  | TU1 - Teste para definir grau de Alzheimer              |
|-----------|----------------------------------------|
|Público  | Usuários que desejam ter uma noção em qual nível da doença se enquadram. | 
|Objetivo do Teste | Saber se após todas as perguntas o app informa com base nas respostas o nível em que o usuário se encontra. Após mostrar o nível, dar sugestões do que fazer. E na parte inferior possui um botão de refazer o quiz caso o usuário queira. | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu 4)Visualizar “Faça o teste” 5)Clicar em “Clique aqui” 6)Responder ao questionário 7)Ao final, caso queira refazer o teste clique em “refazer” | 

| Teste U-2  | TU2 - Exercícios Cognitivos              |
|-----------|----------------------------------------|
|Público  | Após a realização do teste, os usuários que quiserem podem jogar dentre 4 jogos disponíveis no site, cada um com objetivos diferentes. | 
|Objetivo do Teste | Confirmar se após clicar em “Clique aqui e comece a fazer” os usuários são direcionados para a página que contém os 4 jogos cognitivos. Além disso, saber se ao clicar no jogo desejado o usuário recebe uma mensagem acerca  dos benefícios que tal jogo tem para a mente. | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu 4)Visualizar “Clique aqui e comece a fazer” 5)Escolher um jogo e clica-lo 6)Clicar no link de acesso do jogo | 

| Teste U-3  | TU3 - Rotas para Clínicas              |
|-----------|----------------------------------------|
|Público  | Funcionalidade para o usuário que  deseja saber de locais próximos a sua residência que fornecem cuidados para pessoas com Alzheimer e as rotas para tal lugar. | 
|Objetivo do Teste | Confirmar se após clicar em “Clique aqui e encontre já” os usuários são direcionados para a página que contém espaço para eles digitarem seu cep, para que o mapa mostre os locais de cuidado próximos e as rotas possíveis. | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu 4)Visualizar “Clique aqui e encontre já” 5)Digitar o cep 6)Selecionar um local e clicar em rotas | 

| Teste U-4  | TU4 - Indicações Médicas              |
|-----------|----------------------------------------|
|Público  | Usuários que queiram saber de bons médicos e os locais que eles trabalham. | 
|Objetivo do Teste | Confirmar se após clicar em “Clique aqui para acessar” os usuários são direcionados para a página que contém n números de médicos recomendados, junto do endereço das clínicas que eles atendem | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu 4)Visualizar “Clique aqui para acessar” 5) Escolher um profissional e ver local do hospital ou clínica | 

| Teste U-5  | TU5 - Ajuda              |
|-----------|----------------------------------------|
|Público  | Usuários que tenham dúvidas sobre algo no site | 
|Objetivo do Teste | Levar os usuários para uma página de dúvidas frequentes | 
|Passos | 1) Acessar o Navegador 2) Entra na conta 3) Visualizar a página do menu 4)Visualizar campo “Ajuda” | 


# Referências

- Littlefield, A. Guia da metodologia ágil e scrum para iniciantes. 2016. Disponível em: https://blog.trello.com/br/scrum-metodologia-agil. Acessado em 26/05/2020.
- Canaltech, Televisão aumenta risco de Alzheimer em idosos. 2022. Disponível em: https://canaltech.com.br/saude/televisao-aumenta-risco-de-alzheimer-em-idosos-228144/. Acessado em 26/10/2022
- alz.org, Alzheimer e demência no Brasil. Disponível em: https://canaltech.com.br/saude/televisao-aumenta-risco-de-alzheimer-em-idosos-228144/. Acessado em 15/04/2023
