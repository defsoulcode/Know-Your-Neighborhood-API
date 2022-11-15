package com.kyn.service;

import java.util.List;

import com.kyn.dao.Store;

public interface StoreService {

	public void postStore(Store store);

	public List<Store> getStore();

	public List<Store> searchStoreByKeyword(String keyword);

}
