
{
  // емулюю джейквері
  const $ = document.querySelectorAll.bind(document);

  // усі блоки з картинками
  const items = $('#levus-slider > div');

  // кнопка вліво
  const left = $('#levus-slider .left')[0];

  // кнопка вправо
  const right = $('#levus-slider .right')[0];

  /* // отримуємо ширину екрану
  const windowWidth = document.documentElement.clientWidth; */

  // тут будемо зберігати усі розміри
  const array = [];

  // заповнюємо масив розмірами
  items.forEach((item, i) => {
    array.push(1200 * (i - 1));
  });

  console.log(array)


  // присвоюємо всім елементам конкретне значення зсуву
  items.forEach((item, i) => {
    item.style.transform = `translateX(${array[i]}px)`;
  });

  // гортаємо вліво
  left.addEventListener('click', () => {
    const element = array.pop();
    array.unshift(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${array[i]}px)`;
    });
  });

  // гортаємо вправо
  right.addEventListener('click', () => {
    const element = array.shift();
    array.push(element);

    items.forEach((item, i) => {
      item.style.transform = `translateX(${array[i]}px)`;
    });
  });
  
}