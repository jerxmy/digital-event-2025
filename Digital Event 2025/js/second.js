console.clear();

// Sélection des cartes
const cards = gsap.utils.toArray(".cardx");

// Positionnement initial en `absolute` pour que les cartes se superposent correctement
gsap.set(cards, { position: "absolute" });

// Animation des cartes avec gestion dynamique des z-index
gsap.to(cards, {
  yPercent: -110, // Inversion de la direction du scroll
  stagger: 0.5, // Décalage entre chaque carte
  scrollTrigger: {
    trigger: ".__investorCards", // Section contenant les cartes
    markers: true, // Affiche les marqueurs pour le débogage
    start: "top top", // Début de l'animation
    end: "+=2000px", // Longueur de la zone de scroll
    scrub: 0.1, // Animation synchronisée avec le scroll
    snap: 1 / (cards.length - 1), // Alignement des cartes sur des positions fixes
    pin: true, // Garde la section fixée pendant le scroll
    invalidateOnRefresh: true, // Réinitialise les calculs en cas de redimensionnement
    onUpdate: (self) => {
      // Gestion dynamique des z-index pendant l'animation
      const progress = self.progress; // Progrès de l'animation
      const currentIndex = Math.floor(progress * (cards.length - 1)); // Index actuel

      // Mise à jour des z-index pour chaque carte
      cards.forEach((card, index) => {
        const zIndex = cards.length - Math.abs(currentIndex - index);
        gsap.set(card, { zIndex }); // Applique le z-index
      });
    },
  },
  ease: "none", // Aucun easing pour une animation fluide
});
