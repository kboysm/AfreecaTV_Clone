package com.bit.lsm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.bit.lsm.mapper.BoardMapper;

@Controller
public class BoardController {

	@Autowired
	BoardMapper mapper;
	
	@RequestMapping("test")
	public String test(Model model) {
		model.addAttribute("board",mapper.AllSelectBoard());
		return "test";
	}
}
