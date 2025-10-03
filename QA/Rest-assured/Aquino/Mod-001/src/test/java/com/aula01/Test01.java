package com.aula01;

import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.jupiter.api.*;

import java.util.Arrays;
import java.util.List;

import static io.restassured.RestAssured.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

public class Test01 {
    @Test
    @Order(1)
    @DisplayName("OláMundo")
    public void teste001OlaMundo() {
        Response response = request(Method.GET,"https://restapi.wcaquino.me/ola");
        ValidatableResponse validacao = response.then();
        validacao.statusCode(200);

        get("https://restapi.wcaquino.me/ola").then().statusCode(200);

        given()
                .when()
                .get("https://restapi.wcaquino.me/ola")
                .then()
                .assertThat()
                .statusCode(200);
    }

    @Test
    @Order(2)
    @DisplayName("Matchers Hamcrest")
    public void matchersHamcrest() {
        Assert.assertThat("Maria", Matchers.is("Maria")); //Verifica se é igual
        Assert.assertThat( 128, Matchers.isA(Integer.class)); //Verifica o tipo
        Assert.assertThat(128, Matchers.greaterThan(120)); //Verifica se o valor 1 é maior
        Assert.assertThat(128, Matchers.lessThan(130)); //Verifica se o valor 1 é menor

        List<Integer> impares = Arrays.asList(1,3,5,7,9);
        Assert.assertThat(impares, Matchers.hasSize(5)); //Verifica o tamanho da lista
        Assert.assertThat(impares, Matchers.contains(1,3,5,7,9)); //Verifica se na lista contem todos os valores
        Assert.assertThat(impares, Matchers.containsInAnyOrder(1,3,5,7,9)); //Verifica se na lista contem todos os valores em qualquer ordem
        Assert.assertThat(impares, Matchers.hasItem(1)); //Verifica se a lista contem o número
        Assert.assertThat(impares, Matchers.hasItems(1,5)); //Verifica se a lista com os números

        Assert.assertThat("Maria", Matchers.not("João")); //Verifica se os valores não são iguais
        Assert.assertThat("Maria", Matchers.anyOf(Matchers.is("Maria"), Matchers.is("João"))); //Verifica se o valor 1 é igual a qualquer um dos valores 2

    }
}
