package com.webshop.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Global exception handler.
 */
@ControllerAdvice
@Slf4j
@ResponseBody
public class ShopExceptionHandler {

  /**
   * Handler for all Shop exceptions.
   *
   * @param e the exception
   */
  @ExceptionHandler(ShopException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  public String handleShopException(Exception e) {
    log.error("Error: ", e);
    return e.getMessage();
  }
}
