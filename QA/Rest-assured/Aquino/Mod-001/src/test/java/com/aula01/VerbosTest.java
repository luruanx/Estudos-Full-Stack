package com.aula01;

import org.hamcrest.Matchers;
import org.junit.Test;
import org.junit.jupiter.api.*;

import static io.restassured.RestAssured.given;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

public class VerbosTest {

    @Test
    @Order(1)
    @DisplayName("Verbo Post")
    public void deveSalvarUsuario() {
        given()
                .log().all()
                .contentType("application/json")
                .body("{\"name\":\"Ruan\", \"age\": 27}")
        .when()
                .post("https://restapi.wcaquino.me/users")
        .then()
                .log().all()
                .statusCode(201)
                .body("name", Matchers.is("Ruan"));
    }

    @Test
    @Order(1)
    @DisplayName("Verbo Put")
    public void deveAlterarUsuario() {
        given()
                .log().all()
                .contentType("application/json")
                .body("{\"name\":\"Ruan\", \"age\": 27}")
        .when()
                .put("https://restapi.wcaquino.me/users/1")
        .then()
                .log().all()
                .statusCode(200);
    }
}
