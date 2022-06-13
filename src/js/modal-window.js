(() => {
  const refs = {
    openModalBtn: document.querySelectorAll('.buy__now__click'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.forEach(item => {
    item.addEventListener('click', toggleModal);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();

// (() => {
//   document.querySelector('.js-speaker-form').addEventListener('submit', e => {
//     e.preventDefault();

//     new FormData(e.currentTarget).forEach((value, name) =>
//       console.log(`${name}: ${value}`)
//     );

//     e.currentTarget.reset();
//   });
// })();
