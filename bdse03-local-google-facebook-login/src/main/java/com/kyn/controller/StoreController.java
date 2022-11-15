package com.kyn.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.dao.Store;
import com.kyn.service.StoreService;


@RestController
@RequestMapping(value = "/store")
public class StoreController {
	@Autowired
	private StoreService storeService;
	
	@PostMapping(value = "/saveStore")
	public void postStore(@RequestBody Store store) {
		storeService.postStore(store);
		System.out.println("All Store are saved into the database");
	}
	
	@GetMapping(value = "/allStore")
	public List<Store> getStore(){
		List<Store> stores = storeService.getStore();
		return stores;
	}
	
	@GetMapping(value = "/searchStore/{keyword}")
	public List<Store> searchByKey(@PathVariable("keyword") String keyword){
		List<Store> stores = storeService.searchStoreByKeyword(keyword);
		return stores;
	}

}
