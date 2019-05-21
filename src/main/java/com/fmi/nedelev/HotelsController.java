package com.fmi.nedelev;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class HotelsController {

    @GetMapping("/")
    public String index(Model model) {
        return "hotels";
    }

    @GetMapping("/hotels/{id}")
    public String hotels(@PathVariable("id") long id, Model model) {
        return "hotels";
    }
}