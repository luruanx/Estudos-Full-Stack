// JS RESPONSÁVEL PELO CONTROLE DO NAV MENU ---------------------

const categoriasData = [
  [["Cat 1.1", "#"], ["Cat 1.2", "#"], ["Cat 1.3", "#"],
  ["Cat 1.4", "#"], ["Cat 1.5", "#"], ["Cat 1.6", "#"],
  ["Cat 1.7", "#"], ["Cat 1.8", "#"], ["Cat 1.9", "#"],
  ["Cat 1.10", "#"], ["Cat 1.11", "#"], ["Cat 1.12", "#"],
  ["Cat 1.13", "#"], ["Cat 1.14", "#"], ["Cat 1.15", "#"],
  ["Cat 1.16", "#"], ["Cat 1.17", "#"], ["Cat 1.18", "#"],
  ["Cat 1.19", "#"], ["Cat 1.20", "#"], ["Cat 1.21", "#"],
  ["Cat 1.22", "#"], ["Cat 1.23", "#"], ["Cat 1.24", "#"]
  ],
  [["Cat 2.1", "#"], ["Cat 2.2", "#"], ["Cat 2.3", "#"],
  ["Cat 2.4", "#"], ["Cat 2.5", "#"], ["Cat 2.6", "#"],
  ["Cat 2.7", "#"], ["Cat 2.8", "#"], ["Cat 2.9", "#"],
  ["Cat 2.10", "#"], ["Cat 2.11", "#"], ["Cat 2.12", "#"],
  ["Cat 2.13", "#"], ["Cat 2.14", "#"], ["Cat 2.15", "#"],
  ["Cat 2.16", "#"], ["Cat 2.17", "#"], ["Cat 2.18", "#"],
  ["Cat 2.19", "#"], ["Cat 2.20", "#"], ["Cat 2.21", "#"],
  ["Cat 2.22", "#"], ["Cat 2.23", "#"], ["Cat 2.24", "#"]
  ],
  [["Cat 3.1", "#"], ["Cat 3.2", "#"], ["Cat 3.3", "#"],
  ["Cat 3.4", "#"], ["Cat 3.5", "#"], ["Cat 3.6", "#"],
  ["Cat 3.7", "#"], ["Cat 3.8", "#"], ["Cat 3.9", "#"],
  ["Cat 3.10", "#"], ["Cat 3.11", "#"], ["Cat 3.12", "#"],
  ["Cat 3.13", "#"], ["Cat 3.14", "#"], ["Cat 3.15", "#"],
  ["Cat 3.16", "#"], ["Cat 3.17", "#"], ["Cat 3.18", "#"],
  ["Cat 3.19", "#"], ["Cat 3.20", "#"], ["Cat 3.21", "#"],
  ["Cat 3.22", "#"], ["Cat 3.23", "#"], ["Cat 3.24", "#"]
  ],
  [["Cat 4.1", "#"], ["Cat 4.2", "#"], ["Cat 4.3", "#"],
  ["Cat 4.4", "#"], ["Cat 4.5", "#"], ["Cat 4.6", "#"],
  ["Cat 4.7", "#"], ["Cat 4.8", "#"], ["Cat 4.9", "#"],
  ["Cat 4.10", "#"], ["Cat 4.11", "#"], ["Cat 4.12", "#"],
  ["Cat 4.13", "#"], ["Cat 4.14", "#"], ["Cat 4.15", "#"],
  ["Cat 4.16", "#"], ["Cat 4.17", "#"], ["Cat 4.18", "#"],
  ["Cat 4.19", "#"], ["Cat 4.20", "#"], ["Cat 4.21", "#"],
  ["Cat 4.22", "#"], ["Cat 4.23", "#"], ["Cat 4.24", "#"]
  ],
  [["Cat 5.1", "#"], ["Cat 5.2", "#"], ["Cat 5.3", "#"],
  ["Cat 5.4", "#"], ["Cat 5.5", "#"], ["Cat 5.6", "#"],
  ["Cat 5.7", "#"], ["Cat 5.8", "#"], ["Cat 5.9", "#"],
  ["Cat 5.10", "#"], ["Cat 5.11", "#"], ["Cat 5.12", "#"],
  ["Cat 5.13", "#"], ["Cat 5.14", "#"], ["Cat 5.15", "#"],
  ["Cat 5.16", "#"], ["Cat 5.17", "#"], ["Cat 5.18", "#"],
  ["Cat 5.19", "#"], ["Cat 5.20", "#"], ["Cat 5.21", "#"],
  ["Cat 5.22", "#"], ["Cat 5.23", "#"], ["Cat 5.24", "#"]
  ],
];

const departamentos = document.querySelectorAll(".departamentos div");
const categoriasContent = document.getElementById("categoriasContent");
const categoriasBox = document.getElementById("categoriasBox");
const catBannerLateral = document.getElementById("catBannerLateral");
const menuTrigger = document.querySelector(".menu-option1");

const menuitemBox = document.getElementById("menuitemCategoriasBox");
const menuitemContent = document.getElementById("menuitemCategoriasContent");
const menuitemBanner = document.getElementById("menuitemBannerLateral");

const menuitems = document.querySelectorAll(".menuitem-dep");
const menuitemTitle = document.getElementById("menuitemTitle");

function mostrarCategorias(index, targetContent) {
  const cats = categoriasData[index] || [];
  targetContent.innerHTML = "";

  for (let i = 0; i < 3; i++) {
    const col = document.createElement("div");
    col.classList.add("categoria-col");
    for (let j = 0; j < 8; j++) {
      const cat = cats[i * 8 + j];
      if (!cat) break;
      const [nome, link] = cat;
      const a = document.createElement("a");
      a.href = link;
      a.textContent = nome;
      col.appendChild(a);
    }
    targetContent.appendChild(col);
  }
}

// atualiza as categorias pegando do array
departamentos.forEach(dep => {
  dep.addEventListener("mouseenter", () => {
    const index = dep.getAttribute("data-dept");
    mostrarCategorias(index, categoriasContent);
    categoriasBox.style.display = "flex";
    catBannerLateral.style.display = "block";
  });
});

// coloca a opção 1 como visivel ao abrir menu-option1
menuTrigger.addEventListener("mouseenter", () => {
  mostrarCategorias(0, categoriasContent);
  categoriasBox.style.display = "flex";
  catBannerLateral.style.display = "block";
});

// exibi as categorias do menuitem-dep
document.querySelectorAll(".menuitem-dep").forEach(dep => {
  dep.addEventListener("mouseenter", () => {
    const index = dep.getAttribute("data-dept");
    if (index !== null) {
      mostrarCategorias(index, menuitemContent);
      menuitemBox.style.display = "flex";
      menuitemBanner.style.display = "block";
    }
  });
});

// adiciona o titulo das categorias
menuitems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const index = item.getAttribute("data-dept");
    mostrarCategorias(index, menuitemContent);

    // atualiza o título com o texto do link
    const titulo = item.querySelector("a")?.textContent || "";
    menuitemTitle.textContent = titulo;

    menuitemBox.style.display = "flex";
  });
});

// fecha o bloco quando sai da área
document.addEventListener("mousemove", (e) => {
  const dentroDoMenu = e.target.closest(".menuitem-box, .menuitem-dep");
  if (!dentroDoMenu) {
    menuitemBox.style.display = "none";
  }
});




// JS RESPONSÁVEL PELO MENU MOBILE ------------------------
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const mobileClose = document.getElementById("mobileClose");
const mobileDeps = document.getElementById("mobileDeps");

const mobileCategoriasData = [
  Array.from({ length: 24 }, (_, i) => [`Categoria 1.${i + 1}`, "#"]),
  Array.from({ length: 24 }, (_, i) => [`Categoria 2.${i + 1}`, "#"]),
  Array.from({ length: 24 }, (_, i) => [`Categoria 3.${i + 1}`, "#"]),
];

let activeSub = null;
let activeDep = null;

function gerarSubcategorias(index, submenuEl) {
  submenuEl.innerHTML = "";
  mobileCategoriasData[index].forEach(([nome, link]) => {
    const a = document.createElement("a");
    a.href = link;
    a.textContent = nome;
    submenuEl.appendChild(a);
  });
}

function criarDepartamentoMobile(nome, index) {
  const wrapper = document.createElement("div");
  const dep = document.createElement("div");
  dep.classList.add("mobile-dep");

  const span = document.createElement("span");
  span.textContent = nome;

  const arrow = document.createElement("span");
  arrow.classList.add("arrow");
  arrow.innerHTML = "▶";

  dep.appendChild(span);
  dep.appendChild(arrow);

  const submenu = document.createElement("div");
  submenu.classList.add("mobile-submenu");

  dep.addEventListener("click", () => {
    const isActive = dep.classList.contains("active");
    if (activeSub && activeSub !== submenu) {
      activeSub.classList.remove("active");
      activeDep?.classList.remove("active");
    }
    if (isActive) {
      submenu.classList.remove("active");
      dep.classList.remove("active");
      activeSub = null;
      activeDep = null;
    } else {
      gerarSubcategorias(index, submenu);
      submenu.classList.add("active");
      dep.classList.add("active");
      activeSub = submenu;
      activeDep = dep;
    }
  });

  wrapper.appendChild(dep);
  wrapper.appendChild(submenu);
  mobileDeps.appendChild(wrapper);
}

mobileCategoriasData.forEach((_, i) => criarDepartamentoMobile(`Departamento ${i + 1}`, i));

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  mobileOverlay.classList.add("active");
});

mobileClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
});

mobileOverlay.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  mobileOverlay.classList.remove("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
  }
});


// JS RESPONSÁVEL PELO CARROSEL DOS PRODUTOS -------------------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    290: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    690: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1079: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});


// JS RESPONSÁVEL PELO INPUT DE BUSCA -------------------------
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");
  const popup = document.getElementById("searchPopup");
  const wrapper = document.getElementById("searchWrapper");

  function realizarBusca() {
    const termo = input.value.trim().toLowerCase();
    popup.innerHTML = "";
    popup.style.display = "none";

    if (!termo) return;

    const links = document.querySelectorAll("a");
    const encontrados = [];

    links.forEach(link => {
      if (link.textContent.toLowerCase().includes(termo)) {
        encontrados.push(link.cloneNode(true));
      }
    });

    const message = document.createElement("div");
    message.className = "message";
    message.innerText = `Você buscou por: '${termo}'`;
    popup.appendChild(message);

    const results = document.createElement("div");
    results.className = "results";

    if (encontrados.length === 0) {
      results.innerHTML = "<p>Nenhum resultado encontrado.</p>";
    } else {
      encontrados.forEach((link, i) => {
        results.appendChild(link);
      });
    }

    popup.appendChild(results);
    popup.style.display = "block";
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    realizarBusca();
  });

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      realizarBusca();
    }
  });

  // Fechar ao clicar fora
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      popup.style.display = "none";
      popup.innerHTML = "";
      input.value = "";
    }
  });
});
