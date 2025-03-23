const form = document.querySelector('.feedback-form');

// input event
form.addEventListener('input', event => {
  console.log(form.elements);

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // feedback-form-state
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email,
      message: message,
    })
  );
});

const formDataLocal = JSON.parse(localStorage.getItem('feedback-form-state'));

if (formDataLocal !== null) {
  form.elements.email.value = formDataLocal.email;
  form.elements.message.value = formDataLocal.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const email = form.elements.email.value;
  const message = form.elements.message.value;

  console.log({
    email: email,
    message: message,
  });

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
