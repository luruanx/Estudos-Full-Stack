*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${URL}    https://www.amazon.com.br
${LOGO-MENU}    //a[@id='nav-logo-sprites']
${MENU-ELETRONICOS}    //a[contains(text(),'Eletrônicos')]
${HEADER-ELETRONICOS}    //span[contains(text(),'Navegue por categoria')]

*** Keywords ***
Abrir o navegador
    Open Browser    browser=chrome
options=add_experimental_option("detach", True)

Fechar o navegador
    Capture Page Screenshot
    Close Browser

# CASO TESTE 01
Acessar a home page do site Amazon.com.br
    Go To    url=${URL}
    Maximize Browser Window
    Sleep    10s
    Wait Until Element Is Visible    locator=${LOGO-MENU}

Entrar no menu "Eletrônicos"
    Click Element    locator=${MENU-ELETRONICOS}

Verificar se aparece a frase "${FRASE}"
    Wait Until Page Contains    text=${FRASE}
    Wait Until Element Is Visible    locator=${HEADER-ELETRONICOS}

Verificar se o título da página fica "${TITULO-ELET}"
    Title Should Be    title=${TITULO-ELET}

Verificar se aparece a categoria "${NOME-CATEG}"
    Element Should Be Visible    locator=//span[@class='a-size-base-plus'][normalize-space()='${NOME-CATEG}']
    
# CASO TESTE 02
Digitar o nome de produto "${NOME-PRODUTO}" no campo de pesquisa
    Input Text    locator=twotabsearchtextbox    text=${NOME-PRODUTO}

Clicar no botão de pesquisa
    Click Element    locator=nav-search-submit-button

Verificar o resultado da pesquisa, se está listando o "${NOME-PRODUTO}"
    Wait Until Element Is Visible    locator=//span[normalize-space()='${NOME-PRODUTO}']