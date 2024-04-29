const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  formData.email = event.currentTarget.email.value;
  formData.message = event.currentTarget.message.value;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

function populateStoredForm() {
  const savedFormData = localStorage.getItem(localStorageKey);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    const parsedEmail = parsedFormData.email;
    const parsedMessage = parsedFormData.message;

    form.elements.email.value = parsedEmail;
    form.elements.message.value = parsedMessage;
  }
}

populateStoredForm();

function onFormSubmit(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.email.value;
  const messageValue = event.currentTarget.message.value;
  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }

  formData.email = emailValue;
  formData.message = messageValue;
  console.log(formData);

  localStorage.removeItem(localStorageKey);
  event.currentTarget.reset();
}

form.addEventListener('submit', onFormSubmit);
