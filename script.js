// script.js
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
  
    gsap.to('.hero-bg', {
      x: x * 50,
      y: y * 50,
      duration: 0.8,
      ease: "power3.out"
    });
  });
  // Crear burbujas flotantes con mejor diseño
function createBubbles() {
    const container = document.getElementById('bubble-container');
    const bubbleCount = 30; // Número de burbujas
  
    for (let i = 0; i < bubbleCount; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
  
      // Tamaño aleatorio para las burbujas
      const size = Math.random() * 80 + 20; // Entre 20px y 100px
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
  
      // Posición inicial aleatoria
      bubble.style.left = `${Math.random() * 100}%`;
  
      // Animación con retraso aleatorio
      bubble.style.animationDelay = `${Math.random() * 5}s`;
      bubble.style.animationDuration = `${Math.random() * 10 + 10}s`; // Entre 10s y 20s
  
      container.appendChild(bubble);
    }
  }
  
  // Llamar a la función para generar las burbujas
  createBubbles();

      // Función para alternar la barra lateral
      function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('show');
    }

    // Funcionalidad del acordeón
    const accordions = document.querySelectorAll('.accordion');
    accordions.forEach((accordion) => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('active');
            const panel = accordion.nextElementSibling;
            panel.classList.toggle('show');
        });
    });

    // Mostrar/Ocultar paneles
    document.getElementById("fontB").onclick = () => togglePanel("fontPanel");
    document.getElementById("colorB").onclick = () => togglePanel("colorPanel");

    function togglePanel(panelId) {
        const panel = document.getElementById(panelId);
        panel.style.display = panel.style.display === "none" ? "block" : "none";
    }

    // Aplicar fuentes
    function applyFont() {
        const font = document.getElementById("fontSelect").value;
        const fontSize = document.getElementById("fontSize").value;
        document.body.style.fontFamily = font;
        document.body.style.fontSize = fontSize;
    }

    // Aplicar colores
    function applyColors() {
        const bgColor = document.getElementById("bgColor").value;
        const textColor = document.getElementById("textColor").value;
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
    }

    // Cambiar saturación
    function setSaturation(mode) {
        const body = document.body;
        if (mode === 'low') {
            body.style.filter = 'saturate(50%)';
        } else if (mode === 'high') {
            body.style.filter = 'saturate(200%)';
        } else if (mode === 'bw') {
            body.style.filter = 'grayscale(100%)';
        }
    }

    // Leer la página en voz alta
    function leerPagina() {
        const texto = document.body.innerText; // Obtener el texto de la página
        const speech = new SpeechSynthesisUtterance(texto); // Crear la instancia para hablar
        speechSynthesis.speak(speech); // Reproducir el texto
    }

    // Función para mostrar/ocultar imágenes
    function toggleImages() {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
            img.style.display = img.style.display === "none" ? "block" : "none";
        });
    }