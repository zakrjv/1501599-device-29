const linkMap = document.querySelector(".contacts__map");
const buttonWrite = document.querySelector(".btn-write-us");

const modalWrite = document.querySelector(".modal-write");
const modalMap = document.querySelector(".modal-map");

const modalCloseMap = document.querySelector(".modal-map-close");
const modalCloseWrite = document.querySelector(".modal-write-close");

const writeName = modalWrite.querySelector("[name=your-name]");
const writeForm = modalWrite.querySelector(".form-write");
const writeEmail = modalWrite.querySelector("[name=your-email]")

const storageName = localStorage.getItem("writeName");
const storageEmail = localStorage.getItem("writeEmail");


linkMap.addEventListener("click", function (evt){
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalCloseMap.addEventListener("click", function (evt){
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});



buttonWrite.addEventListener("click", function (evt){
  evt.preventDefault();
  modalWrite.classList.add("modal-show");

  writeName.focus();

  if (storageName) {
    writeName.value = storageName;
  }
  if (storageEmail) {
    writeEmail.value = storageEmail;
  }
});

modalCloseWrite.addEventListener("click", function (evt){
  evt.preventDefault();
  modalWrite.classList.remove("modal-show");
  modalWrite.classList.remove("modal-error");
});


writeForm.addEventListener("submit", function (evt){
  if (!writeName.value || !writeEmail.value) {
    evt.preventDefault();
    modalWrite.classList.remove("modal-error");
    modalWrite.offsetWidth;
    modalWrite.classList.add("modal-error");
  } else {
    localStorage.setItem("name", writeName.value);
    localStorage.setItem("email", writeEmail.value);
  }
})



window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalWrite.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWrite.classList.remove("modal-show");
    }

    if (modalMap.classList.contains("modal-show")) {
      evt.preventDefault();
      modalMap.classList.remove("modal-show");
    }
  }
});


