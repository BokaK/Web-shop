package com.webshop.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import javax.sql.DataSource;


@Configuration
@EnableWebSecurity
@ComponentScan
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private DataSource dataSource;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();

//        http.csrf().disable()
//                .authorizeRequests()
//                .antMatchers("/admin/**").hasAnyRole("ADMIN", "USER")
//                .antMatchers("/user/**").hasRole("USER")
//                .antMatchers("/login").permitAll()
//                .antMatchers("/*.js").permitAll()
//                .anyRequest()
//                .authenticated()
//                .and()
//                .formLogin()
//                .loginPage("/login")
//                //.defaultSuccessUrl("/afterLogin")
//                .successHandler(authenticationSuccessHandler())
//                .usernameParameter("username")
//                .passwordParameter("password");
    }

    @Override
    public void configure(AuthenticationManagerBuilder builder)
            throws Exception {
        builder.jdbcAuthentication().dataSource(dataSource)
                .usersByUsernameQuery("select username, password, enabled"
                        + " from user where username=?")
                .authoritiesByUsernameQuery("select username, type "
                        + "from user where username=?")
                .passwordEncoder(new BCryptPasswordEncoder());
    }

    @Bean
    AuthenticationSuccessHandler authenticationSuccessHandler() {
        return new AuthenticationSuccessHandler();
    }

}