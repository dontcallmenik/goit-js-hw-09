const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

let formData = {
  email: '',
  message: '',
};

// 1. загрузка из localStorage при старте
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  formData = JSON.parse(savedData);

  form.email.value = formData.email;
  form.message.value = formData.message;
}

// 2. делегирование

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value.trim();

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3  отправка формы
form.addEventListener('submit', event => {
  const { email, message } = formData;
  if (email === '' || message === '') {
    alert('Fill please all fields!');
    return;
  }
  console.log(formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    email: '',
    message: '',
  };
  form.reset();
});
