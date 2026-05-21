package com.baozistore.repository;

import com.baozistore.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
    // O JpaRepository já fornece automaticamente:
    // save(), findById(), findAll(), deleteById(), existsById(), etc.
}
