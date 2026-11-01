(function () {
  var password = "istecporto2026";
  var accessKey = "portfolioAccessGranted";
  var page = document.documentElement;

  if (sessionStorage.getItem(accessKey) === "true") {
    page.classList.remove("acesso-bloqueado");
    return;
  }

  var overlay = document.createElement("section");
  overlay.className = "bloqueio-acesso";
  overlay.setAttribute("aria-labelledby", "titulo-acesso");

  var title = document.createElement("h1");
  title.id = "titulo-acesso";
  title.textContent = "Acesso protegido";

  var description = document.createElement("p");
  description.textContent = "Introduza a senha para aceder ao portefólio.";

  var form = document.createElement("form");
  var label = document.createElement("label");
  label.htmlFor = "senha-acesso";
  label.textContent = "Senha";

  var input = document.createElement("input");
  input.id = "senha-acesso";
  input.type = "password";
  input.autocomplete = "current-password";
  input.required = true;

  var error = document.createElement("p");
  error.className = "erro-acesso";
  error.setAttribute("aria-live", "polite");

  var submit = document.createElement("button");
  submit.className = "btn";
  submit.type = "submit";
  submit.textContent = "Entrar";

  form.append(label, input, submit, error);
  overlay.append(title, description, form);
  document.body.prepend(overlay);
  input.focus();

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (input.value === password) {
      sessionStorage.setItem(accessKey, "true");
      page.classList.remove("acesso-bloqueado");
      overlay.remove();
      return;
    }

    error.textContent = "Senha incorreta. Tente novamente.";
    input.value = "";
    input.focus();
  });
})();
