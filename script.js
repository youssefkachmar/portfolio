document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LANGUAGE DICTIONARY ---
    const translations = {
        en: {
            nav_home: "Home", nav_edu: "Education", nav_exp: "Experience", nav_competence: "Competence", nav_certs: "Certs", nav_projects: "Projects", nav_contact: "Contact",
            hero_badge: "Network & Systems Student", hero_title: "Future Admin.",
            hero_desc: "A 20-year-old aspiring IT Specialist for System Integration with a solid technical foundation in computer systems and advanced networking. Combining hands-on experience in virtualization and network architecture with a dedicated work ethic, I am eager to apply my skills within a professional apprenticeship in Germany.",
            nav_resume: "Resume", btn_contact: "Contact Me",
            
            section_edu: "Education Path",
            edu_ista_title: "Computer Systems & Networks", edu_ista_date: "Sept 2024 - June 2026",
            edu_ista_desc: "Comprehensive training in network architecture, system administration, and infrastructure management.",
            edu_bio_title: "Biology Studies", edu_bio_date: "Sept 2023 - July 2024",
            edu_bio_desc: "Developed scientific reasoning, lab safety protocols, and analytical skills.",
            edu_bac_title: "High School Diploma - Physics", edu_bac_date: "Jun 2023",
            edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Focus on Physics and Mathematics.",
            
            section_exp: "Professional Experience",
            exp_1_title: "IT Technician Intern",
            exp_1_company: "Societe Regionale Multiservices | Taza, Morocco",
            exp_1_desc: "Assisted in configuring and deploying network devices. Monitored network performance and provided baseline troubleshooting to maintain reliable IT infrastructure.",
            exp_2_title: "IT Support Intern",
            exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Morocco",
            exp_2_desc: "Installed, configured, and maintained office hardware and network equipment. Delivered Tier-1 technical support and effectively resolved day-to-day user issues.",

            section_competence: "Competence",
            skill_net: "Networking", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sec", skill_lang: "Languages",
            lang_ar: "Arabic", level_native: "Native", lang_en: "English", level_c1: "Advanced (C1)",
            lang_de: "German", level_b1: "Intermediate (B1)", lang_fr: "French", level_b2: "Intermediate (B2)",
            
            section_certs: "Certifications", status_earned: "Earned", status_progress: "In Progress", btn_view: "View",
            
            section_projects: "Featured Projects",
            proj_1_title: "Secure Azure Cloud Network", proj_1_desc: "A complex Azure implementation featuring pfSense, Suricata IPS, and Active Directory.",
            proj_2_title: "Network Automation", proj_2_desc: "Python scripts for automating device configuration and network discovery.",
            btn_details: "View Details",
            
            section_contact: "Let's Connect", contact_desc: "I am currently looking for internship and apprenticeship opportunities.", btn_send: "Send Message"
        },
        de: {
            nav_home: "Startseite", nav_edu: "Bildung", nav_exp: "Erfahrung", nav_competence: "Kompetenzen", nav_certs: "Zertifikate", nav_projects: "Projekte", nav_contact: "Kontakt",
            hero_badge: "Netzwerk & Systeme Student", hero_title: "Zukünftiger Admin.",
            hero_desc: "Ein 20-jähriger angehender Fachinformatiker für Systemintegration mit fundiertem Basiswissen in Computersystemen und fortgeschrittener Netzwerktechnik. Mit praktischer Erfahrung in Virtualisierung strebe ich eine Ausbildung in Deutschland an.",
            nav_resume: "Lebenslauf", btn_contact: "Kontaktieren",
            
            section_edu: "Bildungsweg",
            edu_ista_title: "Computersysteme und Netzwerke", edu_ista_date: "Sept 2024 - Juni 2026",
            edu_ista_desc: "Umfassende Ausbildung in Netzwerkarchitektur, Systemadministration und Infrastrukturmanagement.",
            edu_bio_title: "Biologiestudium", edu_bio_date: "Sept 2023 - Juli 2024",
            edu_bio_desc: "Entwicklung von wissenschaftlichem Denken und analytischen Fähigkeiten.",
            edu_bac_title: "Abitur Physik", edu_bac_date: "Jun 2023",
            edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Schwerpunkt Physik und Mathematik.",
            
            section_exp: "Berufserfahrung",
            exp_1_title: "Praktikant IT-Technik",
            exp_1_company: "Societe Regionale Multiservices | Taza, Marokko",
            exp_1_desc: "Unterstützung bei der Konfiguration und Bereitstellung von Netzwerkgeräten. Überwachung der Netzwerkleistung und Durchführung grundlegender Fehlerbehebungen zur Aufrechterhaltung der IT-Infrastruktur.",
            exp_2_title: "Praktikant IT-Support",
            exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Marokko",
            exp_2_desc: "Installation, Konfiguration und Wartung von Bürohardware und Netzwerkgeräten. Bereitstellung von Tier-1-IT-Support und Lösung von alltäglichen Benutzerproblemen.",

            section_competence: "Kompetenzen",
            skill_net: "Netzwerke", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sicherheit", skill_lang: "Sprachen",
            lang_ar: "Arabisch", level_native: "Muttersprache", lang_en: "Englisch", level_c1: "Fortgeschritten (C1)",
            lang_de: "Deutsch", level_b1: "Mittelstufe (B1)", lang_fr: "Französisch", level_b2: "Mittelstufe (B2)",
            
            section_certs: "Zertifizierungen", status_earned: "Erhalten", status_progress: "In Bearbeitung", btn_view: "Ansehen",
            
            section_projects: "Ausgewählte Projekte",
            proj_1_title: "Sicheres Azure Cloud Netzwerk", proj_1_desc: "Eine komplexe Azure-Implementierung mit pfSense, Suricata IPS und Active Directory.",
            proj_2_title: "Netzwerkautomatisierung", proj_2_desc: "Python-Skripte zur Automatisierung der Gerätekonfiguration.",
            btn_details: "Details",
            
            section_contact: "Lassen Sie uns verbinden", contact_desc: "Ich suche derzeit nach Praktikums- und Ausbildungsplätzen.", btn_send: "Nachricht Senden"
        },
        fr: {
            nav_home: "Accueil", nav_edu: "Éducation", nav_exp: "Expérience", nav_competence: "Compétences", nav_certs: "Certs", nav_projects: "Projets", nav_contact: "Contact",
            hero_badge: "Étudiant Réseaux & Systèmes", hero_title: "Futur Admin.",
            hero_desc: "Un futur spécialiste informatique de 20 ans en intégration de systèmes, avec une base technique solide. Alliant une expérience pratique de la virtualisation, je suis désireux de débuter un apprentissage en Allemagne.",
            nav_resume: "CV", btn_contact: "Contactez-moi",
            
            section_edu: "Parcours Éducatif",
            edu_ista_title: "Systèmes et Réseaux Informatiques", edu_ista_date: "Sept 2024 - Juin 2026",
            edu_ista_desc: "Formation complète en architecture réseau, administration système et gestion d'infrastructure.",
            edu_bio_title: "Études de Biologie", edu_bio_date: "Sept 2023 - Juil 2024",
            edu_bio_desc: "Développement du raisonnement scientifique et protocoles de laboratoire.",
            edu_bac_title: "Baccalauréat Sciences Physiques", edu_bac_date: "Juin 2023",
            edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Concentration sur la physique et les mathématiques.",
            
            section_exp: "Expérience Professionnelle",
            exp_1_title: "Stagiaire Technicien IT",
            exp_1_company: "Societe Regionale Multiservices | Taza, Maroc",
            exp_1_desc: "Assistance à la configuration et au déploiement des équipements réseau. Surveillance des performances du réseau et dépannage de base pour maintenir la fiabilité de l'infrastructure.",
            exp_2_title: "Stagiaire Support IT",
            exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Maroc",
            exp_2_desc: "Installation, configuration et maintenance du matériel informatique et des équipements réseau. Fourniture d'un support technique de niveau 1 et résolution des problèmes quotidiens des utilisateurs.",

            section_competence: "Compétences",
            skill_net: "Réseaux", skill_sys: "Admin Sys", skill_cloud: "Cloud & Sécu", skill_lang: "Langues",
            lang_ar: "Arabe", level_native: "Langue Maternelle", lang_en: "Anglais", level_c1: "Avancé (C1)",
            lang_de: "Allemand", level_b1: "Intermédiaire (B1)", lang_fr: "Français", level_b2: "Intermédiaire (B2)",
            
            section_certs: "Certifications", status_earned: "Obtenu", status_progress: "En Cours", btn_view: "Voir",
            
            section_projects: "Projets Phares",
            proj_1_title: "Réseau Cloud Azure Sécurisé", proj_1_desc: "Une implémentation Azure complexe avec pfSense, Suricata IPS et Active Directory.",
            proj_2_title: "Automatisation Réseau", proj_2_desc: "Scripts Python pour automatiser la configuration des appareils.",
            btn_details: "Voir Détails",
            
            section_contact: "Connectons-nous", contact_desc: "Je suis actuellement à la recherche d'opportunités de stage et d'apprentissage.", btn_send: "Envoyer"
        }
    };
    
    const istaLists = {
        en: `<li><strong>Networking:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li>
             <li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li>
             <li><strong>Cloud & Automation:</strong> Azure, SDN, Python, Network Security.</li>`,
        fr: `<li><strong>Réseaux:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li>
             <li><strong>Admin Sys:</strong> Windows Server (AD, DNS, GPO), Admin Linux.</li>
             <li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Sécurité Réseau.</li>`,
        de: `<li><strong>Netzwerke:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li>
             <li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li>
             <li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Netzwerksicherheit.</li>`
    };

    let currentLang = 'en';

    window.setLanguage = function(lang) {
        currentLang = lang;
        
        // Update Custom Dropdown Visuals
        const currentLangText = document.getElementById("current-lang");
        if(currentLangText) currentLangText.innerText = lang.toUpperCase();
        document.getElementById("lang-dropdown").classList.remove("active");

        // Update Mobile Buttons
        document.querySelectorAll('.mobile-controls button').forEach(btn => {
            btn.classList.remove('active');
            if(btn.getAttribute('onclick').includes(`'${lang}'`)) btn.classList.add('active');
        });

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) el.textContent = translations[lang][key];
        });

        const istaListEl = document.querySelector('[data-i18n="edu_ista_list"]');
        if(istaListEl) istaListEl.innerHTML = istaLists[lang];
    };

    setLanguage('en');

    // --- CUSTOM LANGUAGE DROPDOWN TOGGLE ---
    const langDropdown = document.getElementById("lang-dropdown");
    if(langDropdown) {
        langDropdown.querySelector(".dropdown-trigger").addEventListener("click", (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle("active");
        });
        document.addEventListener("click", (e) => {
            if(!langDropdown.contains(e.target)) langDropdown.classList.remove("active");
        });
    }

    // --- 2. MOBILE MENU ---
    const mobileMenuBtn = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMobileBtn = document.querySelector(".close-mobile-nav");
    
    function closeMenu() {
        if (mobileNav) { mobileNav.classList.remove("active"); document.body.classList.remove("menu-open"); }
    }
    if(mobileMenuBtn) { mobileMenuBtn.addEventListener("click", () => { mobileNav.classList.add("active"); document.body.classList.add("menu-open"); }); }
    if(closeMobileBtn) closeMobileBtn.addEventListener("click", closeMenu);
    document.querySelectorAll(".mobile-nav-content a").forEach(link => link.addEventListener('click', closeMenu));

    // --- 3. RESUME DROPDOWN ---
    const resumeTrigger = document.querySelector('.resume-trigger');
    const resumeMenu = document.querySelector('.hero-resume-menu');
    if(resumeTrigger) {
        resumeTrigger.addEventListener('click', (e) => { e.stopPropagation(); resumeMenu.classList.toggle('active'); });
        document.addEventListener('click', (e) => { if (!resumeTrigger.contains(e.target) && !resumeMenu.contains(e.target)) resumeMenu.classList.remove('active'); });
    }

    // --- 4. SPOTLIGHT HOVER EFFECT ---
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // --- 5. PROJECT DATA & TICKER CONFIG ---
    const config = {
        projects: {
            "project-modal-1": {
                currentSlide: 0,
                technologies:[
                    { name: "Azure", icon: "bx bxl-microsoft" },
                    { name: "Windows Server", icon: "bx bxl-windows" },
                    { name: "Linux", icon: "bx bxl-tux" },
                    { name: "pfSense", icon: "bx bx-shield-alt-2" },
                    { name: "Suricata", icon: "bx bx-check-shield" },
                    { name: "Active Directory", icon: "bx bx-server" }
                ],
                slides:[
                    {
                        img: "images/azure-project/0-topology.png",
                        title: { en: "1. Network Topology", fr: "1. Topologie", de: "1. Topologie" },
                        text: {
                            en: "High-level diagram illustrating the Hub-and-Spoke model with central pfSense NVA.",
                            fr: "Diagramme illustrant le modèle Hub-and-Spoke avec pfSense NVA.",
                            de: "High-Level-Diagramm des Hub-and-Spoke-Modells mit zentralem pfSense."
                        }
                    },
                    {
                        img: "images/azure-project/1-azure-udr.png",
                        title: { en: "2. Azure Routing (UDR)", fr: "2. Routage (UDR)", de: "2. Routing (UDR)" },
                        text: {
                            en: "Forced tunneling configurations to direct traffic through the NVA.",
                            fr: "Tunnels forcés pour diriger le trafic via la NVA.",
                            de: "Erzwungenes Tunneling, um den Verkehr durch die NVA zu leiten."
                        }
                    }
                ]
            },
            "project-modal-2": {
                currentSlide: 0,
                technologies:[
                    { name: "Python", icon: "bx bxl-python" },
                    { name: "Cisco IOS", icon: "bx bx-network-chart" },
                    { name: "SSH/Telnet", icon: "bx bx-terminal" }
                ],
                slides:[
                    {
                        img: "images/python-automation.png",
                        title: { en: "Network Automation", fr: "Automatisation", de: "Automatisierung" },
                        text: {
                            en: "Python scripts for configuration backups via SSH.",
                            fr: "Scripts Python pour les sauvegardes SSH.",
                            de: "Python-Skripte für SSH-Backups."
                        }
                    }
                ]
            }
        }
    };

    // --- 6. MODALS & TICKER GENERATION ---
    AOS.init({ duration: 800, once: true });
    
    const allModals = document.querySelectorAll(".modal");
    const imageModal = document.getElementById("image-modal");

    function renderTicker(modalId) {
        const techArray = config.projects[modalId].technologies;
        const track = document.getElementById(`ticker-track-${modalId.split('-')[2]}`);
        if(track) {
            // Using <i> tags for BoxIcons instead of <img> tags
            let itemsHtml = techArray.map(t => `<div class="ticker-item"><i class='${t.icon}'></i> ${t.name}</div>`).join('');
            track.innerHTML = itemsHtml + itemsHtml + itemsHtml;
        }
    }

    function updateModalSlide(modalId) {
        const projectData = config.projects[modalId];
        const modal = document.getElementById(modalId);
        const currentData = projectData.slides[projectData.currentSlide];
        
        const imgContainer = modal.querySelector(".project-modal-image-wrapper");
        const descContainer = modal.querySelector(".project-modal-description");
        const counter = modal.querySelector(".project-modal-counter");

        const title = currentData.title[currentLang];
        const text = currentData.text[currentLang];

        imgContainer.innerHTML = `<img src="${currentData.img}" alt="${title}">`;
        descContainer.innerHTML = `<h4>${title}</h4><p>${text}</p>`;
        if(counter) counter.textContent = `${projectData.currentSlide + 1} / ${projectData.slides.length}`;
        
        imgContainer.querySelector("img").addEventListener("click", () => {
             const zoomImg = imageModal.querySelector("img");
             if(zoomImg) { zoomImg.src = currentData.img; openModal(imageModal); }
        });
    }

    function openModal(modal) { modal.classList.add("active"); document.body.classList.add("modal-open"); }
    function closeModal(modal) { modal.classList.remove("active"); document.body.classList.remove("modal-open"); }

    document.querySelectorAll(".open-project-modal-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const modalId = this.closest(".project-card").dataset.modalId;
            const modal = document.getElementById(modalId);
            if(config.projects[modalId]) {
                config.projects[modalId].currentSlide = 0;
                renderTicker(modalId); 
                updateModalSlide(modalId);
            }
            openModal(modal);
        });
    });

    allModals.forEach(modal => {
        const closeBtn = modal.querySelector(".close-button");
        if(closeBtn) closeBtn.addEventListener("click", () => closeModal(modal));
        modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(modal); });
    });

    document.querySelectorAll(".project-modal").forEach(modal => {
        const modalId = modal.id;
        const nextBtn = modal.querySelector(".next");
        const prevBtn = modal.querySelector(".prev");

        if(nextBtn) nextBtn.addEventListener("click", () => {
            const proj = config.projects[modalId];
            proj.currentSlide = (proj.currentSlide + 1) % proj.slides.length;
            updateModalSlide(modalId);
        });
        if(prevBtn) prevBtn.addEventListener("click", () => {
            const proj = config.projects[modalId];
            proj.currentSlide = (proj.currentSlide - 1 + proj.slides.length) % proj.slides.length;
            updateModalSlide(modalId);
        });
    });

    // Back to Top
    const backToTopBtn = document.querySelector('.back-to-top');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) backToTopBtn.classList.add('visible');
            else backToTopBtn.classList.remove('visible');
        });
    }

    // --- 7. FORM SUBMISSION ---
    const form = document.getElementById("contact-form");
    if(form) {
        form.addEventListener("submit", async function(e) {
            e.preventDefault(); 
            const btn = form.querySelector(".submit-btn");
            const originalText = btn.innerHTML;
            btn.innerHTML = "Sending... <i class='bx bx-loader-alt bx-spin'></i>";
            btn.style.opacity = "0.7"; btn.disabled = true;

            const formData = new FormData(form);
            try {
                const response = await fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' }});
                if (response.ok) {
                    btn.innerHTML = "Sent Successfully <i class='bx bx-check'></i>";
                    btn.style.background = "#fff"; btn.style.color = "#000";
                    form.reset(); 
                    setTimeout(() => { btn.innerHTML = originalText; btn.style.background = ""; btn.style.color = ""; btn.style.opacity = "1"; btn.disabled = false; }, 4000);
                } else { throw new Error("Submission Failed"); }
            } catch (error) {
                btn.innerHTML = "Failed. Try Again.";
                setTimeout(() => { btn.innerHTML = originalText; btn.style.opacity = "1"; btn.disabled = false; }, 3000);
            }
        });
    }
});