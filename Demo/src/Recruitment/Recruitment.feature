Feature: Realizar el proceso de contratacion de un candidato en OrangeHRM

  @Recruitment
    Scenario: Ingresar al formulario para diligenciar datos del candidato
      Given que estoy en la pagina principal del aplicativo despues de loguearme
      When hago clic en el boton "Recruitment"
      Then tengo habilitadas las opciones para ingresar datos del candidato

  @RecruitmentCandForm
    Scenario: Diligenciar datos de la vacante
      Given que estoy en la opcion "Candidates"
      When requiero seleccionar el titulo profesional
      And selecciono de la lista la opcion "Financial Analyst"
      When requiero seleccionar la vacante
      And selecciono de la lista la opcion "Junior Account Assistant"