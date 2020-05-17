
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

  // ширина слайда
  const width = 1200;

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

    if(sizes[i] === 0) num = 2;
    if(sizes[i] > 0 || sizes[i] < 0) num = 1;
    if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
    item.style.zIndex = num;
  });

  // гортаємо вліво
  left.addEventListener('click', () => {
    const element = sizes.pop();
    sizes.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if(sizes[i] === 0) num = 2;
      if(sizes[i] > 0 || sizes[i] < 0) num = 1;
      if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
      item.style.zIndex = num;
    });
  });

  // гортаємо вправо
  right.addEventListener('click', () => {
    const element = sizes.shift();
    sizes.push(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if(sizes[i] === 0) num = 2;
      if(sizes[i] > 0 || sizes[i] < 0) num = 1;
      if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
      item.style.zIndex = num;
    });
  });
  
  // autoscroll
  setInterval( () => {
    const element = sizes.pop();
    sizes.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${sizes[i]}px)`;

      if(sizes[i] === 0) num = 2;
      if(sizes[i] > 0 || sizes[i] < 0) num = 1;
      if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
      item.style.zIndex = num;
    });
  }, 3500);

  // keyboard 
  document.addEventListener('keydown', e => {
    if(e.key == "ArrowLeft" || e.code == "ArrowLeft"){
      const element = sizes.pop();
      sizes.unshift(element);
  
      items.forEach((item, i) => {
        item.style.transform = `translateX(${sizes[i]}px)`;
  
        if(sizes[i] === 0) num = 2;
        if(sizes[i] > 0 || sizes[i] < 0) num = 1;
        if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
        item.style.zIndex = num;
      });
    }
    if(e.key == "ArrowRight" || e.code == "ArrowRight"){
      const element = sizes.shift();
      sizes.push(element);
  
      items.forEach((item, i) => {
        item.style.transform = `translateX(${sizes[i]}px)`;
  
        if(sizes[i] === 0) num = 2;
        if(sizes[i] > 0 || sizes[i] < 0) num = 1;
        if(sizes[i] >= width*2 || sizes[i] <= -width*2) num = 0;
        item.style.zIndex = num;
      });
    }    
  });

}