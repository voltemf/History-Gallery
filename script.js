// Painting data
const paintings = [
    {
        title: 'Yellow Fever',
        description: 'Yellow fever is a viral disease that is mostly spread through the bite of infected mosquitos. Yellow fever or Flaviviridae originated in Africa, the disease is similar to ebola, and came to America through the slave trade. Most people affected with the disease often have no or mild symptoms like fever, nausea, and vomiting. What makes the disease deadly is developing life threatening symptoms. Developing life threatening symptoms is uncommon, but people with life threatening symptoms will have symptoms like high fever, internal bleeding, and jaundice. Yellow fever gets its name from the yellowing of the skin from jaundice. In places that were in swamp lands like Philadelphia would have a significant number of people dying from the disease.  It took decades for people to figure out what was spreading the disease. Today, yellow fever is hard to make a diagnosis as it mimics symptoms of diseases like Malaria and Leprosy. To diagnose the disease, they test for antibodies and for the virus’s genetic material. Preventing the disease relies on vaccination, there is no treatment that can cure the disease. Research has been focusing on intervention to prevent future outbreaks.',
        color: 0xaaaaaa,
        images: ['Yellow Fever.png'],
        position: { x: -3.9, y: 2, z: -6 },
        citations: [
            '"José Guadalupe Posada - a Man Leaning Over the Side of a Bed Vomiting, From a Broadside Entitled \'Death of  Aurelio Caballero Due to Yellow Fever in Veracruz\' - the Metropolitan Museum of Art," n.d. https://www.metmuseum.org/art/collection/search/735313.',
            'Mph, Andrea Prinzi Ph.D. "History of Yellow Fever in the U.S." ASM.org, May 17, 2021. https://asm.org/articles/2021/may/history-of-yellow-fever-in-the-u-s.'
        ]
    },
    {
        title: 'Leprosy',
        description: 'In the picture provided is an adult male skeleton from the Chalcolithic site Balathal in northwest India and dates back to roughly 2000 B.C(1). As the article describes, the skull shows multiple complications and changes in the skull by erosion and remodeling around the nasal aperture, loss of the nasal spine, lesions on the maxilla and infra‑orbital regions, and alveolar bone resorption linked to tooth loss.(2) Also showing damage on the peripheral skeleton, creating evidence towards a degenerative joint disease, which are usual signs within leprosy. This skull also being the oldest known skeletal evidence for leprosy dating back centuries.',
        color: 0xff6b6b,
        images: ['Leprosy.png'],
        position: { x: -3.9, y: 2, z: -2 },
        citations: [
            'Robbins, Gwen, V. Mushrif Tripathy, V. N. Misra, R. K. Mohanty, V. S. Shinde, Kelsey M. Gray, and Malcolm D. Schug. "Ancient Skeletal Evidence for Leprosy in India (2000 B.C.)." PLoS ONE 4, no. 5 (May 26, 2009): e5669. https://doi.org/10.1371/journal.pone.0005669.',
            'Historic England. "The Time of Leprosy: 11th Century to 14th Century." Accessed December 9, 2025. https://historicengland.org.uk/research/inclusive-heritage/disability-history/1050-1485/time-of-leprosy/.'
        ]
    },
    {
        title: 'Smallpox',
        description: 'The origins of smallpox remain uncertain, though evidence suggests this disease has existed for at least 3,000 years. Smallpox had a devastating impact, with an average fatality rate of 30%. It was transmitted from person to person primarily through inhalation of airborne droplets containing the virus, typically released when an infected person spoke, coughed, or sneezed. Early efforts to control smallpox involved exposing individuals to material from smallpox sores, a practice that helped reduce the risk of severe illness and death compared to acquiring the disease naturally. Continued advancements in treatment and prevention throughout the mid-20th century ultimately led to the eradication of smallpox, with the last naturally occurring case reported in 1977',
        color: 0x4ecdc4,
        images: ['Smallpox1.png', 'Smallpox2.png', 'Smallpox3.png', 'Smallpox4.png'],
        position: { x: -3.9, y: 2, z: 2 },
        citations: [
            '"Letter From  Abigail Adams to  John Adams,  13 -  14 July 1776," n.d. https://www.masshist.org/digitaladams/archive/doc?id=L17760713aa.',
            'Smallpox. "History of Smallpox," October 23, 2024. https://www.cdc.gov/smallpox/about/history.html.'
        ]
    },
    {
        title: 'Whooping Cough',
        description: 'With this relic coming from Bahaodowle Razi\'s "Khulāsat al-Tajārib" (ca. 1501-1502), Razi records an outbreak of what he calls "sorfe-ye-ām", or "the widespread cough". He describes children and adults both being plagued by repeated, forceful coughing which further caused vomiting and exhaustion. Those suffering struggle to recover their breath before the next wave of coughing recurred. The disease spread rapidly through households and even lingered for weeks, weakening families as a whole. Razi documents the distinctive pattern now associated with whooping cough; those being paroxysmal coughing, post-tussive vomiting, and prolonged recovery.',
        color: 0xffe66d,
        images: ['Whooping cough1.png', 'Whooping cough2.png'],
        position: { x: -3.9, y: 2, z: 6 },
        citations: [
            'Internet Archive. "KhulāSat Al-tajāRib / Bahā al-Dawlah QavīM al-DīN al-NūRbakhshī. : NūRbakhshī, Bahāʾ al-Dawlah, D. Ca. 1505 : Free Download, Borrow, and Streaming : Internet Archive," 1661. https://archive.org/details/6790548.med.yale.edu/page/n5/mode/1up.',
            'Galassi, Francesco Maria, Elena Varotto, and Mariano Martini. "History of Pertussis: From an Ancient Scourge to a Contemporary Health Burden." PubMed 64, no. 4 (December 27, 2023): E507–11. https://doi.org/10.15167/2421-4248/jpmh2023.64.4.3163.'
        ]
    },
    {
        title: 'Scarlet Fever',
        description: 'The illustration of the woman with scarlet fever comes from Jean-Louis Alibert\'s 1833 medical book Clinique de l\'Hôpital Saint-Louis. In it, he included colorful drawings to show what different skin diseases looked like, and one of them shows a patient with a bright red rash from scarlet fever. At the time, photography didn\'t exist yet, so these drawings were one of the few ways doctors could learn how to recognize illnesses. Alibert wanted to organize and explain diseases based on what could be seen on the skin, and illustrations like this helped make that easier. The picture feels realistic and almost personal, not just medical, which shows how artwork played a big role in understanding sickness in the 1800s.',
        color: 0xbbbbbb,
        images: ['Scarlet Fever.png'],
        position: { x: 3.9, y: 2, z: -6 },
        citations: [
            'Tomlinson, Andie. "Alibert & Early French Dermatology | De Re Medica," September 22, 2016. https://blogs.library.mcgill.ca/osler-library/alibert-early-french-dermatology/.',
            '———. "Scarlet Fever: A Deadly History and How It Prevails." ASM.org, January 24, 2023. https://asm.org/articles/2023/january/scarlet-fever-a-deadly-history-and-how-it-prevails.'
        ]
    },
    {
        title: 'Tuberculosis',
        description: 'Picture one shows a site, Tell Aswad, that was uncovered through the years of 1971 to 2007. The three phases which are used to describe the site are Phase ancienne, Phase moyenne and Phase récente. Within the site, not only were skeleton pieces that belonged to humans found but within them it also showed the culture of the deceased such as funeral practices and what would happen to the bodies. Picture two shows a deceased adult presumed to be between the ages of 20-22. With many lesions and observations, the MTBC infection was said to be found on samples of the body\'s fibula (1).',
        color: 0xa8e6cf,
        images: ['Tuberculosis1.png', 'Tuberculosis2.png'],
        position: { x: 3.9, y: 2, z: -2 },
        citations: [
            'Baker, Oussama, Bérénice Chamel, Éric Coqueugniot, Rima Khawam, Danielle Stordeur, Pascale Perrin, György Pálfi, et al. "Prehistory of Human Tuberculosis: Earliest Evidence From the Onset of Animal Husbandry in the Near East." Paléorient 43, no. 2 (January 1, 2017): 35–51. https://doi.org/10.3406/paleo.2017.5765.',
            'Barberis, I, Nl Bragazzi, L Galluzzo, and M Martini. "The History of Tuberculosis: From the First Historical Records to the Isolation of Koch\'s Bacillus," March 1, 2017. https://pmc.ncbi.nlm.nih.gov/articles/PMC5432783/#R22.',
            'Tuberculosis (TB). "Treating Tuberculosis," April 17, 2025. https://www.cdc.gov/tb/treatment/index.html.'
        ]
    },
    {
        title: 'Measles',
        description: 'The painting "Plague of Ashdod” was constructed in 1631 and was made by artist Nicholas Poussin. This artists took the current tragedies of the Measles disease outbreak into a biblical representation to convey exactly how detrimental this virus impacted modern-day society; the reason Poussin took the initiative of creating his artwork with biblical-time people was so that it could create a sense of familiarity to whomever came across his work. The people depicted in the artwork are struck with disease which are characterized by a sorrowful, sickly manner, capturing the severity diseases can have on individuals. Additionally, the painting seizes not only the individual hardship, but the familiar aspect as well. Families with ill members battled to not only maintain the well-being of themselves in times of close contact, but also the emotional strain of having an unwell loved one.',
        color: 0xdda15e,
        images: ['Measles.png'],
        position: { x: 3.9, y: 2, z: 2 },
        citations: [
            'The National Gallery, London. "The Plague at Ashdod | Close Examination | National Gallery, London," n.d. https://www.nationalgallery.org.uk/research/research-resources/research-papers/close-examination/the-plague-at-ashdod.',
            '"MSK Library Guides: Public Health: History of Measles," n.d. https://libguides.mskcc.org/publichealth/MeaslesHistory.'
        ]
    },
    {
        title: 'Typhus Fever',
        description: 'The presented artifact from Girolamo Fracastoro\'s "De Contagione" (1546) shows one of the earliest recorded observations of typhus fever. On p. 42 of this documentation, translations state that he describes an illness marked by "darkening spots" (maculis nigricantibus), profound fatigue, and transmission through "corrupted clothing and close contact". His testimony reflects the symptoms witnessed during these times, capturing details of the rash, the course of the sickness itself, and the environments it usually breeds from. Fracastoro\'s meticulous documentation serves as an authentic look into how physicians discovered and came to understand such a deadly, and contagious fever during the sixteenth century.',
        color: 0xbc6c25,
        images: ['Typhus1.png', 'Typhus2.png'],
        position: { x: 3.9, y: 2, z: 6 },
        citations: [
            'Internet Archive. "Hieronymi Fracastorii ... De Sympathia Et Antipathia Rerum Liber Vnus De Contagione Et Contagiosis Morbis Et Curatione Libri III. : Girolamo Fracastoro : Free Download, Borrow, and Streaming : Internet Archive," 1546. https://archive.org/details/bub_gb_B580FxRJwQUC/page/n91/mode/2up?utm_source=chatgpt.com.',
            'Conlon, Joseph M., LCDR, MSC, USN. "THE HISTORICAL IMPACT OF EPIDEMIC TYPHUS," n.d. https://www.montana.edu/historybug/documents/TYPHUS-Conlon.pdf.'
        ]
    },
    {
        title: 'Malaria',
        description: 'Malaria was all over the United States with great concentration in the Southern region and along rivers. It is predicted that between 1500-1800 European settlers and African slaves introduced the disease into the New World. Malaria would cause fever, chills, extreme fatigue and cycles of illness that made it difficult for settlers and farmers to maintain their daily activities and establish new settlements. Because of warm temperatures, inadequate drainage and standing water on farms for example farms producing rice and cotton the mosquitoes were able to breed creating ideal breeding grounds for the disease. Doctors at that time were aware of the symptoms of malaria but could not identify the mosquito as the transmitter of the disease. So quinine became the primary treatment for malaria. By the middle of the 1800s malaria had become one of the most prevalent diseases affecting people in rural communities. This disease affected the lives of the people in these communities and influenced the population size and work patterns of the entire nation.',
        color: 0x9d4edd,
        images: ['Measles.png'],
        position: { x: 0, y: 2, z: 11.15 },
        citations: [
            'Antiques, Anthony\'s Fine Art And. "Meditations on a Rediscovered Masterpiece." Artsy, August 10, 2018. https://www.artsy.net/article/anthony-s-fine-art-and-antiques-meditations-rediscovered-masterpiece.',
            'Svcm, Andrea Prinzi Ph.D., Mph, Rodney E. Rohde, Ph.D.,. "The History of Malaria in the United States." ASM.org, September 15, 2023. https://asm.org/articles/2023/september/the-history-of-malaria-in-the-united-states.'
        ]
    },
];

// Gallery application
class VirtualGallery {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.keys = {};
        this.mouse = {
            down: false,
            dragging: false,
            x: 0,
            y: 0
        };
        this.rotation = {
            x: 0,
            y: 0
        };
        this.paintingObjects = [];
        this.creditsPlaque = null;
        this.plaqueScrollOffset = 0;
        this.modalOpen = false;
        this.velocityY = 0;
        this.isJumping = false;
        this.noclip = false;
        this.flySpeed = 0.15;
        this.plaqueLinks = [];
        
        this.init();
    }

    init() {
        // Close modal
        document.getElementById('closeModal').addEventListener('click', () => {
            this.closePaintingModal();
        });

        // Citations button toggle
        const citationsBtn = document.getElementById('citationsBtn');
        const citationsContent = document.getElementById('citationsContent');
        if (citationsBtn && citationsContent) {
            citationsBtn.addEventListener('click', () => {
                citationsContent.classList.toggle('show');
                citationsBtn.textContent = citationsContent.classList.contains('show') ? 'Hide Citations' : 'Citations';
            });
        }

        // Mobile controls
        document.querySelectorAll('.mobile-btn').forEach(btn => {
            btn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.keys[btn.dataset.key] = true;
            });
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.keys[btn.dataset.key] = false;
            });
            btn.addEventListener('mousedown', (e) => {
                e.preventDefault();
                this.keys[btn.dataset.key] = true;
            });
            btn.addEventListener('mouseup', (e) => {
                e.preventDefault();
                this.keys[btn.dataset.key] = false;
            });
        });

        // Controls toggle behavior (small button -> expands controls panel)
        const controlsToggle = document.getElementById('controlsToggle');
        const controlsPanel = document.getElementById('controlsPanel');
        if (controlsToggle && controlsPanel) {
            controlsToggle.addEventListener('click', () => {
                const isOpen = controlsPanel.classList.toggle('open');
                // store state in ARIA attributes for accessibility
                controlsToggle.setAttribute('aria-expanded', isOpen);
                controlsPanel.setAttribute('aria-hidden', !isOpen);
                // hide the small round toggle while panel is open
                if (isOpen) {
                    controlsToggle.classList.add('hidden');
                } else {
                    controlsToggle.classList.remove('hidden');
                }
            });

            const controlsClose = document.getElementById('controlsClose');
            if (controlsClose) {
                controlsClose.addEventListener('click', () => {
                    controlsPanel.classList.remove('open');
                        controlsToggle.setAttribute('aria-expanded', false);
                        controlsPanel.setAttribute('aria-hidden', true);
                        // ensure toggle button becomes visible again
                        controlsToggle.classList.remove('hidden');
                });
            }
        }

        // Image navigation in modal
        const prevBtn = document.getElementById('prevImageBtn');
        const nextBtn = document.getElementById('nextImageBtn');
        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                if (this.currentPainting && this.currentImageIndex > 0) {
                    this.displayImage(this.currentImageIndex - 1, this.currentPainting);
                }
            });
            nextBtn.addEventListener('click', () => {
                if (this.currentPainting && this.currentImageIndex < (this.currentPainting.images.length - 1)) {
                    this.displayImage(this.currentImageIndex + 1, this.currentPainting);
                }
            });
        }

        // Wheel scroll for plaque scrolling
        window.addEventListener('wheel', (e) => {
            if (this.creditsPlaque && this.isLookingAt(this.creditsPlaque)) {
                e.preventDefault();
                this.plaqueScrollOffset += e.deltaY > 0 ? 100 : -100;
                this.plaqueScrollOffset = Math.max(0, Math.min(this.plaqueScrollOffset, 2000));
                this.updatePlaqueTexture();
            }
        }, { passive: false });

        // Auto-initialize gallery on page load
        this.initGallery();
    }

    initGallery() {
        const canvas = document.getElementById('galleryCanvas');
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf5f5dc);

        // Camera setup
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 1.6, -7);

        // Renderer setup
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // Create gallery
        this.createGallery();
        this.setupControls();
        this.animate();

        // Window resize
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    createGallery() {
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
        this.scene.add(ambientLight);

        const spotLight1 = new THREE.SpotLight(0xffffff, 1.5);
        spotLight1.position.set(0, 5, 0);
        this.scene.add(spotLight1);

        const spotLight2 = new THREE.SpotLight(0xffffff, 1.5);
        spotLight2.position.set(0, 5, 10.5);
        this.scene.add(spotLight2);

        // Floor
        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 22.5),
            new THREE.MeshStandardMaterial({ color: 0x2a2a2a })
        );
        floor.rotation.x = -Math.PI / 2;
        this.scene.add(floor);

        // Ceiling
        const ceiling = new THREE.Mesh(
            new THREE.PlaneGeometry(8, 22.5),
            new THREE.MeshStandardMaterial({ color: 0x3a3a3a })
        );
        ceiling.rotation.x = Math.PI / 2;
        ceiling.position.y = 4;
        this.scene.add(ceiling);

        // Walls
        const wallMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x8296A8,
            side: THREE.FrontSide
        });
        
        const leftWall = new THREE.Mesh(new THREE.PlaneGeometry(22.5, 4), wallMaterial);
        leftWall.rotation.y = Math.PI / 2;
        leftWall.position.set(-4, 2, 0);
        this.scene.add(leftWall);

        const rightWall = new THREE.Mesh(new THREE.PlaneGeometry(22.5, 4), wallMaterial);
        rightWall.rotation.y = -Math.PI / 2;
        rightWall.position.set(4, 2, 0);
        this.scene.add(rightWall);

        const backWall = new THREE.Mesh(new THREE.PlaneGeometry(8, 4), wallMaterial);
        backWall.position.set(0, 2, 11.25);
        this.scene.add(backWall);

        // Red carpet
        const carpet = new THREE.Mesh(
            new THREE.PlaneGeometry(2, 22.5),
            new THREE.MeshStandardMaterial({ color: 0x8b0000 })
        );
        carpet.rotation.x = -Math.PI / 2;
        carpet.position.y = 0.01;
        this.scene.add(carpet);

        // Create paintings
        paintings.forEach((paintingData, index) => {
            const painting = this.createPainting(paintingData, index === 8);
            painting.position.set(paintingData.position.x, paintingData.position.y, paintingData.position.z);
            
            if (paintingData.position.x < 0) {
                painting.rotation.y = Math.PI / 2;
            } else if (paintingData.position.x > 0) {
                painting.rotation.y = -Math.PI / 2;
            } else if (paintingData.position.z > 0) {
                painting.rotation.y = Math.PI;
            }
            
            painting.userData = paintingData;
            this.paintingObjects.push(painting);
            this.scene.add(painting);
        });

        // Add credits plaque on back wall
        this.createCreditsPlaque();
        // Initialize plaque texture to populate plaqueLinks array
        this.updatePlaqueTexture();

        // Add lighting fixtures
        this.addLighting();
    }

    createCreditsPlaque() {
        // Create canvas for credits text
        const canvas = document.createElement('canvas');
        canvas.width = 2048;
        canvas.height = 2048;
        const ctx = canvas.getContext('2d');

        // Set background color to match gallery background
        ctx.fillStyle = '#f5f5dc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Text style - black text
        ctx.fillStyle = '#000000';
        ctx.textBaseline = 'top';

        // Title
        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Created By:', canvas.width / 2, 100);
        const names = 'Heidy Monroy, Eric Goodwin, Asia Salcedo, Josh Lewellyn, Arda Kahya, Xcaret Gonzalez, Sepria Doherty, and Natalie Diaz';
        ctx.font = '48px Arial';
        const namesWords = names.split(' ');
        const namesMaxWidth = canvas.width - 200;
        let namesLine = '';
        let namesY = 190;
        namesWords.forEach((word) => {
            const testLine = namesLine ? namesLine + ' ' + word : word;
            if (ctx.measureText(testLine).width > namesMaxWidth && namesLine !== '') {
                ctx.fillText(namesLine, canvas.width / 2, namesY);
                namesY += 60;
                namesLine = word;
            } else {
                namesLine = testLine;
            }
        });
        if (namesLine) {
            ctx.fillText(namesLine, canvas.width / 2, namesY);
            namesY += 80; // extra padding after names
        }

        // Primary sources title
        ctx.font = 'bold 55px Arial';
        ctx.fillText('Primary Sources', canvas.width / 2, namesY + 60);

        // Sources text
        ctx.font = '48px Arial';
        ctx.textAlign = 'left';
        const leftMargin = 100;
        const rightMargin = canvas.width - 100;
        const maxWidth = rightMargin - leftMargin;
        let yPos = namesY + 200;
        const lineHeight = 80;

        const sources = [
            'Tuberculosis:',
            'https://pmc.ncbi.nlm.nih.gov/articles/PMC5432783/', 
            '',
            'Measles:',
            'https://libguides.mskcc.org/publichealth/MeaslesHistory',
            '',
            'Typhus Fever:',
            'https://libguides.mskcc.org/publichealth/MeaslesHistory',
            '',
            'Whooping Cough:',
            'https://pmc.ncbi.nlm.nih.gov/articles/PMC10876032/?utm_source',
            '',
            'SmallPox:',
            'https://www.masshist.org/digitaladams/archive/doc?id=L17760713aa',
            '',
            'Malaria:',
            'https://asm.org/articles/2023/september/the-history-of-malaria-in-the-united-states',
            '',
            'Leprosy:',
            'https://historicengland.org.uk/research/inclusive-heritage/disability-history/1050-1485/time-of-leprosy/',
            '',
            'Yellow Fever:',
            'https://asm.org/articles/2021/may/history-of-yellow-fever-in-the-u-s',
            '',
            'Scarlet Fever:',
            'https://asm.org/articles/2023/january/scarlet-fever-a-deadly-history-and-how-it-prevails'
        ];

        sources.forEach(line => {
            if (line.startsWith('http')) {
                ctx.fillStyle = '#0066cc'; // Blue for links
            } else if (line === '') {
                yPos += lineHeight / 2;
                return;
            } else {
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 52px Arial';
            }
            
            // Word wrap for long URLs
            const words = line.split('/');
            let currentLine = '';
            
            words.forEach((word, i) => {
                const testLine = currentLine + (i > 0 ? '/' : '') + word;
                const metrics = ctx.measureText(testLine);
                
                if (metrics.width > maxWidth && currentLine !== '') {
                    ctx.fillText(currentLine, leftMargin, yPos);
                    yPos += lineHeight;
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            
            if (currentLine !== '') {
                ctx.fillText(currentLine, leftMargin, yPos);
                yPos += lineHeight;
            }
            
            ctx.font = '48px Arial';
        });

        // Create texture and material
        const texture = new THREE.CanvasTexture(canvas);
        const plaqueMaterial = new THREE.MeshStandardMaterial({ 
            map: texture,
            transparent: true,
            side: THREE.DoubleSide
        });

        // Create plaque mesh (larger to fit all content)
        const plaqueGeometry = new THREE.PlaneGeometry(5, 5);
        const plaque = new THREE.Mesh(plaqueGeometry, plaqueMaterial);

        // Position on entrance wall (where viewer starts)
        plaque.position.set(0, 2, -12);
        plaque.rotation.y = 0; // Face towards back wall
        plaque.userData = { isCreditsPlaque: true, material: plaqueMaterial, canvas: canvas };

        this.creditsPlaque = plaque;
        this.scene.add(plaque);

        // Add instruction text on the side
        const instructionCanvas = document.createElement('canvas');
        instructionCanvas.width = 512;
        instructionCanvas.height = 512;
        const ictx = instructionCanvas.getContext('2d');
        
        // Transparent background
        ictx.clearRect(0, 0, instructionCanvas.width, instructionCanvas.height);
        
        // Draw text as one line
        ictx.fillStyle = '#000000';
        ictx.font = 'bold 40px Arial';
        ictx.textAlign = 'center';
        ictx.textBaseline = 'middle';
        ictx.fillText('*Scroll and Click sources', instructionCanvas.width / 2, instructionCanvas.height / 2);
        
        // Create texture and material for instruction text
        const instructionTexture = new THREE.CanvasTexture(instructionCanvas);
        const instructionMaterial = new THREE.MeshStandardMaterial({
            map: instructionTexture,
            transparent: true
        });
        
        // Create instruction text mesh
        const instructionGeometry = new THREE.PlaneGeometry(0.8, 0.8);
        const instructionText = new THREE.Mesh(instructionGeometry, instructionMaterial);
        
        // Position closer to the plaque on the left side and rotate 90 degrees
        instructionText.position.set(-2.8, 2, -12);
        instructionText.rotation.z = Math.PI / 2;
        
        this.scene.add(instructionText);
    }

    updatePlaqueTexture() {
        if (!this.creditsPlaque || !this.creditsPlaque.userData.canvas) return;

        // Redraw the plaque with the new scroll offset
        const canvas = this.creditsPlaque.userData.canvas;
        const ctx = canvas.getContext('2d');
        const scrollOffset = this.plaqueScrollOffset;

        // Reset links array for this render
        this.plaqueLinks = [];

        // Clear and redraw
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Background color - match gallery background color (#f5f5dc)
        ctx.fillStyle = '#f5f5dc';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#000000';
        ctx.textBaseline = 'top';

        // Title (not clipped - always visible)
        ctx.font = 'bold 60px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Created By:', canvas.width / 2, 100);
        const names = 'Heidy Monroy, Eric Goodwin, Asia Salcedo, Josh Lewellyn, Arda Kahya, Xcaret Gonzalez, Sepria Doherty, and Natalie Diaz';
        ctx.font = '48px Arial';
        const namesWords = names.split(' ');
        const namesMaxWidth = canvas.width - 200;
        let namesLine = '';
        let namesY = 190;
        namesWords.forEach((word) => {
            const testLine = namesLine ? namesLine + ' ' + word : word;
            if (ctx.measureText(testLine).width > namesMaxWidth && namesLine !== '') {
                ctx.fillText(namesLine, canvas.width / 2, namesY);
                namesY += 60;
                namesLine = word;
            } else {
                namesLine = testLine;
            }
        });
        if (namesLine) {
            ctx.fillText(namesLine, canvas.width / 2, namesY);
            namesY += 80;
        }

        // Now apply clipping for scrollable section
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, namesY + 60, canvas.width, canvas.height);
        ctx.clip();

        // Primary sources title
        ctx.font = 'bold 55px Arial';
        ctx.fillText('Primary Sources', canvas.width / 2, namesY + 60);

        // Sources text (with scroll offset)
        ctx.font = '48px Arial';
        ctx.textAlign = 'left';
        const leftMargin = 100;
        const rightMargin = canvas.width - 100;
        const maxWidth = rightMargin - leftMargin;
        const sourcesStartY = namesY + 180;
        let yPos = sourcesStartY - scrollOffset;
        const lineHeight = 80;

        const sources = [
            'Tuberculosis:',
            'https://pmc.ncbi.nlm.nih.gov/articles/PMC5432783/', 
            '',
            'Measles:',
            'https://libguides.mskcc.org/publichealth/MeaslesHistory',
            '',
            'Typhus Fever:',
            'https://libguides.mskcc.org/publichealth/MeaslesHistory',
            '',
            'Whooping Cough:',
            'https://pmc.ncbi.nlm.nih.gov/articles/PMC10876032/?utm_source',
            '',
            'SmallPox:',
            'https://www.masshist.org/digitaladams/archive/doc?id=L17760713aa',
            '',
            'Malaria:',
            'https://asm.org/articles/2023/september/the-history-of-malaria-in-the-united-states',
            '',
            'Leprosy:',
            'https://historicengland.org.uk/research/inclusive-heritage/disability-history/1050-1485/time-of-leprosy/',
            '',
            'Yellow Fever:',
            'https://asm.org/articles/2021/may/history-of-yellow-fever-in-the-u-s',
            '',
            'Scarlet Fever:',
            'https://asm.org/articles/2023/january/scarlet-fever-a-deadly-history-and-how-it-prevails'
        ];

        sources.forEach(line => {
            if (line.startsWith('http')) {
                ctx.fillStyle = '#0066cc';
                const metrics = ctx.measureText(line);
                const linkWidth = metrics.width;
                // Store link position for click detection
                this.plaqueLinks.push({
                    url: line,
                    x: leftMargin,
                    y: yPos,
                    width: linkWidth,
                    height: 50
                });
            } else if (line === '') {
                yPos += lineHeight / 2;
                return;
            } else {
                ctx.fillStyle = '#000000';
                ctx.font = 'bold 52px Arial';
            }
            
            const words = line.split('/');
            let currentLine = '';
            
            words.forEach((word, i) => {
                const testLine = currentLine + (i > 0 ? '/' : '') + word;
                const metrics = ctx.measureText(testLine);
                
                if (metrics.width > maxWidth && currentLine !== '') {
                    if (yPos >= 0 && yPos <= canvas.height) {
                        ctx.fillText(currentLine, leftMargin, yPos);
                    }
                    yPos += lineHeight;
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            
            if (currentLine !== '') {
                if (yPos >= 0 && yPos <= canvas.height) {
                    ctx.fillText(currentLine, leftMargin, yPos);
                }
                yPos += lineHeight;
            }
            
            ctx.font = '48px Arial';
        });

        ctx.restore();

        // Update existing texture instead of creating new one
        if (this.creditsPlaque.userData.material.map) {
            this.creditsPlaque.userData.material.map.needsUpdate = true;
        } else {
            const texture = new THREE.CanvasTexture(canvas);
            texture.needsUpdate = true;
            this.creditsPlaque.userData.material.map = texture;
        }
        this.creditsPlaque.userData.material.map.needsUpdate = true;
    }

    createPainting(paintingData, isLarge = false) {
        const group = new THREE.Group();
        const width = isLarge ? 2.5 : 1.5;
        const height = isLarge ? 2 : 1.2;
        const frameDepth = 0.1;
        const frameThickness = 0.15;

        // Canvas with image texture or fallback color
        const textureLoader = new THREE.TextureLoader();
        let canvasMaterial;
        
        // Use first image from images array for gallery display
        const firstImage = paintingData.images && paintingData.images.length > 0 ? paintingData.images[0] : null;
        
        if (firstImage) {
            // Load image texture
            const texture = textureLoader.load(firstImage, undefined, undefined, () => {
                // Fallback to color if image fails to load
                canvasMaterial.color.setHex(paintingData.color);
            });
            canvasMaterial = new THREE.MeshStandardMaterial({ map: texture });
        } else {
            // Fallback to color if no image specified
            canvasMaterial = new THREE.MeshStandardMaterial({ color: paintingData.color });
        }
        
        const canvas = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            canvasMaterial
        );
        canvas.position.z = frameDepth / 2;
        group.add(canvas);

        // Frame
        const frameMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
        
        // Top frame
        const topFrame = new THREE.Mesh(
            new THREE.BoxGeometry(width + frameThickness * 2, frameThickness, frameDepth),
            frameMaterial
        );
        topFrame.position.set(0, height / 2 + frameThickness / 2, 0);
        group.add(topFrame);

        // Bottom frame
        const bottomFrame = new THREE.Mesh(
            new THREE.BoxGeometry(width + frameThickness * 2, frameThickness, frameDepth),
            frameMaterial
        );
        bottomFrame.position.set(0, -height / 2 - frameThickness / 2, 0);
        group.add(bottomFrame);

        // Left frame
        const leftFrame = new THREE.Mesh(
            new THREE.BoxGeometry(frameThickness, height, frameDepth),
            frameMaterial
        );
        leftFrame.position.set(-width / 2 - frameThickness / 2, 0, 0);
        group.add(leftFrame);

        // Right frame
        const rightFrame = new THREE.Mesh(
            new THREE.BoxGeometry(frameThickness, height, frameDepth),
            frameMaterial
        );
        rightFrame.position.set(width / 2 + frameThickness / 2, 0, 0);
        group.add(rightFrame);

        // Small white text square on lower right
        const textSquareSize = isLarge ? 0.8 : 0.5;

        // For specific paintings (Tuberculosis, Measles, Smallpox, Whooping Cough, Typhus Fever, Malaria, Yellow Fever, Scarlet Fever) draw explanatory text onto a canvas
        // and use it as a texture so the small plaque shows the paragraph.
        let textSquareMaterial;
        if (paintingData && (paintingData.title === 'Tuberculosis' || paintingData.title === 'Measles' || paintingData.title === 'Smallpox' || paintingData.title === 'Whooping Cough' || paintingData.title === 'Typhus Fever' || paintingData.title === 'Malaria' || paintingData.title === 'Leprosy' || paintingData.title === 'Yellow Fever' || paintingData.title === 'Scarlet Fever')) {
            const plaqueCanvas = document.createElement('canvas');
            plaqueCanvas.width = 1024;
            plaqueCanvas.height = 1024;
            const ctx = plaqueCanvas.getContext('2d');

            // Background (white plaque)
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, plaqueCanvas.width, plaqueCanvas.height);

            // Text style
            ctx.fillStyle = '#000000';
            const fontSize = 36;
            ctx.font = `${fontSize}px Arial`;
            ctx.textBaseline = 'top';

            // The provided paragraph to render on the plaque depends on the painting
            let plaqueText = '';
            if (paintingData.title === 'Tuberculosis') {
                plaqueText = "As we know, we have made many advances to the medical treatments used to help and prevent diseases such as Tuberculosis but this wasn’t always the case. An example comes from the doctor of Marcus Aurelius, a Roman Emperor during 174 AD, Clarrissimus Galen who suggested treatments such as sea voyages for Tuberculosis given that symptoms could range from a simple fever to coughing up blood (2). When we think about that in present times, it becomes hard to believe that something as simple as being on a boat would help cure a disease not only now but also in the past where survival was never guaranteed. When we look at treatments today, they include medications that depend on the type of Tuberculosis such as Inactive, Active or Tuberculosis that is resistant to medications (3).";
            } else if (paintingData.title === 'Measles') {
                plaqueText = "The origin of measles is thought to have been zoonotic, evolving from Rinderpest (an infectious viral disease found in cattle, bison, and other hooved animals). A precursor to measles began sporadically infecting humans as early as the 4th Century BC, and over time evolved to become a distinct virus that infected humans. The first systematic description of measles, and its distinction from smallpox and chickenpox, is credited to the Persian physician Muhammad ibn Zakariya al-Razi (860?932), who published The Book of Smallpox and Measles. Sometime between AD 1100 and 1200, the measles virus fully diverged from rinderpest, becoming a distinct virus that infects humans. It was at the time that medieval European cities had grown to a size to sustain an epidemic (population >500,000).";
            } else if (paintingData.title === 'Smallpox') {
                plaqueText = "This collection is a letter from Abigail Adams writing about her concerns about the family's recent inoculation against smallpox, sent to her husband, John Adams. This letter conveys the gravity of Smallpox at this time, as she notes how many families in Boston were inoculated as well, showing a collective effort to fight against this disease. Abigail's decision to have her children inoculated serves as a testament to her unwavering commitment to their well-being and safety. Going into greater depth about the political climate that was present, highlighting her role as a mother protecting her children against smallpox, while also showing her awareness of the broader events affecting their lives during this time";
            } else if (paintingData.title === 'Whooping Cough') {
                plaqueText = "Whooping cough has long caused severe illness marked by relentless coughing fits, breathing difficulty, vomiting, and exhaustion, with infants and young children facing the highest risk of death. Communities experienced waves of this disease every few years, as the number for those immune gradually decreased over time. This resulted in many becoming fearful, causing strain on caregivers due to the continuous loss of family members. With this disease making its waves, its effects disrupted daily life, kept kids out of social spaces, and placed immense pressure on those in the medical field during this period. Due to the influence pertussis naturally had on civilizations, generations after experienced elevated childhood mortality, with societies also becoming better at responding to such a fast spreading disease.";
            } else if (paintingData.title === 'Typhus Fever') {
                plaqueText = "Joseph Conlon explains how the typhus epidemic was a louse-bourne fever. Those suffering from it experienced sudden chills, high body temperatures, intense headaches, and a darkening rash that spread across the individual's body. According to his study, this disease often made those enduring it experience delirium and extreme weakness, leaving them unable to stand and speak in some cases. Conlon emphasizes that typhus flourished in crowded , unwashed conditions; with armies, prisons, and impoverished communities being the main areas vulnerable to this disease. Clothing and bedding carried infected lice from person to person, causing outbreaks impactful enough to destabilize entire societies, halt military campaigns, and alter the social climate of these infected regions.";
            } else if (paintingData.title === 'Malaria') {
                plaqueText = "In the picture provided is an adult male skeleton from the Chalcolithic site Balathal in northwest India and dates back to roughly 2000 B.C(1). As the article describes, the skull shows multiple complications and changes in the skull by erosion and remodeling around the nasal aperture, loss of the nasal spine, lesions on the maxilla and infra‑orbital regions, and alveolar bone resorption linked to tooth loss.(2) Also showing damage on the peripheral skeleton, creating evidence towards a degenerative joint disease, which are usual signs within leprosy. This skull also being the oldest known skeletal evidence for leprosy dating back centuries.";
            } else if (paintingData.title === 'Leprosy') {
                plaqueText = "During medieval England, leprosy was known for its widespread, disfiguring disease by the 11th and 14th centuries. Leprosy causes blindness, loss of joints such as fingers or toes, collapse of the nose, ulcerations, weakening of the bone and other severe symptoms. (4) During England towards the end of the 11th century and beginning of 1350 many Communities started to establish hundreds of religious sanctuaries known as \"leper houses\" or lazar hospitals. Where those who were infected and in pain would receive basic physical and spiritual care such as shelter, food, washing, gardens and prayer were part of their regimen.(5) As times have changed becoming increasingly more advanced there is now medication one is able to take such as Dapsone, Rifampin and Clofazimine.";
            } else if (paintingData.title === 'Yellow Fever') {
                plaqueText = "The image was created by José Guadalupe Posada in 1892. Titled, “Death of Aurelio Caballero Due to Yellow Fever in Veracruz” features a man who is presumed sick with yellow fever, leaning over and vomiting.";
            } else if (paintingData.title === 'Example2') {
                plaqueText = "Example2 overall disease description text goes here.";
            } else if (paintingData.title === 'Scarlet Fever') {
                plaqueText = "Scarlet fever, historically known as 'rossalia,' is an illness caused by a bacterial toxin similar to that found in strep throat. During earlier centuries, it had a high mortality rate and was recognizable by a bright red rash across the body, accompanied by fever, vomiting, and sore throat. The disease mostly affected children and those with weak immune systems. With no cure available at the time, treatment focused on easing symptoms, and strict quarantine was recommended due to its high contagion. Today, antibiotics such as penicillin and amoxicillin make scarlet fever highly treatable, greatly lowering the risk of complications, and death.";
            }

            // Simple word-wrap helper
            function wrapText(context, text, x, y, maxWidth, lineHeight) {
                const words = text.split(' ');
                let line = '';
                for (let n = 0; n < words.length; n++) {
                    const testLine = line + words[n] + ' ';
                    const metrics = context.measureText(testLine);
                    const testWidth = metrics.width;
                    if (testWidth > maxWidth && n > 0) {
                        context.fillText(line, x, y);
                        line = words[n] + ' ';
                        y += lineHeight;
                    } else {
                        line = testLine;
                    }
                }
                context.fillText(line, x, y);
            }

            const padding = 60;
            const maxTextWidth = plaqueCanvas.width - padding * 2;
            const lineHeight = Math.floor(fontSize * 1.25);

            // Title at the top
            const titleText = 'Overall disease description';
            const titleFontSize = 48;
            ctx.font = `bold ${titleFontSize}px Arial`;
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#000000';
            const titleMetrics = ctx.measureText(titleText);
            const titleX = (plaqueCanvas.width - titleMetrics.width) / 2;
            const titleY = padding;
            ctx.fillText(titleText, titleX, titleY);

            // Reset to body font and start text below the title
            ctx.font = `${fontSize}px Arial`;
            const startY = titleY + titleFontSize + 20;
            wrapText(ctx, plaqueText, padding, startY, maxTextWidth, lineHeight);

            const texture = new THREE.CanvasTexture(plaqueCanvas);
            texture.needsUpdate = true;
            textSquareMaterial = new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide });
        } else {
            textSquareMaterial = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.3,
                metalness: 0.1
            });
        }

        const textSquare = new THREE.Mesh(
            new THREE.PlaneGeometry(textSquareSize, textSquareSize),
            textSquareMaterial
        );
        // Position on lower right of the frame
        const textSquareX = width / 2 + frameThickness / 2 + textSquareSize / 2 + 0.35;
        const textSquareY = -height / 2 - frameThickness / 2 - textSquareSize / 2 + 0.4;
        textSquare.position.set(textSquareX, textSquareY, frameDepth / 2);
        group.add(textSquare);

        return group;
    }

    addLighting() {
        // Wall lamps
        const lampPositions = [
            { pos: [-3.85, 3.3, -6], rot: Math.PI / 2 },
            { pos: [-3.85, 3.3, -2], rot: Math.PI / 2 },
            { pos: [-3.85, 3.3, 2], rot: Math.PI / 2 },
            { pos: [-3.85, 3.3, 6], rot: Math.PI / 2 },
            { pos: [3.85, 3.3, -6], rot: -Math.PI / 2 },
            { pos: [3.85, 3.3, -2], rot: -Math.PI / 2 },
            { pos: [3.85, 3.3, 2], rot: -Math.PI / 2 },
            { pos: [3.85, 3.3, 6], rot: -Math.PI / 2 },
        ];

        lampPositions.forEach(({ pos, rot }) => {
            const lamp = this.createWallLamp();
            lamp.position.set(pos[0], pos[1], pos[2]);
            lamp.rotation.y = rot;
            this.scene.add(lamp);
        });

        // Ceiling light
        const ceilingLight = this.createCeilingLight();
        ceilingLight.position.set(0, 3.95, 0);
        this.scene.add(ceilingLight);
    }

    createWallLamp() {
        const group = new THREE.Group();

        const base = new THREE.Mesh(
            new THREE.BoxGeometry(0.3, 0.2, 0.15),
            new THREE.MeshStandardMaterial({ color: 0x2c2416 })
        );
        group.add(base);

        const lampShade = new THREE.Mesh(
            new THREE.BoxGeometry(0.4, 0.15, 0.25),
            new THREE.MeshStandardMaterial({
                color: 0xffd700,
                emissive: 0xffaa00,
                emissiveIntensity: 0.5,
            })
        );
        lampShade.position.y = -0.2;
        group.add(lampShade);

        const lampLight = new THREE.PointLight(0xffffdd, 0.8, 5);
        lampLight.position.y = -0.3;
        lampLight.position.z = 0.3;
        group.add(lampLight);

        return group;
    }

    createCeilingLight() {
        const group = new THREE.Group();

        const mount = new THREE.Mesh(
            new THREE.CylinderGeometry(0.15, 0.15, 0.05, 16),
            new THREE.MeshStandardMaterial({ color: 0x2c2416 })
        );
        mount.position.y = 0.025;
        group.add(mount);

        const fixture = new THREE.Mesh(
            new THREE.CylinderGeometry(0.4, 0.5, 0.3, 16),
            new THREE.MeshStandardMaterial({
                color: 0xffffff,
                emissive: 0xffffaa,
                emissiveIntensity: 0.6,
            })
        );
        fixture.position.y = -0.15;
        group.add(fixture);

        const light = new THREE.PointLight(0xffffdd, 1.5, 15);
        light.position.y = -0.3;
        group.add(light);

        return group;
    }

    setupControls() {
        const canvas = document.getElementById('galleryCanvas');

        // Keyboard controls
        window.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
            // Toggle noclip with N key
            if (e.key.toLowerCase() === 'n') {
                this.noclip = !this.noclip;
                console.log(this.noclip ? 'Noclip enabled' : 'Noclip disabled');
            }
        });

        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });

        // Mouse position tracking for console
        window.addEventListener('mousemove', (e) => {
            console.clear();
            console.log(`Mouse Position: X=${e.clientX}, Y=${e.clientY}`);
        });

        // Mouse controls
        canvas.addEventListener('mousedown', (e) => {
            this.mouse.down = true;
            this.mouse.dragging = false;
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseup', () => {
            if (this.mouse.down && !this.mouse.dragging) {
                this.handleClick();
            }
            this.mouse.down = false;
            this.mouse.dragging = false;
        });

        window.addEventListener('mousemove', (e) => {
            if (this.mouse.down && !this.modalOpen) {
                const deltaX = e.clientX - this.mouse.x;
                const deltaY = e.clientY - this.mouse.y;

                if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                    this.mouse.dragging = true;
                }

                this.rotation.y -= deltaX * 0.003;
                this.rotation.x -= deltaY * 0.003;
                this.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.rotation.x));

                this.mouse.x = e.clientX;
                this.mouse.y = e.clientY;
            }
        });

        // Touch controls
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                this.mouse.down = true;
                this.mouse.dragging = false;
                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        });

        canvas.addEventListener('touchend', () => {
            if (this.mouse.down && !this.mouse.dragging) {
                this.handleClick();
            }
            this.mouse.down = false;
            this.mouse.dragging = false;
        });

        canvas.addEventListener('touchmove', (e) => {
            if (this.mouse.down && e.touches.length === 1) {
                const deltaX = e.touches[0].clientX - this.mouse.x;
                const deltaY = e.touches[0].clientY - this.mouse.y;

                if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
                    this.mouse.dragging = true;
                }

                this.rotation.y -= deltaX * 0.003;
                this.rotation.x -= deltaY * 0.003;
                this.rotation.x = Math.max(-Math.PI / 3, Math.min(Math.PI / 3, this.rotation.x));

                this.mouse.x = e.touches[0].clientX;
                this.mouse.y = e.touches[0].clientY;
            }
        });
    }

    handleClick() {
        // Check if clicking on credits plaque
        if (this.creditsPlaque && this.isLookingAt(this.creditsPlaque)) {
            this.handleCreditsClick();
            return;
        }

        const nearestPainting = this.findNearestPainting();
        if (nearestPainting) {
            this.showPaintingModal(nearestPainting.userData);
        }
    }

    handleCreditsClick() {
        // Get intersection point on the plaque
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2(
            (event.clientX / window.innerWidth) * 2 - 1,
            -(event.clientY / window.innerHeight) * 2 + 1
        );
        
        raycaster.setFromCamera(mouse, this.camera);
        const intersects = raycaster.intersectObject(this.creditsPlaque);
        
        if (intersects.length > 0) {
            const uv = intersects[0].uv;
            // Map UV coordinates (0-1) to canvas coordinates (0-2048)
            // UV.y is inverted (1 at bottom, 0 at top), so invert it
            const canvasY = (1 - uv.y) * 2048;
            // Adjust for scroll offset to match the dynamically rendered link positions
            const adjustedCanvasY = canvasY + this.plaqueScrollOffset;
            
            // Check against dynamically tracked plaqueLinks array
            for (const link of this.plaqueLinks) {
                // Check if click is within the link's bounding box
                if (adjustedCanvasY >= link.y && adjustedCanvasY <= link.y + link.height) {
                    window.open(link.url, '_blank');
                    break;
                }
            }
        }
    }

    isLookingAt(object) {
        const cameraPos = this.camera.position;
        const cameraDir = new THREE.Vector3();
        this.camera.getWorldDirection(cameraDir);

        const objectPos = object.position;
        const dirToObject = new THREE.Vector3()
            .subVectors(objectPos, cameraPos)
            .normalize();
        
        const angle = cameraDir.angleTo(dirToObject);
        const distance = cameraPos.distanceTo(objectPos);

        return angle < Math.PI / 4 && distance < 6;
    }

    findNearestPainting() {
        const cameraPos = this.camera.position;
        const cameraDir = new THREE.Vector3();
        this.camera.getWorldDirection(cameraDir);

        let closestPainting = null;
        let minDistance = Infinity;

        this.paintingObjects.forEach((painting) => {
            const paintingPos = painting.position;
            const dirToPainting = new THREE.Vector3()
                .subVectors(paintingPos, cameraPos)
                .normalize();
            
            const angle = cameraDir.angleTo(dirToPainting);
            const distance = cameraPos.distanceTo(paintingPos);

            if (angle < Math.PI / 4 && distance < 4 && distance < minDistance) {
                minDistance = distance;
                closestPainting = painting;
            }
        });

        return closestPainting;
    }

    showPaintingModal(paintingData) {
        // Store current painting data and image index for navigation
        this.currentPainting = paintingData;
        this.currentImageIndex = 0;
        this.modalOpen = true;
        
        document.getElementById('paintingTitle').textContent = paintingData.title;
        document.getElementById('paintingDescription').textContent = paintingData.description;
        
        // Populate citations
        const citationsList = document.getElementById('citationsList');
        const citationsBtn = document.getElementById('citationsBtn');
        const citationsContent = document.getElementById('citationsContent');
        
        if (paintingData.citations && paintingData.citations.length > 0) {
            citationsList.innerHTML = '';
            paintingData.citations.forEach(citation => {
                const li = document.createElement('li');
                li.textContent = citation;
                citationsList.appendChild(li);
            });
            citationsBtn.style.display = 'block';
        } else {
            citationsBtn.style.display = 'none';
        }
        
        // Hide citations content by default
        citationsContent.classList.remove('show');
        citationsBtn.textContent = 'Citations';
        
        // Load and display the first image
        this.displayImage(0, paintingData);
        
        // Update navigation button visibility
        this.updateImageNavigation(paintingData);
        
        document.getElementById('paintingModal').style.display = 'flex';
        document.getElementById('controlsInfo').style.display = 'none';
        document.getElementById('mobileControls').style.display = 'none';
    }

    displayImage(index, paintingData) {
        const images = paintingData.images || [];
        if (images.length === 0) return;
        
        this.currentImageIndex = index;
        const imageUrl = images[index];
        const canvas = document.getElementById('modalPaintingCanvas');
        
        if (imageUrl) {
            // Load image
            const img = new Image();
            img.onload = () => {
                canvas.style.backgroundImage = `url('${imageUrl}')`;
                canvas.style.backgroundSize = 'cover';
                canvas.style.backgroundPosition = 'center';
                canvas.style.backgroundColor = 'transparent';
            };
            img.onerror = () => {
                // Fallback to color if image fails
                canvas.style.backgroundImage = 'none';
                canvas.style.backgroundColor = `#${paintingData.color.toString(16).padStart(6, '0')}`;
            };
            img.src = imageUrl;
        }
        
        this.updateImageCounter(paintingData);
    }

    updateImageNavigation(paintingData) {
        const images = paintingData.images || [];
        const prevBtn = document.getElementById('prevImageBtn');
        const nextBtn = document.getElementById('nextImageBtn');
        
        // Show/hide buttons based on number of images
        if (images.length <= 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }

    updateImageCounter(paintingData) {
        const images = paintingData.images || [];
        const counter = document.getElementById('imageCounter');
        if (images.length > 1) {
            counter.textContent = `${this.currentImageIndex + 1} / ${images.length}`;
            counter.style.display = 'block';
        } else {
            counter.style.display = 'none';
        }
    }

    closePaintingModal() {
        this.modalOpen = false;
        document.getElementById('paintingModal').style.display = 'none';
        document.getElementById('controlsInfo').style.display = 'block';
        document.getElementById('mobileControls').style.display = 'flex';
    }

    updateMovement() {
        // Don't process movement when modal is open
        if (this.modalOpen) {
            return;
        }

        const moveSpeed = 0.1;
        const strafeSpeed = 0.1;
        const gravity = 0.01;
        const jumpStrength = 0.2;

        if (this.keys['w']) {
            this.camera.position.x -= Math.sin(this.rotation.y) * moveSpeed;
            this.camera.position.z -= Math.cos(this.rotation.y) * moveSpeed;
        }
        if (this.keys['s']) {
            this.camera.position.x += Math.sin(this.rotation.y) * moveSpeed;
            this.camera.position.z += Math.cos(this.rotation.y) * moveSpeed;
        }
        if (this.keys['a']) {
            this.camera.position.x -= Math.cos(this.rotation.y) * strafeSpeed;
            this.camera.position.z += Math.sin(this.rotation.y) * strafeSpeed;
        }
        if (this.keys['d']) {
            this.camera.position.x += Math.cos(this.rotation.y) * strafeSpeed;
            this.camera.position.z -= Math.sin(this.rotation.y) * strafeSpeed;
        }

        // Boundary constraints
        this.camera.position.x = Math.max(-3.5, Math.min(3.5, this.camera.position.x));
        this.camera.position.z = Math.max(-9, Math.min(10.25, this.camera.position.z));

        // Jumping and gravity
        if (this.keys[' '] && !this.isJumping) {
            this.isJumping = true;
            this.velocityY = jumpStrength;
        }

        if (this.isJumping) {
            this.camera.position.y += this.velocityY;
            this.velocityY -= gravity;

            if (this.camera.position.y <= 1.6) {
                this.camera.position.y = 1.6;
                this.isJumping = false;
        this.noclip = false;
        this.flySpeed = 0.15;
                this.velocityY = 0;
            }
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        this.updateMovement();

        this.camera.rotation.order = 'YXZ';
        this.camera.rotation.y = this.rotation.y;
        this.camera.rotation.x = this.rotation.x;

        this.renderer.render(this.scene, this.camera);
    }
}

// Initialize the gallery
const gallery = new VirtualGallery();
