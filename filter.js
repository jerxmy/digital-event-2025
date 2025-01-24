// Sélection des éléments
const filterButtons = document.querySelectorAll(".filter");
const leftColumn = document.querySelector(".left");

// Contenu par défaut pour "Toutes"
const toutesContent = `
  <div class="filter-bar">
    <button class="filter active" data-filter="toutes">Toutes</button>
    <button class="filter" data-filter="bachelor">Bachelor</button>
    <button class="filter" data-filter="mastere">Mastère</button>
  </div>
  <div class="card">
    <div class="Dflex">
      <div>
        <img src="./assets/cover-dev-esd.png" />
      </div>
      <div class="text-formation">
        <div>
          <span>Bachelor</span>
              <h3>Developpeur Web</h3>
              <p>
                3 années dont une en alternance pour apprendre à créer des sites et des applications web.
                </p>
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
                </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="Dflex">
        <div>
          <img src="./assets/cover-cpd-esd.png" />
        </div>
        <div class="text-formation">
          <div>
            <span>Bachelor 1 & 2</span>
            <h3>Chef de Projet</h3>
            <p>
              Un cycle d’études en 2 ans, pour une formation
              polyvalente...
            </p>
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="Dflex">
        <div>
          <img src="./assets/cover-ui-ux-esd.png" />
        </div>
        <div class="text-formation">
          <div>
            <span>Mastère 1 & 2</span>
              <h3>UX-UI Design</h3>
              <p>
              Un cycle d’études en 2 ans, pour une formation
              polyvalente...
              </p>  
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

      <a
      href="https://ecole-du-digital.com/formations/schema-des-etudes/"
      target="_blank"
      class="view-more"
      >Voir plus</a>
`;

// Contenu spécifique pour "Bachelor"
const bachelorContent = `
    <div class="filter-bar">
    <button class="filter" data-filter="toutes">Toutes</button>
    <button class="filter active" data-filter="bachelor">Bachelor</button>
    <button class="filter" data-filter="mastere">Mastère</button>
  </div>
  <div class="card">
    <div class="Dflex">
      <div>
        <img src="./assets/cover-dev-esd.png" />
      </div>
      <div class="text-formation">
        <div>
          <span>Bachelor</span>
              <h3>Developpeur Web</h3>
              <p>
                3 années dont une en alternance pour apprendre à créer des sites et des applications web..
                </p>
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
                </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="Dflex">
        <div>
          <img src="./assets/cover-cpd-esd.png" />
        </div>
        <div class="text-formation">
          <div>
            <span>Bachelor 1 & 2</span>
            <h3>Chef de Projet Digital</h3>
            <p>
              Un cycle d’études en 2 ans, pour une formation
              polyvalente...
            </p>
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="Dflex">
        <div>
          <img src="./assets/cover-marketing-digital-esd.png" />
        </div>
        <div class="text-formation">
          <div>
            <span>Bachelor 3e année</span>
              <h3>Marketing Digital</h3>
              <p>
              Un cycle d’études en 2 ans, pour une formation
              polyvalente...
              </p>  
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

      <a
      href="https://ecole-du-digital.com/formations/schema-des-etudes/"
      target="_blank"
      class="view-more"
      >Voir plus</a>
`;

// Contenu spécifique pour "Mastère"
const mastereContent = `
    <div class="filter-bar">
    <button class="filter" data-filter="toutes">Toutes</button>
    <button class="filter" data-filter="bachelor">Bachelor</button>
    <button class="filter active" data-filter="mastere">Mastère</button>
  </div>
  <div class="card">
    <div class="Dflex">
      <div>
        <img src="./assets/cover-dev-esd.png" />
      </div>
      <div class="text-formation">
        <div>
          <span>Mastère 1 & 2</span>
              <h3>Developpeur Web</h3>
              <p>
                3 années dont une en alternance pour apprendre à créer des sites et des applications web.
                </p>
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
                </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="Dflex">
        <div>
          <img src="./assets/cover-cpd-esd.png" />
        </div>
        <div class="text-formation">
          <div>
            <span>Mastère 1 & 2</span>
            <h3>Chef de Projet</h3>
            <p>
              Un cycle d’études en 2 ans, pour une formation
              polyvalente...
            </p>
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="Dflex">
        <div>
          <img src="./assets/cover-ui-ux-esd.png" />
        </div>
        <div class="text-formation">
          <div>
            <span>Mastère 1 & 2</span>
              <h3>UX-UI Design</h3>
              <p>
              Un cycle d’études en 2 ans, pour une formation
              polyvalente...
              </p>  
          </div>
          <div>
            <button class="play-btn">
              <a
                href="https://ecole-du-digital.com/formations/bachelor-chef-de-projet-digital/"
                target="_blank"
                >▶
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>

      <a
      href="https://ecole-du-digital.com/formations/schema-des-etudes/"
      target="_blank"
      class="view-more"
      >Voir plus</a>
`;

// Gestion des clics sur les boutons de filtre
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Supprimer la classe "active" de tous les boutons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Ajouter la classe "active" au bouton cliqué
    button.classList.add("active");

    // Vérifier le filtre sélectionné
    const filter = button.getAttribute("data-filter");
    if (filter === "toutes") {
      leftColumn.innerHTML = toutesContent;
    } else if (filter === "bachelor") {
      leftColumn.innerHTML = bachelorContent;
    } else if (filter === "mastere") {
      leftColumn.innerHTML = mastereContent;
    }

    // Réinitialiser les événements de clic après modification
    setupFilters();
  });
});

// Fonction pour réinitialiser les filtres après mise à jour du contenu
function setupFilters() {
  const newFilterButtons = document.querySelectorAll(".filter");
  newFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      newFilterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.getAttribute("data-filter");
      if (filter === "toutes") {
        leftColumn.innerHTML = toutesContent;
      } else if (filter === "bachelor") {
        leftColumn.innerHTML = bachelorContent;
      } else if (filter === "mastere") {
        leftColumn.innerHTML = mastereContent;
      }
      setupFilters();
    });
  });
}

// Sélectionner tous les boutons "like"
const likeButtons = document.querySelectorAll(".like");

// Ajouter un gestionnaire d'événements sur chaque bouton
likeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("selected"); // Basculer la classe "selected"
  });
});

// Initialiser les événements de filtre au chargement de la page
setupFilters();
