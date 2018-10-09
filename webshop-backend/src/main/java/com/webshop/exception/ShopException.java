package com.webshop.exception;

/**
 * Wrapper for every exception that is thrown.
 */
public class ShopException extends RuntimeException {

  /**
   * Constructor.
   * @param message the error message
   */
  public ShopException(String message) {
    super(message);
  }

  /**
   * Constructor.
   *
   * @param message the exception message
   * @param cause the cause of the exception
   */
  public ShopException(String message, Throwable cause) {
    super(message, cause);
  }

  /**
   * Constructor.
   *
   * @param cause the cause of the exception
   */
  public ShopException(Throwable cause) {
    super(cause);
  }

}

