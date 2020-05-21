
{
  // основна обгортка
  const slider = document.querySelector('#levus-slider');

  // усі блоки з картинками
  let items = document.querySelectorAll('#levus-slider article');

  // робимо клони
  items.forEach(item => {
    const clone = item.cloneNode(true);
    slider.append(clone);
  });

  // і знову отримуємо усі слайди (з клонованими)
  items = document.querySelectorAll('#levus-slider article');

  // кнопка вліво
  const left = document.querySelector('#levus-slider-wrapper .left');

  // кнопка вправо
  const right = document.querySelector('#levus-slider-wrapper .right');

  // ширина вікна
  let viewport = window.innerWidth;

  window.addEventListener('resize', () => {
    viewport = window.innerWidth;
  });

  // ширина слайда
  let width = 1200;

  if (viewport > 1200) width = 1200;
  else width = viewport;

  // тут будемо зберігати усі розміри
  const sizes = [];

  // заповнюємо масив розмірами
  items.forEach((item, i) => {
    sizes.push(width * (i - 2));
  });

  // z-index
  let num = 0;

  // присвоюємо всім елементам конкретне значення зсуву
  items.forEach((item, i) => {
    item.style.transform = `translateX(${sizes[i]}px)`;

    if (sizes[i] === 0) num = 2;
    if (sizes[i] > 0 || sizes[i] < 0) num = 1;
    if (sizes[i] >= width * 2 || sizes[i] <= -width * 2) num = 0;
    item.style.zIndex = num;
    
    // показуємо текстовий контент тільки на активному слайді
    if (sizes[i] === 0) item.children[0].style.opacity = 1;
    else item.children[0].style.opacity = 0;
  });

  // гортаємо вліво
  left.addEventListener('click', () => {
    const element = sizes.pop();
    sizes.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if (sizes[i] === 0) num = 2;
      if (sizes[i] > 0 || sizes[i] < 0) num = 1;
      if (sizes[i] >= width * 2 || sizes[i] <= -width * 2) num = 0;
      item.style.zIndex = num;
      
      // показуємо текстовий контент тільки на активному слайді
      if (sizes[i] === 0) item.children[0].style.opacity = 1;
      else item.children[0].style.opacity = 0;
    });
  });

  // гортаємо вправо
  right.addEventListener('click', () => {
    const element = sizes.shift();
    sizes.push(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if (sizes[i] === 0) num = 2;
      if (sizes[i] > 0 || sizes[i] < 0) num = 1;
      if (sizes[i] >= width * 2 || sizes[i] <= -width * 2) num = 0;
      item.style.zIndex = num;
      
      // показуємо текстовий контент тільки на активному слайді
      if (sizes[i] === 0) item.children[0].style.opacity = 1;
      else item.children[0].style.opacity = 0;
    });
  });

  // autoscroll
  setInterval(() => {
    const element = sizes.pop();
    sizes.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if (sizes[i] === 0) num = 2;
      if (sizes[i] > 0 || sizes[i] < 0) num = 1;
      if (sizes[i] >= width * 2 || sizes[i] <= -width * 2) num = 0;
      item.style.zIndex = num;
      
      // показуємо текстовий контент тільки на активному слайді
      if (sizes[i] === 0) item.children[0].style.opacity = 1;
      else item.children[0].style.opacity = 0;
    });
  }, 3500);

  // keyboard 
  document.addEventListener('keydown', e => {
    if (e.key == "ArrowLeft" || e.code == "ArrowLeft") {
      const element = sizes.pop();
      sizes.unshift(element);

      items.forEach((item, i) => {
        item.style.transform = `translateX(${sizes[i]}px)`;

        if (sizes[i] === 0) num = 2;
        if (sizes[i] > 0 || sizes[i] < 0) num = 1;
        if (sizes[i] >= width * 2 || sizes[i] <= -width * 2) num = 0;
        item.style.zIndex = num;
        
        // показуємо текстовий контент тільки на активному слайді
        if (sizes[i] === 0) item.children[0].style.opacity = 1;
        else item.children[0].style.opacity = 0;
      });
    }
    if (e.key == "ArrowRight" || e.code == "ArrowRight") {
      const element = sizes.shift();
      sizes.push(element);

      items.forEach((item, i) => {
        item.style.transform = `translateX(${sizes[i]}px)`;

        if (sizes[i] === 0) num = 2;
        if (sizes[i] > 0 || sizes[i] < 0) num = 1;
        if (sizes[i] >= width * 2 || sizes[i] <= -width * 2) num = 0;
        item.style.zIndex = num;
        
        // показуємо текстовий контент тільки на активному слайді
        if (sizes[i] === 0) item.children[0].style.opacity = 1;
        else item.children[0].style.opacity = 0;
      });
    }
  });

}