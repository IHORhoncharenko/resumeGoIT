document.addEventListener('DOMContentLoaded', () => {

  var re = '|';
  [...document.getElementsByClassName('work-time')].forEach((e) => {
    e.innerHTML = e.innerHTML.replace(re, `<span class="c-black">${re}</span>`);
  });

  [...document.getElementsByClassName('p-contact--info')].forEach((e) => {
    (e.textContent.includes('C')) && (`
      ${e.children[0].style.color = '#161d2a'}
      ${e.children[0].style.fontFamily = 'Montserrat'}
      ${e.children[0].style.fontSize = '14px'}
      ${e.children[0].style.fontStyle = 'normal'}
      ${e.children[0].style.fontWeight = '400'}
      ${e.children[0].style.lineHeight = '24px'}
    `);
    (e.textContent.includes('E')) && (`
      ${e.children[0].style.color = '#2979ff'}
      ${e.children[0].style.fontFamily = 'Montserrat'}
      ${e.children[0].style.fontSize = '14px'}
      ${e.children[0].style.fontStyle = 'normal'}
      ${e.children[0].style.fontWeight = '400'}
      ${e.children[0].style.lineHeight = '24px'}
      ${e.children[0].style.textDecorationLine = 'underline'}
    `);
  });

  [...document.getElementsByClassName('p-project--list')[0].children].forEach((li, i) => {
    switch (i) {
      case 0:
        li.children[0].insertAdjacentHTML('afterend', `${'.'.repeat(100)}`);
        break;
      case 1:
        li.children[0].insertAdjacentHTML('afterend', `${'.'.repeat(57)}`);
        break;
      case 2:
        li.children[0].insertAdjacentHTML('afterend', `${'.'.repeat(103)}`);
        break;
      default:
        break;
    }

  });
});
