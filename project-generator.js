/*
 * ElectroLearn Project Idea Generator
 * Offline, rule-based subject matching. No API key or external AI service required.
 */
(() => {
    "use strict";

    const projects = [
        {
            title: "Smart Flood-Level Alert and Dashboard", icon: "🌊", level: "INTERMEDIATE",
            branches: ["eie", "civil", "both"], type: "hybrid", budget: "medium",
            goals: ["mini", "hackathon", "scholarship", "placement"],
            subjects: ["sensors", "instrumentation", "microcontroller", "embedded", "iot", "water", "hydrology", "fluid mechanics", "civil", "control", "website", "web development"],
            description: "Measure water level with a sensor, trigger a local warning and display readings on a simple web dashboard.",
            components: ["Arduino or ESP32", "Water-level sensor", "Buzzer and LEDs", "Optional Wi-Fi dashboard"],
            steps: ["Read and calibrate the sensor.", "Set a safe warning threshold and test it with a small container.", "Add a buzzer/LED alert.", "Display readings and timestamps on a webpage if using a Wi-Fi board."],
            outcomes: "Sensor calibration, threshold logic, embedded programming, data visualisation and a clear social-impact use case.",
            cost: "₹500–₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }, { label: "ESP32 documentation", url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/" }]
        },
        {
            title: "Smart Structural Health Monitor", icon: "🏗️", level: "INTERMEDIATE",
            branches: ["civil", "both"], type: "hybrid", budget: "medium",
            goals: ["hackathon", "scholarship", "placement"],
            subjects: ["civil", "structural", "structures", "strain gauge", "vibration", "accelerometer", "sensors", "instrumentation", "iot", "website"],
            description: "Build a small model structure and monitor tilt or vibration. Show readings and flag changes for inspection; it is an educational prototype, not a certified safety system.",
            components: ["ESP32 or Arduino", "Accelerometer/tilt sensor", "Model bridge or beam", "Optional webpage"],
            steps: ["Build a small model structure.", "Record baseline sensor values.", "Apply gentle, controlled changes to the model.", "Plot readings and describe limitations."],
            outcomes: "Structural monitoring concepts, measurement, data logging and engineering validation.",
            cost: "₹500–₹2,000",
            links: [{ label: "ESP32 documentation", url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/" }]
        },
        {
            title: "Smart Irrigation and Soil-Moisture Control", icon: "🌱", level: "BEGINNER",
            branches: ["eie", "civil", "both"], type: "hardware", budget: "low",
            goals: ["mini", "scholarship", "placement"],
            subjects: ["sensors", "instrumentation", "microcontroller", "embedded", "iot", "soil", "water", "agriculture", "control"],
            description: "Measure soil moisture and switch a small pump or indicator when the soil becomes dry. Include manual override and safe pump power handling.",
            components: ["Arduino Uno", "Soil-moisture sensor", "LED/buzzer", "Small pump and suitable driver (optional)"],
            steps: ["Read sensor values in dry and moist soil.", "Choose and document a threshold.", "Control an indicator first.", "Add a correctly rated driver and pump only after checking current requirements."],
            outcomes: "Sensor calibration, control logic, actuator interfacing and resource conservation.",
            cost: "Under ₹500 for an indicator-only prototype; more with a pump",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Low-Cost Air-Quality Monitor", icon: "🌫️", level: "INTERMEDIATE",
            branches: ["eie", "both"], type: "hybrid", budget: "medium",
            goals: ["mini", "hackathon", "scholarship", "placement"],
            subjects: ["sensors", "instrumentation", "environment", "iot", "microcontroller", "embedded", "website", "data"],
            description: "Collect readings from an appropriate air-quality sensor and display trends. Explain sensor limitations and do not present a low-cost sensor as a certified instrument.",
            components: ["ESP32 or Arduino", "Suitable air-quality sensor", "Breadboard and wires", "Optional web chart"],
            steps: ["Read the sensor datasheet.", "Collect baseline readings in different locations.", "Log timestamps and readings.", "Build a chart and document limitations."],
            outcomes: "Instrumentation, environmental monitoring, data logging and technical documentation.",
            cost: "₹500–₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }, { label: "GitHub", url: "https://github.com/" }]
        },
        {
            title: "Temperature Monitoring and Overheat Alarm", icon: "🌡️", level: "BEGINNER",
            branches: ["eie", "both"], type: "hardware", budget: "low",
            goals: ["mini", "placement"],
            subjects: ["sensors", "instrumentation", "temperature", "thermistor", "rtd", "thermocouple", "microcontroller", "basic electronics"],
            description: "Measure temperature, compare it with a selected threshold and trigger an LED or buzzer alert.",
            components: ["Arduino Uno", "Compatible temperature sensor", "LED", "Buzzer and resistors"],
            steps: ["Connect the sensor using its datasheet.", "Read values and compare them with a reference thermometer.", "Set a threshold.", "Test normal and alert conditions."],
            outcomes: "Measurement, calibration, threshold logic and circuit troubleshooting.",
            cost: "Under ₹500",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Water Tank Level and Pump Controller", icon: "🚰", level: "BEGINNER",
            branches: ["eie", "civil", "both"], type: "hardware", budget: "low",
            goals: ["mini", "hackathon", "placement"],
            subjects: ["water", "fluid mechanics", "sensors", "instrumentation", "control systems", "microcontroller", "civil", "automation"],
            description: "Detect low and high tank levels and control indicator outputs. Add pump control only with a properly rated, safely isolated driver.",
            components: ["Water-level switches or sensor", "Arduino", "LEDs or buzzer", "Optional relay module with safe isolation"],
            steps: ["Simulate low and high levels.", "Implement threshold states.", "Test sensor failure cases.", "Document safe electrical isolation if controlling a real pump."],
            outcomes: "Process control, level measurement, automation and fail-safe thinking.",
            cost: "Under ₹500 for a sensor/indicator model",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Op-Amp Sensor Signal Conditioner", icon: "〰️", level: "INTERMEDIATE",
            branches: ["eie", "other"], type: "hardware", budget: "low",
            goals: ["mini", "placement", "scholarship"],
            subjects: ["analog", "op-amp", "operational amplifier", "signal conditioning", "sensors", "instrumentation", "circuits"],
            description: "Build a simple amplifier or buffer for a low-level sensor signal and compare measured gain with the theoretical value.",
            components: ["LM358 or suitable op-amp", "Resistors", "Breadboard", "Multimeter and low-voltage signal source"],
            steps: ["Choose a circuit from the op-amp datasheet.", "Calculate expected gain.", "Build with a suitable supply voltage.", "Measure output and explain error or saturation."],
            outcomes: "Analog electronics, gain calculation, signal conditioning and measurement.",
            cost: "Under ₹500",
            links: [{ label: "Texas Instruments op-amp resources", url: "https://www.ti.com/amplifier-circuit/op-amps/overview.html" }]
        },
        {
            title: "PID Temperature Control Demonstrator", icon: "🎛️", level: "ADVANCED",
            branches: ["eie", "other"], type: "hardware", budget: "medium",
            goals: ["hackathon", "scholarship", "placement"],
            subjects: ["control systems", "pid", "feedback", "temperature", "sensors", "instrumentation", "embedded", "microcontroller"],
            description: "Demonstrate setpoint tracking with a low-voltage safe thermal setup or simulated plant, then compare on/off and PID behaviour.",
            components: ["Microcontroller", "Temperature sensor", "Low-voltage heating demonstrator or simulation", "Display/serial plotter"],
            steps: ["Model or simulate the plant.", "Implement on/off control as a baseline.", "Add PID carefully and tune conservatively.", "Compare overshoot, settling time and steady-state error."],
            outcomes: "Feedback control, controller tuning, dynamic response and quantitative evaluation.",
            cost: "₹500–₹2,000 depending on setup",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Digital Logic and Counter Trainer", icon: "▦", level: "BEGINNER",
            branches: ["eie", "other"], type: "hardware", budget: "low",
            goals: ["mini", "placement"],
            subjects: ["digital electronics", "digital design", "logic gates", "flip-flops", "counters", "boolean algebra"],
            description: "Create a small logic-gate or counter demonstration with LEDs and switches, and explain the truth table and timing.",
            components: ["Logic ICs or a microcontroller simulation", "LEDs", "Resistors", "Push buttons"],
            steps: ["Draw the truth table.", "Build or simulate the circuit.", "Test every input combination.", "Document expected and observed outputs."],
            outcomes: "Digital design, logic verification and systematic testing.",
            cost: "Under ₹500",
            links: [{ label: "Wokwi electronics simulator", url: "https://wokwi.com/" }]
        },
        {
            title: "Embedded Data Logger", icon: "📈", level: "INTERMEDIATE",
            branches: ["eie", "other"], type: "hybrid", budget: "medium",
            goals: ["mini", "scholarship", "placement"],
            subjects: ["embedded", "embedded c", "microcontroller", "sensors", "instrumentation", "iot", "data logging", "website"],
            description: "Record sensor readings with timestamps and display them as a table or chart on a laptop or local webpage.",
            components: ["Arduino or ESP32", "One sensor", "Serial monitor or storage module", "Optional webpage"],
            steps: ["Read sensor values reliably.", "Add timestamps or sample numbers.", "Export readings as CSV.", "Plot the data and discuss sampling intervals."],
            outcomes: "Embedded C, measurement, data handling, visualisation and reproducibility.",
            cost: "Under ₹500 to ₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }, { label: "GitHub", url: "https://github.com/" }]
        },
        {
            title: "Concrete Curing Condition Logger", icon: "🧱", level: "INTERMEDIATE",
            branches: ["civil", "both"], type: "hybrid", budget: "medium",
            goals: ["mini", "hackathon", "scholarship"],
            subjects: ["civil", "concrete", "construction materials", "temperature", "humidity", "sensors", "instrumentation", "data logging", "website"],
            description: "Log temperature and relative humidity near a small concrete test sample during curing and visualise the conditions. It does not directly certify concrete strength.",
            components: ["Temperature/humidity sensor", "ESP32 or Arduino", "Sample container or test specimen", "Spreadsheet or webpage"],
            steps: ["Set up a repeatable measurement location.", "Record environmental conditions at intervals.", "Plot the data.", "Discuss how a proper strength test differs from condition monitoring."],
            outcomes: "Civil materials context, environmental measurement and evidence-based reporting.",
            cost: "₹500–₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Rainfall and Drainage Observation Dashboard", icon: "🌧️", level: "INTERMEDIATE",
            branches: ["civil", "both"], type: "hybrid", budget: "medium",
            goals: ["hackathon", "scholarship", "mini"],
            subjects: ["civil", "hydrology", "rainfall", "drainage", "water", "sensors", "iot", "website", "data"],
            description: "Record rainfall observations or simulated sensor data and display trends that can support a drainage study.",
            components: ["Rain gauge or suitable rainfall sensor", "ESP32/Arduino (optional)", "Spreadsheet or web dashboard"],
            steps: ["Define the observation interval.", "Record rainfall data or clearly labelled simulation data.", "Plot totals and trends.", "Discuss local drainage factors and data limitations."],
            outcomes: "Hydrology basics, time-series data, dashboards and practical interpretation.",
            cost: "Under ₹500 for manual data; more for connected sensing",
            links: [{ label: "GitHub", url: "https://github.com/" }]
        },
        {
            title: "Smart Construction Site Safety Monitor", icon: "⛑️", level: "INTERMEDIATE",
            branches: ["civil", "both"], type: "hybrid", budget: "medium",
            goals: ["hackathon", "scholarship", "placement"],
            subjects: ["civil", "construction", "safety", "sensors", "iot", "embedded", "website", "automation"],
            description: "Build a demonstration that logs a chosen environmental parameter, such as temperature or dust-sensor output, and raises a configurable alert. It is not a certified safety device.",
            components: ["ESP32 or Arduino", "Appropriate sensor", "LED/buzzer", "Optional dashboard"],
            steps: ["Choose one measurable parameter.", "Review the sensor's range and limitations.", "Create an alert threshold.", "Test and document false alarms and missed detections."],
            outcomes: "Construction context, instrumentation, alert design and validation.",
            cost: "₹500–₹2,000",
            links: [{ label: "ESP32 documentation", url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/" }]
        },
        {
            title: "Road Surface Defect Reporting Website", icon: "🛣️", level: "BEGINNER",
            branches: ["civil", "both", "other"], type: "software", budget: "low",
            goals: ["mini", "hackathon", "scholarship", "placement"],
            subjects: ["civil", "transportation", "roads", "highway", "website", "web development", "javascript", "mapping", "database"],
            description: "Create a website where users can log a road defect, location, category and photo, then view reports on a searchable dashboard.",
            components: ["HTML, CSS and JavaScript", "Optional map library", "Optional database/backend"],
            steps: ["Design a defect-report form.", "Validate and display submitted reports.", "Add category and status filters.", "Document privacy and moderation considerations."],
            outcomes: "Web development, structured data, civic problem-solving and project documentation.",
            cost: "Under ₹500 if hosted with free tools",
            links: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }, { label: "GitHub Pages", url: "https://pages.github.com/" }]
        },
        {
            title: "Campus Water-Use Tracker", icon: "💧", level: "BEGINNER",
            branches: ["civil", "both"], type: "software", budget: "low",
            goals: ["mini", "hackathon", "scholarship"],
            subjects: ["civil", "water", "environment", "sustainability", "website", "web development", "data", "spreadsheet"],
            description: "Build a simple dashboard to enter water-meter readings, calculate usage over time and highlight unusual changes for follow-up.",
            components: ["HTML/CSS/JavaScript or spreadsheet", "Sample or collected meter readings"],
            steps: ["Create a daily reading form.", "Calculate usage differences.", "Plot daily and weekly trends.", "State assumptions and avoid inventing missing data."],
            outcomes: "Water management, data analysis, dashboard design and sustainability.",
            cost: "Free with basic web tools",
            links: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }]
        },
        {
            title: "Accessible Smart Room Monitor", icon: "🏠", level: "INTERMEDIATE",
            branches: ["eie", "both"], type: "hybrid", budget: "medium",
            goals: ["hackathon", "scholarship", "placement"],
            subjects: ["sensors", "instrumentation", "embedded", "iot", "automation", "website", "home automation", "control"],
            description: "Monitor room temperature or light level and show clear status indicators on a webpage. Prioritise accessibility and manual control.",
            components: ["ESP32 or Arduino", "Temperature or light sensor", "LEDs", "Optional dashboard"],
            steps: ["Choose one or two measurable conditions.", "Read and validate the sensor values.", "Create understandable status labels.", "Test keyboard access and mobile layout for the dashboard."],
            outcomes: "Embedded systems, sensor integration, accessible UI and practical automation.",
            cost: "₹500–₹2,000",
            links: [{ label: "ESP32 documentation", url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/" }, { label: "MDN Web Docs", url: "https://developer.mozilla.org/" }]
        },
        {
            title: "Sensor Calibration and Error Analysis Tool", icon: "🎯", level: "INTERMEDIATE",
            branches: ["eie", "both", "other"], type: "software", budget: "low",
            goals: ["mini", "scholarship", "placement"],
            subjects: ["instrumentation", "sensors", "calibration", "measurement", "accuracy", "precision", "statistics", "website", "javascript"],
            description: "Enter reference and measured values to calculate error, percentage error and simple calibration plots.",
            components: ["HTML/CSS/JavaScript", "Reference and measured readings"],
            steps: ["Define input units and accepted ranges.", "Calculate absolute and percentage error.", "Plot reference versus measured values.", "Test with hand-calculated examples."],
            outcomes: "Metrology, uncertainty awareness, validation and useful technical web development.",
            cost: "Free with basic web tools",
            links: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }]
        },
        {
            title: "Motor Speed Measurement and Control", icon: "⚙️", level: "INTERMEDIATE",
            branches: ["eie", "other"], type: "hardware", budget: "medium",
            goals: ["mini", "scholarship", "placement"],
            subjects: ["control systems", "motor", "automation", "embedded", "microcontroller", "sensors", "pwm", "instrumentation"],
            description: "Measure the speed of a small low-voltage motor with an appropriate sensor and vary speed using PWM and a suitable driver.",
            components: ["Arduino", "Small low-voltage motor", "Speed sensor/encoder", "Rated motor driver"],
            steps: ["Read motor and driver ratings.", "Measure speed at a safe low voltage.", "Change PWM duty cycle.", "Plot commanded versus measured speed."],
            outcomes: "Actuators, feedback, PWM, measurement and safe hardware integration.",
            cost: "₹500–₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Digital Logic Learning Website", icon: "💻", level: "BEGINNER",
            branches: ["eie", "other"], type: "software", budget: "low",
            goals: ["mini", "scholarship", "placement"],
            subjects: ["digital electronics", "logic gates", "boolean algebra", "website", "web development", "javascript", "education"],
            description: "Create an interactive learning page for logic gates, truth tables and Boolean simplification practice.",
            components: ["HTML", "CSS", "JavaScript"],
            steps: ["Create gate truth tables.", "Add input switches and live output.", "Add practice questions and feedback.", "Publish the source code and usage notes."],
            outcomes: "Digital logic, frontend development, testing and technical communication.",
            cost: "Free with basic web tools",
            links: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }, { label: "GitHub Pages", url: "https://pages.github.com/" }]
        },
        {
            title: "Water Quality Observation Logger", icon: "🧪", level: "INTERMEDIATE",
            branches: ["civil", "eie", "both"], type: "hybrid", budget: "medium",
            goals: ["mini", "hackathon", "scholarship"],
            subjects: ["civil", "environment", "water quality", "ph", "sensors", "instrumentation", "iot", "website", "data"],
            description: "Record pH or other suitable water-quality sensor readings and display a trend dashboard. Treat readings as educational observations, not a certified potability decision.",
            components: ["Suitable water-quality sensor", "Microcontroller (optional)", "Calibration solutions as specified by sensor maker", "Dashboard or spreadsheet"],
            steps: ["Read sensor safety and calibration instructions.", "Calibrate using appropriate standards.", "Log sample readings and conditions.", "Explain why professional testing is needed for drinking-water decisions."],
            outcomes: "Environmental monitoring, calibration, data visualisation and responsible interpretation.",
            cost: "₹500–₹2,000 or more depending on sensor",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Energy-Use Monitoring Dashboard", icon: "🔌", level: "INTERMEDIATE",
            branches: ["eie", "civil", "both"], type: "hybrid", budget: "medium",
            goals: ["hackathon", "scholarship", "placement"],
            subjects: ["electrical", "energy", "sensors", "instrumentation", "iot", "website", "data", "sustainability"],
            description: "Build a dashboard using sample data or a properly isolated, rated measurement module to visualise energy-use trends. Do not connect exposed DIY circuits directly to mains power.",
            components: ["Sample dataset or certified isolated meter module", "ESP32 (optional)", "Web dashboard"],
            steps: ["Start with a sample dataset.", "Calculate energy totals and trends.", "Build a chart and usage summary.", "If adding real measurements, use certified isolated equipment and qualified supervision."],
            outcomes: "Energy monitoring, data visualisation, instrumentation and safety-aware design.",
            cost: "Free for simulated data; higher for measurement hardware",
            links: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }, { label: "GitHub", url: "https://github.com/" }]
        },
        {
            title: "Mini Weather Station", icon: "⛅", level: "INTERMEDIATE",
            branches: ["eie", "civil", "both"], type: "hybrid", budget: "medium",
            goals: ["mini", "hackathon", "scholarship"],
            subjects: ["sensors", "temperature", "humidity", "pressure", "weather", "civil", "environment", "iot", "website"],
            description: "Measure local temperature and humidity, optionally pressure, and display timestamped readings and trends.",
            components: ["ESP32 or Arduino", "Temperature/humidity sensor", "Optional pressure sensor", "Dashboard"],
            steps: ["Check sensor ranges and placement.", "Collect readings at regular intervals.", "Show current values and historical plots.", "Compare with a nearby weather source and note differences."],
            outcomes: "Instrumentation, environmental data, IoT and visualisation.",
            cost: "₹500–₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }, { label: "ESP32 documentation", url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/" }]
        },
        {
            title: "PLC / Industrial Process Simulation", icon: "🏭", level: "ADVANCED",
            branches: ["eie", "other"], type: "software", budget: "low",
            goals: ["scholarship", "placement", "hackathon"],
            subjects: ["plc", "scada", "automation", "industrial", "control systems", "process control", "sensors"],
            description: "Model a tank-filling or conveyor sequence in a simulator and document interlocks, alarms and fault cases before attempting real hardware.",
            components: ["PLC simulator or logic simulator", "Process flow diagram", "Test cases"],
            steps: ["Define the sequence and states.", "Implement control logic in a simulator.", "Add high/low limits and fault states.", "Test normal operation and sensor failure scenarios."],
            outcomes: "Industrial automation, sequence logic, safety interlocks and testing.",
            cost: "Free with suitable simulation tools",
            links: [{ label: "CODESYS", url: "https://www.codesys.com/" }]
        },
        {
            title: "Smart Waste-Segregation Bin Prototype", icon: "♻️", level: "INTERMEDIATE",
            branches: ["civil", "eie", "both"], type: "hardware", budget: "medium",
            goals: ["mini", "hackathon", "scholarship"],
            subjects: ["civil", "environment", "waste management", "sensors", "embedded", "automation", "microcontroller"],
            description: "Build a tabletop prototype that detects a simple property such as bin fill level and indicates when collection is needed. Avoid claiming reliable material identification unless validated.",
            components: ["Microcontroller", "Distance sensor", "LED/buzzer", "Small mock bin"],
            steps: ["Measure fill level in a mock bin.", "Set a configurable full threshold.", "Add a clear alert.", "Test with different fill arrangements and record errors."],
            outcomes: "Waste-management context, sensing, automation and prototype evaluation.",
            cost: "₹500–₹2,000",
            links: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
        },
        {
            title: "Engineering Project Portfolio Website", icon: "🗂️", level: "BEGINNER",
            branches: ["eie", "civil", "both", "other"], type: "software", budget: "low",
            goals: ["scholarship", "placement", "mini"],
            subjects: ["website", "web development", "html", "css", "javascript", "github", "portfolio", "documentation"],
            description: "Create a personal engineering portfolio with project summaries, diagrams, test results, source-code links and a learning log.",
            components: ["HTML, CSS and JavaScript", "Git and GitHub", "Project photos and documentation"],
            steps: ["Write a concise problem statement for each project.", "Add architecture, components and test results.", "Link source code and a report.", "Publish the site and keep claims evidence-based."],
            outcomes: "Technical communication, version control, documentation and scholarship/internship presentation.",
            cost: "Free with basic web tools",
            links: [{ label: "GitHub Pages", url: "https://pages.github.com/" }, { label: "GitHub Skills", url: "https://skills.github.com/" }]
        }
    ];

    const form = document.getElementById("projectGeneratorForm");
    const promptInput = document.getElementById("projectPrompt");
    const results = document.getElementById("projectResults");
    const title = document.getElementById("projectResultsTitle");
    const count = document.getElementById("projectResultCount");
    const noResults = document.getElementById("projectNoResults");
    const researchResults = document.getElementById("projectResearchResults");
    const researchLinks = document.getElementById("projectResearchLinks");
    if (!form || !results || !promptInput || !title || !count || !noResults || !researchResults || !researchLinks) return;

    const normalise = value => String(value || "").toLowerCase()
        .replace(/&/g, " and ")
        .replace(/[^a-z0-9₹]+/g, " ")
        .trim();
    const queryStopWords = new Set([
        "project", "projects", "idea", "ideas", "build", "make", "create",
        "learn", "learning", "engineering", "engineer", "with", "from",
        "that", "this", "and", "for", "the", "use", "using"
    ]);

    const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);

    function makeProjectCard(project) {
        const tags = [...new Set([...project.subjects.slice(0, 4), project.type])];
        const steps = project.steps.map(step => `<li>${escapeHTML(step)}</li>`).join("");
        const components = project.components.map(item => `<li>${escapeHTML(item)}</li>`).join("");
        const links = project.links.map(link =>
            `<a href="${escapeHTML(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(link.label)} ↗</a>`
        ).join("");

        return `
            <article class="project-card project-result-card">
                <span class="project-icon" aria-hidden="true">${escapeHTML(project.icon)}</span>
                <p class="level">${escapeHTML(project.level)} · ESTIMATED COST: ${escapeHTML(project.cost)}</p>
                <h3>${escapeHTML(project.title)}</h3>
                <p>${escapeHTML(project.description)}</p>
                <div class="tags">${tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
                <details class="project-details">
                    <summary>Problem, build plan, applications &amp; skills</summary>
                    <div class="project-detail-body">
                        <h4>Problem statement</h4><p>${escapeHTML(project.problemStatement || project.description)}</p>
                        <h4>Suggested components / tools</h4><ul>${components}</ul>
                        <h4>Implementation steps</h4><ol>${steps}</ol>
                        <h4>Circuit / block diagram guidance</h4><p>${escapeHTML(project.diagramGuidance || "Draw a labelled input → processing → output block diagram. Show signal direction, power requirements, units and assumptions.")}</p>
                        <h4>Applications</h4><p>${escapeHTML(project.applications || "Use as an educational demonstration; validate results before applying them to a real system.")}</p>
                        <h4>Skills learned</h4><p>${escapeHTML(project.outcomes)}</p>
                        <h4>Useful links</h4><div class="project-card-links">${links}</div>
                    </div>
                </details>
            </article>`;
    }

    function renderResearchLinks(query) {
        const topic = query.trim();
        if (!topic) {
            researchResults.hidden = true;
            researchLinks.replaceChildren();
            return;
        }

        const subjectSelect = document.getElementById("projectSubject");
        const subject = subjectSelect.value === "auto"
            ? ""
            : subjectSelect.options[subjectSelect.selectedIndex].text;
        const searchTopic = [topic, subject].filter(Boolean).join(" ");
        const searches = [
            {
                label: "Find video tutorials",
                site: "YouTube",
                query: `${searchTopic} engineering project tutorial`
            },
            {
                label: "Search project guides",
                site: "Web search",
                query: `${searchTopic} engineering project tutorial`
            },
            {
                label: "Browse example projects",
                site: "GitHub",
                query: searchTopic
            }
        ];

        researchLinks.innerHTML = searches.map(search => {
            const baseUrl = search.site === "YouTube"
                ? "https://www.youtube.com/results?search_query="
                : search.site === "GitHub"
                    ? "https://github.com/search?q="
                    : "https://www.google.com/search?q=";
            const url = `${baseUrl}${encodeURIComponent(search.query)}`;
            return `
                <a class="project-research-link" href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">
                    <span>${escapeHTML(search.site)}</span>
                    <strong>${escapeHTML(search.label)} ↗</strong>
                    <small>Search for “${escapeHTML(search.query)}”</small>
                </a>`;
        }).join("");
        researchResults.hidden = false;
    }

    function buildSearchProjects(query, branch, type, budget, goal) {
        const terms = [...new Set(normalise(query).split(" ").filter(word =>
            word.length > 2 && !queryStopWords.has(word)
        ))];
        if (terms.length === 0) return [];

        const topic = terms.slice(0, 6)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        const topicText = terms.join(" ");
        const profile = [
            {
                pattern: /sensor|instrument|calibrat|measure|temperature|thermistor|thermocouple|pressure|humidity|strain|rtd/,
                tags: ["sensors", "measurement", "data analysis"],
                tools: ["HTML, CSS and JavaScript", "Clearly labelled sample or user-collected readings", "Reference values for validation"],
                outcomes: "Measurement planning, calibration concepts, data handling and honest reporting of uncertainty.",
                checks: "Compare calculations against hand-worked examples and explain sensor range, units and limitations."
            },
            {
                pattern: /control|pid|motor|automation|plc|robot|actuator/,
                tags: ["control systems", "simulation", "testing"],
                tools: ["HTML, CSS and JavaScript", "A documented simplified system model", "Step-response test cases"],
                outcomes: "System modelling, feedback concepts, response comparison and verification.",
                checks: "State model assumptions and compare response, overshoot and settling behaviour with independently checked examples."
            },
            {
                pattern: /circuit|analog|op.?amp|transistor|semiconductor|diode|electronics/,
                tags: ["electronics", "circuit analysis", "simulation"],
                tools: ["HTML, CSS and JavaScript", "Documented circuit equations", "Hand-calculated test cases"],
                outcomes: "Circuit analysis, equation implementation, visualisation and engineering verification.",
                checks: "Test limiting cases and compare outputs with hand calculations or a trusted circuit simulator."
            },
            {
                pattern: /digital|logic|verilog|vlsi|fpga|counter|flip.?flop/,
                tags: ["digital design", "logic", "verification"],
                tools: ["HTML, CSS and JavaScript", "Truth tables or a small RTL testbench", "A simulator such as Wokwi or an HDL simulator"],
                outcomes: "Digital logic, testbench design, boundary testing and clear technical communication.",
                checks: "Exercise every input combination for small logic blocks and document reset, timing and expected-state behaviour."
            },
            {
                pattern: /embedded|microcontroller|arduino|esp32|iot|firmware/,
                tags: ["embedded systems", "IoT", "prototyping"],
                tools: ["HTML, CSS and JavaScript or a microcontroller simulator", "Simulated or safely collected telemetry", "Arduino or ESP32 documentation"],
                outcomes: "Device data flow, embedded-system planning, interface design and fault-aware testing.",
                checks: "Label simulated data, validate message fields and describe safe local behaviour when connectivity fails."
            },
            {
                pattern: /network|communication|wireless|radio|antenna|signal|dsp|filter|modulation/,
                tags: ["signals", "communications", "data visualisation"],
                tools: ["HTML, CSS and JavaScript", "Documented equations or labelled sample data", "Small reproducible test cases"],
                outcomes: "Signal or protocol concepts, visual analysis, parameter exploration and verification.",
                checks: "Check units, frequency/sample-rate limits or protocol assumptions, and compare against known examples."
            },
            {
                pattern: /civil|road|bridge|structur|water|rain|drain|concrete|construction|hydrology/,
                tags: ["civil engineering", "data analysis", "visualisation"],
                tools: ["HTML, CSS and JavaScript", "Clearly labelled survey, sample or simulated data", "A map or chart library (optional)"],
                outcomes: "Civil-engineering context, structured observations, visualisation and responsible interpretation.",
                checks: "Separate measured from simulated data, document sampling limits, and do not present an educational model as a certified safety assessment."
            },
            {
                pattern: /power|energy|battery|converter|inverter|electrical|solar/,
                tags: ["power engineering", "energy", "simulation"],
                tools: ["HTML, CSS and JavaScript", "Documented low-voltage equations or sample load data", "Hand-calculated validation cases"],
                outcomes: "Power calculations, efficiency or energy analysis, safety awareness and verification.",
                checks: "State ideal-model assumptions, check units and component limits, and do not connect DIY equipment directly to mains power."
            },
            {
                pattern: /website|web|javascript|database|software|app|portfolio|dashboard|coding/,
                tags: ["software", "web development", "engineering"],
                tools: ["HTML, CSS and JavaScript", "A small sample dataset", "Browser developer tools"],
                outcomes: "Frontend development, data handling, accessibility and technical communication.",
                checks: "Validate inputs, test empty and invalid states, and verify keyboard access and mobile layout."
            },
            {
                pattern: /math|aptitude|statistics|probability|calculus|data|algorithm/,
                tags: ["engineering mathematics", "problem solving", "visualisation"],
                tools: ["HTML, CSS and JavaScript", "Published equations and hand-worked examples", "A chart or step-by-step solution view"],
                outcomes: "Quantitative reasoning, numerical validation, clear explanations and useful engineering tools.",
                checks: "Test boundary cases and compare results with independently solved examples; show units and assumptions."
            }
        ];
        const selectedSubject = document.getElementById("projectSubject").value;
        const subjectNames = {
            basic: "Basic Electronics",
            analog: "Analog Electronic Circuits",
            digital: "Digital Design (DD)",
            verilog: "Verilog HDL",
            dsp: "Digital Signal Processing",
            control: "Control Systems",
            embedded: "Embedded Controllers",
            networks: "Computer Communication Networks",
            iot: "Internet of Things (IoT)",
            sensors: "Sensors & Instrumentation",
            semiconductor: "Semiconductor Devices",
            math: "Engineering Mathematics & Aptitude",
            automotive: "Automotive & Industrial Electronics",
            communications: "Communication Systems",
            emf: "Electromagnetic Fields",
            power: "Power Electronics",
            vlsi: "VLSI Design"
        };
        const subjectProfileKeys = {
            basic: "electronics",
            analog: "electronics",
            digital: "digital design",
            verilog: "digital design",
            dsp: "signals",
            control: "control systems",
            embedded: "embedded systems",
            networks: "signals",
            iot: "embedded systems",
            sensors: "sensors",
            semiconductor: "electronics",
            math: "engineering mathematics",
            automotive: "control systems",
            communications: "signals",
            emf: "signals",
            power: "power engineering",
            vlsi: "digital design"
        };
        const guidanceByProfile = {
            sensors: {
                components: ["Arduino Uno or ESP32 board", "Sensor selected for the requested measurement", "Breadboard, jumper wires and suitable pull-up/conditioning parts", "USB cable; optional display or buzzer"],
                diagram: "Sensor → signal conditioning / protection → microcontroller ADC or digital input → display / alert. Label sensor supply, ground, signal pin, units and calibration point.",
                applications: "Use for a classroom measurement demonstrator, environmental observation or a small lab data-logging exercise. Do not treat an uncalibrated prototype as a certified instrument.",
                references: [{ label: "Arduino documentation", url: "https://docs.arduino.cc/" }, { label: "Adafruit Learning System", url: "https://learn.adafruit.com/" }]
            },
            "control systems": {
                components: ["Laptop with a control-system simulator or spreadsheet", "Documented plant model and parameter values", "Optional low-voltage motor / temperature demonstrator with a rated driver and sensor"],
                diagram: "Setpoint → controller → actuator / plant → sensor → feedback to controller. Mark reference, error, output, feedback path and any safety limit.",
                applications: "Use to compare open-loop and closed-loop behaviour in robotics, motor-speed control, process control or a simulated temperature system.",
                references: [{ label: "MathWorks Control System Design", url: "https://www.mathworks.com/help/control/" }, { label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
            },
            electronics: {
                components: ["Circuit simulator or breadboard", "Suitable low-voltage supply with current limit", "Components selected from the chosen circuit and their datasheets", "Multimeter; oscilloscope if available"],
                diagram: "Source / input → protection or bias network → circuit stages → load / output. Show supply rails, common ground, component values and measurement nodes; keep the prototype low-voltage.",
                applications: "Use as an analog-circuit lab exercise, sensor interface, signal-conditioning stage or component-characterisation demonstration.",
                references: [{ label: "Texas Instruments op-amp resources", url: "https://www.ti.com/amplifier-circuit/op-amps/overview.html" }, { label: "Wokwi simulator", url: "https://wokwi.com/" }]
            },
            "digital design": {
                components: ["HDL simulator or logic simulator", "Verilog/SystemVerilog source and a self-checking testbench", "Optional FPGA development board, used within its datasheet limits"],
                diagram: "Inputs / clock / reset → combinational logic or RTL module → outputs. Draw state registers and feedback separately; annotate clock edge, reset polarity and timing.",
                applications: "Use for logic-design teaching, verification practice, FPGA demonstrations and portfolio examples of tested RTL.",
                references: [{ label: "EDA Playground", url: "https://www.edaplayground.com/" }, { label: "Wokwi simulator", url: "https://wokwi.com/" }]
            },
            "embedded systems": {
                components: ["ESP32 or Arduino development board", "Sensor / actuator named in the prompt", "USB cable, jumper wires and appropriate driver", "Optional local dashboard; no cloud service required for a basic demo"],
                diagram: "Sensor → microcontroller → local output / display; optionally show Wi-Fi → local dashboard as a separate data path. Label voltage levels, power source and safe fallback behaviour.",
                applications: "Use for an IoT lab prototype, local monitoring, automation demonstration or embedded-systems portfolio project.",
                references: [{ label: "Espressif ESP-IDF documentation", url: "https://docs.espressif.com/projects/esp-idf/en/stable/esp32/" }, { label: "Arduino documentation", url: "https://docs.arduino.cc/" }]
            },
            signals: {
                components: ["Laptop with Python, GNU Octave or GNU Radio", "Documented sample signal / protocol data", "Small test vectors with expected outputs", "Optional SDR hardware only where legal and safely configured"],
                diagram: "Signal source → sampling / modulation / channel → receiver or digital processing → plot / decoded output. Label sample rate, units and each processing stage.",
                applications: "Use for a communications or DSP lab, signal-visualisation exercise, protocol demonstration or simulation-based portfolio project.",
                references: [{ label: "GNU Radio documentation", url: "https://www.gnuradio.org/documentation/" }, { label: "GNU Octave", url: "https://octave.org/" }]
            },
            "civil engineering": {
                components: ["Laptop and spreadsheet or a small web application", "Clearly labelled survey, sample or simulated data", "Optional sensor module selected for the measured parameter"],
                diagram: "Site / sample → measurement or data source → validation and storage → chart / alert → human review. Distinguish actual measurements from simulated values.",
                applications: "Use for an educational infrastructure-monitoring, water-observation or construction-data prototype; it is not a certified safety assessment.",
                references: [{ label: "USGS Water Data", url: "https://waterdata.usgs.gov/" }, { label: "MDN Web Docs", url: "https://developer.mozilla.org/" }]
            },
            "power engineering": {
                components: ["Laptop with a circuit simulator or spreadsheet", "Documented converter / energy equations", "For hardware only: supervised, current-limited low-voltage source and rated components"],
                diagram: "Source → protection → converter / control stage → load, with sensing and feedback drawn separately. Label voltage/current ratings, isolation boundaries and measurement points.",
                applications: "Use for a power-electronics lab simulation, energy-efficiency study or low-voltage converter demonstrator. Never connect a DIY prototype directly to mains power.",
                references: [{ label: "Texas Instruments power-management resources", url: "https://www.ti.com/power-management/overview.html" }, { label: "Wokwi simulator", url: "https://wokwi.com/" }]
            },
            software: {
                components: ["Laptop and modern web browser", "HTML/CSS/JavaScript or Python", "Small documented sample dataset and browser developer tools"],
                diagram: "User input → validation → processing / data model → results view. Show external data sources only if the project actually uses them.",
                applications: "Use as a browser-based engineering calculator, learning aid, analysis dashboard or project portfolio.",
                references: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }, { label: "GitHub Skills", url: "https://skills.github.com/" }]
            },
            "engineering mathematics": {
                components: ["Laptop and browser or Python / spreadsheet", "Published equations and hand-worked validation examples", "A chart or step-by-step solution view"],
                diagram: "Problem inputs with units → equation / algorithm → intermediate steps → result and validation check. Include assumptions and valid input ranges.",
                applications: "Use as a study tool for engineering calculations, numerical methods, statistics or aptitude practice.",
                references: [{ label: "NumPy documentation", url: "https://numpy.org/doc/" }, { label: "Khan Academy", url: "https://www.khanacademy.org/math" }]
            }
        };
        const selectedSubjectName = subjectNames[selectedSubject] || "";
        const selectedSubjectProfileKey = subjectProfileKeys[selectedSubject];
        const selectedProfile = (selectedSubjectProfileKey
            ? profile.find(item => item.tags[0] === selectedSubjectProfileKey)
            : null) || profile.find(item => item.pattern.test(topicText)) || {
            tags: ["engineering", "design", "validation"],
            tools: ["HTML, CSS and JavaScript", "A clearly labelled sample dataset", "A short requirements and test checklist"],
            outcomes: "Problem definition, engineering analysis, evidence-based testing and technical communication.",
            checks: "Document assumptions, test normal and boundary cases, and distinguish measured results from examples."
        };
        const profileGuidance = guidanceByProfile[selectedProfile.tags[0]] || {
            components: ["Laptop with a browser or suitable simulator", "Documented example inputs and expected outputs", "Tools and components selected after checking the relevant datasheets"],
            diagram: "Draw a labelled input → processing → output block diagram. Show signal direction, power requirements, units and assumptions.",
            applications: "Use as an educational demonstration or portfolio prototype; validate results before applying them to a real system.",
            references: [{ label: "MDN Web Docs", url: "https://developer.mozilla.org/" }]
        };
        const selectedType = type === "any" ? "software" : type;
        const selectedBudget = budget === "any" ? "low" : budget === "flexible" ? "medium" : budget;
        const goalNames = {
            mini: "a manageable mini project",
            hackathon: "a quick, demonstrable hackathon prototype",
            scholarship: "a documented portfolio project",
            placement: "a testable placement-interview project"
        };
        const goalDescription = goalNames[goal] || "a student learning project";
        const implementationStyle = selectedType === "hardware"
            ? "Build a supervised, low-voltage demonstrator using the listed components. Simulate first, follow each datasheet, and never connect DIY equipment directly to mains power."
            : selectedType === "hybrid"
                ? "Start with a software simulation, then connect an optional low-voltage device and dashboard after checking datasheets and safe operating limits."
                : "Build it as a browser or Python project with clearly labelled sample data; no hardware purchase is required.";
        const estimatedCost = selectedType === "software"
            ? "₹0–₹500 (free software; hardware optional)"
            : budget === "low"
                ? "₹0–₹500 (use a simulator or components already available)"
                : budget === "medium"
                    ? "₹500–₹2,000 (approximate; verify local component prices)"
                    : budget === "high"
                        ? "₹2,000+ (depends on component and prototype choices)"
                        : "₹0–₹2,000+ (depends on prototype scope and components)";
        const goalContext = goalDescription.charAt(0).toUpperCase() + goalDescription.slice(1);
        const detailSearch = encodeURIComponent(`${query.trim()} ${selectedSubjectName}`.trim());
        const contextualResources = [
            ...profileGuidance.references,
            { label: "Video tutorials for this topic", url: `https://www.youtube.com/results?search_query=${detailSearch}+project+tutorial` },
            { label: "Open-source project examples", url: `https://github.com/search?q=${detailSearch}&type=repositories` }
        ];
        const hardwareFormats = [
            ["Interactive Demonstrator", `Build a low-voltage ${topicText} demonstrator with physical inputs and visible outputs.`],
            ["Measurement Display", `Measure a ${topicText} signal and show clearly labelled readings on a display or serial monitor.`],
            ["Design Verification Test Bench", `Create a safe test bench for ${topicText} with labelled test points and expected-versus-measured results.`],
            ["Modular Prototype", `Build a modular ${topicText} prototype and document the function of each hardware block.`],
            ["Calibration and Measurement Unit", `Create a ${topicText} measurement unit and validate readings against a suitable reference.`],
            ["Performance Comparison Rig", `Compare two ${topicText} configurations on a current-limited, low-voltage test setup.`],
            ["Fault-Diagnosis Trainer", `Demonstrate selected ${topicText} fault conditions and show safe, understandable fault indications.`],
            ["Switchable Learning Trainer", `Build a hands-on ${topicText} trainer with switches, indicators or a display to demonstrate key states.`],
            ["Configurable Prototype", `Make a configurable ${topicText} prototype with documented inputs, operating limits and test criteria.`],
            ["Experiment Measurement Rig", `Build a repeatable measurement setup for a ${topicText} experiment and record the results.`],
            ["Signal-Flow Demonstrator", `Connect the main ${topicText} stages and add test points to show signal flow through the system.`],
            ["Documented Prototype", `Build and test a small ${topicText} prototype, collecting evidence for a clear engineering report.`]
        ];
        const hybridFormats = [
            "Interactive Device Demonstrator",
            "Connected Results Dashboard",
            "Device Verification Toolkit",
            "Connected Engineering Portfolio",
            "Worked-Example Device Calculator",
            "Design Trade-Off Dashboard",
            "Connected Fault Simulator",
            "Device Learning Trainer",
            "Requirements and Scope Planner",
            "Experiment Data Logger",
            "System Architecture and Data Flow",
            "Prototype Report and Poster Builder"
        ];
        const safeBuildNote = selectedType === "hardware"
            ? "This is a planning concept for a supervised, low-voltage educational demonstrator. Use rated components and do not connect DIY equipment directly to mains power."
            : selectedType === "hybrid"
                ? "Use simulated data first; add a real device only after checking its datasheet, voltage/current ratings and safe operating limits."
                : "The idea can be prototyped in a browser without buying hardware.";
        const formats = [
            {
                suffix: "Interactive Concept Explorer",
                description: `Create an interactive ${topicText} learning tool. Let the user change a few documented inputs and see how the outputs change. ${safeBuildNote}`,
                steps: ["Write a short problem statement and list assumptions.", "Implement one small, documented example.", "Add labelled inputs, outputs and units.", "Check results against independent examples and explain limitations."],
                outcomes: `${selectedProfile.outcomes} This version focuses on an understandable interactive model.`,
                cost: selectedBudget === "low" ? "Free with browser tools" : "Cost depends on optional prototype hardware"
            },
            {
                suffix: "Data and Results Dashboard",
                description: `Build a focused dashboard for ${topicText}. Use clearly labelled sample or simulated data until trustworthy measurements are available. ${safeBuildNote}`,
                steps: ["Define what each value means and its units.", "Create a small labelled sample dataset.", "Display summaries and a chart or table.", "Test missing, unusual and boundary values."],
                outcomes: `${selectedProfile.outcomes} This version focuses on presenting evidence clearly.`,
                cost: selectedBudget === "low" ? "Free with browser tools" : "Cost depends on optional prototype hardware"
            },
            {
                suffix: "Design Verification Toolkit",
                description: `Make a small test and validation toolkit for ${topicText}, with expected results, actual results and notes about assumptions. ${selectedProfile.checks} ${safeBuildNote}`,
                steps: ["Translate the topic into a few testable requirements.", "Write normal, boundary and failure test cases.", "Show expected and observed results separately.", "Summarise failed checks and next steps."],
                outcomes: `${selectedProfile.outcomes} This version focuses on repeatable testing and validation.`,
                cost: selectedBudget === "low" ? "Free with browser tools" : "Cost depends on optional prototype hardware"
            },
            {
                suffix: "Engineering Learning Portfolio",
                description: `Create a compact project page about ${topicText}, showing the question, method, diagrams or data, test evidence and what remains uncertain. ${safeBuildNote}`,
                steps: ["State the user need and project scope.", "Explain the method with a diagram or example.", "Include test evidence and known limitations.", "Add accessible navigation and a concise project summary."],
                outcomes: `${selectedProfile.outcomes} This version focuses on a clear portfolio-ready engineering record.`,
                cost: selectedBudget === "low" ? "Free with browser tools" : "Cost depends on optional prototype hardware"
            },
            {
                suffix: "Worked-Example Calculator",
                description: `Build a step-by-step calculator for common ${topicText} problems. Show the formula, substituted values, units and result rather than returning an unexplained answer. ${safeBuildNote}`,
                steps: ["Choose one calculation that fits the topic.", "Write the equation and define each input.", "Validate with hand-solved examples and boundary values.", "Explain when the simplified calculation should not be used."],
                outcomes: `${selectedProfile.outcomes} This version focuses on transparent calculations and learning-by-doing.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Design Trade-Off Comparator",
                description: `Create a comparison tool for two or more approaches to ${topicText}. Let users compare clearly defined criteria such as cost, accuracy, power, speed or complexity without presenting estimates as measured facts.`,
                steps: ["Select two or three realistic alternatives.", "Define each comparison criterion and its units.", "Label entered values as measured, sourced or estimated.", "Summarise trade-offs and explain which requirements matter most."],
                outcomes: `${selectedProfile.outcomes} This version focuses on engineering decisions and communicating trade-offs.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Fault and Edge-Case Simulator",
                description: `Make a learning simulator that lets users explore how a ${topicText} model behaves with missing inputs, boundary values or a clearly labelled fault. Keep simulated behaviour distinct from real equipment behaviour.`,
                steps: ["Define normal operation and a small set of faults.", "Choose expected safe or error responses.", "Implement the scenarios with visible status messages.", "Test every scenario and document what the model does not represent."],
                outcomes: `${selectedProfile.outcomes} This version focuses on fault handling, resilience and test coverage.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Revision Cards and Quiz",
                description: `Create short revision cards and a practice quiz for ${topicText}, with explanations for right and wrong choices and a link back to the underlying concept.`,
                steps: ["Write a concise definition and one worked example.", "Create original questions with one defensible answer.", "Explain why distractor answers are incorrect.", "Check every answer against a trusted reference."],
                outcomes: `${selectedProfile.outcomes} This version focuses on concept recall and clear explanations.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Requirements and Scope Planner",
                description: `Turn a ${topicText} project idea into a manageable plan. Capture the user need, scope, assumptions, resources, milestones and acceptance checks before building.`,
                steps: ["Describe the problem and intended user.", "Separate essential features from optional extensions.", "List assumptions, dependencies and risks.", "Write measurable acceptance checks for the first milestone."],
                outcomes: `${selectedProfile.outcomes} This version focuses on planning a feasible project with verifiable goals.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Experiment Notebook Builder",
                description: `Create a digital notebook for a ${topicText} study that records the question, method, conditions, results and interpretation. Keep raw observations separate from calculated or simulated values.`,
                steps: ["Create a repeatable experiment or analysis template.", "Record units, conditions and data source.", "Show calculations and charts from the recorded values.", "Add a limitations and reproducibility checklist."],
                outcomes: `${selectedProfile.outcomes} This version focuses on reproducible work and evidence quality.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Architecture and Data-Flow Mapper",
                description: `Build a visual planner for a ${topicText} system. Let the user arrange system blocks, label inputs and outputs, and document the assumptions behind each connection.`,
                steps: ["List the main components or process stages.", "Draw the flow of signals, data or materials.", "Label interfaces, units and dependencies.", "Review the diagram against a written system description."],
                outcomes: `${selectedProfile.outcomes} This version focuses on system thinking, interfaces and technical diagrams.`,
                cost: "Free with browser tools"
            },
            {
                suffix: "Project Report and Poster Builder",
                description: `Create a guided report for a ${topicText} project with sections for the problem, approach, diagram, results, verification and limitations.`,
                steps: ["Enter a concise problem statement and objective.", "Add a method, diagram and evidence summary.", "Include validation results and known limitations.", "Export or print a readable report with sources."],
                outcomes: `${selectedProfile.outcomes} This version focuses on presenting project work clearly for reviews and portfolios.`,
                cost: "Free with browser tools"
            }
        ];

        return formats.map((format, index) => ({
            title: `${topic}: ${selectedType === "hardware"
                ? hardwareFormats[index][0]
                : selectedType === "hybrid" ? hybridFormats[index] : format.suffix}`,
            icon: ["🧭", "📊", "🧪", "🗂️", "🧮", "⚖️", "🛠️", "📝", "📋", "🔬", "🧩", "📑"][index],
            level: index < 4 ? "BEGINNER" : "INTERMEDIATE",
            branches: [branch],
            type: selectedType,
            budget: selectedBudget,
            goals: goal === "any" ? ["mini", "hackathon", "scholarship", "placement"] : [goal],
            subjects: [...selectedProfile.tags, ...(selectedSubjectName ? [selectedSubjectName] : []), topicText],
            description: `${selectedType === "hardware"
                ? hardwareFormats[index][1]
                : format.description.replace(safeBuildNote, "").trim()} ${implementationStyle}`,
            problemStatement: `Students need ${goalDescription} to understand and test ${topicText}${selectedSubjectName ? ` in ${selectedSubjectName}` : ""}. This project addresses that need with a ${selectedType} prototype and measurable checks.`,
            components: selectedType === "hardware"
                ? profileGuidance.components
                : selectedType === "hybrid"
                    ? [...profileGuidance.components, "Laptop with browser-based dashboard or plotting tool", "Clearly labelled sample data for initial tests"]
                    : ["Laptop with a modern browser or Python environment", ...selectedProfile.tools.slice(1)],
            steps: [
                `Define the user, scope and success criteria for ${goalContext.toLowerCase()}.`,
                ...format.steps,
                "Test normal, boundary and failure cases; record expected and actual results."
            ],
            diagramGuidance: profileGuidance.diagram,
            applications: profileGuidance.applications,
            outcomes: format.outcomes,
            cost: estimatedCost,
            links: contextualResources
        }));
    }

    function scoreProject(project, query, branch, type, budget, goal) {
        let score = 0;
        const haystack = normalise([
            project.title, project.description, project.subjects.join(" "),
            project.branches.join(" "), project.type, project.goals.join(" "),
            project.components.join(" "), project.outcomes
        ].join(" "));
        const terms = [...new Set(normalise(query).split(" ").filter(word =>
            word.length > 2 && !queryStopWords.has(word)
        ))];
        let queryMatches = 0;
        const searchableWords = new Set(haystack.split(" "));
        terms.forEach(word => {
            const singular = word.endsWith("s") ? word.slice(0, -1) : word;
            if (searchableWords.has(word) || searchableWords.has(singular)) {
                queryMatches += 1;
                score += 2;
            }
        });

        const branchMatches = project.branches.includes(branch) ||
            (branch === "other" && project.branches.includes("other")) ||
            (branch === "both" && project.branches.includes("both"));
        if (branchMatches) score += 4;
        else if (branch !== "other") score -= 3;

        if (type !== "any") {
            if (project.type === type) score += 4;
            else if (type === "hybrid" && (project.type === "hardware" || project.type === "software")) score += 1;
            else score -= 2;
        }

        if (budget !== "any") {
            const budgetMap = {
                low: ["low"],
                medium: ["low", "medium"],
                high: ["low", "medium", "high"],
                flexible: ["low", "medium", "high"]
            };
            const costText = normalise(project.cost);
            const isLow = project.budget === "low" || costText.includes("free") || costText.includes("under 500");
            const isMedium = project.budget === "medium";
            const isHigh = project.budget === "high";
            const budgetGroup = isLow ? "low" : isMedium ? "medium" : isHigh ? "high" : "medium";
            if ((budgetMap[budget] || []).includes(budgetGroup)) score += 2;
            else score -= 2;
        }
        if (goal !== "any") score += project.goals.includes(goal) ? 2 : -1;
        return { score, queryMatches };
    }

    function generate(query = "", reset = false) {
        const branch = document.getElementById("projectBranch").value;
        const type = document.getElementById("projectType").value;
        const budget = document.getElementById("projectBudget").value;
        const goal = document.getElementById("projectGoal").value;
        const trimmed = query.trim();
        const generatedProjects = buildSearchProjects(trimmed, branch, type, budget, goal);
        const candidateProjects = [...projects, ...generatedProjects];
        const sorted = candidateProjects.map((project, index) => ({
            project,
            index,
            ...scoreProject(project, trimmed, branch, type, budget, goal)
        })).map(item => ({
            ...item,
            score: item.score + (item.index >= projects.length ? 8 : 0)
        })).sort((a, b) => b.score - a.score || a.index - b.index);

        const filtered = trimmed
            ? sorted.filter(item => item.queryMatches > 0).slice(0, 20)
            : sorted.slice(0, 15);
        const chosen = filtered.length ? filtered : sorted.slice(0, 6);
        title.textContent = !trimmed
            ? "Starter project ideas"
            : generatedProjects.length
                ? `Project ideas generated for "${generatedProjects[0].subjects[generatedProjects[0].subjects.length - 1]}"`
                : "Ideas matched to your prompt";
        count.textContent = `${chosen.length} idea${chosen.length === 1 ? "" : "s"} shown`;
        results.innerHTML = chosen.map(item => makeProjectCard(item.project)).join("");
        noResults.hidden = true;
        renderResearchLinks(trimmed);

        if (trimmed && filtered.length === 0) {
            title.textContent = "Closest starter ideas";
            noResults.hidden = false;
        }
    }

    form.addEventListener("submit", event => {
        event.preventDefault();
        generate(promptInput.value);
        results.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    let searchUpdateTimer;
    promptInput.addEventListener("input", () => {
        window.clearTimeout(searchUpdateTimer);
        searchUpdateTimer = window.setTimeout(() => generate(promptInput.value), 220);
    });

    ["projectBranch", "projectSubject", "projectType", "projectBudget", "projectGoal"].forEach(id => {
        document.getElementById(id).addEventListener("change", () => generate(promptInput.value));
    });

    document.getElementById("projectReset").addEventListener("click", () => {
        promptInput.value = "";
        document.getElementById("projectBranch").value = "eie";
        document.getElementById("projectSubject").value = "auto";
        document.getElementById("projectType").value = "any";
        document.getElementById("projectBudget").value = "any";
        document.getElementById("projectGoal").value = "any";
        generate("", true);
    });

    generate("", true);
})();
