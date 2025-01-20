@Login

Feature: Inicio de sesion en aplicacion OrangeHRM

  Scenario: Inicio exitoso de sesion en OrangeHRM
    Given que estoy en la pagina de inicio de sesion
    When ingreso nombre de usuario y contraseña
    And hago clic en el boton "Login"
    Then soy redirigida a la pagina principal del aplicativo