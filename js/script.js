document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const mobileNav = document.getElementById('mobile-nav');
    const menuToggle = document.getElementById('menu-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const sections = document.querySelectorAll('.section');

    let currentLanguage = 'en';

    const translations = {
        en: {
            "logo": "Discover San Nicolas",
            "nav.general": "General Info",
            "nav.history": "History",
            "nav.attractions": "Attractions",
            "nav.culture": "Culture",
            "nav.cuisine": "Cuisine",
            "languageToggle": "ES",
            "hero-title": "Welcome to San Nicolas De Los Arroyos",
            "general-description": "Welcome to San Nicolas De Los Arroyos, a vibrant city located in Buenos Aires Province, Argentina. Known for its rich history and beautiful landscapes, our city offers a unique blend of culture and modernity.",
            "history-description": "San Nicolas De Los Arroyos has a rich history dating back to the 18th century. Originally founded as a small settlement, the city has evolved into an important industrial and cultural center in Argentina.",
            "attraction1-title": "Sanctuary of Our Lady of the Rosary",
            "attraction1-description": "A beautiful sanctuary built in honor of the reported apparitions of the Virgin Mary. It attracts thousands of pilgrims each year.",
            "attraction2-title": "Rafael de Aguiar Municipal Theatre",
            "attraction2-description": "A historic theatre built in 1908, known for its beautiful architecture and cultural performances.",
            "attraction3-title": "Parana River Coastline",
            "attraction3-description": "Enjoy beautiful views and recreational activities along the scenic Parana River coastline.",
            "culture-description": "San Nicolas De Los Arroyos is rich in traditions and fascinating legends that have been passed down through generations.",
            "legend-title": "Local Legend: The Apparitions of the Virgin",
            "legend-description": "The city is famous for the reported apparitions of the Virgin Mary to a local woman in the 1980s, which led to the construction of the Sanctuary and made San Nicolas a site of pilgrimage.",
            "cuisine-description": "The culinary scene in San Nicolas De Los Arroyos reflects the rich Argentine traditions with a local twist.",
            "dish1-description": "Traditional Argentine barbecue, featuring various cuts of meat grilled to perfection.",
            "dish2-description": "A hearty stew made with corn, beans, meat, and vegetables, typically served on patriotic holidays.",
            "footer-about-title": "About Us",
            "footer-about-description": "Discover San Nicolas De Los Arroyos is dedicated to showcasing the beauty and culture of our beloved city.",
            "footer-links-title": "Quick Links",
            "privacy-link": "Privacy Policy",
            "terms-link": "Terms of Service",
            "contact-link": "Contact Us",
            "footer-social-title": "Follow Us"
        },
        es: {
            "logo": "Descubre San Nicolás",
            "nav.general": "Información General",
            "nav.history": "Historia",
            "nav.attractions": "Atracciones",
            "nav.culture": "Cultura",
            "nav.cuisine": "Gastronomía",
            "languageToggle": "EN",
            "hero-title": "Bienvenido a San Nicolás De Los Arroyos",
            "general-description": "Bienvenido a San Nicolás De Los Arroyos, una ciudad vibrante ubicada en la Provincia de Buenos Aires, Argentina. Conocida por su rica historia y hermosos paisajes, nuestra ciudad ofrece una mezcla única de cultura y modernidad.",
            "history-description": "San Nicolás De Los Arroyos tiene una rica historia que se remonta al siglo XVIII. Originalmente fundada como un pequeño asentamiento, la ciudad ha evolucionado hasta convertirse en un importante centro industrial y cultural en Argentina.",
            "attraction1-title": "Santuario de Nuestra Señora del Rosario",
            "attraction1-description": "Un hermoso santuario construido en honor a las apariciones reportadas de la Virgen María. Atrae a miles de peregrinos cada año.",
            "attraction2-title": "Teatro Municipal Rafael de Aguiar",
            "attraction2-description": "Un teatro histórico construido en 1908, conocido por su hermosa arquitectura y actuaciones culturales.",
            "attraction3-title": "Costa del Río Paraná",
            "attraction3-description": "Disfrute de hermosas vistas y actividades recreativas a lo largo de la pintoresca costa del Río Paraná.",
            "culture-description": "San Nicolás De Los Arroyos es rica en tradiciones y fascinantes leyendas que se han transmitido de generación en generación.",
            "legend-title": "Leyenda Local: Las Apariciones de la Virgen",
            "legend-description": "La ciudad es famosa por las apariciones reportadas de la Virgen María a una mujer local en la década de 1980, lo que llevó a la construcción del Santuario e hizo de San Nicolás un sitio de peregrinación.",
            "cuisine-description": "La escena culinaria en San Nicolás De Los Arroyos refleja las ricas tradiciones argentinas con un toque local.",
            "dish1-description": "Barbacoa argentina tradicional, con varios cortes de carne a la parrilla a la perfección.",
            "dish2-description": "Un guiso sustancioso hecho con maíz, frijoles, carne y verduras, típicamente servido en feriados patrios.",
            "footer-about-title": "Sobre Nosotros",
            "footer-about-description": "Descubre San Nicolás De Los Arroyos está dedicado a mostrar la belleza y la cultura de nuestra querida ciudad.",
            "footer-links-title": "Enlaces Rápidos",
            "privacy-link": "Política de Privacidad",
            "terms-link": "Términos de Servicio",
            "contact-link": "Contáctenos",
            "footer-social-title": "Síguenos"
        }
    };

    function updateLanguage() {
        document.querySelectorAll('[id]').forEach(element => {
            if (translations[currentLanguage][element.id]) {
                element.textContent = translations[currentLanguage][element.id];
            }
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            const key = `nav.${link.getAttribute('href').substring(1)}`;
            if (translations[currentLanguage][key]) {
                link.textContent = translations[currentLanguage][key];
            }
        });
        languageToggle.textContent = translations[currentLanguage].languageToggle;
    }

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
        updateLanguage();
    });

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('show');
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
            if (mobileNav.classList.contains('show')) {
                mobileNav.classList.remove('show');
            }
        });
    });

    updateLanguage();
});