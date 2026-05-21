package com.baozistore.controller;

import com.baozistore.model.Cliente;
import com.baozistore.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    // POST /clientes - Criar novo cliente
    @PostMapping
    public ResponseEntity<Cliente> criar(@RequestBody Cliente cliente) {
        Cliente salvo = clienteRepository.save(cliente);
        return ResponseEntity.status(HttpStatus.CREATED).body(salvo);
    }

    // GET /clientes - Listar todos os clientes
    @GetMapping
    public ResponseEntity<List<Cliente>> listarTodos() {
        List<Cliente> clientes = clienteRepository.findAll();
        return ResponseEntity.ok(clientes);
    }

    // GET /clientes/{id} - Buscar cliente por ID
    @GetMapping("/{id}")
    public ResponseEntity<Cliente> buscarPorId(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            return ResponseEntity.ok(cliente.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // PUT /clientes/{id} - Atualizar cliente (opcional)
    @PutMapping("/{id}")
    public ResponseEntity<Cliente> atualizar(@PathVariable Long id, @RequestBody Cliente clienteAtualizado) {
        if (!clienteRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        clienteAtualizado.setId(id);
        Cliente salvo = clienteRepository.save(clienteAtualizado);
        return ResponseEntity.ok(salvo);
    }

    // DELETE /clientes/{id} - Apagar cliente
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> apagar(@PathVariable Long id) {
        if (!clienteRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        clienteRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
