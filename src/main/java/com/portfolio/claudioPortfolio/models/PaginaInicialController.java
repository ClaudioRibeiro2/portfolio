package com.portfolio.claudioPortfolio.models;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@org.springframework.stereotype.Controller // Faz que esta classe consiga lidar com requisições Web.
public class PaginaInicialController {
    @GetMapping("/") // Faz que o método só lide com requisições GET.
    public String irPaginaInicial(Model model) {
        return "paginaInicial";
    }
}
