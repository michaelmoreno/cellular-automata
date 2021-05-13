export const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    let state = box.children[3].classList;
    
    if (state.contains('on'))
      state.remove('on')
    else
      state.add('on')
  })
})