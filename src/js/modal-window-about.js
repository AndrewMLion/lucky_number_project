(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal_about-open]'),
    closeModalBtn: document.querySelector('[data-modal_about-close]'),
    modal: document.querySelector('[data-modal_about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
