  var linkFeedback = document.querySelector(".content-map-link");

  var popupFeedback = document.querySelector(".modal-feedback");
  var close = document.querySelector(".modal-close");

  var formFeedback = popupFeedback.querySelector(".modal-feedback-form");
  var nameFeedback = popupFeedback.querySelector(".modal-feedback-user-name");
  var emailFeedback = popupFeedback.querySelector(".modal-feedback-user-email");
  var textFeedback = popupFeedback.querySelector(".modal-feedback-user-textform");

  var isStorageSupport = true;
    var nameStorage = "";
    var emailStorage = "";

    try {
      nameStorage = localStorage.getItem("nameFeedback");
      emailStorage = localStorage.getItem("emailFeedback");
    } catch (err) {
      isStorageSupport = false;
  }


  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");

    if (nameStorage) {
      nameFeedback.value = nameStorage;
      emailFeedback.focus();
    } else {
        if (emailStorage) {
          emailFeedback.value = emailStorage;
          textFeedback.focus();
        } else {
          nameFeedback.focus();
        }
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
  });

  formFeedback.addEventListener("submit", function (evt) {
    if (!nameFeedback.value || !emailFeedback.value || !textFeedback) {
      evt.preventDefault();
      console.log("Нужно заполнить поля");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("nameFeedback", nameFeedback.value);
        localStorage.setItem("emailFeedback", emailFeedback.value);
      }
    }
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupFeedback.classList.contains("modal-show")) {
        popupFeedback.classList.remove("modal-show");
      }
    }
  });
