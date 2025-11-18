package com.aula01;

import io.restassured.RestAssured;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.filter.log.LogDetail;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.jupiter.api.*;

import java.util.Arrays;
import java.util.List;

import static io.restassured.RestAssured.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

public class Test01 {

    public static RequestSpecification reqSpec;
    public static ResponseSpecification resSpec;

    @BeforeAll
    public static void setup() {
        baseURI = "https://restapi.wcaquino.me/";
//        port = 443;
//        basePath = "";

        RequestSpecBuilder reqBuilder = new RequestSpecBuilder();
        reqBuilder.log(LogDetail.ALL);
        reqSpec = reqBuilder.build();

        ResponseSpecBuilder resBuilder = new ResponseSpecBuilder();
        resBuilder.expectStatusCode(200);
        resSpec = resBuilder.build();

        requestSpecification = reqSpec;
        responseSpecification = resSpec;
    }

    @Test
    @Order(1)
    @DisplayName("OláMundo")
    public void teste001OlaMundo() {
        Response response = request(Method.GET, "/ola");
        ValidatableResponse validacao = response.then();
        // validacao.statusCode(200);      Adicionado no beforeAll

        get("/ola").then().statusCode(200);

        RestAssured.given()
                .when()
                .get("/ola")
                .then()
                .assertThat()
                .statusCode(200);
    }

    @Test
    @Order(2)
    @DisplayName("Matchers Hamcrest")
    public void matchersHamcrest() {
        Assert.assertThat("Maria", Matchers.is("Maria")); //Verifica se é igual
        Assert.assertThat(128, Matchers.isA(Integer.class)); //Verifica o tipo
        Assert.assertThat(128, Matchers.greaterThan(120)); //Verifica se o valor 1 é maior
        Assert.assertThat(128, Matchers.lessThan(130)); //Verifica se o valor 1 é menor

        List<Integer> impares = Arrays.asList(1, 3, 5, 7, 9);
        Assert.assertThat(impares, Matchers.hasSize(5)); //Verifica o tamanho da lista
        Assert.assertThat(impares, Matchers.contains(1, 3, 5, 7, 9)); //Verifica se na lista contem todos os valores
        Assert.assertThat(impares, Matchers.containsInAnyOrder(1, 3, 5, 7, 9)); //Verifica se na lista contem todos os valores em qualquer ordem
        Assert.assertThat(impares, Matchers.hasItem(1)); //Verifica se a lista contem o número
        Assert.assertThat(impares, Matchers.hasItems(1, 5)); //Verifica se a lista com os números

        Assert.assertThat("Maria", Matchers.not("João")); //Verifica se os valores não são iguais
        Assert.assertThat("Maria", Matchers.anyOf(Matchers.is("Maria"), Matchers.is("João"))); //Verifica se o valor 1 é igual a qualquer um dos valores 2

    }

    @Test
    @Order(2)
    @DisplayName("validarBody")
    public void devoValidarBody() {
        given()
                .when()
                .get("/ola")
                .then()
//                .statusCode(200)        Adicionado no beforeAll
                .body(Matchers.is("Ola Mundo!"))
                .body(Matchers.containsString("Mundo"))
                .body(Matchers.not(Matchers.nullValue()));
    }

    @Test
    @Order(3)
    @DisplayName("JSON Users")
    public void verificarPrimeiroNivel() {
        given()
                .when()
                .get("/users/1")
                .then()
//                .statusCode(200)        Adicionado no beforeAll
                .body("id", Matchers.is(1))
                .body("name", Matchers.containsString("Silva"))
                .body("age", Matchers.greaterThan(18));
    }

    @Test
    @Order(4)
    @DisplayName("JSON Users nível 2")
    public void verificarPrimeiroNivelOutrasFormas() {
        given()
                .when()
                .get("/users/2")
                .then()
//                .statusCode(200)        Adicionado no beforeAll
                .body("name", Matchers.containsString("Joaquina"))
                .body("endereco.rua", Matchers.is("Rua dos bobos"));
    }

    @Test
    @Order(5)
    @DisplayName("JSON Lista")
    public void verificarLista() {
        given()
                .when()
//                .log().all()           Adicionado no beforeAll
                .get("/users/3")
                .then()
//                .statusCode(200)        Adicionado no beforeAll
                .body("name", Matchers.containsString("Ana"))
                .body("filhos", Matchers.hasSize(2))
                .body("filhos[0].name", Matchers.is("Zezinho"));
    }
}
