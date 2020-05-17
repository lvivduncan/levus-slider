
{
  // slider
  const slider = document.querySelector('#levus-slider');

  // усі блоки з картинками (без клонованих)
  let items = document.querySelectorAll('#levus-slider article');

  // кнопка вліво
  const left = document.querySelector('#levus-slider-wrapper .left');

  // кнопка вправо
  const right = document.querySelector('#levus-slider-wrapper .right');

  // робимо клони
  items.forEach(item => {
    const clone = item.cloneNode(true);
    slider.append(clone);
  });

  // усі блоки разом з клонованими
  items = document.querySelectorAll('#levus-slider article');

  // ширина вікна
  const fullWidth = window.innerWidth;

  // ширина слайда
  const width = 1200;

  // 1 зсув
  let offset = width - ((fullWidth - width) / 2);

  // змінюємо початкові параметри слайдера
  slider.style.overflowX = 'scroll';
  // slider.style.width = `${width * items.length}px`;
  slider.style.width = `99999px`;
  slider.style.transform = `matrix(1, 0, 0, 1, -${offset}, 0)`;

  // гортаємо вліво
  left.addEventListener('click', _ => {
    offset += width;
    slider.style.transform = `matrix(1, 0, 0, 1, -${offset}, 0)`;

    const element = slider.firstElementChild.cloneNode(!0);
    // const element = slider.removeChild(slider.firstElementChild);
    slider.append(element);

  });

  // гортаємо вправо
  right.addEventListener('click', _ => {
    offset -= width;
    slider.style.transform = `matrix(1, 0, 0, 1, -${offset}, 0)`;

    const element = slider.lastElementChild.cloneNode(!0);
    // const element = slider.removeChild(slider.lastElementChild);
    slider.prepend(element);

  });

}