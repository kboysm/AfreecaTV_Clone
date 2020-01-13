package com.bit.lsm.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.bit.lsm.vo.BoardVO;

@Mapper
public interface BoardMapper {
	
	@Select("select * from board")
	public BoardVO AllSelectBoard();
}
