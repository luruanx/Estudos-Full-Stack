*** Settings ***
Documentation    1- Cria uma nova keyword, onde ela nos produzirá um e-mail customizado com
...              as seguintes regras:
...               - Essa keyword deve receber por argumento o nome e sobrenome de uma pessoa
...               - Essa keyword deve gerar uma palavra aleatória que será usada na
...               composição do e-mail
...               - Junte o nome + sobrenome + palavra aleatória + @testerobot.com e retorne
...               esse e-mail montado ao final da keyword.
...              2- Crie um teste que vai chamar essa keyword, passar os argumentos esperados
...              e armazenar o valor retornado em uma nova variável simples;
...              3- Faça um Log To Console para imprimir essa variável simples.
Library    String

*** Variables ***
&{PESSOA}    nome=Ruan    sobrenome=Richard    idade=26

*** Test Cases ***
Case mostrar resultado do email
    ${EMAIL}    keyword cria email    ${PESSOA.nome}  ${PESSOA.sobrenome}
    Log To Console    ${EMAIL}
    

*** Keywords ***
keyword cria email
    [Arguments]        ${NOME}    ${SOBRENOME}
    ${ALEATORIA}       Generate Random String
    ${EMAIL-CRIADO}    Set Variable    ${NOME}${SOBRENOME}${ALEATORIA}@testerobot.com
    [Return]           ${EMAIL-CRIADO}