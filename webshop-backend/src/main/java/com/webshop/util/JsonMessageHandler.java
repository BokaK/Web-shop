package com.webshop.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.webshop.exception.ShopException;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@AllArgsConstructor
public class JsonMessageHandler {

    private final ObjectMapper objectMapper;

    public String writeJson(Object object) {
        String json;
        try {
            json = objectMapper.writeValueAsString(object);
        } catch (JsonProcessingException e) {
            throw new ShopException("Serialization failed.", e);
        }
        return json;
    }

    public Object readJson(String json, Class objectClass) {
        Object object;
        try {
            object = objectMapper.readValue(json, objectClass);
        } catch (IOException e) {
            throw new ShopException("Deserialization failed.", e);
        }
        return object;
    }
}
