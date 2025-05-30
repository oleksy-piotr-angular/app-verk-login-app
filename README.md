<h1>AppVerkLoginApp</h1>

<h2>List of fulfilled requirements:</h2>
<ul>
  <li>
    SCSS was used for styling
  </li>
  <li>
    Consistency in variable typing was maintained
  </li>
  <li>
    Consistency in access modifiers was maintained
  </li>
  <li>
    A Guard was created to block access for unauthorized users.
  </li>
  <li>
    A clear project organization structure was applied and divided into directories:
    <ul>
    <li>
      components
    </li>
    <li>
      dto
    </li>
    <li>
      guards
    </li>
    <li>
      mappers
    </li>
    <li>
      models
    </li>
    <li>
      pages
    </li>
    <li>
      services
    </li>
    <li>
      shared/validators
    </li>
    </ul>
  </li>
  <li>
      Lazy-loading was implemented in proper navigation
  </li>
  <li>
      Models and DTOs were utilized, and a static method was added for mapping data received in API responses
  </li>
  <li>
      A text field control component was created using the ControlValueAccessor interface
  </li>
  <li>
    A login page was created along with a form containing fields: email, password.
  </li>
  <li>
    Validation is implemented through a custom validator added during the dynamic form-building process
  </li>
  <li>
    In case of an error, an error-message-control component is displayed under the relevant input field. This component receives the form's AbstractControl and handles the appropriate errors anticipated during form validation.
  </li>
  <li>
    Custom styling for components was implemented: responsive containers and "display: flex" properties were used.
  </li>
  <li>
    Font files were placed locally in the project: the font was changed. The "Roboto" font was downloaded from Google Fonts. The "font-face" rule was defined as "Roboto". The "font-family" property for the root (html, body) was set to "Roboto".
  </li>
  <li>
    Commits are clear and written in English - yes
  </li>
  <li>
    Added form validation (all fields are required).
  </li>
  <li>
    Implemented a custom validator to check the email address pattern (did not use the native validator).
  </li>
  <li>
    For form fields, a custom text control component was prepared, which displays error messages under the relevant control in case of incorrect form completion.
  </li>
  <li>
    After successfully submitting the form, a successful user login was simulated by saving a random JWT token in local storage (generated for the task) and then redirecting the user to the main page.
  </li>
  <li>
    The login page and the main page were secured so that:
    <ul>
      <li>logged-in users cannot access the login page</li>
      <li>unauthorized users cannot access the main page</li>
    </ul>
  </li>
  <li>
    After successful login and navigation to the main page, data about the logged-in user is fetched from the API and displayed (the API here is a JSON file placed in the assets directory).
  </li>
</ul>
