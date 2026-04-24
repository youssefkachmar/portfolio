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
            nav_home: "Home", nav_edu: "Education", nav_exp: "Experience", nav_competence: "Competence", nav_certs: "Certs", nav_projects: "Projects", nav_contact: "Contact", nav_faq: "FAQ",
            hero_badge: "Network & Systems Student", hero_title: "Future Admin.",
            hero_desc: "A 20-year-old aspiring IT Specialist for System Integration with a solid technical foundation in computer systems and advanced networking. Combining hands-on experience in virtualization and network architecture with a dedicated work ethic, I am eager to apply my skills within a professional apprenticeship in Germany.",
            nav_resume: "Resume", btn_contact: "Contact Me",
            section_edu: "Education Path", edu_ista_title: "Computer Systems & Networks", edu_ista_date: "Sept 2024 - June 2026", edu_ista_desc: "Comprehensive training in network architecture, system administration, and infrastructure management.", edu_bio_title: "Biology Studies", edu_bio_date: "Sept 2023 - July 2024", edu_bio_desc: "Developed scientific reasoning, lab safety protocols, and analytical skills.", edu_bac_title: "High School Diploma - Physics", edu_bac_date: "Jun 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Focus on Physics and Mathematics.",
            section_exp: "Professional Experience", exp_1_title: "IT Technician Intern", exp_1_company: "Societe Regionale Multiservices | Taza, Morocco", exp_1_desc: "Assisted in configuring and deploying network devices. Monitored network performance and provided baseline troubleshooting to maintain reliable IT infrastructure.", exp_2_title: "IT Support Intern", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Morocco", exp_2_desc: "Installed, configured, and maintained office hardware and network equipment. Delivered Tier-1 technical support and effectively resolved day-to-day user issues.",
            
            section_competence: "Competence", skill_net: "Networking", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sec", 
            skill_itsm: "ITSM & Workflow", skill_itsm_desc: "ITIL, Ticketing (Jira), Git, Documentation",
            skill_lang: "Languages", lang_ar: "Arabic", level_native: "Native", lang_en: "English", level_c1: "Advanced (C1)", lang_de: "German", level_b1: "Intermediate (B1)", lang_fr: "French", level_b2: "Intermediate (B2)",
            
            section_certs: "Certifications", status_earned: "Earned", status_progress: "In Progress", btn_verify: "Verify", btn_view_cert: "Certificate",
            section_projects: "Featured Projects", proj_1_title: "Secure Azure Cloud Network", proj_1_desc: "A complex Azure implementation featuring pfSense, Suricata IPS, and Active Directory.", proj_2_title: "Network Automation", proj_2_desc: "Python scripts for automating device configuration and network discovery.", btn_details: "View Details",
            
            faq_section_title: "FREQUENTLY ASKED QUESTIONS",
            faq_1_q: "You live outside the EU. How complicated is the hiring process from Morocco to Germany?",
            faq_1_intro_title: "A manageable process for employers",
            faq_1_intro: "I am familiar with this procedure and will take over the applicant side entirely as soon as the employer documents are ready. For companies, this mainly means: choosing the regular or fast-track route and submitting the required documents cleanly once.",
            faq_1_opt1_title: "Option 1: Classic Route (§ 36 BeschV)",
            faq_1_opt1_p1: "<strong>1. Your Part: Pre-approval</strong><br>You submit the 'Declaration regarding a contract of employment' and the training contract to your local Agentur für Arbeit. This step is free and takes 2-4 weeks.",
            faq_1_opt1_p2: "<strong>2. My Part: Embassy Appointment</strong>",
            faq_1_opt1_wait: "WAITING TIME: 2-4 MONTHS<br><span class='wait-subtext'>After your approval, I have to wait for an appointment at the German Embassy in Morocco before I can submit the application.</span>",
            faq_1_opt2_title: "Option 2: Fast-Track Route (§ 81a AufenthG)",
            faq_1_opt2_p1: "<strong>1. Your Part: Initiate process</strong><br>With my power of attorney, you initiate the process at your local Ausländerbehörde. They become your central contact. The fee is €411.",
            faq_1_opt2_p2: "<strong>2. My Part: Direct Appointment</strong>",
            faq_1_opt2_wait: "WAITING TIME: WITHIN 3 WEEKS<br><span class='wait-subtext'>I receive a guaranteed appointment to submit my application directly. The final decision usually follows within 3 more weeks.</span>",
            faq_1_sec_title: "Your Security and My Responsibility",
            faq_1_sec_callout: "<strong>Clear contract regulation:</strong> A standard clause can state that the training contract only becomes effective upon visa issuance. Companies can use their regular HR or legal phrasing for this.",
            faq_1_sec_p: "As soon as the employer documents are available, I handle the further process on the applicant side: scheduling, document preparation, application submission, and answering queries.",
            faq_1_btn: "Download Complete Guide as PDF",
            faq_1_src_title: "Official Sources",
            faq_1_src_disclaimer: "Status of this information: April 2026. Fees and processing times should additionally be confirmed via the official sources below.",
            faq_2_q: "Where will you live? We do not offer accommodation. How do you organize that?",
            faq_2_a: "I take full responsibility for my relocation. I have sufficient financial reserves to cover my flights, security deposit, and first few months of rent. To ensure I am ready on day one without stress, I will initially rent a temporary apartment or WG-room before arriving in Germany.",
            faq_3_q: "You previously studied Biology, but are IT-oriented. How does that fit together?",
            faq_3_a: "My university studies in Biology sharpened my analytical thinking, methodology, and ability to handle complex systems. However, my true passion has always been network infrastructure. Switching to my current IT degree and building enterprise-grade home labs (Azure, pfSense) was the best decision to purposefully pursue my career as a System Administrator.",
            faq_4_q: "Why Germany?",
            faq_4_a: "Germany's dual vocational training system is globally recognized for blending theory with hands-on practice. My goal is to become an elite System Integration Specialist, and learning within a high-standard German IT environment is the best path to achieve that.",
            faq_5_q: "How good are your German and English skills?",
            faq_5_a: "I hold a solid, certified B1 level in German and am actively taking intensive courses to reach B2 before the apprenticeship begins. Additionally, I speak English at an advanced C1 level, which is extremely valuable for reading technical IT documentation, Cisco manuals, and troubleshooting.",

            section_contact: "Let's Connect", contact_desc: "I am currently looking for internship and apprenticeship opportunities.", btn_send: "Send Message",
            footer_legal: "Legal Notice", footer_privacy: "Privacy Policy",
            
            proj_badge: "Enterprise Cloud Architecture", proj_title: "Secure Azure Cloud Infrastructure", proj_subtitle: "A comprehensive, zero-trust cloud network deployment on Microsoft Azure featuring strict Hub-and-Spoke segmentation, IDS/IPS threat detection, and centralized SIEM monitoring.", proj_repo: "View Repository", proj_role_label: "Role", proj_role_val: "Network Architect", proj_env_label: "Environment", proj_env_val: "Microsoft Azure IaaS", proj_sec_label: "Security Model", proj_sec_val: "Zero-Trust / Hub-and-Spoke", proj_s1_title: "Strict Traffic Control & UDRs", proj_s1_p1: "To completely eliminate the vulnerabilities of a flat network, the architecture is strictly segmented into dedicated subnets: AD/DNS, Web, Client, VoIP, and Management.", proj_s1_p2: "Using Azure User Defined Routes (UDRs), all outbound and inter-subnet traffic is forcefully funneled through the central pfSense Network Virtual Appliance (NVA). No internal machine can bypass the firewall.", proj_s2_title: "Central Security Gateway", proj_s2_p1: "The pfSense Firewall acts as the absolute core of the security perimeter.", proj_s2_p2: "It handles highly granular LAN/WAN filtering, Network Address Translation (NAT) for outbound traffic, and provisions a secure OpenVPN tunnel for remote administration. This ensures root access is never exposed to the public internet.", proj_s3_title: "Identity & Reverse Proxy", proj_s3_p1: "A Windows Server instance runs Active Directory (AD DS) to centralize IAM and handle local DNS resolution across the entire virtual network.", proj_s3_p2: "For externally facing services, internal Nginx web servers are securely published using HAProxy. This handles SSL-offloading at the edge and obfuscates internal IP structures from end-users.", proj_s4_title: "Full SOC Observability & IDS/IPS", proj_s4_p1: "A modern network is blind without monitoring. To defend the perimeter dynamically, Suricata (IDS/IPS) analyzes network flows to detect and block malicious signatures, actively mitigating simulated Nmap port scans.", proj_s4_p2: "Total visibility is maintained using Zabbix for real-time hardware monitoring, while Wazuh (SIEM/HIDS) aggregates system logs into a comprehensive Security Operations Center.", proj_tech_stack: "Technology Stack"
        },
        de: {
            nav_home: "Startseite", nav_edu: "Bildung", nav_exp: "Erfahrung", nav_competence: "Kompetenzen", nav_certs: "Zertifikate", nav_projects: "Projekte", nav_contact: "Kontakt", nav_faq: "FAQ",
            hero_badge: "Netzwerk & Systeme Student", hero_title: "Zukünftiger Admin.",
            hero_desc: "Ein 20-jähriger angehender Fachinformatiker für Systemintegration mit fundiertem Basiswissen in Computersystemen und fortgeschrittener Netzwerktechnik. Mit praktischer Erfahrung in Virtualisierung strebe ich eine Ausbildung in Deutschland an.",
            nav_resume: "Lebenslauf", btn_contact: "Kontaktieren",
            section_edu: "Bildungsweg", edu_ista_title: "Computersysteme und Netzwerke", edu_ista_date: "Sept 2024 - Juni 2026", edu_ista_desc: "Umfassende Ausbildung in Netzwerkarchitektur, Systemadministration und Infrastrukturmanagement.", edu_bio_title: "Biologiestudium", edu_bio_date: "Sept 2023 - Juli 2024", edu_bio_desc: "Entwicklung von wissenschaftlichem Denken und analytischen Fähigkeiten.", edu_bac_title: "Abitur Physik", edu_bac_date: "Jun 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Schwerpunkt Physik und Mathematik.",
            section_exp: "Berufserfahrung", exp_1_title: "Praktikant IT-Technik", exp_1_company: "Societe Regionale Multiservices | Taza, Marokko", exp_1_desc: "Unterstützung bei der Konfiguration und Bereitstellung von Netzwerkgeräten. Überwachung der Netzwerkleistung und Durchführung grundlegender Fehlerbehebungen zur Aufrechterhaltung der IT-Infrastruktur.", exp_2_title: "Praktikant IT-Support", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Marokko", exp_2_desc: "Installation, Konfiguration und Wartung von Bürohardware und Netzwerkgeräten. Bereitstellung von Tier-1-IT-Support und Lösung von alltäglichen Benutzerproblemen.",
            
            section_competence: "Kompetenzen", skill_net: "Netzwerke", skill_sys: "SysAdmin", skill_cloud: "Cloud & Sicherheit", 
            skill_itsm: "ITSM & Workflow", skill_itsm_desc: "ITIL, Ticketing (Jira), Git, Dokumentation",
            skill_lang: "Sprachen", lang_ar: "Arabisch", level_native: "Muttersprache", lang_en: "Englisch", level_c1: "Fortgeschritten (C1)", lang_de: "Deutsch", level_b1: "Mittelstufe (B1)", lang_fr: "Französisch", level_b2: "Mittelstufe (B2)",
            
            section_certs: "Zertifizierungen", status_earned: "Erhalten", status_progress: "In Bearbeitung", btn_verify: "Verifizieren", btn_view_cert: "Zertifikat",
            section_projects: "Ausgewählte Projekte", proj_1_title: "Sicheres Azure Cloud Netzwerk", proj_1_desc: "Eine komplexe Azure-Implementierung mit pfSense, Suricata IPS und Active Directory.", proj_2_title: "Netzwerkautomatisierung", proj_2_desc: "Python-Skripte zur Automatisierung der Gerätekonfiguration.", btn_details: "Details",
            
            faq_section_title: "HÄUFIG GESTELLTE FRAGEN",
            faq_1_q: "Sie leben nicht in der EU. Wie kompliziert ist der Einstellungsprozess von Marokko bis Deutschland?",
            faq_1_intro_title: "Ein ueberschaubarer Arbeitgeberprozess",
            faq_1_intro: "Ich kenne dieses Verfahren bereits und uebernehme die Antragsteller-Seite selbst, sobald die Arbeitgeberunterlagen bereit sind. Fuer Unternehmen bedeutet das vor allem: den regulaeren oder den beschleunigten Weg waehlen und die benoetigten Dokumente einmal sauber einreichen.",
            faq_1_opt1_title: "Option 1: Klassischer Weg (§ 36 BeschV)",
            faq_1_opt1_p1: "<strong>1. Ihr Part: Vorabzustimmung</strong><br>Sie reichen das Formular „Erklärung zum Beschäftigungsverhältnis“ und den Ausbildungsvertrag bei Ihrer lokalen Agentur für Arbeit ein. Dieser Schritt ist kostenfrei und dauert 2-4 Wochen.",
            faq_1_opt1_p2: "<strong>2. Mein Part: Termin bei der Botschaft</strong>",
            faq_1_opt1_wait: "WARTEZEIT: 2-4 MONATE<br><span class='wait-subtext'>Nach Ihrer Zustimmung muss ich auf einen Termin von der Deutschen Botschaft in Marokko warten, bevor ich den Antrag stellen kann.</span>",
            faq_1_opt2_title: "Option 2: Beschleunigter Weg (§ 81a AufenthG)",
            faq_1_opt2_p1: "<strong>1. Ihr Part: Verfahren anstoßen</strong><br>Mit meiner Vollmacht leiten Sie das Verfahren bei Ihrer lokalen Ausländerbehörde ein. Die Behörde wird Ihr zentraler Ansprechpartner. Die Gebühr beträgt 411€.",
            faq_1_opt2_p2: "<strong>2. Mein Part: Direkter Termin</strong>",
            faq_1_opt2_wait: "WARTEZEIT: INNERHALB VON 3 WOCHEN<br><span class='wait-subtext'>Ich erhalte einen garantierten Termin, um meinen Antrag direkt einzureichen. Die finale Entscheidung erfolgt meist innerhalb von 3 weiteren Wochen.</span>",
            faq_1_sec_title: "Ihre Sicherheit und Meine Verantwortung",
            faq_1_sec_callout: "<strong>Klare Vertragsregelung:</strong> Eine uebliche Klausel kann festhalten, dass der Ausbildungsvertrag mit Visumerteilung wirksam wird. Unternehmen koennen dafuer ihre regulaere HR- oder Rechtsformulierung verwenden.",
            faq_1_sec_p: "Sobald die Arbeitgeberunterlagen vorliegen, uebernehme ich den weiteren Ablauf auf Antragstellerseite: Terminorganisation, Dokumentenaufbereitung, Antragstellung und Rueckfragen.",
            faq_1_btn: "Vollständigen Leitfaden als PDF herunterladen",
            faq_1_src_title: "Offizielle Quellen",
            faq_1_src_disclaimer: "Stand dieser Angaben auf der Website: April 2026. Gebühren und Bearbeitungszeiten sollten zusätzlich über die offiziellen Quellen unten bestätigt werden.",
            faq_2_q: "Wo werden Sie wohnen? Wir bieten keine Unterkunft an. Wie organisieren Sie das?",
            faq_2_a: "Ich kümmere mich komplett eigenständig um meine Unterkunft. Ich habe ausreichend finanzielle Rücklagen gebildet, um die Kaution, die ersten Mieten und meine Flugkosten selbst zu tragen. Um am ersten Arbeitstag stressfrei vor Ort zu sein, werde ich für die Anfangszeit eine temporäre Unterkunft (z.B. WG oder möbliertes Apartment) anmieten.",
            faq_3_q: "Sie haben zuvor Biologie studiert, sind aber IT-orientiert. Wie passt das zusammen?",
            faq_3_a: "Das Biologiestudium hat mein analytisches Denken, meine strukturierte Arbeitsweise und mein Verständnis für komplexe Systeme geschärft. Meine wahre Leidenschaft war jedoch schon immer die IT-Infrastruktur. Der Wechsel in meine aktuelle IT-Ausbildung und der Aufbau meiner Azure/pfSense-Labs war die beste Entscheidung, um meine Karriere als Systemadministrator zielstrebig zu verfolgen.",
            faq_4_q: "Warum Deutschland?",
            faq_4_a: "Das duale Ausbildungssystem in Deutschland ist weltweit für die Kombination aus Theorie und Praxis anerkannt. Mein Ziel ist es, ein hervorragender Fachinformatiker für Systemintegration zu werden. Die Ausbildung in einem deutschen IT-Unternehmen bietet dafür die perfekten Rahmenbedingungen.",
            faq_5_q: "Wie gut sind Ihre Deutsch- und Englischkenntnisse?",
            faq_5_a: "Ich verfüge über ein solides, zertifiziertes B1-Niveau in Deutsch und lerne bereits intensiv für B2, um bis zum Ausbildungsbeginn eine reibungslose Kommunikation im Betrieb sicherzustellen. Zudem spreche ich Englisch auf C1-Niveau, was mir beim Lesen von technischen Dokumentationen, Cisco-Handbüchern und bei der Fehlerbehebung extrem hilft.",

            section_contact: "Lassen Sie uns verbinden", contact_desc: "Ich suche derzeit nach Praktikums- und Ausbildungsplätzen.", btn_send: "Nachricht Senden",
            footer_legal: "Impressum", footer_privacy: "Datenschutz",
            
            proj_badge: "Enterprise Cloud Architektur", proj_title: "Sichere Azure Cloud Infrastruktur", proj_subtitle: "Eine umfassende Zero-Trust-Cloud-Netzwerkbereitstellung auf Microsoft Azure mit strenger Hub-and-Spoke-Segmentierung, IDS/IPS-Bedrohungserkennung und zentralisierter SIEM-Überwachung.", proj_repo: "Repository Ansehen", proj_role_label: "Rolle", proj_role_val: "Netzwerkarchitekt", proj_env_label: "Umgebung", proj_env_val: "Microsoft Azure IaaS", proj_sec_label: "Sicherheitsmodell", proj_sec_val: "Zero-Trust / Hub-and-Spoke", proj_s1_title: "Strenge Verkehrskontrolle & UDRs", proj_s1_p1: "Um die Schwachstellen eines flachen Netzwerks vollständig zu beseitigen, ist die Architektur strikt in dedizierte Subnetze unterteilt: AD/DNS, Web, Client, VoIP und Management.", proj_s1_p2: "Mithilfe von Azure User Defined Routes (UDRs) wird der gesamte ausgehende und Inter-Subnetz-Verkehr zwingend durch die zentrale pfSense-Firewall geleitet. Keine interne Maschine kann die Firewall umgehen.", proj_s2_title: "Zentrales Sicherheits-Gateway", proj_s2_p1: "Die pfSense-Firewall fungiert als absoluter Kern des Sicherheitsperimeters.", proj_s2_p2: "Sie übernimmt hochgranulare LAN/WAN-Filterung, Network Address Translation (NAT) für ausgehenden Datenverkehr und stellt einen sicheren OpenVPN-Tunnel für die Fernadministration bereit. Dies stellt sicher, dass der Root-Zugriff niemals dem öffentlichen Internet ausgesetzt ist.", proj_s3_title: "Identität & Reverse Proxy", proj_s3_p1: "Eine Windows Server-Instanz führt Active Directory (AD DS) aus, um das IAM zu zentralisieren und die lokale DNS-Auflösung im gesamten virtuellen Netzwerk abzuwickeln.", proj_s3_p2: "Für nach außen gerichtete Dienste werden interne Nginx-Webserver sicher über HAProxy veröffentlicht. Dies übernimmt das SSL-Offloading am Edge und verbirgt interne IP-Strukturen vor Endbenutzern.", proj_s4_title: "Vollständige SOC-Überwachung & IDS/IPS", proj_s4_p1: "Ein modernes Netzwerk ist ohne Überwachung blind. Um den Perimeter dynamisch zu verteidigen, analysiert Suricata (IDS/IPS) Netzwerkströme, um bösartige Signaturen zu erkennen und zu blockieren.", proj_s4_p2: "Die vollständige Transparenz wird durch Zabbix für die Echtzeit-Hardwareüberwachung aufrechterhalten, während Wazuh (SIEM/HIDS) Systemprotokolle in einem umfassenden Security Operations Center aggregiert.", proj_tech_stack: "Technologie-Stack"
        },
        fr: {
            nav_home: "Accueil", nav_edu: "Éducation", nav_exp: "Expérience", nav_competence: "Compétences", nav_certs: "Certs", nav_projects: "Projets", nav_contact: "Contact", nav_faq: "FAQ",
            hero_badge: "Étudiant Réseaux & Systèmes", hero_title: "Futur Admin.",
            hero_desc: "Un futur spécialiste informatique de 20 ans en intégration de systèmes, avec une base technique solide. Alliant une expérience pratique de la virtualisation, je suis désireux de débuter un apprentissage en Allemagne.",
            nav_resume: "CV", btn_contact: "Contactez-moi",
            section_edu: "Parcours Éducatif", edu_ista_title: "Systèmes et Réseaux Informatiques", edu_ista_date: "Sept 2024 - Juin 2026", edu_ista_desc: "Formation complète en architecture réseau, administration système et gestion d'infrastructure.", edu_bio_title: "Études de Biologie", edu_bio_date: "Sept 2023 - Juil 2024", edu_bio_desc: "Développement du raisonnement scientifique et protocoles de laboratoire.", edu_bac_title: "Baccalauréat Sciences Physiques", edu_bac_date: "Juin 2023", edu_bac_company: "GS Salma Erragragui", edu_bac_desc: "Concentration sur la physique et les mathématiques.",
            section_exp: "Expérience Professionnelle", exp_1_title: "Stagiaire Technicien IT", exp_1_company: "Societe Regionale Multiservices | Taza, Maroc", exp_1_desc: "Assistance à la configuration et au déploiement des équipements réseau. Surveillance des performances du réseau et dépannage de base pour maintenir la fiabilité de l'infrastructure.", exp_2_title: "Stagiaire Support IT", exp_2_company: "L.P.E.C. (Bureau d'Etudes Techniques) | Oujda, Maroc", exp_2_desc: "Installation, configuration et maintenance du matériel informatique et des équipements réseau. Fourniture d'un support technique de niveau 1 et résolution des problèmes quotidiens des utilisateurs.",
            
            section_competence: "Compétences", skill_net: "Réseaux", skill_sys: "Admin Sys", skill_cloud: "Cloud & Sécu", 
            skill_itsm: "ITSM & Méthodologie", skill_itsm_desc: "ITIL, Ticketing (Jira), Git, Documentation",
            skill_lang: "Langues", lang_ar: "Arabe", level_native: "Langue Maternelle", lang_en: "Anglais", level_c1: "Avancé (C1)", lang_de: "Allemand", level_b1: "Intermédiaire (B1)", lang_fr: "Français", level_b2: "Intermédiaire (B2)",
            
            section_certs: "Certifications", status_earned: "Obtenu", status_progress: "En Cours", btn_verify: "Vérifier", btn_view_cert: "Certificat",
            section_projects: "Projets Phares", proj_1_title: "Réseau Cloud Azure Sécurisé", proj_1_desc: "Une implémentation Azure complexe avec pfSense, Suricata IPS et Active Directory.", proj_2_title: "Automatisation Réseau", proj_2_desc: "Scripts Python pour automatiser la configuration des appareils.", btn_details: "Voir Détails",
            
            faq_section_title: "FOIRE AUX QUESTIONS",
            faq_1_q: "Vous résidez hors de l'UE. Le processus de recrutement depuis le Maroc est-il compliqué ?",
            faq_1_intro_title: "Un processus gérable pour les employeurs",
            faq_1_intro: "Je connais bien cette procédure et je prends entièrement en charge la partie demandeur dès que les documents de l'employeur sont prêts. Pour les entreprises, cela signifie principalement : choisir la voie normale ou accélérée et soumettre les documents requis.",
            faq_1_opt1_title: "Option 1 : Voie Classique (§ 36 BeschV)",
            faq_1_opt1_p1: "<strong>1. Votre Partie : Approbation préalable</strong><br>Vous soumettez la déclaration d'emploi et le contrat d'apprentissage à votre Agentur für Arbeit locale. Cette étape est gratuite et prend 2 à 4 semaines.",
            faq_1_opt1_p2: "<strong>2. Ma Partie : Rendez-vous à l'ambassade</strong>",
            faq_1_opt1_wait: "TEMPS D'ATTENTE : 2-4 MOIS<br><span class='wait-subtext'>Après votre approbation, je dois attendre un rendez-vous à l'ambassade d'Allemagne au Maroc avant de pouvoir soumettre ma demande.</span>",
            faq_1_opt2_title: "Option 2 : Voie Accélérée (§ 81a AufenthG)",
            faq_1_opt2_p1: "<strong>1. Votre Partie : Initier le processus</strong><br>Avec ma procuration, vous initiez le processus auprès de votre Ausländerbehörde locale. Les frais sont de 411 €.",
            faq_1_opt2_p2: "<strong>2. Ma Partie : Rendez-vous direct</strong>",
            faq_1_opt2_wait: "TEMPS D'ATTENTE : MOINS DE 3 SEMAINES<br><span class='wait-subtext'>Je reçois un rendez-vous garanti pour soumettre directement ma demande. La décision finale suit généralement dans les 3 semaines.</span>",
            faq_1_sec_title: "Votre sécurité et ma responsabilité",
            faq_1_sec_callout: "<strong>Réglementation claire du contrat :</strong> Une clause standard peut stipuler que le contrat de formation ne prend effet qu'à la délivrance du visa.",
            faq_1_sec_p: "Dès que les documents de l'employeur sont disponibles, je m'occupe de la suite : prise de rendez-vous, préparation des documents, et soumission de la demande.",
            faq_1_btn: "Télécharger le Guide Complet (PDF)",
            faq_1_src_title: "Sources Officielles",
            faq_1_src_disclaimer: "État de ces informations : Avril 2026. Les frais et délais de traitement doivent également être confirmés via les sources officielles ci-dessous.",
            faq_2_q: "Où allez-vous vivre ? Nous ne proposons pas de logement. Comment organisez-vous cela ?",
            faq_2_a: "Je prends l'entière responsabilité de mon déménagement. J'ai des réserves financières suffisantes pour le vol, la caution et les premiers loyers. Je louerai initialement un logement temporaire (ex: colocation) pour être prêt et sans stress dès mon premier jour.",
            faq_3_q: "Vous avez étudié la biologie, mais vous êtes orienté informatique. Comment cela s'accorde-t-il ?",
            faq_3_a: "Mes études en biologie ont aiguisé mon esprit analytique et ma compréhension des systèmes complexes. Cependant, ma véritable passion a toujours été l'infrastructure réseau. Intégrer ma formation IT actuelle et construire mes propres labs (Azure, pfSense) a été la meilleure décision pour ma carrière.",
            faq_4_q: "Pourquoi l'Allemagne ?",
            faq_4_a: "Le système de formation en alternance en Allemagne est mondialement reconnu. Mon objectif est de devenir un spécialiste en intégration de systèmes de haut niveau, et me former dans un environnement informatique allemand est la meilleure voie pour y parvenir.",
            faq_5_q: "Quel est votre niveau en allemand et en anglais ?",
            faq_5_a: "J'ai un niveau B1 certifié en allemand et je prépare activement le niveau B2 pour garantir une communication fluide. De plus, je parle couramment anglais au niveau C1, ce qui m'aide énormément à lire la documentation technique, les manuels Cisco et à résoudre les problèmes IT.",

            section_contact: "Connectons-nous", contact_desc: "Je suis actuellement à la recherche d'opportunités de stage et d'apprentissage.", btn_send: "Envoyer",
            footer_legal: "Mentions Légales", footer_privacy: "Confidentialité",

            proj_badge: "Architecture Cloud d'Entreprise", proj_title: "Infrastructure Cloud Azure Sécurisée", proj_subtitle: "Un déploiement réseau cloud complet et zéro-confiance sur Microsoft Azure avec une segmentation stricte Hub-and-Spoke, une détection des menaces IDS/IPS et une surveillance SIEM centralisée.", proj_repo: "Voir le Dépôt", proj_role_label: "Rôle", proj_role_val: "Architecte Réseau", proj_env_label: "Environnement", proj_env_val: "Microsoft Azure IaaS", proj_sec_label: "Modèle de Sécurité", proj_sec_val: "Zéro Confiance / Hub-and-Spoke", proj_s1_title: "Contrôle Strict du Trafic & UDRs", proj_s1_p1: "Pour éliminer complètement les vulnérabilités d'un réseau plat, l'architecture est strictement segmentée en sous-réseaux dédiés : AD/DNS, Web, Client, VoIP et Management.", proj_s1_p2: "Grâce aux User Defined Routes (UDR) d'Azure, tout le trafic sortant et inter-sous-réseaux est obligatoirement acheminé via le pare-feu central pfSense. Aucune machine interne ne peut contourner le pare-feu.", proj_s2_title: "Passerelle de Sécurité Centrale", proj_s2_p1: "Le pare-feu pfSense agit comme le cœur absolu du périmètre de sécurité.", proj_s2_p2: "Il gère un filtrage LAN/WAN très granulaire, la traduction d'adresses réseau (NAT) pour le trafic sortant et fournit un tunnel OpenVPN sécurisé pour l'administration à distance.", proj_s3_title: "Identité & Proxy Inverse", proj_s3_p1: "Une instance Windows Server exécute Active Directory (AD DS) pour centraliser l'IAM et gérer la résolution DNS locale sur l'ensemble du réseau virtuel.", proj_s3_p2: "Pour les services exposés à l'extérieur, les serveurs web Nginx internes sont publiés en toute sécurité via HAProxy. Cela gère le déchargement SSL à la périphérie et masque les structures IP internes.", proj_s4_title: "Observabilité Complète du SOC & IDS/IPS", proj_s4_p1: "Un réseau moderne est aveugle sans surveillance. Pour défendre dynamiquement le périmètre, Suricata (IDS/IPS) analyse les flux réseau pour détecter et bloquer les signatures malveillantes.", proj_s4_p2: "La visibilité totale est maintenue grâce à Zabbix pour la surveillance matérielle en temps réel, tandis que Wazuh (SIEM/HIDS) agrège les journaux système dans un centre des opérations de sécurité complet.", proj_tech_stack: "Stack Technologique"
        }
    };
    
    const istaLists = {
        en: `<li><strong>Networking:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li><li><strong>Cloud & Automation:</strong> Azure, SDN, Python, Network Security.</li>`,
        fr: `<li><strong>Réseaux:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>Admin Sys:</strong> Windows Server (AD, DNS, GPO), Admin Linux.</li><li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Sécurité Réseau.</li>`,
        de: `<li><strong>Netzwerke:</strong> VLANs, OSPF, BGP, STP, IPv6, WLAN, VoIP.</li><li><strong>SysAdmin:</strong> Windows Server (AD, DNS, GPO), Linux Admin.</li><li><strong>Cloud & Auto:</strong> Azure, SDN, Python, Netzwerksicherheit.</li>`
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