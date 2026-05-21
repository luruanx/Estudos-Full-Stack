package com.baozistore.controller;

import com.baozistore.model.Pedido;
import com.baozistore.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pedidos")
public class PedidoController {

    @Autowired
    private PedidoRepository pedidoRepository;

    // POST /pedidos - Criar novo pedido
    @PostMapping
    public ResponseEntity<Pedido> criar(@RequestBody Pedido pedido) {
        Pedido salvo = pedidoRepository.save(pedido);
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

    // GET /pedidos - Listar todos os pedidos
    @GetMapping
    public ResponseEntity<List<Pedido>> listarTodos() {
        List<Pedido> pedidos = pedidoRepository.findAll();
        return ResponseEntity.ok(pedidos);
    }

    // GET /pedidos/{id} - Buscar pedido por ID
    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPorId(@PathVariable Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isPresent()) {
            return ResponseEntity.ok(pedido.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // PUT /pedidos/{id} - Atualizar pedido (opcional)
    @PutMapping("/{id}")
    public ResponseEntity<Pedido> atualizar(@PathVariable Long id, @RequestBody Pedido pedidoAtualizado) {
        if (!pedidoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        pedidoAtualizado.setId(id);
        Pedido salvo = pedidoRepository.save(pedidoAtualizado);
        return ResponseEntity.ok(salvo);
    }

    // DELETE /pedidos/{id} - Apagar pedido
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable Long id) {
        if (!pedidoRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        pedidoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
