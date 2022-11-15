package com.kyn.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kyn.dao.Store;
import com.kyn.repository.StoreRepo;

@Service
@Transactional
public class StoreServiceImp implements StoreService {
	@Autowired
	private StoreRepo storeRepo;
	
	@Override
	public void postStore (Store store) {
		storeRepo.save(store);
	}
	
	@Override
	public List<Store> getStore(){
		return storeRepo.findAll();
	}
	
	@Override
	public List<Store> searchStoreByKeyword(String keyword){
		return storeRepo.searchStoreByKeyword(keyword);
	}
	
}
