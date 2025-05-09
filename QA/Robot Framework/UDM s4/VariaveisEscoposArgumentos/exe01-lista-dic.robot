*** Settings ***
Documentation    1- Crie uma variável do tipo LISTA na seção de variáveis globais 
...              que contenha todos os meses do ano;
...              2- Crie um teste que imprima no Console (Log To Console) cada item 
...              dessa lista (não use FOR, imprima um a um).
...              3- Crie a mesma variável mas do tipo DICIONÁRIO.
...              4- Crie uma variável do tipo DICIONÁRIO na seção de variáveis globais
...              que contenha nela os meses do ano e, para cada mês, número de dias.
...              5- Crie um teste que imprima no Console (Log To Console) cada mês e
...              a sua respectiva quantidade de dias.
...              6- Rode os testes e confira se logou tudo certinho!

*** Variable ***
#Variável Global de Lista (arrays) dos meses do ano
@{MESES}    janeiro  fevereiro  março  abril  maio  junho  julho  agosto  setembro  outubro  novembro  dezembro

#Variável Global de Dicionário meses e quantidade de dias
&{MESESeDIAS}    mes0=janeiro  qtdias0=31
...    mes1=fevereiro   qtdias1=28
...    mes2=março       qtdias2=31
...    mes3=abril       qtdias3=30
...    mes4=maio        qtdias4=31
...    mes5=junho       qtdias5=30
...    mes6=julho       qtdias6=31
...    mes7=agosto      qtdias7=31
...    mes8=setembro    qtdias8=30
...    mes9=outubro     qtdias9=31
...    mes10=novembro   qtdias10=30
...    mes11=dezembro   qtdias11=31

*** Test Cases ***
Caso de teste do log
    Uma keyword de log
    Uma keyword de log mês e dias

*** Keywords ***
Uma keyword de log
    Log    mês: ${MESES[0]}
    Log    mês: ${MESES[1]}
    Log    mês: ${MESES[2]}
    Log    mês: ${MESES[3]}
    Log    mês: ${MESES[4]}
    Log    mês: ${MESES[5]}
    Log    mês: ${MESES[6]}
    Log    mês: ${MESES[7]}
    Log    mês: ${MESES[8]}
    Log    mês: ${MESES[9]}
    Log    mês: ${MESES[10]}
    Log    mês: ${MESES[11]}

Uma keyword de log mês e dias
    Log    Mês: ${MESESeDIAS.mes0} | Quantidade de dias: ${MESESeDIAS.qtdias0}
    Log    Mês: ${MESESeDIAS.mes1} | Quantidade de dias: ${MESESeDIAS.qtdias1}
    Log    Mês: ${MESESeDIAS.mes2} | Quantidade de dias: ${MESESeDIAS.qtdias2}
    Log    Mês: ${MESESeDIAS.mes3} | Quantidade de dias: ${MESESeDIAS.qtdias3}
    Log    Mês: ${MESESeDIAS.mes4} | Quantidade de dias: ${MESESeDIAS.qtdias4}
    Log    Mês: ${MESESeDIAS.mes5} | Quantidade de dias: ${MESESeDIAS.qtdias5}
    Log    Mês: ${MESESeDIAS.mes6} | Quantidade de dias: ${MESESeDIAS.qtdias6}
    Log    Mês: ${MESESeDIAS.mes7} | Quantidade de dias: ${MESESeDIAS.qtdias7}
    Log    Mês: ${MESESeDIAS.mes8} | Quantidade de dias: ${MESESeDIAS.qtdias8}
    Log    Mês: ${MESESeDIAS.mes9} | Quantidade de dias: ${MESESeDIAS.qtdias9}
    Log    Mês: ${MESESeDIAS.mes10} | Quantidade de dias: ${MESESeDIAS.qtdias10}
    Log    Mês: ${MESESeDIAS.mes11} | Quantidade de dias: ${MESESeDIAS.qtdias11}
