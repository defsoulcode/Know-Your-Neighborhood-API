package com.kyn.configuration;

import java.util.ArrayList;

public class OAuth2 {
	private ArrayList<String> authorizedRedirectUris = new ArrayList<>();

	public ArrayList<String> getAuthorizedRedirectUris() {
		return authorizedRedirectUris;
	}

	public OAuth2 setAuthorizedRedirectUris(ArrayList<String> authorizedRedirectUris) {
		this.authorizedRedirectUris = authorizedRedirectUris;
		return this;
	}
	
}