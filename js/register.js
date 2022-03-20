const signFormHandler = async (event) => {
    event.preventDefault();

    const password = document.querySelector('#password-signup').ariaValueMax.trim();
    const name = document.querySelector('#name-signup').ariaValueMax.trim();

    if (name && password) {
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ name, password }),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          document.location.replace('/');
        } else {
          alert(response.statusText);
        }
      }
    };
  
  
  document
      .querySelector('.signup-form')
      .addEventListener('submit', signupFormHandler);