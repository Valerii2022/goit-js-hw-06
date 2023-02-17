const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  if (
    event.currentTarget.elements.password.value === "" ||
    event.currentTarget.elements.email.value === ""
  ) {
    alert("Всі поля мають бути заповнені!!!");
  } else {
    const {
      elements: {
        email: { name, value },
        password,
      },
    } = event.currentTarget;

    console.table ({
      [name]: [value],
      [password.name]: [password.value],
    });

    event.currentTarget.reset();
  }
}
