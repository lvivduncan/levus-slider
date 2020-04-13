
{
  // емулюю джейквері
  const $ = document.querySelectorAll.bind(document);

  // усі блоки з картинками
  const items = $('#levus-slider .item');

  // кнопка вліво
  const left = $('#levus-slider .left')[0];

  // кнопка вправо
  const right = $('#levus-slider .right')[0];

  // отримуємо ширину екрану
  const windowWidth = document.documentElement.clientWidth;

  // отримуємо значення для першого зсуву вліво
  let offset = (1200 - (windowWidth-1200)/2);

  // зсуваємо усе вліво при завантаженні
  items.forEach(item => item.style.transform = `translateX(-${offset}px)`);

  // гортаємо вліво
  left.addEventListener('click', () => {
    offset += 1200;
    items.forEach(item => item.style.transform = `translateX(-${offset}px)`);
  });

  // гортаємо вправо
  right.addEventListener('click', () => {
    offset -= 1200;
    items.forEach(item => item.style.transform = `translateX(-${offset}px)`);
  });
}