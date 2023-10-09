const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const { password, email } = event.currentTarget.elements;

  if (password.value === "" || email.value === "") {
    alert("Всі поля мають бути заповнені!!!");
  } else {
    console.table({
      email: email.value,
      password: password.value,
    });

    formRef.reset();
  }
}
