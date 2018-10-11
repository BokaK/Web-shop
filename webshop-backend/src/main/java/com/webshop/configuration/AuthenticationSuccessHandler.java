package com.webshop.configuration;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.DefaultRedirectStrategy;
import org.springframework.security.web.RedirectStrategy;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@NoArgsConstructor
public class AuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();

    @Override
    protected String determineTargetUrl(HttpServletRequest request, HttpServletResponse response) {
        // Get the role of logged in user
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String role = auth.getAuthorities().toString();

        String targetUrl = "";
        if (role.contains("USER")) {
            targetUrl = "/admin/";
        } else if (role.contains("ADMIN")) {
            targetUrl = "/admin";
        }
        return targetUrl;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse,
                                        Authentication authentication) throws IOException, ServletException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String role = auth.getAuthorities().toString();

        String targetUrl = "";
        if (role.contains("USER")) {
            targetUrl = "/";
        } else if (role.contains("ADMIN")) {
            targetUrl = "/admin";
        }

        redirectStrategy.sendRedirect(httpServletRequest, httpServletResponse, targetUrl);
    }
}
