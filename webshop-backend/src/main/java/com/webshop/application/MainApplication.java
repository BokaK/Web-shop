package com.webshop.application;

import com.webshop.WebShopComponents;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Run (start) the application.
 */
@EntityScan("com.webshop.model")
@EnableJpaRepositories("com.webshop.persistence")
@ComponentScan(basePackageClasses = WebShopComponents.class)
@SpringBootApplication
public class MainApplication {

  public static void main(String[] args) {
    SpringApplication.run(MainApplication.class, args);
  }
}
