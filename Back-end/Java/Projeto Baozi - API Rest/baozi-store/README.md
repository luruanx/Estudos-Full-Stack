# 🥟 Baozi Store — API REST com Spring Boot

## O que é esse projeto?
Uma API REST para controle de **Clientes**, **Produtos** e **Pedidos** da Baozi Store (loja de pão chinês).

---

## ✅ PRÉ-REQUISITOS (instale antes de tudo)

### 1. Java 17 (ou superior)
- Acesse: https://adoptium.net/
- Clique em **"Latest LTS Release"** → baixe e instale
- Para verificar: abra o terminal e digite:
  ```
  java -version
  ```
  Deve aparecer algo como: `openjdk version "17.x.x"`

### 2. Maven
- Acesse: https://maven.apache.org/download.cgi
- Baixe o **"Binary zip archive"**
- Extraia e adicione ao PATH do sistema
- Para verificar:
  ```
  mvn -version
  ```

### 3. Postman
- Acesse: https://www.postman.com/downloads/
- Baixe e instale a versão gratuita (desktop)

---

## 🚀 COMO RODAR O PROJETO

### Passo 1 — Abra o terminal na pasta do projeto
- Windows: clique com botão direito dentro da pasta `baozi-store` → "Abrir no Terminal"
- Mac/Linux: `cd caminho/para/baozi-store`

### Passo 2 — Compile e rode o projeto
```bash
mvn spring-boot:run
```
Aguarde aparecer no terminal:
```
Started BaoziStoreApplication in X.XXX seconds
```
✅ Servidor rodando na porta **8080**!

### Passo 3 — Confirme que está funcionando
Abra o navegador e acesse:
```
http://localhost:8080/clientes
```
Deve retornar: `[]` (lista vazia — normal, ainda não tem dados)

---

## 🔧 TESTANDO COM O POSTMAN

### ── CLIENTES ──

#### 📌 POST — Criar Cliente
- **Método:** POST
- **URL:** `http://localhost:8080/clientes`
- **Body → raw → JSON:**
```json
{
  "nome": "SeuNome123456",
  "clienteDesde": "2024-01-15"
}
```
- **Resultado esperado:** Status `201 Created` com o cliente criado e um `id` gerado

---

#### 📌 GET — Listar todos os clientes
- **Método:** GET
- **URL:** `http://localhost:8080/clientes`
- **Resultado esperado:** Status `200 OK` com lista de clientes

---

#### 📌 GET — Buscar cliente por ID
- **Método:** GET
- **URL:** `http://localhost:8080/clientes/1`
- **Resultado esperado:** Status `200 OK` com dados do cliente de ID 1

---

#### 📌 DELETE — Apagar cliente
- **Método:** DELETE
- **URL:** `http://localhost:8080/clientes/1`
- **Resultado esperado:** Status `204 No Content`

---

### ── PRODUTOS ──

#### 📌 POST — Criar Produto
- **Método:** POST
- **URL:** `http://localhost:8080/produtos`
- **Body → raw → JSON:**
```json
{
  "nome": "Baozi de Carne",
  "preco": 8.50,
  "estoque": true
}
```
- **Resultado esperado:** Status `201 Created`

---

#### 📌 GET — Listar todos os produtos
- **Método:** GET
- **URL:** `http://localhost:8080/produtos`

---

#### 📌 GET — Buscar produto por ID
- **Método:** GET
- **URL:** `http://localhost:8080/produtos/1`

---

#### 📌 DELETE — Apagar produto
- **Método:** DELETE
- **URL:** `http://localhost:8080/produtos/1`

---

### ── PEDIDOS ──

> ⚠️ Antes de criar um pedido, crie um cliente e um produto primeiro!

#### 📌 POST — Criar Pedido
- **Método:** POST
- **URL:** `http://localhost:8080/pedidos`
- **Body → raw → JSON:**
```json
{
  "clienteId": 1,
  "produtoId": 1,
  "quantidade": 3
}
```
- **Resultado esperado:** Status `201 Created`

---

#### 📌 GET — Listar todos os pedidos
- **Método:** GET
- **URL:** `http://localhost:8080/pedidos`

---

#### 📌 GET — Buscar pedido por ID
- **Método:** GET
- **URL:** `http://localhost:8080/pedidos/1`

---

#### 📌 DELETE — Apagar pedido
- **Método:** DELETE
- **URL:** `http://localhost:8080/pedidos/1`

---

## 💡 DICA: COMO TIRAR PRINT NO POSTMAN

1. Faça a requisição
2. O resultado aparece no painel de baixo
3. Pressione `Print Screen` ou use uma ferramenta de captura
4. Certifique-se que o print mostra:
   - A URL
   - O método (GET/POST/etc)
   - O Body (quando for POST)
   - O resultado com o Status Code (201, 200, 204, etc)

---

## 🗂️ ESTRUTURA DO PROJETO

```
baozi-store/
├── pom.xml                          ← Dependências Maven
└── src/main/
    ├── java/com/baozistore/
    │   ├── BaoziStoreApplication.java   ← Classe principal
    │   ├── model/
    │   │   ├── Cliente.java             ← Entidade Cliente
    │   │   ├── Produto.java             ← Entidade Produto
    │   │   └── Pedido.java              ← Entidade Pedido
    │   ├── repository/
    │   │   ├── ClienteRepository.java   ← Acesso ao banco
    │   │   ├── ProdutoRepository.java
    │   │   └── PedidoRepository.java
    │   └── controller/
    │       ├── ClienteController.java   ← Endpoints REST
    │       ├── ProdutoController.java
    │       └── PedidoController.java
    └── resources/
        └── application.properties      ← Configurações
```

---

## 🔍 ENDPOINTS RESUMO

| Entidade | Método | URL               | Ação            |
|----------|--------|-------------------|-----------------|
| Cliente  | POST   | /clientes         | Criar           |
| Cliente  | GET    | /clientes         | Listar todos    |
| Cliente  | GET    | /clientes/{id}    | Buscar por ID   |
| Cliente  | PUT    | /clientes/{id}    | Atualizar       |
| Cliente  | DELETE | /clientes/{id}    | Apagar          |
| Produto  | POST   | /produtos         | Criar           |
| Produto  | GET    | /produtos         | Listar todos    |
| Produto  | GET    | /produtos/{id}    | Buscar por ID   |
| Produto  | PUT    | /produtos/{id}    | Atualizar       |
| Produto  | DELETE | /produtos/{id}    | Apagar          |
| Pedido   | POST   | /pedidos          | Criar           |
| Pedido   | GET    | /pedidos          | Listar todos    |
| Pedido   | GET    | /pedidos/{id}     | Buscar por ID   |
| Pedido   | PUT    | /pedidos/{id}     | Atualizar       |
| Pedido   | DELETE | /pedidos/{id}     | Apagar          |

---

## ❗ PROBLEMAS COMUNS

**Erro: `java: não reconhecido`**
→ Java não está instalado ou não está no PATH. Reinstale pelo Adoptium.

**Erro: `mvn: não reconhecido`**
→ Maven não está no PATH. Verifique a instalação.

**Porta 8080 em uso**
→ Mude no `application.properties`: `server.port=8081`

**Dados somem ao reiniciar**
→ Normal! O H2 é banco em memória. Os dados existem apenas enquanto o servidor está rodando.
