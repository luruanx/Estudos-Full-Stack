package com.aula01;

import io.restassured.http.ContentType;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Order;

import static io.restassured.RestAssured.*;

public class QueryTest {

    @Test
    @Order(1)
    @DisplayName("Valor via query")
    public void deveEnviarValorViaQuery() {
        given()
                .log().all()
        .when()
                .get("https://restapi.wcaquino.me/v2/users?format=json")
        .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.JSON)
        ;
    }

    @Test
    @Order(2)
    @DisplayName("Valor via query")
    public void deveEnviarValorViaQueryViaParam() {
        given()
                .log().all()
                .queryParam("format", "xml")
        .when()
                .get("https://restapi.wcaquino.me/v2/users")
        .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.XML)
        ;
    }

    @Test
    @Order(3)
    @DisplayName("Valor via query")
    public void deveEnviarValorViaHeader() {
        given()
                .log().all()
                .accept(ContentType.XML)
        .when()
                .get("https://restapi.wcaquino.me/v2/users")
        .then()
                .log().all()
                .statusCode(200)
                .contentType(ContentType.XML)
        ;
    }
}
