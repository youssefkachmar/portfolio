document.addEventListener("DOMContentLoaded", function () {
    
    const bootScreen = document.getElementById("boot-screen");
    const bootText = document.getElementById("boot-text");
    
    if (bootScreen && bootText) {
        const lines =[
            "Initializing Network Protocols...",
            "Establishing Secure Connection...",
            "Loading Routing Tables...[OK]",
            "Starting pfSense Firewall... [OK]",
            "Mounting File Systems... [OK]",
            "System Ready. Welcome Admin."
        ];
        
        let delay = 0;
        lines.forEach((line, index) => {
            setTimeout(() => {
                bootText.innerHTML += line + "<br>";
                if (index === lines.length - 1) {
                    setTimeout(() => {
                        bootScreen.style.opacity = "0";
                        setTimeout(() => bootScreen.remove(), 800);
                    }, 500);
                }
            }, delay);
            delay += 250; 
        });
    }

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const translations = {
        en: {
            nav_home: "Home", nav_edu: "Education", nav_exp: "Experience", nav_competence: "Competences", nav_certs: "Certs", nav_projects: "Projects", nav_contact: "Contact",
            hero_badge: "Systems & Network Specialist", hero_subtitle: "Future Admin.",
            hero_desc: "A 20-year-old IT Specialist in System Integration and Networking with a solid technical foundation in computer systems and advanced networking. Combining hands-on experience in virtualization, network architecture, and security, I am eager to apply my skills and contribute to enterprise system performance, network design, and reliable IT operations support.",
            nav_resume: "Resume", btn_contact: "Contact Me",
            section_edu: "Education Path", edu_ista_title: "Specialized Technician Diploma - Computer Systems & Networks", edu_ista_date: "Sept 2024 - June 2026", edu_ista_desc: "Comprehensive training in network architecture, system administration, and infrastructure management.", edu_bio_title: "Biology Studies", edu_bio_date: "Sept 2023 - July 2024", edu_bio_desc: "Developed scientific reasoning, lab safety protocols, and analytical skills.", edu_bac_title: "High School Diploma - Physics", edu_bac_date: "Jun 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Focus on Physics and Mathematics.",
            section_exp: "Professional Experience", exp_1_title: "IT Technician Intern", exp_1_company: "Societe Regionale Multiservices | Taza, Morocco", exp_1_desc: "Assisted in configuring and deploying network devices. Monitored network performance and provided baseline troubleshooting to maintain reliable IT infrastructure.", exp_2_title: "IT Support Intern", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Morocco", exp_2_desc: "Installed, configured, and maintained office hardware and network equipment. Delivered Tier-1 technical support and effectively resolved day-to-day user issues.",
            
            section_competence: "Competences", skill_net: "Networking", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sec", 
            skill_itsm: "ITSM & Workflow", skill_itsm_desc: "ITIL, Ticketing (Jira), Git, Documentation",
            skill_lang: "Languages", lang_ar: "Arabic", level_native: "Native", lang_en: "English", level_c1: "Advanced (C1)", lang_de: "German", level_de: "Upper-Intermediate (B2)", lang_fr: "French", level_fr: "Intermediate (B2)",
            
            section_certs: "Certifications", status_earned: "Earned", status_progress: "In Progress", btn_verify: "Verify", btn_view_cert: "Certificate",
            section_projects: "Featured Projects", proj_1_title: "Secure Azure Cloud Network", proj_1_desc: "A complex Azure implementation featuring pfSense, Suricata IPS, and Active Directory.", proj_2_title: "Network Automation", proj_2_desc: "Python scripts for automating device configuration and network discovery.", btn_details: "View Details",
            
            section_contact: "Let's Connect", contact_desc: "I am currently looking for internship and apprenticeship opportunities.", btn_send: "Send Message",
            footer_legal: "Legal Notice", footer_privacy: "Privacy Policy",
            
            proj_badge: "Enterprise Cloud Architecture", proj_title: "Secure Azure Cloud Infrastructure", proj_subtitle: "A comprehensive, zero-trust cloud network deployment on Microsoft Azure featuring strict Hub-and-Spoke segmentation, IDS/IPS threat detection, and centralized SIEM monitoring.", proj_repo: "View Repository", proj_role_label: "Role", proj_role_val: "Network Architect", proj_env_label: "Environment", proj_env_val: "Microsoft Azure IaaS", proj_sec_label: "Security Model", proj_sec_val: "Zero-Trust / Hub-and-Spoke", proj_s1_title: "Strict Traffic Control & UDRs", proj_s1_p1: "To completely eliminate the vulnerabilities of a flat network, the architecture is strictly segmented into dedicated subnets: AD/DNS, Web, Client, VoIP, and Management.", proj_s1_p2: "Using Azure User Defined Routes (UDRs), all outbound and inter-subnet traffic is forcefully funneled through the central pfSense Network Virtual Appliance (NVA). No internal machine can bypass the firewall.", proj_s2_title: "Central Security Gateway", proj_s2_p1: "The pfSense Firewall acts as the absolute core of the security perimeter.", proj_s2_p2: "It handles highly granular LAN/WAN filtering, Network Address Translation (NAT) for outbound traffic, and provisions a secure OpenVPN tunnel for remote administration. This ensures root access is never exposed to the public internet.", proj_s3_title: "Identity & Reverse Proxy", proj_s3_p1: "A Windows Server instance runs Active Directory (AD DS) to centralize IAM and handle local DNS resolution across the entire virtual network.", proj_s3_p2: "For externally facing services, internal Nginx web servers are securely published using HAProxy. This handles SSL-offloading at the edge and obfuscates internal IP structures from end-users.", proj_s4_title: "Full SOC Observability & IDS/IPS", proj_s4_p1: "A modern network is blind without monitoring. To defend the perimeter dynamically, Suricata (IDS/IPS) analyzes network flows to detect and block malicious signatures, actively mitigating simulated Nmap port scans.", proj_s4_p2: "Total visibility is maintained using Zabbix for real-time hardware monitoring, while Wazuh (SIEM/HIDS) aggregates system logs into a comprehensive Security Operations Center.", proj_tech_stack: "Technology Stack"
        },
        fr: {
            nav_home: "Accueil", nav_edu: "Éducation", nav_exp: "Expérience", nav_competence: "Compétences", nav_certs: "Certs", nav_projects: "Projets", nav_contact: "Contact",
            hero_badge: "Spécialiste Systèmes & Réseaux", hero_subtitle: "Futur Admin.",
            hero_desc: "Spécialiste en Intégration de Systèmes et Réseaux de 20 ans, doté d'une base technique solide. Autonome et rigoureux, avec une expérience pratique en virtualisation et déploiement d'architectures réseau sécurisées, je suis à la recherche d'opportunités professionnelles pour contribuer à la gestion des systèmes, la sécurité réseau et le support technique.",
            nav_resume: "CV", btn_contact: "Contactez-moi",
            section_edu: "Parcours Éducatif", edu_ista_title: "Diplôme de Technicien Spécialisé - Systèmes et Réseaux Informatiques", edu_ista_date: "Sept 2024 - Juin 2026", edu_ista_desc: "Formation complète en architecture réseau, administration système et gestion d'infrastructure.", edu_bio_title: "Études de Biologie", edu_bio_date: "Sept 2023 - Juil 2024", edu_bio_desc: "Développement du raisonnement scientifique et protocoles de laboratoire.", edu_bac_title: "Baccalauréat Sciences Physiques", edu_bac_date: "Juin 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Concentration sur la physique et les mathématiques.",
            section_exp: "Expérience Professionnelle", exp_1_title: "Stagiaire Technicien IT", exp_1_company: "Societe Regionale Multiservices | Taza, Maroc", exp_1_desc: "Assistance à la configuration et au déploiement des équipements réseau. Surveillance des performances du réseau et dépannage de base pour maintenir la fiabilité de l'infrastructure.", exp_2_title: "Stagiaire Support IT", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Maroc", exp_2_desc: "Installation, configuration et maintenance du matériel informatique et des équipements réseau. Fourniture d'un support technique de niveau 1 et résolution des problèmes quotidiens des utilisateurs.",
            
            section_competence: "Compétences", skill_net: "Réseaux", skill_sys: "Admin Sys", skill_cloud: "Cloud & Sécu", 
            skill_itsm: "ITSM & Méthodologie", skill_itsm_desc: "ITIL, Ticketing (Jira), Git, Documentation",
            skill_lang: "Langues", lang_ar: "Arabe", level_native: "Langue Maternelle", lang_en: "Anglais", level_c1: "Avancé (C1)", lang_de: "Allemand", level_de: "Intermédiaire Supérieur (B2)", lang_fr: "Français", level_fr: "Intermédiaire Supérieur (B2)",
            
            section_certs: "Certifications", status_earned: "Obtenu", status_progress: "En Cours", btn_verify: "Vérifier", btn_view_cert: "Certificat",
            section_projects: "Projets Phares", proj_1_title: "Réseau Cloud Azure Sécurisé", proj_1_desc: "Une implémentation Azure complexe avec pfSense, Suricata IPS et Active Directory.", proj_2_title: "Automatisation Réseau", proj_2_desc: "Scripts Python pour automatiser la configuration des appareils.", btn_details: "Voir Détails",
            
            section_contact: "Connectons-nous", contact_desc: "Je suis actuellement à la recherche de stages ou d'opportunités de carrière.", btn_send: "Envoyer",
            footer_legal: "Mentions Légales", footer_privacy: "Confidentialité",

            proj_badge: "Architecture Cloud d'Entreprise", proj_title: "Infrastructure Cloud Azure Sécurisée", proj_subtitle: "Un déploiement réseau cloud complet et zéro-confiance sur Microsoft Azure avec une segmentation stricte Hub-and-Spoke, une détection des menaces IDS/IPS et une surveillance SIEM centralisée.", proj_repo: "Voir le Dépôt", proj_role_label: "Rôle", proj_role_val: "Architecte Réseau", proj_env_label: "Environnement", proj_env_val: "Microsoft Azure IaaS", proj_sec_label: "Modèle de Sécurité", proj_sec_val: "Zéro Confiance / Hub-and-Spoke", proj_s1_title: "Contrôle Strict du Trafic & UDRs", proj_s1_p1: "Pour éliminer complètement les vulnérabilités d'un réseau plat, l'architecture est strictement segmentée en sous-réseaux dédiés : AD/DNS, Web, Client, VoIP et Management.", proj_s1_p2: "Grâce aux User Defined Routes (UDR) d'Azure, tout le trafic sortant et inter-sous-réseaux est obligatoirement acheminé via le pare-feu central pfSense. Aucune machine interne ne peut contourner le pare-feu.", proj_s2_title: "Passerelle de Sécurité Centrale", proj_s2_p1: "Le pare-feu pfSense agit comme le cœur absolu du périmètre de sécurité.", proj_s2_p2: "Il gère un filtrage LAN/WAN très granulaire, la traduction d'adresses réseau (NAT) pour le trafic sortant et fournit un tunnel OpenVPN sécurisé pour l'administration à distance.", proj_s3_title: "Identité & Proxy Inverse", proj_s3_p1: "Une instance Windows Server exécute Active Directory (AD DS) pour centraliser l'IAM et gérer la résolution DNS locale sur l'ensemble du réseau virtuel.", proj_s3_p2: "Pour les services exposés à l'extérieur, les serveurs web Nginx internes sont publiés en toute sécurité via HAProxy. Cela gère le déchargement SSL à la périphérie et masque les structures IP internes.", proj_s4_title: "Observabilité Complète du SOC & IDS/IPS", proj_s4_p1: "Un réseau moderne est aveugle sans surveillance. Pour défendre dynamiquement le périmètre, Suricata (IDS/IPS) anslyse les flux réseau pour détecter et bloquer les signatures malveillantes.", proj_s4_p2: "La visibilité totale est maintenue grâce à Zabbix pour la surveillance matérielle en temps réel, tandis que Wazuh (SIEM/HIDS) agrège les journaux système dans un centre des opérations de sécurité complet.", proj_tech_stack: "Stack Technologique"
        }
    };
    
    const istaLists = {
        en: `<li><strong>Networking:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li><li><strong>Cloud & Automation:</strong> Azure, SDN, Python, Network Security.</li>`,
        fr: `<li><strong>Réseaux:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>Admin Sys:</strong> Windows Server (AD, DNS, GPO), Admin Linux.</li><li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Sécurité Réseau.</li>`
    };

    let currentLang = localStorage.getItem('preferredLang') || 'en';

    window.setLanguage = function(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLang', lang); 
        
        const currentLangText = document.getElementById("current-lang");
        if(currentLangText) currentLangText.innerText = lang.toUpperCase();
        
        const dropdown = document.getElementById("lang-dropdown");
        if(dropdown) dropdown.classList.remove("active");

        document.querySelectorAll('.mobile-controls button').forEach(btn => {
            btn.classList.remove('active');
            if(btn.getAttribute('onclick').includes(`'${lang}'`)) btn.classList.add('active');
        });

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if(translations[lang][key]) el.innerHTML = translations[lang][key];
        });

        const istaListEl = document.querySelector('[data-i18n="edu_ista_list"]');
        if(istaListEl) istaListEl.innerHTML = istaLists[lang];
    };
    
    setLanguage(currentLang);

    const langDropdown = document.getElementById("lang-dropdown");
    if(langDropdown) {
        langDropdown.querySelector(".dropdown-trigger").addEventListener("click", (e) => { e.stopPropagation(); langDropdown.classList.toggle("active"); });
        document.addEventListener("click", (e) => { if(!langDropdown.contains(e.target)) langDropdown.classList.remove("active"); });
    }

    const mobileMenuBtn = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMobileBtn = document.querySelector(".close-mobile-nav");
    function closeMenu() { if (mobileNav) { mobileNav.classList.remove("active"); document.body.classList.remove("menu-open"); } }
    if(mobileMenuBtn) { mobileMenuBtn.addEventListener("click", () => { mobileNav.classList.add("active"); document.body.classList.add("menu-open"); }); }
    if(closeMobileBtn) closeMobileBtn.addEventListener("click", closeMenu);
    document.querySelectorAll(".mobile-nav-content a").forEach(link => link.addEventListener('click', closeMenu));

    const resumeTrigger = document.querySelector('.resume-trigger');
    const resumeMenu = document.querySelector('.hero-resume-menu');
    if(resumeTrigger) {
        resumeTrigger.addEventListener('click', (e) => { e.stopPropagation(); resumeMenu.classList.toggle('active'); });
        document.addEventListener('click', (e) => { if (!resumeTrigger.contains(e.target) && !resumeMenu.contains(e.target)) resumeMenu.classList.remove('active'); });
    }

    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            faqItems.forEach(faq => {
                faq.classList.remove('active');
                const icon = faq.querySelector('.faq-question i');
                if (icon) icon.className = 'bx bx-plus';
            });
            
            if (!isActive) {
                item.classList.add('active');
                const icon = item.querySelector('.faq-question i');
                if (icon) icon.className = 'bx bx-x';
            }
        });
    });

    if(document.getElementById("project-modal-2")) {
        const config = {
            projects: {
                "project-modal-2": {
                    currentSlide: 0,
                    technologies:[ { name: "Python", icon: "bx bxl-python" }, { name: "Cisco IOS", icon: "bx bx-network-chart" }, { name: "SSH/Telnet", icon: "bx bx-terminal" } ],
                    slides:[ { img: "images/python-automation.png", title: { en: "Network Automation", fr: "Automatisation", de: "Automatisierung" }, text: { en: "Python scripts for configuration backups via SSH.", fr: "Scripts Python pour les sauvegardes SSH.", de: "Python-Skripte für SSH-Backups." } } ]
                }
            }
        };

        if(typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });
        const allModals = document.querySelectorAll(".modal");
        const imageModal = document.getElementById("image-modal");

        function renderTicker(modalId) {
            const techArray = config.projects[modalId].technologies;
            const track = document.getElementById(`ticker-track-${modalId.split('-')[2]}`);
            if(track) {
                let itemsHtml = techArray.map(t => `<div class="ticker-item"><i class='${t.icon}'></i> ${t.name}</div>`).join('');
                track.innerHTML = itemsHtml + itemsHtml + itemsHtml;
            }
        }

        function updateModalSlide(modalId) {
            const projectData = config.projects[modalId];
            const modal = document.getElementById(modalId);
            const currentData = projectData.slides[projectData.currentSlide];
            
            modal.querySelector(".project-modal-image-wrapper").innerHTML = `<img src="${currentData.img}" alt="${currentData.title[currentLang]}">`;
            modal.querySelector(".project-modal-description").innerHTML = `<h4>${currentData.title[currentLang]}</h4><p>${currentData.text[currentLang]}</p>`;
            
            const counter = modal.querySelector(".project-modal-counter");
            if(counter) counter.textContent = `${projectData.currentSlide + 1} / ${projectData.slides.length}`;
            
            modal.querySelector(".project-modal-image-wrapper img").addEventListener("click", () => {
                 const zoomImg = imageModal.querySelector("img");
                 if(zoomImg) { zoomImg.src = currentData.img; openModal(imageModal); }
            });
        }

        function openModal(modal) { modal.classList.add("active"); lenis.stop(); }
        function closeModal(modal) { modal.classList.remove("active"); lenis.start(); }

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
                config.projects[modalId].currentSlide = (config.projects[modalId].currentSlide + 1) % config.projects[modalId].slides.length;
                updateModalSlide(modalId);
            });
            if(prevBtn) prevBtn.addEventListener("click", () => {
                config.projects[modalId].currentSlide = (config.projects[modalId].currentSlide - 1 + config.projects[modalId].slides.length) % config.projects[modalId].slides.length;
                updateModalSlide(modalId);
            });
        });
    } else {
        if(typeof AOS !== 'undefined') AOS.init({ duration: 1000, once: true });
    }

    const backToTopBtn = document.querySelector('.back-to-top');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) backToTopBtn.classList.add('visible');
            else backToTopBtn.classList.remove('visible');
        });
    }

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