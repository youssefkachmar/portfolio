document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. SYSADMIN BOOT SEQUENCE PRELOADER ---
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

    // --- 2. SMOOTH SCROLLING (LENIS) ---
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

    // --- 3. LANGUAGE DICTIONARY ---
    const translations = {
        en: {
            nav_home: "Home", nav_edu: "Education", nav_exp: "Experience", nav_competence: "Competence", nav_certs: "Certs", nav_projects: "Projects", nav_contact: "Contact", nav_faq: "FAQ",
            hero_badge: "Network & Systems Student", hero_title: "Future Admin.",
            hero_desc: "A 20-year-old aspiring IT Specialist for System Integration with a solid technical foundation in computer systems and advanced networking. Combining hands-on experience in virtualization and network architecture with a dedicated work ethic, I am eager to apply my skills within a professional apprenticeship in Germany.",
            nav_resume: "Resume", btn_contact: "Contact Me",
            section_edu: "Education Path", edu_ista_title: "Computer Systems & Networks", edu_ista_date: "Sept 2024 - June 2026", edu_ista_desc: "Comprehensive training in network architecture, system administration, and infrastructure management.", edu_bio_title: "Biology Studies", edu_bio_date: "Sept 2023 - July 2024", edu_bio_desc: "Developed scientific reasoning, lab safety protocols, and analytical skills.", edu_bac_title: "High School Diploma - Physics", edu_bac_date: "Jun 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Focus on Physics and Mathematics.",
            section_exp: "Professional Experience", exp_1_title: "IT Technician Intern", exp_1_company: "Societe Regionale Multiservices | Taza, Morocco", exp_1_desc: "Assisted in configuring and deploying network devices. Monitored network performance and provided baseline troubleshooting to maintain reliable IT infrastructure.", exp_2_title: "IT Support Intern", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Morocco", exp_2_desc: "Installed, configured, and maintained office hardware and network equipment. Delivered Tier-1 technical support and effectively resolved day-to-day user issues.",
            section_competence: "Competence", skill_net: "Networking", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sec", skill_lang: "Languages", lang_ar: "Arabic", level_native: "Native", lang_en: "English", level_c1: "Advanced (C1)", lang_de: "German", level_b1: "Intermediate (B1)", lang_fr: "French", level_b2: "Intermediate (B2)",
            section_certs: "Certifications", status_earned: "Earned", status_progress: "In Progress", btn_verify: "Verify", btn_view_cert: "Certificate",
            section_projects: "Featured Projects", proj_1_title: "Secure Azure Cloud Network", proj_1_desc: "A complex Azure implementation featuring pfSense, Suricata IPS, and Active Directory.", proj_2_title: "Network Automation", proj_2_desc: "Python scripts for automating device configuration and network discovery.", btn_details: "View Details",
            
            section_faq: "Frequently Asked Questions",
            faq_1_q: "Why do you want to do an Ausbildung in Germany?", faq_1_a: "Germany's dual vocational training system is globally recognized for blending theory with hands-on practice. My goal is to become an elite System Integration Specialist, and learning within a high-standard German IT environment is the best path to achieve that.",
            faq_2_q: "What is your current German language proficiency?", faq_2_a: "I currently hold a certified B1 level in German and communicate effectively in everyday situations. I am actively continuing my language courses to reach B2 before the apprenticeship starts, ensuring seamless workplace communication.",
            faq_3_q: "How will you handle the visa and relocation process?", faq_3_a: "As a qualified candidate with an Ausbildung contract, I am eligible for a dedicated apprenticeship visa. I have already familiarized myself with the German embassy's requirements in Morocco to ensure a swift and organized relocation well before the start date.",
            faq_4_q: "Do you already have practical IT experience?", faq_4_a: "Yes. Beyond my academic background and Cisco CCNA training, I have completed two IT internships and actively build complex enterprise networks in my home lab (featuring Azure, pfSense, and Windows Server). This allows me to add value to your team from day one.",
            section_contact: "Let's Connect", contact_desc: "I am currently looking for internship and apprenticeship opportunities.", btn_send: "Send Message",
            
            // PROJECT PAGE TRANSLATIONS
            proj_badge: "Enterprise Cloud Architecture",
            proj_title: "Secure Azure Cloud Infrastructure",
            proj_subtitle: "A comprehensive, zero-trust cloud network deployment on Microsoft Azure featuring strict Hub-and-Spoke segmentation, IDS/IPS threat detection, and centralized SIEM monitoring.",
            proj_repo: "View Repository",
            proj_role_label: "Role", proj_role_val: "Network Architect",
            proj_env_label: "Environment", proj_env_val: "Microsoft Azure IaaS",
            proj_sec_label: "Security Model", proj_sec_val: "Zero-Trust / Hub-and-Spoke",
            proj_s1_title: "Strict Traffic Control & UDRs", proj_s1_p1: "To completely eliminate the vulnerabilities of a flat network, the architecture is strictly segmented into dedicated subnets: AD/DNS, Web, Client, VoIP, and Management.", proj_s1_p2: "Using Azure User Defined Routes (UDRs), all outbound and inter-subnet traffic is forcefully funneled through the central pfSense Network Virtual Appliance (NVA). No internal machine can bypass the firewall.",
            proj_s2_title: "Central Security Gateway", proj_s2_p1: "The pfSense Firewall acts as the absolute core of the security perimeter.", proj_s2_p2: "It handles highly granular LAN/WAN filtering, Network Address Translation (NAT) for outbound traffic, and provisions a secure OpenVPN tunnel for remote administration. This ensures root access is never exposed to the public internet.",
            proj_s3_title: "Identity & Reverse Proxy", proj_s3_p1: "A Windows Server instance runs Active Directory (AD DS) to centralize IAM and handle local DNS resolution across the entire virtual network.", proj_s3_p2: "For externally facing services, internal Nginx web servers are securely published using HAProxy. This handles SSL-offloading at the edge and obfuscates internal IP structures from end-users.",
            proj_s4_title: "Full SOC Observability & IDS/IPS", proj_s4_p1: "A modern network is blind without monitoring. To defend the perimeter dynamically, Suricata (IDS/IPS) analyzes network flows to detect and block malicious signatures, actively mitigating simulated Nmap port scans.", proj_s4_p2: "Total visibility is maintained using Zabbix for real-time hardware monitoring, while Wazuh (SIEM/HIDS) aggregates system logs into a comprehensive Security Operations Center.",
            proj_tech_stack: "Technology Stack"
        },
        de: {
            nav_home: "Startseite", nav_edu: "Bildung", nav_exp: "Erfahrung", nav_competence: "Kompetenzen", nav_certs: "Zertifikate", nav_projects: "Projekte", nav_contact: "Kontakt", nav_faq: "FAQ",
            hero_badge: "Netzwerk & Systeme Student", hero_title: "Zukünftiger Admin.",
            hero_desc: "Ein 20-jähriger angehender Fachinformatiker für Systemintegration mit fundiertem Basiswissen in Computersystemen und fortgeschrittener Netzwerktechnik. Mit praktischer Erfahrung in Virtualisierung strebe ich eine Ausbildung in Deutschland an.",
            nav_resume: "Lebenslauf", btn_contact: "Kontaktieren",
            section_edu: "Bildungsweg", edu_ista_title: "Computersysteme und Netzwerke", edu_ista_date: "Sept 2024 - Juni 2026", edu_ista_desc: "Umfassende Ausbildung in Netzwerkarchitektur, Systemadministration und Infrastrukturmanagement.", edu_bio_title: "Biologiestudium", edu_bio_date: "Sept 2023 - Juli 2024", edu_bio_desc: "Entwicklung von wissenschaftlichem Denken und analytischen Fähigkeiten.", edu_bac_title: "Abitur Physik", edu_bac_date: "Jun 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Schwerpunkt Physik und Mathematik.",
            section_exp: "Berufserfahrung", exp_1_title: "Praktikant IT-Technik", exp_1_company: "Societe Regionale Multiservices | Taza, Marokko", exp_1_desc: "Unterstützung bei der Konfiguration und Bereitstellung von Netzwerkgeräten. Überwachung der Netzwerkleistung und Durchführung grundlegender Fehlerbehebungen zur Aufrechterhaltung der IT-Infrastruktur.", exp_2_title: "Praktikant IT-Support", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Marokko", exp_2_desc: "Installation, Konfiguration und Wartung von Bürohardware und Netzwerkgeräten. Bereitstellung von Tier-1-IT-Support und Lösung von alltäglichen Benutzerproblemen.",
            section_competence: "Kompetenzen", skill_net: "Netzwerke", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sicherheit", skill_lang: "Sprachen", lang_ar: "Arabisch", level_native: "Muttersprache", lang_en: "Englisch", level_c1: "Fortgeschritten (C1)", lang_de: "Deutsch", level_b1: "Mittelstufe (B1)", lang_fr: "Französisch", level_b2: "Mittelstufe (B2)",
            section_certs: "Zertifizierungen", status_earned: "Erhalten", status_progress: "In Bearbeitung", btn_verify: "Verifizieren", btn_view_cert: "Zertifikat",
            section_projects: "Ausgewählte Projekte", proj_1_title: "Sicheres Azure Cloud Netzwerk", proj_1_desc: "Eine komplexe Azure-Implementierung mit pfSense, Suricata IPS und Active Directory.", proj_2_title: "Netzwerkautomatisierung", proj_2_desc: "Python-Skripte zur Automatisierung der Gerätekonfiguration.", btn_details: "Details",
            
            section_faq: "Häufig Gestellte Fragen",
            faq_1_q: "Warum möchten Sie eine Ausbildung in Deutschland machen?", faq_1_a: "Das duale Ausbildungssystem in Deutschland ist weltweit für die Kombination aus Theorie und Praxis anerkannt. Mein Ziel ist es, ein hervorragender Fachinformatiker für Systemintegration zu werden. Die Ausbildung in einem deutschen IT-Unternehmen bietet dafür die perfekten Rahmenbedingungen.",
            faq_2_q: "Wie gut sind Ihre Deutschkenntnisse?", faq_2_a: "Ich verfüge aktuell über ein solides B1-Niveau und kann mich im Alltag gut verständigen. Ich besuche weiterhin intensiv Sprachkurse, um vor Ausbildungsbeginn das B2-Niveau zu erreichen und eine reibungslose Kommunikation im Betrieb sicherzustellen.",
            faq_3_q: "Wie funktioniert der Visum- und Umzugsprozess?", faq_3_a: "Mit einem unterschriebenen Ausbildungsvertrag habe ich Anspruch auf ein Visum zur Berufsausbildung. Ich habe mich bereits mit den Anforderungen der deutschen Botschaft in Marokko vertraut gemacht, um den Visumprozess zügig und fristgerecht abzuwickeln.",
            faq_4_q: "Verfügen Sie bereits über praktische IT-Erfahrung?", faq_4_a: "Ja. Neben meinem Studium und meiner CCNA-Zertifizierung habe ich bereits zwei IT-Praktika absolviert. Zudem baue ich in meinem Home-Lab komplexe Unternehmensnetzwerke auf (mit Azure, pfSense und Windows Server). Dadurch kann ich Ihr Team vom ersten Tag an produktiv unterstützen.",
            section_contact: "Lassen Sie uns verbinden", contact_desc: "Ich suche derzeit nach Praktikums- und Ausbildungsplätzen.", btn_send: "Nachricht Senden",

            // PROJECT PAGE TRANSLATIONS
            proj_badge: "Enterprise Cloud Architektur",
            proj_title: "Sichere Azure Cloud Infrastruktur",
            proj_subtitle: "Eine umfassende Zero-Trust-Cloud-Netzwerkbereitstellung auf Microsoft Azure mit strenger Hub-and-Spoke-Segmentierung, IDS/IPS-Bedrohungserkennung und zentralisierter SIEM-Überwachung.",
            proj_repo: "Repository Ansehen",
            proj_role_label: "Rolle", proj_role_val: "Netzwerkarchitekt",
            proj_env_label: "Umgebung", proj_env_val: "Microsoft Azure IaaS",
            proj_sec_label: "Sicherheitsmodell", proj_sec_val: "Zero-Trust / Hub-and-Spoke",
            proj_s1_title: "Strenge Verkehrskontrolle & UDRs", proj_s1_p1: "Um die Schwachstellen eines flachen Netzwerks vollständig zu beseitigen, ist die Architektur strikt in dedizierte Subnetze unterteilt: AD/DNS, Web, Client, VoIP und Management.", proj_s1_p2: "Mithilfe von Azure User Defined Routes (UDRs) wird der gesamte ausgehende und Inter-Subnetz-Verkehr zwingend durch die zentrale pfSense-Firewall geleitet. Keine interne Maschine kann die Firewall umgehen.",
            proj_s2_title: "Zentrales Sicherheits-Gateway", proj_s2_p1: "Die pfSense-Firewall fungiert als absoluter Kern des Sicherheitsperimeters.", proj_s2_p2: "Sie übernimmt hochgranulare LAN/WAN-Filterung, Network Address Translation (NAT) für ausgehenden Datenverkehr und stellt einen sicheren OpenVPN-Tunnel für die Fernadministration bereit. Dies stellt sicher, dass der Root-Zugriff niemals dem öffentlichen Internet ausgesetzt ist.",
            proj_s3_title: "Identität & Reverse Proxy", proj_s3_p1: "Eine Windows Server-Instanz führt Active Directory (AD DS) aus, um das IAM zu zentralisieren und die lokale DNS-Auflösung im gesamten virtuellen Netzwerk abzuwickeln.", proj_s3_p2: "Für nach außen gerichtete Dienste werden interne Nginx-Webserver sicher über HAProxy veröffentlicht. Dies übernimmt das SSL-Offloading am Edge und verbirgt interne IP-Strukturen vor Endbenutzern.",
            proj_s4_title: "Vollständige SOC-Überwachung & IDS/IPS", proj_s4_p1: "Ein modernes Netzwerk ist ohne Überwachung blind. Um den Perimeter dynamisch zu verteidigen, analysiert Suricata (IDS/IPS) Netzwerkströme, um bösartige Signaturen zu erkennen und zu blockieren.", proj_s4_p2: "Die vollständige Transparenz wird durch Zabbix für die Echtzeit-Hardwareüberwachung aufrechterhalten, während Wazuh (SIEM/HIDS) Systemprotokolle in einem umfassenden Security Operations Center aggregiert.",
            proj_tech_stack: "Technologie-Stack"
        },
        fr: {
            nav_home: "Accueil", nav_edu: "Éducation", nav_exp: "Expérience", nav_competence: "Compétences", nav_certs: "Certs", nav_projects: "Projets", nav_contact: "Contact", nav_faq: "FAQ",
            hero_badge: "Étudiant Réseaux & Systèmes", hero_title: "Futur Admin.",
            hero_desc: "Un futur spécialiste informatique de 20 ans en intégration de systèmes, avec une base technique solide. Alliant une expérience pratique de la virtualisation, je suis désireux de débuter un apprentissage en Allemagne.",
            nav_resume: "CV", btn_contact: "Contactez-moi",
            section_edu: "Parcours Éducatif", edu_ista_title: "Systèmes et Réseaux Informatiques", edu_ista_date: "Sept 2024 - Juin 2026", edu_ista_desc: "Formation complète en architecture réseau, administration système et gestion d'infrastructure.", edu_bio_title: "Études de Biologie", edu_bio_date: "Sept 2023 - Juil 2024", edu_bio_desc: "Développement du raisonnement scientifique et protocoles de laboratoire.", edu_bac_title: "Baccalauréat Sciences Physiques", edu_bac_date: "Juin 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Concentration sur la physique et les mathématiques.",
            section_exp: "Expérience Professionnelle", exp_1_title: "Stagiaire Technicien IT", exp_1_company: "Societe Regionale Multiservices | Taza, Maroc", exp_1_desc: "Assistance à la configuration et au déploiement des équipements réseau. Surveillance des performances du réseau et dépannage de base pour maintenir la fiabilité de l'infrastructure.", exp_2_title: "Stagiaire Support IT", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Maroc", exp_2_desc: "Installation, configuration et maintenance du matériel informatique et des équipements réseau. Fourniture d'un support technique de niveau 1 et résolution des problèmes quotidiens des utilisateurs.",
            section_competence: "Compétences", skill_net: "Réseaux", skill_sys: "Admin Sys", skill_cloud: "Cloud & Sécu", skill_lang: "Langues", lang_ar: "Arabe", level_native: "Langue Maternelle", lang_en: "Anglais", level_c1: "Avancé (C1)", lang_de: "Allemand", level_b1: "Intermédiaire (B1)", lang_fr: "Français", level_b2: "Intermédiaire (B2)",
            section_certs: "Certifications", status_earned: "Obtenu", status_progress: "En Cours", btn_verify: "Vérifier", btn_view_cert: "Certificat",
            section_projects: "Projets Phares", proj_1_title: "Réseau Cloud Azure Sécurisé", proj_1_desc: "Une implémentation Azure complexe avec pfSense, Suricata IPS et Active Directory.", proj_2_title: "Automatisation Réseau", proj_2_desc: "Scripts Python pour automatiser la configuration des appareils.", btn_details: "Voir Détails",
            
            section_faq: "Foire Aux Questions",
            faq_1_q: "Pourquoi faire un apprentissage (Ausbildung) en Allemagne ?", faq_1_a: "Le système de formation en alternance en Allemagne est mondialement reconnu. Mon objectif est de devenir un spécialiste en intégration de systèmes de haut niveau, et me former dans un environnement informatique allemand est la meilleure voie pour y parvenir.",
            faq_2_q: "Quel est votre niveau actuel en allemand ?", faq_2_a: "J'ai actuellement un niveau B1 certifié en allemand. Je poursuis activement mes cours de langue pour atteindre le niveau B2 avant le début de l'apprentissage, garantissant ainsi une communication fluide en entreprise.",
            faq_3_q: "Comment gérerez-vous le processus de visa et de déménagement ?", faq_3_a: "Avec un contrat d'apprentissage, je suis éligible au visa d'Ausbildung. Je me suis déjà familiarisé avec les exigences de l'ambassade d'Allemagne au Maroc pour garantir un déménagement rapide et organisé bien avant la date de début.",
            faq_4_q: "Avez-vous déjà une expérience pratique en informatique ?", faq_4_a: "Oui. En plus de mon parcours académique et de ma formation Cisco CCNA, j'ai effectué deux stages en informatique et je construis activement des réseaux complexes dans mon Home Lab (utilisant Azure, pfSense et Windows Server).",
            section_contact: "Connectons-nous", contact_desc: "Je suis actuellement à la recherche d'opportunités de stage et d'apprentissage.", btn_send: "Envoyer",

            // PROJECT PAGE TRANSLATIONS
            proj_badge: "Architecture Cloud d'Entreprise",
            proj_title: "Infrastructure Cloud Azure Sécurisée",
            proj_subtitle: "Un déploiement réseau cloud complet et zéro-confiance sur Microsoft Azure avec une segmentation stricte Hub-and-Spoke, une détection des menaces IDS/IPS et une surveillance SIEM centralisée.",
            proj_repo: "Voir le Dépôt",
            proj_role_label: "Rôle", proj_role_val: "Architecte Réseau",
            proj_env_label: "Environnement", proj_env_val: "Microsoft Azure IaaS",
            proj_sec_label: "Modèle de Sécurité", proj_sec_val: "Zéro Confiance / Hub-and-Spoke",
            proj_s1_title: "Contrôle Strict du Trafic & UDRs", proj_s1_p1: "Pour éliminer complètement les vulnérabilités d'un réseau plat, l'architecture est strictement segmentée en sous-réseaux dédiés : AD/DNS, Web, Client, VoIP et Management.", proj_s1_p2: "Grâce aux User Defined Routes (UDR) d'Azure, tout le trafic sortant et inter-sous-réseaux est obligatoirement acheminé via le pare-feu central pfSense. Aucune machine interne ne peut contourner le pare-feu.",
            proj_s2_title: "Passerelle de Sécurité Centrale", proj_s2_p1: "Le pare-feu pfSense agit comme le cœur absolu du périmètre de sécurité.", proj_s2_p2: "Il gère un filtrage LAN/WAN très granulaire, la traduction d'adresses réseau (NAT) pour le trafic sortant et fournit un tunnel OpenVPN sécurisé pour l'administration à distance.",
            proj_s3_title: "Identité & Proxy Inverse", proj_s3_p1: "Une instance Windows Server exécute Active Directory (AD DS) pour centraliser l'IAM et gérer la résolution DNS locale sur l'ensemble du réseau virtuel.", proj_s3_p2: "Pour les services exposés à l'extérieur, les serveurs web Nginx internes sont publiés en toute sécurité via HAProxy. Cela gère le déchargement SSL à la périphérie et masque les structures IP internes.",
            proj_s4_title: "Observabilité Complète du SOC & IDS/IPS", proj_s4_p1: "Un réseau moderne est aveugle sans surveillance. Pour défendre dynamiquement le périmètre, Suricata (IDS/IPS) analyse les flux réseau pour détecter et bloquer les signatures malveillantes.", proj_s4_p2: "La visibilité totale est maintenue grâce à Zabbix pour la surveillance matérielle en temps réel, tandis que Wazuh (SIEM/HIDS) agrège les journaux système dans un centre des opérations de sécurité complet.",
            proj_tech_stack: "Stack Technologique"
        }
    };
    
    const istaLists = {
        en: `<li><strong>Networking:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li><li><strong>Cloud & Automation:</strong> Azure, SDN, Python, Network Security.</li>`,
        fr: `<li><strong>Réseaux:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>Admin Sys:</strong> Windows Server (AD, DNS, GPO), Admin Linux.</li><li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Sécurité Réseau.</li>`,
        de: `<li><strong>Netzwerke:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li><li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Netzwerksicherheit.</li>`
    };

    // --- LANGUAGE PERSISTENCE (localStorage) ---
    let currentLang = localStorage.getItem('preferredLang') || 'en';

    window.setLanguage = function(lang) {
        currentLang = lang;
        localStorage.setItem('preferredLang', lang); // Save choice so it survives page reloads
        
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
            if(translations[lang][key]) el.textContent = translations[lang][key];
        });

        const istaListEl = document.querySelector('[data-i18n="edu_ista_list"]');
        if(istaListEl) istaListEl.innerHTML = istaLists[lang];
    };
    
    // Initialize the language instantly on load
    setLanguage(currentLang);

    // --- 4. DROPDOWNS & NAVIGATION ---
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

    // --- 5. SPOTLIGHT EFFECT ---
    const cards = document.querySelectorAll('.spotlight-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        });
    });

    // --- 6. FAQ ACCORDION LOGIC ---
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faq => faq.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // --- 7. MODALS & PROJECTS (Home Page Only) ---
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

        AOS.init({ duration: 800, once: true });
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
        // Just init AOS for Azure page
        if(typeof AOS !== 'undefined') AOS.init({ duration: 1000, once: true });
    }

    const backToTopBtn = document.querySelector('.back-to-top');
    if(backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) backToTopBtn.classList.add('visible');
            else backToTopBtn.classList.remove('visible');
        });
    }

    // --- 8. FORM SUBMISSION ---
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