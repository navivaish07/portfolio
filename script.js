/* ==========================================================================
   DYNAMIC PROJECT DATABASE (7 Projects)
   ========================================================================== */

const projects = [
    {
        id: "cafe-order-mgmt",
        title: "Cafe Order Management System",
        category: "web",
        categoryLabel: "Mobile App",
        description: "An Android application developed using Kotlin and Firebase for secure user authentication, role-based order management, and integrated online payments.",
        longDescription: `
            <p>A native Android application designed to streamline cafe operations and customer ordering workflows.</p>
            <ul>
                <li><strong>Architecture:</strong> Programmed in Kotlin using modern Android SDK components and MVVM architecture.</li>
                <li><strong>Authentication:</strong> Integrated Firebase Authentication for secure email/password and social login portals.</li>
                <li><strong>Real-time Sync:</strong> Implemented Firebase Realtime Database to synchronize order states, menu listings, and queue status between customers and admins.</li>
                <li><strong>Role Management:</strong> Engineered role-based access controls to differentiate customer checkout paths from administrative kitchen monitors.</li>
                <li><strong>Payments:</strong> Simulated secure online payment transaction gateways for quick in-app checkouts.</li>
            </ul>
        `,
        tech: ["Kotlin", "Firebase", "Android SDK", "Authentication"],
        icon: "fa-solid fa-mobile-screen-button",
        github: "https://github.com/navivaisho7",
        demo: "#"
    },
    {
        id: "onion-monitor",
        title: "Smart Onion Shelf-Life & Environment Monitor",
        category: "iot",
        categoryLabel: "IoT / Hardware-Software",
        description: "A comprehensive hardware-software IoT system using NodeMCU and web dashboards to track onion moisture, temperature, and pressure with Twilio SMS alerts.",
        longDescription: `
            <p>An agricultural IoT system designed to extend onion crop shelf-life by monitoring critical environmental thresholds in storage warehouses.</p>
            <ul>
                <li><strong>Hardware Node:</strong> Programmed a NodeMCU ESP8266 microcontroller to collect real-time data from temperature, barometric pressure, and soil/air moisture sensors.</li>
                <li><strong>Web Dashboard:</strong> Developed a responsive web interface to plot live sensor data ranges, display remaining shelf-life metrics, and track telemetry history.</li>
                <li><strong>Alert System:</strong> Integrated the Twilio API to automatically dispatch emergency SMS warnings to farmers when storage conditions exceed safe limits.</li>
            </ul>
        `,
        tech: ["NodeMCU", "Twilio API", "Sensors", "Web Dashboard", "Python"],
        icon: "fa-solid fa-seedling",
        github: "https://github.com/navivaisho7",
        demo: "#"
    },
    {
        id: "boiler-monitor",
        title: "IoT Boiler Monitoring System",
        category: "iot",
        categoryLabel: "IoT / Hardware",
        description: "An IoT safety system utilizing temperature sensors to monitor boiler conditions and actuate SMS alerts and buzzers when critical limits are breached.",
        longDescription: `
            <p>An industrial safety prototype designed to prevent boiler overheating and failure through automated sensory alerts.</p>
            <ul>
                <li><strong>Sensory Input:</strong> Interfaced high-precision temperature probes with microcontrollers to monitor active boiler cores.</li>
                <li><strong>Local Alarms:</strong> Configured automatic buzzer and alarm ring circuits that trigger instantly if thermal safety thresholds are crossed.</li>
                <li><strong>Remote Alerts:</strong> Programmed a GSM/SMS warning system that sends direct SMS notifications to factory safety officers detailing current core temperatures.</li>
            </ul>
        `,
        tech: ["Arduino IDE", "Sensors", "Microcontrollers", "GSM Module"],
        icon: "fa-solid fa-temperature-arrow-up",
        github: "https://github.com/navivaisho7",
        demo: "#"
    },
    {
        id: "hotel-management",
        title: "Hotel Management System",
        category: "web",
        categoryLabel: "Web App",
        description: "A web-based hotel management platform for room bookings, reservation tracking, customer databases, and administrative control panels.",
        longDescription: `
            <p>Developed a full-stack hotel booking and management system designed to streamline hospitality operations and customer reservations.</p>
            <ul>
                <li><strong>Frontend:</strong> Engineered a modular user interface using Angular, featuring dynamic room availability checkers, calendar views, and reservation wizards.</li>
                <li><strong>Backend:</strong> Programmed secure RESTful API endpoints using Node.js and Express to manage room state, booking states, and customer data.</li>
                <li><strong>Database:</strong> Integrated MongoDB for flexible schemas, enabling efficient queries for customer profiles and transaction records.</li>
            </ul>
        `,
        tech: ["Angular", "Node.js", "Express", "MongoDB"],
        icon: "fa-solid fa-hotel",
        github: "https://github.com/navivaisho7",
        demo: "#"
    },
    {
        id: "ai-cloud-migration",
        title: "AI Cloud Migration Copilot",
        category: "web",
        categoryLabel: "AI & Data Analytics",
        description: "An AI-powered assessment tool for software dependencies, cloud risk estimation, and automatic migration step recommendations.",
        longDescription: `
            <p>An intelligent software analysis platform built to assist system architects in migrating legacy infrastructures to cloud environments.</p>
            <ul>
                <li><strong>Core Engine:</strong> Programmed backend parser in Python to analyze code dependencies and deployment descriptors.</li>
                <li><strong>Analytics:</strong> Integrated machine learning algorithms for risk scoring based on infrastructure legacy factors and sizing specifications.</li>
                <li><strong>Dashboard:</strong> Built an interactive, dynamic data dashboard using Streamlit to visualize dependencies and export custom migration guides.</li>
            </ul>
        `,
        tech: ["Python", "Streamlit", "Machine Learning", "Data Analytics"],
        icon: "fa-solid fa-brain",
        github: "https://github.com/navivaisho7",
        demo: "#"
    },
    {
        id: "webguard-vulnerability",
        title: "Vulnerability Assessment via WebGuard",
        category: "security",
        categoryLabel: "Cybersecurity",
        description: "Automated web application security scanning to identify vulnerability patterns (SQLi, XSS, configurations) and compile assessment reports.",
        longDescription: `
            <p>A cybersecurity workflow automating vulnerability scanning and risk assessment for web applications using open-source utilities.</p>
            <ul>
                <li><strong>Scanner Core:</strong> Automated web application crawls and injections using Python wrappers around the Wapiti scanning engine.</li>
                <li><strong>Vulnerability Coverage:</strong> Tested for SQL Injection, Cross-Site Scripting (XSS), server misconfigurations, and outdated frameworks.</li>
                <li><strong>Reporting:</strong> Developed an automated parser that processes raw scan outputs and formats them into developer-friendly PDF reports detailing vulnerabilities and mitigation recommendations.</li>
            </ul>
        `,
        tech: ["Python", "Wapiti", "Burp Suite", "OWASP Top 10"],
        icon: "fa-solid fa-shield-halved",
        github: "https://github.com/navivaisho7",
        demo: "#"
    },
    {
        id: "speed-breaker-iot",
        title: "Automatic Speed Breaker System",
        category: "iot",
        categoryLabel: "IoT / Hardware",
        description: "Smart IoT-based traffic control system utilizing sensors and microcontrollers to detect overspeeding vehicles and actuate alerts.",
        longDescription: `
            <p>An IoT-based road safety mechanism designed to enforce speed limits and actuate mechanical speed adaptation systems dynamically.</p>
            <ul>
                <li><strong>Hardware:</strong> Configured ultrasonic and infrared sensors connected to a NodeMCU ESP8266 board.</li>
                <li><strong>Firmware:</strong> Programmed real-time sensor processing and network communication logic using Arduino IDE.</li>
                <li><strong>Actuation:</strong> Implemented servomotor mechanisms simulating automatic speed breaker adjustments when vehicles exceed calibrated limits.</li>
            </ul>
        `,
        tech: ["Sensors", "NodeMCU ESP8266", "Arduino IDE", "C++"],
        icon: "fa-solid fa-car-side",
        github: "https://github.com/navivaisho7",
        demo: "#"
    }
];

/* ==========================================================================
   PARTICLE CANVAS ANIMATION
   ========================================================================== */

const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

let particles = [];
const mouse = { x: null, y: null, radius: 120 };

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});

window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.8 - 0.4;
        this.speedY = Math.random() * 0.8 - 0.4;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse collision interactivity
        if (mouse.x !== null && mouse.y !== null) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                const force = (mouse.radius - dist) / mouse.radius;
                this.x -= dx / dist * force * 1.5;
                this.y -= dy / dist * force * 1.5;
            }
        }
    }
    draw() {
        ctx.fillStyle = document.documentElement.getAttribute("data-theme") === "dark" 
            ? "rgba(0, 242, 254, 0.4)" 
            : "rgba(2, 132, 199, 0.25)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const count = Math.min(Math.floor((canvas.width * canvas.height) / 14000), 100);
    for (let i = 0; i < count; i++) {
        particles.push(new Particle());
    }
}
initParticles();
window.addEventListener("resize", initParticles);

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw lines
    const maxDist = 120;
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
                let opacity = (1 - dist / maxDist) * 0.15;
                ctx.strokeStyle = isDark 
                    ? `rgba(0, 242, 254, ${opacity})` 
                    : `rgba(2, 132, 199, ${opacity})`;
                ctx.lineWidth = 0.8;
                ctx.beginPath();
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

/* ==========================================================================
   TYPEWRITER EFFECT
   ========================================================================== */

const typewriterElement = document.getElementById("typewriter");
const words = ["IT Engineering Student", "Android & Web Developer", "Cybersecurity Enthusiast", "Problem Solver"];
let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;
let typeSpeed = 100;

function typeAnimation() {
    const currentWord = words[wordIdx];
    
    if (isDeleting) {
        typewriterElement.textContent = currentWord.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 40;
    } else {
        typewriterElement.textContent = currentWord.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIdx === currentWord.length) {
        isDeleting = true;
        typeSpeed = 1500; // Pause at full word
    } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        typeSpeed = 400; // Pause before typing new word
    }

    setTimeout(typeAnimation, typeSpeed);
}
if (typewriterElement) {
    setTimeout(typeAnimation, 1000);
}

/* ==========================================================================
   DYNAMIC PROJECT RENDERER & FILTERS
   ========================================================================== */

const projectsGrid = document.getElementById("projects-grid");
const filterControls = document.getElementById("filter-controls");

function renderProjects(categoryFilter = "all") {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = "";
    const filteredProjects = categoryFilter === "all" 
        ? projects : projects.filter(p => p.category === categoryFilter);
        
    // Update active project count stats card
    const projectCountEl = document.getElementById("project-count");
    if (projectCountEl) {
        projectCountEl.textContent = `${projects.length}`;
    }

    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `<div class="no-projects">No projects found in this category.</div>`;
        return;
    }

    filteredProjects.forEach(project => {
        const card = document.createElement("div");
        card.className = "project-card";
        card.setAttribute("data-id", project.id);
        
        card.innerHTML = `
            <div class="project-card-header">
                <div class="project-icon-box">
                    <i class="${project.icon}"></i>
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank" rel="noopener" class="project-link-btn" aria-label="GitHub Repository"><i class="fa-brands fa-github"></i></a>
                    <a href="#" class="project-link-btn view-details-trigger" aria-label="Project details"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div class="project-card-body">
                <span class="project-category">${project.categoryLabel}</span>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-desc">${project.description}</p>
                <div class="project-tags">
                    ${project.tech.map(t => `<span class="tag">${t}</span>`).join("")}
                </div>
            </div>
        `;
        
        // Modal Trigger Hook
        card.querySelector(".view-details-trigger").addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            openModal(project);
        });
        card.addEventListener("click", () => {
            openModal(project);
        });
        
        projectsGrid.appendChild(card);
    });
}

// Project filters listener
if (filterControls) {
    filterControls.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        
        const filterVal = btn.getAttribute("data-filter");
        renderProjects(filterVal);
    });
}

// Initial Project Render
renderProjects();

/* ==========================================================================
   PROJECT DETAILS MODAL
   ========================================================================== */

const modal = document.getElementById("project-modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

function openModal(project) {
    if (!modal) return;
    
    document.getElementById("modal-category").textContent = project.categoryLabel;
    document.getElementById("modal-title").textContent = project.title;
    document.getElementById("modal-tech").textContent = project.tech.join(" • ");
    document.getElementById("modal-desc").innerHTML = project.longDescription;
    
    const visual = document.getElementById("modal-visual");
    visual.innerHTML = `<i class="${project.icon}"></i>`;
    
    const linksPanel = document.getElementById("modal-links");
    linksPanel.innerHTML = `
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary"><i class="fa-brands fa-github"></i> GitHub Code</a>
        ${project.demo !== "#" ? `<a href="${project.demo}" target="_blank" rel="noopener" class="btn btn-secondary"><i class="fa-solid fa-globe"></i> Live Demo</a>` : ""}
    `;
    
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Freeze scroll
}

function closeModal() {
    if (!modal) return;
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Thaw scroll
}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}

/* ==========================================================================
   SKILLS TABS DYNAMIC SWITCHER
   ========================================================================== */

const skillTabs = document.querySelectorAll(".tab-btn");
const skillContents = document.querySelectorAll(".tab-content");

if (skillTabs && skillContents) {
    skillTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            skillTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            
            skillContents.forEach(content => content.classList.remove("active"));
            
            const targetId = tab.getAttribute("data-tab");
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add("active");
            }
        });
    });
}

/* ==========================================================================
   THEME SWITCHER
   ========================================================================== */

const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}

// Check saved preferences
const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
    });
}

/* ==========================================================================
   NAVIGATION SPY & ACTIVE LINKS
   ========================================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const navObserverOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "-80px 0px 0px 0px" // Account for navbar height
};

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, navObserverOptions);

sections.forEach(section => navObserver.observe(section));

/* ==========================================================================
   MOBILE MENU DRAWER
   ========================================================================== */

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const navMenu = document.getElementById("nav-menu");

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    
    // Close on link clicks
    navMenu.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenuBtn.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

/* ==========================================================================
   CONTACT FORM VALIDATION & TOAST
   ========================================================================== */

const contactForm = document.getElementById("contact-form");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

function showToast(message, isSuccess = true) {
    if (!toast) return;
    toastMessage.textContent = message;
    
    const icon = toast.querySelector("i");
    if (isSuccess) {
        toast.style.borderColor = "var(--accent-green)";
        toast.style.boxShadow = "0 10px 30px rgba(5, 250, 154, 0.15)";
        icon.className = "fa-solid fa-circle-check";
        icon.style.color = "var(--accent-green)";
    } else {
        toast.style.borderColor = "#ff5f56";
        toast.style.boxShadow = "0 10px 30px rgba(255, 95, 86, 0.15)";
        icon.className = "fa-solid fa-circle-exclamation";
        icon.style.color = "#ff5f56";
    }
    
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 4000);
}

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (!name || !email || !subject || !message) {
            showToast("Please fill in all form fields.", false);
            return;
        }
        
        // Simulating email dispatch
        const submitBtn = contactForm.querySelector(".btn-submit");
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
        submitBtn.disabled = true;
        
        setTimeout(() => {
            showToast("Thank you, Vaishnavi has received your message!");
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1200);
    });
}

/* ==========================================================================
   INTERACTIVE CYBER TERMINAL WIDGET
   ========================================================================== */

const terminalInput = document.getElementById("terminal-input");
const terminalBody = document.getElementById("terminal-body");
const promptLine = document.getElementById("interactive-prompt-line");

if (terminalInput && terminalBody) {
    terminalInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            const inputVal = terminalInput.value.trim();
            const command = inputVal.toLowerCase();
            terminalInput.value = "";
            
            // Print command line
            const userLine = document.createElement("div");
            userLine.className = "terminal-line";
            userLine.innerHTML = `<span class="prompt">guest@cyber-club:~$</span> <span class="typed-command">${escapeHtml(inputVal)}</span>`;
            terminalBody.insertBefore(userLine, promptLine);
            
            // Process command output
            let outputText = "";
            switch (command) {
                case "":
                    break;
                case "help":
                    outputText = `Available commands:
  about    - Display basic biography
  skills   - Lists primary technical skills
  projects - Show portfolio project titles
  clear    - Clear terminal logs
  help     - Show command list`;
                    break;
                case "about":
                    outputText = "Dhanwate Vaishnavi is an IT Engineering student and cybersecurity club secretary based in Ahmednagar, Maharashtra. Specializes in Mobile & Web Dev, Java, Python, IoT, and security testing.";
                    break;
                case "skills":
                    outputText = "Programming: Java, Python, Kotlin, C\nCybersecurity: Vulnerability Assessment, Network Security Basics, Nmap, Wireshark, Burp Suite, Ethical Hacking\nDatabases & Cloud: Firebase, MongoDB, SQL, Firestore\nWeb & Mobile Frameworks: Android SDK, Angular, Node.js, SAP ABAP Cloud";
                    break;
                case "projects":
                    outputText = projects.map(p => `• ${p.title} (${p.categoryLabel})`).join("\n");
                    break;
                case "clear":
                    // Remove all siblings except the input line
                    const lines = Array.from(terminalBody.children);
                    lines.forEach(line => {
                        if (line !== promptLine) {
                            terminalBody.removeChild(line);
                        }
                    });
                    break;
                default:
                    outputText = `bash: command not found: ${escapeHtml(command)}. Type 'help' for instructions.`;
            }
            
            if (outputText) {
                const outputEl = document.createElement("div");
                outputEl.className = "terminal-output";
                outputEl.textContent = outputText;
                terminalBody.insertBefore(outputEl, promptLine);
            }
            
            // Scroll to bottom
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }
    });

    // Handle container clicks to focus input
    terminalBody.addEventListener("click", () => {
        terminalInput.focus();
    });
}

function escapeHtml(str) {
    return str.replace(/&/g, "&amp;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#039;");
}
