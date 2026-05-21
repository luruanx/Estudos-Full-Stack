# 🥟 Baozi Store — API REST

API REST para controle de clientes, produtos e pedidos de uma loja de pão chinês, desenvolvida com Java e Spring Boot.

## Tecnologias

- Java 17
- Spring Boot 3.2
- Spring Data JPA
- Banco H2 (em memória)
- Maven

## Como rodar

**Pré-requisitos:** Java 17 e Maven instalados.

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/baozi-store.git
cd baozi-store

# Rode o projeto
mvn spring-boot:run
```

A API estará disponível em `http://localhost:8080`.

## Endpoints

### Cliente
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/clientes` | Cadastrar cliente |
| GET | `/clientes` | Listar todos |
| GET | `/clientes/{id}` | Buscar por ID |
| PUT | `/clientes/{id}` | Atualizar |
| DELETE | `/clientes/{id}` | Apagar |

### Produto
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/produtos` | Cadastrar produto |
| GET | `/produtos` | Listar todos |
| GET | `/produtos/{id}` | Buscar por ID |
| PUT | `/produtos/{id}` | Atualizar |
| DELETE | `/produtos/{id}` | Apagar |

### Pedido
| Método | Rota | Descrição |
|--------|------|-----------|
| POST | `/pedidos` | Registrar pedido |
| GET | `/pedidos` | Listar todos |
| GET | `/pedidos/{id}` | Buscar por ID |
| PUT | `/pedidos/{id}` | Atualizar |
| DELETE | `/pedidos/{id}` | Apagar |

## Exemplos de uso

**Criar cliente:**
```json
POST /clientes
{
  "nome": "Ruan4176980",
  "clienteDesde": "2024-01-15"
}
```

**Criar produto:**
```json
POST /produtos
{
  "nome": "Baozi de Carne",
  "preco": 8.50,
  "estoque": true
}
```

**Registrar pedido:**
```json
POST /pedidos
{
  "clienteId": 1,
  "produtoId": 1,
  "quantidade": 3
}
```

## Estrutura do projeto

```
src/main/java/com/baozistore/
├── BaoziStoreApplication.java
├── model/
│   ├── Cliente.java
│   ├── Produto.java
│   └── Pedido.java
├── repository/
│   ├── ClienteRepository.java
│   ├── ProdutoRepository.java
│   └── PedidoRepository.java
└── controller/
    ├── ClienteController.java
    ├── ProdutoController.java
    └── PedidoController.java
```

> **Nota:** O banco H2 é em memória — os dados são resetados ao reiniciar o servidor. Para acessar o console do banco: `http://localhost:8080/h2-console`
