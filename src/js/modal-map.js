(() => {
  const refs = {
    openModalBtn: document.querySelector('[map-modal-open]'),
    closeModalBtn: document.querySelector('[map-modal-close]'),
    modal: document.querySelector('[map-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('map-hidden');
  }
})();

(() => {
  document.querySelector('.js-speaker-form').addEventListener('submit', e => {
    e.preventDefault();

    new FormData(e.currentTarget).forEach((value, name) =>
      console.log(`${name}: ${value}`)
    );

    e.currentTarget.reset();
  });
})();
