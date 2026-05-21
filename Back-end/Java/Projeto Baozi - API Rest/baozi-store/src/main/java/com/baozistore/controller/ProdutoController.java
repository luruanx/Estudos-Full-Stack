package com.baozistore.controller;

import com.baozistore.model.Produto;
import com.baozistore.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    // POST /produtos - Criar novo produto
    @PostMapping
    public ResponseEntity<Produto> criar(@RequestBody Produto produto) {
        Produto salvo = produtoRepository.save(produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

    // GET /produtos - Listar todos os produtos
    @GetMapping
    public ResponseEntity<List<Produto>> listarTodos() {
        List<Produto> produtos = produtoRepository.findAll();
        return ResponseEntity.ok(produtos);
    }

    // GET /produtos/{id} - Buscar produto por ID
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        Optional<Produto> produto = produtoRepository.findById(id);
        if (produto.isPresent()) {
            return ResponseEntity.ok(produto.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // PUT /produtos/{id} - Atualizar produto (opcional)
    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @RequestBody Produto produtoAtualizado) {
        if (!produtoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        produtoAtualizado.setId(id);
        Produto salvo = produtoRepository.save(produtoAtualizado);
        return ResponseEntity.ok(salvo);
    }

    // DELETE /produtos/{id} - Apagar produto
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable Long id) {
        if (!produtoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        produtoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
