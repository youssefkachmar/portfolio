document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. LANGUAGE DICTIONARY ---
    const translations = {
        en: {
            nav_home: "Home", nav_edu: "Education", nav_competence: "Competence", nav_certs: "Certs", nav_projects: "Projects", nav_contact: "Contact",
            hero_badge: "Network & Systems Student",
            hero_title: "Future Admin.",
            hero_desc: "A 20-year-old aspiring IT Specialist for System Integration with a solid technical foundation in computer systems and advanced networking. Combining hands-on experience in virtualization and network architecture with a dedicated work ethic, I am eager to apply my skills within a professional apprenticeship in Germany.",
            nav_resume: "Resume", // Button Text
            btn_contact: "Contact Me",
            section_edu: "Education Path",
            edu_ista_title: "Computer Systems & Networks",
            edu_ista_date: "Sept 2024 - June 2026",
            edu_ista_desc: "Comprehensive training in network architecture, system administration, and infrastructure management.",
            edu_bio_title: "Biology Studies",
            edu_bio_date: "Sept 2023 - July 2024",
            edu_bio_desc: "Developed scientific reasoning, lab safety protocols, and analytical skills.",
            edu_bac_title: "High School Diploma - Physics",
            edu_bac_desc: "Focus on Physics and Mathematics.",
            section_competence: "Competence",
            skill_net: "Networking", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sec",
            skill_lang: "Languages",
            lang_ar: "Arabic", level_native: "Native",
            lang_en: "English", level_c1: "Advanced (C1)",
            lang_de: "German", level_a2: "Beginner (A2)",
            lang_fr: "French", level_b2: "Intermediate (B2)",
            section_certs: "Certifications",
            status_earned: "Earned", status_progress: "In Progress",
            section_projects: "Featured Projects",
            proj_1_title: "Secure Azure Cloud Network", proj_1_desc: "A complex Azure implementation featuring pfSense, Suricata IPS, and Active Directory.",
            proj_2_title: "Network Automation", proj_2_desc: "Python scripts for automating device configuration and network discovery.",
            btn_details: "View Details",
            section_contact: "Let's Connect",
            contact_desc: "I am currently looking for internship and apprenticeship opportunities.",
            btn_send: "Send Message"
        },
        de: {
            nav_home: "Startseite", nav_edu: "Bildung", nav_competence: "Kompetenzen", nav_certs: "Zertifikate", nav_projects: "Projekte", nav_contact: "Kontakt",
            hero_badge: "Netzwerk & Systeme Student",
            hero_title: "Zukünftiger Admin.",
            hero_desc: "Ein 20-jähriger angehender Fachinformatiker für Systemintegration mit fundiertem Basiswissen in Computersystemen und fortgeschrittener Netzwerktechnik. Mit praktischer Erfahrung in Virtualisierung und Netzwerkarchitektur sowie hoher Lernbereitschaft strebe ich eine professionelle Ausbildung in Deutschland an.",
            nav_resume: "Lebenslauf", // Button Text
            btn_contact: "Kontaktieren Sie mich",
            section_edu: "Bildungsweg",
            edu_ista_title: "Computersysteme und Netzwerke",
            edu_ista_date: "Sept 2024 - Juni 2026",
            edu_ista_desc: "Umfassende Ausbildung in Netzwerkarchitektur, Systemadministration und Infrastrukturmanagement.",
            edu_bio_title: "Biologiestudium",
            edu_bio_date: "Sept 2023 - Juli 2024",
            edu_bio_desc: "Entwicklung von wissenschaftlichem Denken und analytischen Fähigkeiten.",
            edu_bac_title: "Abitur Physik",
            edu_bac_desc: "Schwerpunkt Physik und Mathematik.",
            section_competence: "Kompetenzen",
            skill_net: "Netzwerke", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sicherheit",
            skill_lang: "Sprachen",
            lang_ar: "Arabisch", level_native: "Muttersprache",
            lang_en: "Englisch", level_c1: "Fortgeschritten (C1)",
            lang_de: "Deutsch", level_a2: "Anfänger (A2)",
            lang_fr: "Französisch", level_b2: "Mittelstufe (B2)",
            section_certs: "Zertifizierungen",
            status_earned: "Erhalten", status_progress: "In Bearbeitung",
            section_projects: "Ausgewählte Projekte",
            proj_1_title: "Sicheres Azure Cloud Netzwerk", proj_1_desc: "Eine komplexe Azure-Implementierung mit pfSense, Suricata IPS und Active Directory.",
            proj_2_title: "Netzwerkautomatisierung", proj_2_desc: "Python-Skripte zur Automatisierung der Gerätekonfiguration.",
            btn_details: "Details anzeigen",
            section_contact: "Lassen Sie uns verbinden",
            contact_desc: "Ich suche derzeit nach Praktikums- und Ausbildungsplätzen.",
            btn_send: "Nachricht Senden"
        },
        fr: {
            nav_home: "Accueil", nav_edu: "Éducation", nav_competence: "Compétences", nav_certs: "Certs", nav_projects: "Projets", nav_contact: "Contact",
            hero_badge: "Étudiant Réseaux & Systèmes",
            hero_title: "Futur Admin.",
            hero_desc: "Un futur spécialiste informatique de 20 ans en intégration de systèmes, avec une base technique solide en systèmes informatiques et réseaux avancés. Alliant une expérience pratique de la virtualisation et de l'architecture réseau à une forte éthique de travail, je suis désireux de débuter un apprentissage professionnel en Allemagne.",
            nav_resume: "CV", // Button Text
            btn_contact: "Contactez-moi",
            section_edu: "Parcours Éducatif",
            edu_ista_title: "Systèmes et Réseaux Informatiques",
            edu_ista_date: "Sept 2024 - Juin 2026",
            edu_ista_desc: "Formation complète en architecture réseau, administration système et gestion d'infrastructure.",
            edu_bio_title: "Études de Biologie",
            edu_bio_date: "Sept 2023 - Juil 2024",
            edu_bio_desc: "Développement du raisonnement scientifique, protocoles de labo et esprit analytique.",
            edu_bac_title: "Baccalauréat Sciences Physiques",
            edu_bac_desc: "Concentration sur la physique et les mathématiques.",
            section_competence: "Compétences",
            skill_net: "Réseaux", skill_sys: "Admin Sys", skill_cloud: "Cloud & Sécu",
            skill_lang: "Langues",
            lang_ar: "Arabe", level_native: "Langue Maternelle",
            lang_en: "Anglais", level_c1: "Avancé (C1)",
            lang_de: "Allemand", level_a2: "Débutant (A2)",
            lang_fr: "Français", level_b2: "Intermédiaire (B2)",
            section_certs: "Certifications",
            status_earned: "Obtenu", status_progress: "En Cours",
            section_projects: "Projets Phares",
            proj_1_title: "Réseau Cloud Azure Sécurisé", proj_1_desc: "Une implémentation Azure complexe avec pfSense, Suricata IPS et Active Directory.",
            proj_2_title: "Automatisation Réseau", proj_2_desc: "Scripts Python pour automatiser la configuration des appareils.",
            btn_details: "Voir Détails",
            section_contact: "Connectons-nous",
            contact_desc: "Je suis actuellement à la recherche d'opportunités de stage et d'apprentissage.",
            btn_send: "Envoyer Message"
        }
    };
    
    // Dynamic List Content for ISTA
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
        
        document.querySelectorAll('.lang-opt').forEach(btn => btn.classList.remove('active'));
        if(document.getElementById(`btn-${lang}`)) {
            document.getElementById(`btn-${lang}`).classList.add('active');
        }

        // Mobile Buttons
        document.querySelectorAll('.mobile-controls button').forEach(btn => {
            btn.classList.remove('active');
            if(btn.getAttribute('onclick').includes(`'${lang}'`)) {
                btn.classList.add('active');
            }
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        const istaListEl = document.querySelector('[data-i18n="edu_ista_list"]');
        if(istaListEl) istaListEl.innerHTML = istaLists[lang];
    };

    setLanguage('en');

    // --- 2. MOBILE MENU LOGIC ---
    const mobileMenuBtn = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMobileBtn = document.querySelector(".close-mobile-nav");
    
    function closeMenu() {
        if (mobileNav) {
            mobileNav.classList.remove("active");
            document.body.classList.remove("menu-open"); // Allow scroll
        }
    }

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileNav.classList.add("active");
            document.body.classList.add("menu-open"); // Stop scroll
        });
    }
    
    if(closeMobileBtn) {
        closeMobileBtn.addEventListener("click", closeMenu);
    }

    document.querySelectorAll(".mobile-nav-content a").forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- 3. HERO RESUME DROPDOWN LOGIC ---
    const resumeTrigger = document.querySelector('.resume-trigger');
    const resumeMenu = document.querySelector('.hero-resume-menu');

    if(resumeTrigger) {
        resumeTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            resumeMenu.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!resumeTrigger.contains(e.target) && !resumeMenu.contains(e.target)) {
                resumeMenu.classList.remove('active');
            }
        });
    }

    // --- 4. PROJECT DATA ---
    const config = {
        projects: {
            "project-modal-1": {
                currentSlide: 0,
                slides: [
                    {
                        img: "images/azure-project/0-topology.png",
                        title: { en: "1. Network Topology Overview", fr: "1. Vue d'Ensemble de la Topologie", de: "1. Netzwerk-Topologie Übersicht" },
                        text: {
                            en: "High-level diagram of the Azure infrastructure illustrating the Hub-and-Spoke model with central pfSense NVA.",
                            fr: "Diagramme de haut niveau illustrant le modèle Hub-and-Spoke avec NVA pfSense central.",
                            de: "High-Level-Diagramm der Azure-Infrastruktur mit zentralem pfSense NVA."
                        }
                    },
                    {
                        img: "images/azure-project/1-azure-udr.png",
                        title: { en: "2. Azure Routing (UDR)", fr: "2. Routage Azure (UDR)", de: "2. Azure Routing (UDR)" },
                        text: {
                            en: "Configured User Defined Routes to force all subnet traffic (0.0.0.0/0) through the pfSense appliance (10.0.6.4) for inspection.",
                            fr: "Configuration des routes UDR pour forcer tout le trafic via l'appliance pfSense pour inspection.",
                            de: "Konfiguration von User Defined Routes, um den gesamten Verkehr zur Inspektion über die pfSense-Appliance zu leiten."
                        }
                    },
                    {
                        img: "images/azure-project/2-pfsense-dashboard.png",
                        title: { en: "3. Core Gateway (pfSense)", fr: "3. Passerelle Centrale", de: "3. Zentrales Gateway" },
                        text: {
                            en: "The pfSense dashboard showing active interfaces and status. It handles Firewall rules, NAT, and OpenVPN for secure remote access.",
                            fr: "Tableau de bord pfSense montrant les interfaces actives. Gère le pare-feu, le NAT et OpenVPN.",
                            de: "Das pfSense-Dashboard zeigt aktive Schnittstellen. Verarbeitet Firewall-Regeln, NAT und OpenVPN."
                        }
                    },
                    {
                        img: "images/azure-project/3-ad-dashboard.png",
                        title: { en: "4. Identity (Active Directory)", fr: "4. Identité (AD DS)", de: "4. Identität (AD DS)" },
                        text: {
                            en: "Windows Server Domain Controller managing 'projetpfe.local' and internal DNS resolution.",
                            fr: "Contrôleur de domaine Windows Server gérant 'projetpfe.local'. Gère les utilisateurs et la résolution DNS interne.",
                            de: "Windows Server Domänencontroller für 'projetpfe.local'. Verwaltet Benutzer und interne DNS-Auflösung."
                        }
                    },
                    {
                        img: "images/azure-project/4-haproxy-stats.png",
                        title: { en: "5. Reverse Proxy (HAProxy)", fr: "5. Proxy Inverse", de: "5. Reverse Proxy" },
                        text: {
                            en: "HAProxy on pfSense securely publishing the internal Nginx web server using Layer 7 load balancing.",
                            fr: "HAProxy sur pfSense publiant le serveur web Nginx interne de manière sécurisée.",
                            de: "HAProxy auf pfSense veröffentlicht den internen Nginx-Webserver sicher."
                        }
                    },
                    {
                        img: "images/azure-project/5-voip-call.png",
                        title: { en: "6. VoIP Call Test", fr: "6. Test d'Appel VoIP", de: "6. VoIP-Anruftest" },
                        text: {
                            en: "Successful SIP call test using Zoiper softphones, validating RTP port forwarding and NAT.",
                            fr: "Test d'appel SIP réussi avec Zoiper, validant la redirection de port RTP et le NAT.",
                            de: "Erfolgreicher SIP-Anruftest mit Zoiper, Bestätigung von RTP-Portweiterleitung und NAT."
                        }
                    },
                    {
                        img: "images/azure-project/6-suricata-alerts.png",
                        title: { en: "7. IDS/IPS Defense", fr: "7. Défense IDS/IPS", de: "7. IDS/IPS-Verteidigung" },
                        text: {
                            en: "Suricata logs showing detection of an Nmap scan. The system blocked the source IP immediately.",
                            fr: "Logs Suricata montrant la détection d'un scan Nmap. L'IP source a été bloquée immédiatement.",
                            de: "Suricata-Protokolle zeigen die Erkennung eines Nmap-Scans. Die Quell-IP wurde sofort blockiert."
                        }
                    },
                    {
                        img: "images/azure-project/7-zabbix-dashboard.png",
                        title: { en: "8. Infrastructure Monitoring", fr: "8. Supervision", de: "8. Infrastrukturüberwachung" },
                        text: {
                            en: "Zabbix dashboard monitoring CPU, RAM, and uptime across all Linux and Windows VMs.",
                            fr: "Tableau de bord Zabbix surveillant CPU, RAM et disponibilité sur toutes les VM.",
                            de: "Zabbix-Dashboard zur Überwachung von CPU, RAM und Verfügbarkeit aller VMs."
                        }
                    },
                    {
                        img: "images/azure-project/8-wazuh-dashboard.png",
                        title: { en: "9. SIEM (Wazuh)", fr: "9. SIEM (Wazuh)", de: "9. SIEM (Wazuh)" },
                        text: {
                            en: "Wazuh Security Dashboard aggregating logs to detect vulnerabilities and integrity changes.",
                            fr: "Tableau de bord de sécurité Wazuh agrégeant les logs pour détecter les vulnérabilités.",
                            de: "Wazuh-Sicherheits-Dashboard, das Protokolle zur Erkennung von Schwachstellen aggregiert."
                        }
                    }
                ]
            },
            "project-modal-2": {
                currentSlide: 0,
                slides: [
                    {
                        img: "images/python-automation.png",
                        title: { en: "Network Automation", fr: "Automatisation Réseau", de: "Netzwerkautomatisierung" },
                        text: {
                            en: "Python scripts to automate device configuration backups via SSH and perform network discovery.",
                            fr: "Scripts Python pour automatiser les sauvegardes de configuration via SSH et la découverte réseau.",
                            de: "Python-Skripte zur Automatisierung von Konfigurationssicherungen über SSH und Netzwerkerkennung."
                        }
                    }
                ]
            }
        }
    };

    // --- 5. MODALS & OTHER ---
    AOS.init({ duration: 1000, once: true });
    
    const allModals = document.querySelectorAll(".modal");
    const imageModal = document.getElementById("image-modal");

    function openModal(modal) {
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    }

    function closeModal(modal) {
        modal.classList.remove("active");
        document.body.classList.remove("modal-open");
    }

    document.querySelectorAll(".open-project-modal-btn").forEach(btn => {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            const modalId = this.closest(".project-card").dataset.modalId;
            const modal = document.getElementById(modalId);
            if(config.projects[modalId]) {
                config.projects[modalId].currentSlide = 0;
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
             if(zoomImg) {
                 zoomImg.src = currentData.img;
                 openModal(imageModal);
             }
        });
    }

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

    // Back to Top Logic
    const backToTopBtn = document.querySelector('.back-to-top');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
    }

    // Form Submission
    const form = document.querySelector(".contact-form");
    if(form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            const btn = form.querySelector("button");
            const originalText = btn.textContent;
            btn.textContent = "Sending...";
            setTimeout(() => {
                alert("This is a demo form. Integrate a backend like Formspree to receive emails!");
                btn.textContent = "Sent!";
                form.reset();
                setTimeout(() => btn.textContent = originalText, 2000);
            }, 1000);
        });
    }
});