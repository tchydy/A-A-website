export default class Cursor {
  constructor () {
    this.links = document.querySelectorAll('a');
  }

  createCursor () {
    const cursor = document.querySelector('.cursor');
    const cursorinner = document.querySelector('.cursor2');

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
    });

    document.addEventListener('mousemove', function (e) {
      const x = e.clientX;
      const y = e.clientY;
      // cursorinner.style.left = x + 'px';
      // cursorinner.style.top = y + 'px';
      cursorinner.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
      cursorinner.classList.remove("none")

    });

    document.addEventListener('mousedown', function () {
      cursor.classList.add('click');
      cursorinner.classList.add('cursorinnerhover');
    });

    document.addEventListener('mouseup', function () {
      cursor.classList.remove('click');
      cursorinner.classList.remove('cursorinnerhover');
    });

    this.links.forEach((item) => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });



  }
}
