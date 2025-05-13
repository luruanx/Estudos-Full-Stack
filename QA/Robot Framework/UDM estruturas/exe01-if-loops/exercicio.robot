*** Settings ***
Documentation    1- Declare uma variável do tipo lista com vários números.
...              2- Crie uma keyword que percorra essa lista usando o FOR
...              3- Dentro do FOR, faça um bloco IF que imprima no Log a frase 
...              "Eu sou o número 5!" e "Eu sou o número 10!", imprimir quando for 5 ou 10.
...              4- Use o ELSE para imprimir no Log a frase "Eu não sou o número 5 e nem o 10!"

*** Variables ***
@{NUMEROS}    1  2  3  4  5  6  7  8  9  10

*** Test Cases ***
Teste imprimindo numéros específicos
    Imprimir apenas se for 5 ou 10

*** Keywords ***
Imprimir apenas se for 5 ou 10
    Log To Console    ${\n}
    FOR    ${NUM}    IN    @{NUMEROS}
        IF    ${NUM} == 5
            Log    message=Eu sou o número 5!
        ELSE IF   ${NUM} == 10
            Log    message=Eu sou o número 10!
        ELSE   
            Log    message=Eu não sou o número 5 e nem o 10!
        END
    END
    