package com.fmi.nedelev;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HotelsController {

    @GetMapping("/")
    public String hotels(Model model) throws Exception {
        // model.addAttribute("name", "name");
        return "hotels";
    }

}