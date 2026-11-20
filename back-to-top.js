document.addEventListener("DOMContentLoaded", function () {

  const style = document.createElement("style");

  style.textContent = `
    html {
      scroll-behavior: smooth;
    }

    .back-to-top {
      position: fixed;
      right: 22px;
      bottom: 22px;
      width: 44px;
      height: 44px;
      display: none;
      align-items: center;
      justify-content: center;
      background: #b08a45;
      color: #fff;
      font-size: 24px;
      text-decoration: none;
      border-radius: 50%;
      box-shadow: 0 3px 10px rgba(0,0,0,0.25);
      z-index: 9999;
      transition: 0.3s;
    }

    .back-to-top:hover {
      background: #8d6b32;
      transform: translateY(-4px);
    }
  `;

  document.head.appendChild(style);

  const button = document.createElement("a");

  button.href = "#top";
  button.className = "back-to-top";
  button.setAttribute("aria-label", "Kembali ke atas");
  button.innerHTML = "↑";

  document.body.appendChild(button);

  window.addEventListener("scroll", function () {
    button.style.display =
      window.scrollY > 250 ? "flex" : "none";
  });

});
