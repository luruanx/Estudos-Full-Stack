// JS responsável por visibilidade e config do menu nav 

const categoriasData = [
    [ ["Cat 1.1", "#"], ["Cat 1.2", "#"], ["Cat 1.3", "#"],
      ["Cat 1.4", "#"], ["Cat 1.5", "#"], ["Cat 1.6", "#"],
      ["Cat 1.7", "#"], ["Cat 1.8", "#"], ["Cat 1.9", "#"],
      ["Cat 1.10", "#"], ["Cat 1.11", "#"], ["Cat 1.12", "#"],
      ["Cat 1.13", "#"], ["Cat 1.14", "#"], ["Cat 1.15", "#"],
      ["Cat 1.16", "#"], ["Cat 1.17", "#"], ["Cat 1.18", "#"],
      ["Cat 1.19", "#"], ["Cat 1.20", "#"], ["Cat 1.21", "#"],
      ["Cat 1.22", "#"], ["Cat 1.23", "#"], ["Cat 1.24", "#"]
    ],
    [ ["Cat 2.1", "#"], ["Cat 2.2", "#"], ["Cat 2.3", "#"],
      ["Cat 2.4", "#"], ["Cat 2.5", "#"], ["Cat 2.6", "#"],
      ["Cat 2.7", "#"], ["Cat 2.8", "#"], ["Cat 2.9", "#"],
      ["Cat 2.10", "#"], ["Cat 2.11", "#"], ["Cat 2.12", "#"],
      ["Cat 2.13", "#"], ["Cat 2.14", "#"], ["Cat 2.15", "#"],
      ["Cat 2.16", "#"], ["Cat 2.17", "#"], ["Cat 2.18", "#"],
      ["Cat 2.19", "#"], ["Cat 2.20", "#"], ["Cat 2.21", "#"],
      ["Cat 2.22", "#"], ["Cat 2.23", "#"], ["Cat 2.24", "#"]
    ],
    [ ["Cat 3.1", "#"], ["Cat 3.2", "#"], ["Cat 3.3", "#"],
      ["Cat 3.4", "#"], ["Cat 3.5", "#"], ["Cat 3.6", "#"],
      ["Cat 3.7", "#"], ["Cat 3.8", "#"], ["Cat 3.9", "#"],
      ["Cat 3.10", "#"], ["Cat 3.11", "#"], ["Cat 3.12", "#"],
      ["Cat 3.13", "#"], ["Cat 3.14", "#"], ["Cat 3.15", "#"],
      ["Cat 3.16", "#"], ["Cat 3.17", "#"], ["Cat 3.18", "#"],
      ["Cat 3.19", "#"], ["Cat 3.20", "#"], ["Cat 3.21", "#"],
      ["Cat 3.22", "#"], ["Cat 3.23", "#"], ["Cat 3.24", "#"]
    ],
    [ ["Cat 4.1", "#"], ["Cat 4.2", "#"], ["Cat 4.3", "#"],
      ["Cat 4.4", "#"], ["Cat 4.5", "#"], ["Cat 4.6", "#"],
      ["Cat 4.7", "#"], ["Cat 4.8", "#"], ["Cat 4.9", "#"],
      ["Cat 4.10", "#"], ["Cat 4.11", "#"], ["Cat 4.12", "#"],
      ["Cat 4.13", "#"], ["Cat 4.14", "#"], ["Cat 4.15", "#"],
      ["Cat 4.16", "#"], ["Cat 4.17", "#"], ["Cat 4.18", "#"],
      ["Cat 4.19", "#"], ["Cat 4.20", "#"], ["Cat 4.21", "#"],
      ["Cat 4.22", "#"], ["Cat 4.23", "#"], ["Cat 4.24", "#"]
    ],
    [ ["Cat 5.1", "#"], ["Cat 5.2", "#"], ["Cat 5.3", "#"],
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
  const categoriasBox = document.getElementById("categoriasBox");
  const categoriasContent = document.getElementById("categoriasContent");

  departamentos.forEach(dep => {
    dep.addEventListener("mouseenter", () => {
      const index = dep.getAttribute("data-dept");
      mostrarCategorias(index);
      categoriasBox.style.display = "block";
    });
  });

  function mostrarCategorias(index) {
    const cats = categoriasData[index];
    categoriasContent.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const col = document.createElement("div");
      col.classList.add("categoria-col");
      for (let j = 0; j < 8; j++) {
        const [nome, link] = cats[i * 8 + j];
        const a = document.createElement("a");
        a.href = link;
        a.textContent = nome;
        col.appendChild(a);
      }
      categoriasContent.appendChild(col);
    }
  }