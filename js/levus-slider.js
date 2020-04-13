
{
  // емулюю джейквері
  const $ = document.querySelectorAll.bind(document);

  // усі блоки з картинками
  const items = $('#levus-slider .item');

  // кнопка вліво
  const left = $('#levus-slider .left')[0];

  // кнопка вправо
  const right = $('#levus-slider .right')[0];

  // блок, який буде зсуватися
  const wrapper = $('#levus-slider-wrapper')[0];

  // встановлюємо ширину блока
  wrapper.style.width = 1200 * items.length + 'px';

  // отримуємо ширину екрану
  const windowWidth = document.documentElement.clientWidth;

  // 1 слайд зсуваємо вліво
  const offset = (1200 - (windowWidth-1200)/2);
  wrapper.style.transform = `translateX(-${offset}px)`;

}