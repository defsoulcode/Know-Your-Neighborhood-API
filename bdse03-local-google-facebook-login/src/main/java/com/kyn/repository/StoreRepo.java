package com.kyn.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.kyn.dao.Store;


@Repository
public interface StoreRepo extends JpaRepository<Store, Integer>{
	 @Query(value = "SELECT s FROM Store s WHERE s.name LIKE '%' || :keyword || '%'"
				+ " OR s.localities LIKE '%' || :keyword || '%'")
		public List<Store> searchStoreByKeyword(@Param("keyword") String keyword);
	
}
