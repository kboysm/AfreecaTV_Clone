package com.bit.lsm.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BoardVO {
	private int boardNo;
	private String title;
	private String name;
	private String content;
	private int hits;
	
}
