package com.snail;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.boot.builder.SpringApplicationBuilder;

@EnableOAuth2Sso
@SpringBootApplication
public class MrCar {
    public static void main(String[] args) {
        new SpringApplicationBuilder(MrCar.class).run(args);
    }
}
