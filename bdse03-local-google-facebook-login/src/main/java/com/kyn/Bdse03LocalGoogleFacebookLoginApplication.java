package com.kyn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.kyn.configuration.AppProperties;

@SpringBootApplication
@EnableConfigurationProperties (AppProperties.class)
public class Bdse03LocalGoogleFacebookLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(Bdse03LocalGoogleFacebookLoginApplication.class, args);
	}

}
