const theme = {
    light: 'light-theme',
    dark: 'dark-theme',
  };
  // acces to html
  const refs = {
    body: document.querySelector('body'),
    themeSwitch: document.querySelector('.theme-switch__toggle'),
  };
  // change and save in  localStorage
  console.log(theme);

  refs.themeSwitch.addEventListener('change', e => {
    if (e.target.checked) {
      refs.body.classList.replace(theme.light, theme.dark);
      localStorage.setItem('theme', theme.dark);
    } else {
      refs.body.classList.replace(theme.dark, theme.light);
      localStorage.setItem('theme', theme.light);
    }
  });
  
  console.log(localStorage)
  // reload data fron localStorage
  const savedtheme = localStorage.getItem('theme');
  
  if (savedtheme === theme.light) {
    refs.body.classList.add(theme.light);
  } else {
    
    refs.body.classList.add(theme.dark);
    refs.themeSwitch.checked = true;
  }