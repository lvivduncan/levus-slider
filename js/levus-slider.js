
{
  // емулюю джейквері
  const $ = document.querySelectorAll.bind(document);

  // усі блоки з картинками
  const items = $('#levus-slider > div');

  // кнопка вліво
  const left = $('#levus-slider .left')[0];

  // кнопка вправо
  const right = $('#levus-slider .right')[0];

  // тут будемо зберігати усі розміри
  const array = [];

  // заповнюємо масив розмірами
  items.forEach((item, i) => {
    array.push(1200 * (i - 1));
  });

  // z-index
  let num = 0;

  // присвоюємо всім елементам конкретне значення зсуву
  items.forEach((item, i) => {
    item.style.transform = `translateX(${array[i]}px)`;

    if(array[i] === 0) num = 2;
    if(array[i] > 0 || array[i] < 0) num = 1;
    if(array[i] >= 1200*2 || array[i] <= -1200*2) num = 0;
    item.style.zIndex = num;
  });

  // гортаємо вліво
  left.addEventListener('click', () => {
    const element = array.pop();
    array.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${array[i]}px)`;

      if(array[i] === 0) num = 2;
      if(array[i] > 0 || array[i] < 0) num = 1;
      if(array[i] >= 1200*2 || array[i] <= -1200*2) num = 0;
      item.style.zIndex = num;
    });
  });

  // гортаємо вправо
  right.addEventListener('click', () => {
    const element = array.shift();
    array.push(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${array[i]}px)`;

      if(array[i] === 0) num = 2;
      if(array[i] > 0 || array[i] < 0) num = 1;
      if(array[i] >= 1200*2 || array[i] <= -1200*2) num = 0;
      item.style.zIndex = num;
    });
  });
  
}