  var linkFeedback = document.querySelector(".content-map-link");
  var linkMap = document.querySelector(".content-image-link");
  var linkCard = document.querySelectorAll(".card-price-buy");

  var popupFeedback = document.querySelector(".modal-feedback");
  var popupMap = document.querySelector(".modal-map");
  var popupCard = document.querySelector(".modal-cart");

  var isStorageSupport = true;
    var nameStorage = "";
    var emailStorage = "";

    try {
      nameStorage = localStorage.getItem("nameFeedback");
      emailStorage = localStorage.getItem("emailFeedback");
    } catch (err) {
      isStorageSupport = false;
  }

  if (popupFeedback) {
    var closeFeedback = document.querySelector(".modal-close");

    var formFeedback = popupFeedback.querySelector(".modal-feedback-form");
    var nameFeedback = popupFeedback.querySelector(".modal-feedback-user-name");
    var emailFeedback = popupFeedback.querySelector(".modal-feedback-user-email");
    var textFeedback = popupFeedback.querySelector(".modal-feedback-user-textform");

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

    closeFeedback.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-show");
      popupFeedback.classList.remove("modal-error");
    });

    formFeedback.addEventListener("submit", function (evt) {
      if (!nameFeedback.value || !emailFeedback.value || !textFeedback) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-error");
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add("modal-error");
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
          popupFeedback.classList.remove("modal-error");
        }
      }
    });
  }

  if (popupMap) {
    var closeMap = popupMap.querySelector(".modal-close");

    linkMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMap.classList.add("modal-show");
    });

    closeMap.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupMap.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupMap.classList.contains("modal-show")) {
          popupMap.classList.remove("modal-show");
        }
      }
    });
  }

  if (popupCard) {
    var closeCard = popupCard.querySelector(".modal-close");

    for (var i = 0; i < linkCard.length; i++) {

      linkCard[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popupCard.classList.add("modal-show");
      });

      closeCard.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupCard.classList.remove("modal-show");
      });

      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          evt.preventDefault();
          if (popupCard.classList.contains("modal-show")) {
            popupCard.classList.remove("modal-show");
          }
        }
      });
      }
  }


