
const subjects = [
    {
        id: "basic",
        name: "Basic Electronics",
        category: "Core",
        icon: "⌁",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        desc: "Voltage, current, resistance, circuit laws and components.",
        topics: [
            "Voltage, current, resistance and power",
            "Ohm's law and Kirchhoff's laws",
            "Series and parallel circuits",
            "Resistors, capacitors and inductors",
            "AC and DC fundamentals",
            "Diodes, LEDs and rectifiers",
            "Transistor fundamentals",
            "Multimeter and electrical measurements"
        ],
        basics: "Electronics studies how electrical signals and components are used to control and process energy and information. Start with voltage, current, resistance and power. Then study circuit laws and common components.",
        questions: [
            ["State Ohm's law.", "Ohm's law states V = IR, where V is voltage, I is current and R is resistance."],
            ["What is the difference between AC and DC?", "DC maintains one polarity. AC periodically changes its magnitude and direction."],
            ["What is a capacitor?", "A capacitor stores energy in an electric field and opposes sudden changes in voltage."],
            ["What is Kirchhoff's current law?", "The algebraic sum of currents at a node is zero. Total current entering equals total current leaving."]
        ]
    },
    {
        id: "analog",
        name: "Analog Electronic Circuits",
        category: "Core",
        icon: "∿",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
        desc: "Diodes, transistor amplifiers, op-amps and filters.",
        topics: [
            "Diode circuits and rectifiers",
            "BJT and FET biasing",
            "Common-emitter amplifiers",
            "Operational amplifiers",
            "Inverting and non-inverting amplifiers",
            "Positive and negative feedback",
            "Oscillators",
            "Active and passive filters"
        ],
        basics: "Analog circuits process continuously varying signals. Study how components behave, how amplifiers increase signal strength, and how feedback and filters affect circuit performance.",
        questions: [
            ["What is an operational amplifier?", "An op-amp is a high-gain differential amplifier commonly used for amplification, filtering and mathematical operations."],
            ["What is transistor biasing?", "Biasing establishes a suitable DC operating point so a transistor can operate as intended."],
            ["What is negative feedback?", "It feeds part of the output back in opposition to the input, helping control gain and improve circuit performance."],
            ["What is the gain of an inverting op-amp?", "For an ideal circuit, voltage gain is -Rf/Rin."]
        ]
    },
    {
        id: "digital",
        name: "Digital Design (DD)",
        category: "Digital",
        icon: "▦",
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
        desc: "Logic gates, Boolean algebra, K-maps and sequential circuits.",
        topics: [
            "Binary, decimal, octal and hexadecimal",
            "Logic gates and truth tables",
            "Boolean algebra",
            "De Morgan's theorems",
            "Karnaugh maps",
            "Adders, multiplexers and decoders",
            "Flip-flops, counters and registers",
            "Finite-state machines",
            "Timing diagrams"
        ],
        basics: "Digital design uses logic levels to represent information. Learn number systems and logic gates first, then Boolean simplification, combinational circuits and sequential circuits.",
        questions: [
            ["What is the difference between combinational and sequential logic?", "Combinational output depends on current inputs. Sequential output also depends on stored state."],
            ["What is a flip-flop?", "A flip-flop is a bistable circuit that stores one bit of information."],
            ["What is a multiplexer?", "A multiplexer selects one of several input signals and routes it to one output."],
            ["What is a K-map?", "A Karnaugh map is a graphical method for simplifying Boolean expressions."]
        ]
    },
    {
        id: "verilog",
        name: "Verilog HDL",
        category: "Digital",
        icon: "{ }",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        desc: "Hardware description, simulation and digital system verification.",
        topics: [
            "Verilog modules and ports",
            "wire and reg data types",
            "Continuous assignments",
            "always blocks",
            "Blocking and non-blocking assignments",
            "Combinational circuit coding",
            "Sequential circuit coding",
            "Testbenches and simulation",
            "Synthesis and waveform analysis"
        ],
        basics: "Verilog is a hardware description language used to describe and verify digital circuits. Learn modules, signals, procedural blocks and testbenches, then simulate designs and inspect waveforms.",
        questions: [
            ["What is Verilog?", "Verilog is a hardware description language used to model and verify digital electronic circuits."],
            ["What is a testbench?", "A testbench applies inputs to a design during simulation and checks the resulting outputs."],
            ["What is the difference between = and <= in Verilog?", "Blocking assignment (=) executes in procedural order. Non-blocking assignment (<=) schedules updates and is commonly used for clocked logic."],
            ["What is synthesis?", "Synthesis converts a supported hardware description into a hardware implementation representation."]
        ]
    },
    {
        id: "dsp",
        name: "Digital Signal Processing",
        category: "Systems",
        icon: "〰",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        desc: "Sampling, transforms, convolution and digital filters.",
        topics: [
            "Continuous and discrete signals",
            "Sampling theorem",
            "Aliasing and quantisation",
            "Linear time-invariant systems",
            "Convolution and correlation",
            "Z-transform",
            "DFT and FFT",
            "FIR and IIR filters",
            "Frequency response"
        ],
        basics: "DSP processes signals represented as numerical samples. Learn sampling, discrete-time sequences, convolution and frequency-domain analysis before moving to digital filters.",
        questions: [
            ["What is sampling?", "Sampling converts a continuous-time signal into a sequence of values measured at discrete times."],
            ["What is aliasing?", "Aliasing occurs when undersampling causes different frequency components to become indistinguishable."],
            ["What is the FFT?", "The Fast Fourier Transform is an efficient algorithm for computing the Discrete Fourier Transform."],
            ["What is the difference between FIR and IIR filters?", "FIR filters have finite impulse response; IIR filters use feedback and can have an infinite impulse response."]
        ]
    },
    {
        id: "control",
        name: "Control Systems",
        category: "Systems",
        icon: "⟳",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
        desc: "Feedback, transfer functions, stability and PID control.",
        topics: [
            "Open-loop and closed-loop systems",
            "Transfer functions",
            "Block diagram reduction",
            "Time response",
            "Steady-state error",
            "Routh-Hurwitz stability criterion",
            "Root locus",
            "Bode and Nyquist plots",
            "PID controllers"
        ],
        basics: "Control systems regulate how a system behaves. Learn mathematical models, feedback, transient response, stability and controller design.",
        questions: [
            ["What is a closed-loop system?", "A closed-loop system uses feedback to compare the output with a reference and adjust its input."],
            ["What is a transfer function?", "For an LTI system, it is the ratio of the output Laplace transform to the input Laplace transform under zero initial conditions."],
            ["What is system stability?", "Stability describes whether a system's response remains well-behaved under specified conditions."],
            ["What does PID stand for?", "Proportional, Integral and Derivative control."]
        ]
    },
    {
        id: "embedded",
        name: "Embedded Controllers",
        category: "Embedded",
        icon: "▣",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        desc: "Microcontrollers, embedded C, timers and interrupts.",
        topics: [
            "Microprocessor vs microcontroller",
            "CPU, memory and GPIO",
            "Embedded C programming",
            "Bitwise operators",
            "Timers, counters and PWM",
            "Interrupts and polling",
            "UART, SPI and I2C",
            "ADC and DAC",
            "Debugging and datasheets",
            "Real-time operating systems"
        ],
        basics: "Embedded systems are computers designed for specific tasks within larger products. Learn C, microcontroller architecture, GPIO, interrupts, timers and communication protocols.",
        questions: [
            ["Microprocessor vs microcontroller?", "A microcontroller integrates a CPU, memory and peripherals on one chip. A microprocessor typically relies more on external components."],
            ["What is an interrupt?", "An interrupt signals the processor that an event needs attention."],
            ["What is PWM?", "Pulse-width modulation varies the duty cycle of a digital signal to control average power or represent a signal."],
            ["What is volatile in embedded C?", "It tells the compiler that a value may change unexpectedly outside ordinary program flow, such as a hardware register."]
        ]
    },
    {
        id: "ccn",
        name: "Computer Communication Networks",
        category: "Digital",
        icon: "⌘",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        desc: "Networking, OSI model, IP addresses and communication protocols.",
        topics: [
            "OSI reference model",
            "TCP/IP model",
            "Ethernet and MAC addresses",
            "IPv4 and subnetting",
            "TCP vs UDP",
            "DNS, DHCP and ARP",
            "Routers and switches",
            "HTTP and HTTPS",
            "Network troubleshooting"
        ],
        basics: "Computer networks allow devices to exchange information. Learn networking layers, addressing, routing and the roles of common communication protocols.",
        questions: [
            ["What is the OSI model?", "It is a seven-layer conceptual model used to understand network communication."],
            ["TCP vs UDP?", "TCP provides reliable, ordered delivery. UDP has lower overhead but does not guarantee delivery or order."],
            ["What is DNS?", "DNS translates domain names into records such as IP addresses."],
            ["What is the difference between a router and a switch?", "A router forwards traffic between networks; a switch typically forwards frames within a local network."]
        ]
    },
    {
        id: "iot",
        name: "Internet of Things (IoT)",
        category: "Embedded",
        icon: "◌",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        desc: "Connected devices, sensors, cloud services and dashboards.",
        topics: [
            "IoT architecture",
            "Sensors and actuators",
            "Arduino and ESP32",
            "Wi-Fi and Bluetooth",
            "MQTT and HTTP",
            "Cloud dashboards",
            "Edge and cloud computing",
            "IoT security",
            "Low-power devices",
            "IoT project development"
        ],
        basics: "IoT connects physical devices to networks so they can collect, exchange and use data. A typical system combines sensors, a controller, connectivity and a user interface.",
        questions: [
            ["What is IoT?", "The Internet of Things is a network of connected physical devices that collect, exchange or act on data."],
            ["What is MQTT?", "MQTT is a lightweight publish/subscribe messaging protocol often used in IoT."],
            ["What is edge computing?", "Edge computing processes data near the device rather than relying entirely on a remote cloud."],
            ["Why is security important in IoT?", "Connected devices can expose data or allow unauthorised access if credentials, communication and updates are not protected."]
        ]
    },
    {
        id: "sensors",
        name: "Sensors & Instrumentation",
        category: "Embedded",
        icon: "⌖",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        desc: "Measurement, transducers, calibration and signal conditioning.",
        topics: [
            "Sensors and transducers",
            "Accuracy and precision",
            "Sensitivity and resolution",
            "Range, linearity and hysteresis",
            "RTD and thermocouples",
            "Thermistors",
            "Pressure and flow sensors",
            "LVDT and strain gauges",
            "Signal conditioning",
            "Calibration and measurement errors"
        ],
        basics: "Instrumentation measures physical quantities and converts them into useful signals. Understand how each sensor works, its output, limitations, calibration and signal-conditioning requirements.",
        questions: [
            ["Sensor vs transducer?", "A sensor responds to a physical quantity. A transducer converts energy or a physical quantity from one form to another; the terms can overlap in practice."],
            ["Accuracy vs precision?", "Accuracy is closeness to a reference value; precision is the closeness of repeated measurements to each other."],
            ["RTD vs thermocouple?", "An RTD measures temperature through resistance change. A thermocouple generates a voltage related to a temperature difference."],
            ["Why is calibration necessary?", "Calibration compares an instrument with a reference to determine its measurement error."]
        ]
    },
    {
        id: "semi",
        name: "Semiconductor Devices",
        category: "Core",
        icon: "◒",
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
        desc: "Semiconductor physics, PN junctions, diodes and transistors.",
        topics: [
            "Conductors, insulators and semiconductors",
            "Energy bands",
            "Intrinsic and extrinsic semiconductors",
            "Electrons, holes and doping",
            "PN junction",
            "Forward and reverse bias",
            "Zener and photodiodes",
            "BJT operation",
            "MOSFET operation",
            "Breakdown mechanisms"
        ],
        basics: "Semiconductor devices rely on charge carriers, doping and electric fields. Understand the physics behind a PN junction before studying practical diodes and transistors.",
        questions: [
            ["What is doping?", "Doping adds controlled impurities to a semiconductor to change its carrier concentration."],
            ["What is a depletion region?", "It is the region around a PN junction depleted of mobile charge carriers."],
            ["What is a Zener diode?", "A diode designed to operate in reverse breakdown within its specified operating conditions."],
            ["BJT vs MOSFET?", "A BJT is a bipolar transistor; a MOSFET is a field-effect transistor controlled by its gate voltage."]
        ]
    },
    {
        id: "aptitude",
        name: "Engineering Mathematics & Aptitude",
        category: "Systems",
        icon: "√",
        image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
        desc: "Quantitative aptitude, numerical problems and logical reasoning.",
        topics: [
            "Percentages and ratios",
            "Averages",
            "Profit and loss",
            "Time, speed and distance",
            "Time and work",
            "Probability",
            "Number series",
            "Logical reasoning",
            "Basic algebra",
            "Engineering unit conversions"
        ],
        basics: "Practise one aptitude topic at a time. Learn the formula, solve problems without looking at the answer and review your mistakes.",
        questions: [
            ["How do you calculate percentage change?", "Percentage change = (new value - original value) / original value × 100%."],
            ["A 10-ohm resistor carries 2 A. Find the voltage.", "Using V = IR, voltage = 10 × 2 = 20 V."],
            ["Find the average of 4, 8 and 12.", "Average = (4 + 8 + 12) / 3 = 8."],
            ["How do you approach a number series?", "Check differences, ratios, alternating patterns, squares, cubes and repeated operations."]
        ]
    },
    {
        id: "automotive",
        name: "Automotive & Industrial Electronics",
        category: "Embedded",
        icon: "⚙",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80",
        desc: "Automotive ECUs, CAN bus, PLCs and industrial control.",
        topics: [
            "Electronic control units",
            "Automotive sensors and actuators",
            "CAN and LIN buses",
            "Engine control concepts",
            "Battery management systems",
            "PLC fundamentals",
            "SCADA systems",
            "Motor drives",
            "Power electronics",
            "EMI and EMC basics"
        ],
        basics: "Automotive and industrial systems combine embedded controllers, sensors, communication networks and actuators. Learn real-time control and fault-handling concepts.",
        questions: [
            ["What is an ECU?", "An Electronic Control Unit is an embedded controller designed to perform a specific vehicle function."],
            ["What is CAN bus?", "CAN is a robust serial communication bus used by controllers in vehicles and industrial systems."],
            ["What is a PLC?", "A Programmable Logic Controller is an industrial controller used to automate machines and processes."],
            ["Why is a watchdog timer used?", "It can help recover a controller if software stops operating as expected."]
        ]
    },
    {
        id: "communications",
        name: "Communication Systems",
        category: "Systems",
        icon: "📡",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
        desc: "Modulation, digital communication, information theory and wireless links.",
        topics: ["AM and FM", "Sampling and PCM", "Digital modulation", "Detection and noise", "Information theory"],
        basics: "Communication systems transmit information over a physical channel. Begin with signals and noise, then study modulation, detection, coding and wireless systems.",
        questions: [
            ["What is modulation?", "Modulation varies a carrier signal according to an information signal so it can be transmitted through a channel."],
            ["What is bandwidth?", "Bandwidth is the range of frequencies occupied by a signal or passed by a system."],
            ["What is the purpose of a matched filter?", "In additive white Gaussian noise, a matched filter maximises the output signal-to-noise ratio at the sampling instant."],
            ["What is the Nyquist criterion for zero-ISI transmission?", "The overall pulse spectrum must satisfy the Nyquist condition so adjacent symbol pulses contribute zero at the other symbol sampling instants."]
        ]
    },
    {
        id: "electromagnetics",
        name: "Electromagnetic Fields",
        category: "Systems",
        icon: "⌁",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
        desc: "Vector fields, Maxwell equations, waves, transmission lines and antennas.",
        topics: ["Vector calculus", "Electrostatics", "Magnetostatics", "Maxwell equations", "Uniform plane waves"],
        basics: "Electromagnetic theory explains how electric and magnetic fields are generated and propagate. Start with vectors and field laws before solving wave and transmission problems.",
        questions: [
            ["What does Gauss's law relate?", "It relates the net electric flux through a closed surface to the charge enclosed by that surface."],
            ["What is intrinsic impedance?", "It is the ratio of electric-field magnitude to magnetic-field magnitude for a travelling plane wave in a medium."],
            ["What is a transmission-line reflection coefficient?", "It is the ratio of reflected-wave amplitude to incident-wave amplitude at a load discontinuity."],
            ["What is the physical meaning of Poynting vector?", "It gives the electromagnetic power-flow density and direction."]
        ]
    },
    {
        id: "power-electronics",
        name: "Power Electronics",
        category: "Core",
        icon: "ϟ",
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
        desc: "Power semiconductor devices, converters, inverters and motor drives.",
        topics: ["Power diodes and thyristors", "Controlled rectifiers", "DC-DC converters", "Inverters", "Switching losses and thermal design"],
        basics: "Power electronics converts and controls electrical energy using semiconductor switches. Learn device characteristics and switching first, then analyse converter topologies and applications.",
        questions: [
            ["What is the role of a freewheeling diode?", "It provides a path for inductive load current when a controlled switch turns off."],
            ["What does a buck converter do?", "An ideal buck converter steps a DC input voltage down to a lower average DC output."],
            ["What is PWM in an inverter?", "Pulse-width modulation controls the switching pattern to shape the output voltage and its harmonic spectrum."],
            ["Why are snubber circuits used?", "They limit switching voltage/current transients and help protect power semiconductor devices."]
        ]
    },
    {
        id: "vlsi",
        name: "VLSI Design",
        category: "Digital",
        icon: "▦",
        image: "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=800&q=80",
        desc: "CMOS devices, digital IC design, timing, physical design and verification.",
        topics: ["MOSFET fundamentals", "CMOS logic", "Static timing", "RTL synthesis", "Physical design and verification"],
        basics: "VLSI design integrates large numbers of transistors on a chip. Build on semiconductor devices and digital logic, then learn CMOS implementation, timing and the RTL-to-layout flow.",
        questions: [
            ["Why is CMOS widely used in digital logic?", "Complementary MOS logic has low static power consumption in ideal steady-state operation and scales well for dense digital circuits."],
            ["What is setup time?", "It is the minimum time data must be stable before the active clock edge at a sequential element."],
            ["What does logic synthesis do?", "It transforms a hardware description into a gate-level implementation subject to constraints."],
            ["What is clock skew?", "It is the difference in clock arrival time between sequential elements."]
        ]
    }
];

const subjectCurricula = {
    basic: [
        { level: "Foundation", concepts: ["SI units, charge, current, voltage, power and component identification", "Resistors, capacitors, inductors, sources and measurement instruments", "DC series/parallel circuits, Ohm's law and Kirchhoff's laws", "Sinusoids, frequency, phase and RMS values"] },
        { level: "Bachelor's core", concepts: ["Nodal/mesh analysis; source transformation; Thevenin, Norton and superposition", "First-/second-order RC, RL and RLC transient response", "Phasors, impedance, resonance, AC power and three-phase fundamentals", "Coupled circuits, transformers and network theorems"] },
        { level: "Advanced bachelor's", concepts: ["Laplace-domain circuit analysis, poles, zeros and network functions", "Two-port parameters and interconnections", "Frequency response and passive filter design", "Circuit simulation, tolerances and measurement uncertainty"] }
    ],
    analog: [
        { level: "Foundation", concepts: ["Diode I-V curves, rectifiers, clippers and clampers", "BJT/MOSFET terminals, operating regions and biasing", "Small-signal intuition and ideal op-amp rules"] },
        { level: "Bachelor's core", concepts: ["BJT/MOSFET small-signal models and amplifier stages", "Common-emitter/source, followers, cascodes and differential pairs", "Current mirrors, active loads and operational-amplifier feedback", "Frequency response, gain-bandwidth and multistage amplifiers"] },
        { level: "Advanced bachelor's", concepts: ["Stability, compensation, noise, offset and slew rate", "Oscillator conditions, active filters and filter approximation", "Power amplifiers, efficiency, thermal limits and distortion", "Analog IC blocks and SPICE-based design verification"] }
    ],
    digital: [
        { level: "Foundation", concepts: ["Binary/octal/hexadecimal arithmetic, signed numbers and codes", "Boolean algebra, gates, truth tables and Karnaugh maps", "Combinational versus sequential logic; propagation delay"] },
        { level: "Bachelor's core", concepts: ["Adders, comparators, multiplexers, encoders and decoders", "Latches, flip-flops, registers, counters and FSM design", "Setup/hold time, timing diagrams and clocked logic", "Memory basics, datapath and control design"] },
        { level: "Advanced bachelor's", concepts: ["Arithmetic architecture and implementation trade-offs", "Clock-domain crossing, metastability and synchronizers", "Low-power logic, testability and fault coverage", "Timing constraints and implementation"] }
    ],
    verilog: [
        { level: "Foundation", concepts: ["Modules, ports, nets, variables, literals and operators", "Continuous assignments and combinational always blocks", "Sensitivity lists, complete assignments and latch avoidance"] },
        { level: "Bachelor's core", concepts: ["Combinational datapaths and parameterized modules", "Sequential circuits, counters, registers and FSM coding", "Blocking/non-blocking semantics, races and reset strategies", "Self-checking testbenches, simulation and synthesis"] },
        { level: "Advanced bachelor's", concepts: ["RTL timing/area/power constraints and static timing", "Clock/reset-domain crossing and synchronizer verification", "Assertions, formal property checking and design-for-test", "FPGA prototyping, linting and implementation flow"] }
    ],
    dsp: [
        { level: "Foundation", concepts: ["Continuous/discrete signals, systems and sequence operations", "Sampling, reconstruction, aliasing and quantization", "Linearity, time invariance, causality and stability"] },
        { level: "Bachelor's core", concepts: ["Convolution, correlation and LTI response", "Fourier series/transform, spectra and frequency response", "Z-transform, ROC, poles, zeros and difference equations", "DFT/FFT, FIR/IIR structures and filter design"] },
        { level: "Advanced bachelor's", concepts: ["Window/optimum filter design and spectral estimation", "Multirate processing, interpolation and decimation", "Fixed-point effects, quantization noise and adaptive filtering", "DSP processor architectures and real-time implementation"] }
    ],
    control: [
        { level: "Foundation", concepts: ["Differential equations, Laplace transforms and block diagrams", "Open/closed-loop systems and first-/second-order response", "Poles, zeros, damping and time-domain specifications"] },
        { level: "Bachelor's core", concepts: ["Block reduction, signal-flow graphs and steady-state error", "Routh-Hurwitz criterion and root-locus construction", "Bode/Nyquist plots, stability margins and PID control", "Lead, lag and lead-lag compensation"] },
        { level: "Advanced bachelor's", concepts: ["State-space models, controllability and observability", "State-transition matrix and canonical realizations", "Discrete-time models, z-plane stability and digital control", "Robust stability margins and nonlinear-system linearization"] }
    ],
    embedded: [
        { level: "Foundation", concepts: ["Binary/hexadecimal, Boolean logic and C programming basics", "CPU, memory, buses, registers and microcontroller architecture", "GPIO, development boards, datasheets and debugging"] },
        { level: "Bachelor's core", concepts: ["Embedded C, pointers, bit operations and memory-mapped I/O", "Timers, PWM, ADC/DAC, interrupts and real-time constraints", "UART, SPI, I2C, peripheral drivers and watchdogs"] },
        { level: "Advanced bachelor's", concepts: ["RTOS tasks, scheduling, synchronization and deadlocks", "DMA, low-power design, bootloaders and firmware updates", "Reliability, fault handling, testing and hardware/software integration"] }
    ],
    ccn: [
        { level: "Foundation", concepts: ["Bits, bandwidth, latency, throughput, media and topology", "LAN/WAN, Ethernet and physical/link-layer concepts", "IPv4 addresses, subnet masks and gateways"] },
        { level: "Bachelor's core", concepts: ["OSI/TCP-IP layers and encapsulation", "Ethernet frames, switching, VLANs and MAC learning", "IPv4 subnetting, CIDR, ARP, DHCP, ICMP and routing", "TCP/UDP, DNS, HTTP/HTTPS and sockets"] },
        { level: "Advanced bachelor's", concepts: ["IPv6, congestion control, QoS and reliable delivery", "Wireless LAN and mobile networking", "TLS, firewalls, threat models and network security", "SDN, virtualization, cloud networking and diagnosis"] }
    ],
    iot: [
        { level: "Foundation", concepts: ["Sensors, actuators, electrical interfacing and microcontroller basics", "GPIO, ADC/PWM, sampling and C fundamentals", "Wi-Fi/Bluetooth, IP networking and safe prototyping"] },
        { level: "Bachelor's core", concepts: ["Device-edge-cloud architecture and data flow", "MQTT publish/subscribe, QoS, HTTP APIs and gateways", "Device provisioning, dashboards, event-driven control and power budgeting"] },
        { level: "Advanced bachelor's", concepts: ["Device identity, authentication, encryption and key management", "Secure updates, access control and threat modelling", "Edge analytics, scaling, fleet observability and system integration"] }
    ],
    sensors: [
        { level: "Foundation", concepts: ["Measurands, transducers, units, range, sensitivity and resolution", "Accuracy, precision, repeatability and measurement error", "Voltage/current measurement and loading effects"] },
        { level: "Bachelor's core", concepts: ["Dynamic response, hysteresis, linearity and calibration", "RTDs, thermistors, thermocouples, strain gauges and bridges", "LVDT, pressure/flow sensors, signal conditioning and instrumentation amplifiers", "ADC resolution, uncertainty and measurement systems"] },
        { level: "Advanced bachelor's", concepts: ["Noise, shielding, grounding and interference", "Uncertainty propagation, traceability and sensor selection", "Smart sensors, 4–20 mA loops, calibration and fault diagnosis"] }
    ],
    semi: [
        { level: "Foundation", concepts: ["Atomic structure, energy bands and charge carriers", "Intrinsic/extrinsic material, doping, drift and diffusion", "PN junction, depletion region and biasing"] },
        { level: "Bachelor's core", concepts: ["Diode I-V behaviour, breakdown and rectification", "BJT current components, configurations and characteristics", "MOS capacitor, threshold voltage and MOSFET operation", "Small-signal models, bias circuits and optoelectronic devices"] },
        { level: "Advanced bachelor's", concepts: ["Carrier transport, recombination and junction capacitance", "MOSFET scaling, short-channel effects and CMOS basics", "Noise, breakdown, power-device limits and reliability", "Device models, process variation and characterization"] }
    ],
    aptitude: [
        { level: "Foundation", concepts: ["Fractions, decimals, percentages, ratios and proportions", "Units, estimation, averages, integers and basic algebra", "Vocabulary, grammar and sentence structure"] },
        { level: "Bachelor's core", concepts: ["Equations, sequences, logarithms and financial arithmetic", "Time/work, speed/distance, mixtures and probability", "Statistics, data interpretation, charts and estimation", "Verbal reasoning and reading comprehension"] },
        { level: "Advanced bachelor's", concepts: ["Matrices, determinants, eigenvalues and linear systems", "Differential/integral calculus, multivariable calculus and ODEs", "Complex variables, vector calculus, Fourier methods and numerical methods", "GATE-style multi-step quantitative and verbal problem solving"] }
    ],
    automotive: [
        { level: "Foundation", concepts: ["DC circuits, batteries, sensors, actuators and embedded C", "Vehicle electrical architecture, grounding and protection", "Microcontrollers, feedback and measurement safety"] },
        { level: "Bachelor's core", concepts: ["Automotive sensors, ECUs, actuator drivers and diagnostics", "CAN/LIN communication and in-vehicle networks", "Engine control, emissions, battery management and EV fundamentals", "PLC, SCADA, motor drives and industrial instrumentation"] },
        { level: "Advanced bachelor's", concepts: ["Functional safety, fault-tolerant design and cybersecurity", "EV traction inverters, motor control and regenerative braking", "EMC, transient protection, HIL testing and model-based design"] }
    ],
    communications: [
        { level: "Foundation", concepts: ["Signal spectra, decibels, bandwidth, noise and probability", "Communication blocks, carriers and modulation purpose"] },
        { level: "Bachelor's core", concepts: ["AM/DSB-SC/SSB/FM and angle modulation", "Sampling, quantization, PCM, delta modulation and TDM", "ASK/FSK/PSK/QAM, constellations and error probability", "Matched filtering, detection, information theory and capacity"] },
        { level: "Advanced bachelor's", concepts: ["Synchronization, link budgets and carrier recovery", "Error-control coding and block/convolutional codes", "Spread spectrum, OFDM, multiple access, fading and diversity"] }
    ],
    electromagnetics: [
        { level: "Foundation", concepts: ["Vectors, coordinate systems, gradient, divergence and curl", "Coulomb's/Gauss's laws, electric field, potential and capacitance", "Current density, continuity and magnetic-field basics"] },
        { level: "Bachelor's core", concepts: ["Biot-Savart, Ampere, Faraday and Maxwell equations", "Boundary conditions, dielectrics, magnetic materials and displacement current", "Plane waves, polarization, power flow and transmission lines"] },
        { level: "Advanced bachelor's", concepts: ["Lossy media, skin depth, reflection and impedance matching", "Smith chart, waveguides, resonators and cutoff modes", "Radiation, antenna parameters, Friis equation and EMC"] }
    ],
    "power-electronics": [
        { level: "Foundation", concepts: ["DC/AC power, RMS, passive elements and switching", "Diode, BJT, MOSFET, IGBT and thyristor characteristics", "Inductive loads, freewheeling paths and safe measurements"] },
        { level: "Bachelor's core", concepts: ["Single-/three-phase rectifiers and controlled converters", "Buck, boost, buck-boost and DC choppers", "Inverters, PWM, harmonics, filtering and power factor", "Motor drives and semiconductor protection"] },
        { level: "Advanced bachelor's", concepts: ["Converter modes, dynamics and small-signal models", "Switching/thermal loss, snubbers and device protection", "Closed-loop control, resonant conversion, PFC and grid integration"] }
    ],
    vlsi: [
        { level: "Foundation", concepts: ["Boolean logic, MOSFET switching and CMOS inverter", "VTC, noise margins, delay, load capacitance and power", "Combinational/sequential cells and RTL basics"] },
        { level: "Bachelor's core", concepts: ["CMOS gates, sizing and logical effort", "Datapath/register-transfer design and RTL synthesis", "Static timing, setup/hold, clock constraints and standard cells", "Verification, scan and design-for-test"] },
        { level: "Advanced bachelor's", concepts: ["Floorplanning, placement, clock-tree synthesis and routing", "Timing closure, crosstalk, signal integrity and low-power design", "Memory macros, physical-design trade-offs and ASIC/FPGA signoff"] }
    ]
};

const curriculumGuides = {
    basic: [
        "Start by learning what electrical quantities mean and how to safely measure them. You will use these ideas to predict what simple circuits do.",
        "Use reliable circuit-solving methods to work out currents and voltages, then study how circuits behave over time and with AC supplies.",
        "Describe circuits with mathematical models, understand how they respond to different frequencies, and check designs with simulation and real measurements."
    ],
    analog: [
        "Learn how diodes and transistors behave before using them to change or amplify electrical signals.",
        "Build and analyse amplifier stages. Study how feedback and frequency affect the signal that comes out.",
        "Design practical amplifiers, filters and oscillators while accounting for noise, distortion, power and component limits."
    ],
    digital: [
        "Learn how numbers and simple logic gates represent information, then see how a circuit makes decisions.",
        "Combine gates into useful blocks and use clocked memory elements to build circuits that remember their previous state.",
        "Compare design choices for speed, power and reliability, and learn how to handle timing problems between clocked blocks."
    ],
    verilog: [
        "Learn the basic language used to describe hardware and how to write simple combinational circuits.",
        "Describe circuits that store state, simulate them with testbenches, and check that synthesis builds the intended hardware.",
        "Verify timing and clock crossings, then follow the steps used to prepare a design for FPGA or chip implementation."
    ],
    dsp: [
        "Learn how real-world signals become sequences of numbers and what can go wrong when sampling them.",
        "Use convolution and transforms to understand how systems change signals, then design digital filters.",
        "Study more efficient and realistic processing, including multiple sampling rates, numerical precision and real-time hardware."
    ],
    control: [
        "Learn how to describe a system's input and output, and how feedback helps it reach a desired value.",
        "Predict whether a system is stable and how quickly it responds, then design standard feedback controllers.",
        "Model systems with state variables and study computer-based control and how uncertainty affects performance."
    ],
    embedded: [
        "Learn how a microcontroller's processor, memory and pins work, and how to write small C programs for it.",
        "Connect real peripherals and handle timers, measurements and events while meeting timing requirements.",
        "Build reliable larger programs with an RTOS, safe updates, power management and fault handling."
    ],
    ccn: [
        "Learn how computers connect, what addresses identify devices, and how information travels across a local network.",
        "Follow data through network layers and practise addressing, routing and the protocols used by common applications.",
        "Study secure, wireless and large-scale networks, including how congestion and service quality are managed."
    ],
    iot: [
        "Connect a sensor to a small controller and learn how a device can send a measurement over a network.",
        "Build the complete path from device to cloud dashboard using common messaging and web protocols.",
        "Protect connected devices and manage data, software updates and many devices operating together."
    ],
    sensors: [
        "Learn what a sensor measures and how to interpret its range, units and accuracy.",
        "Compare common temperature, force and position sensors, then condition their signals so a computer can read them.",
        "Handle noise and uncertainty, choose suitable sensors and diagnose measurement-system faults."
    ],
    semi: [
        "Learn what charge carriers are and how adding small amounts of other atoms changes a semiconductor.",
        "Use those ideas to explain diodes and transistors, the building blocks of electronic circuits.",
        "Study what happens inside modern devices, why their behaviour changes at small scales, and how engineers model their limits."
    ],
    aptitude: [
        "Build confidence with arithmetic, percentages, ratios and the language used in technical questions.",
        "Practise multi-step mathematics, probability, interpreting data and explaining conclusions clearly.",
        "Extend the maths into calculus, linear algebra and methods commonly used in engineering degrees and entrance exams."
    ],
    automotive: [
        "Learn the electrical and electronic building blocks found in vehicles and industrial machines.",
        "Connect sensors, controllers, communication networks and motors to understand how automated systems work.",
        "Study electric-vehicle power systems, safety and testing methods used for dependable real-world products."
    ],
    communications: [
        "Learn why information is put onto a carrier signal and how bandwidth and noise affect a message.",
        "Compare analogue and digital transmission methods and learn how receivers recover the original information.",
        "Study coding and modern wireless methods that make communication more reliable and use spectrum efficiently."
    ],
    electromagnetics: [
        "Learn to describe electric and magnetic fields and calculate how charges and currents create them.",
        "Use Maxwell's equations to understand travelling waves, transmission lines and how fields meet material boundaries.",
        "Apply wave behaviour to antennas and waveguides, and learn how to reduce reflections and interference."
    ],
    "power-electronics": [
        "Learn how semiconductor switches control electrical power and why inductive loads need special care.",
        "Analyse rectifiers, DC converters and inverters that change electrical power from one form to another.",
        "Design around switching losses, heat, feedback and protection to make efficient, reliable power converters."
    ],
    vlsi: [
        "Learn how transistor switches form logic gates and how those gates represent digital information.",
        "Combine logic into chip designs and check that signals arrive at the correct time.",
        "Follow the route from a verified design to chip layout, while balancing speed, area, power and reliability."
    ]
};

const subjectDiagrams = {
    basic: {
        title: "Series resistor-capacitor circuit",
        description: "A DC source drives a resistor and capacitor in series. Current flows around the loop; the capacitor voltage changes as it charges.",
        labels: ["DC source", "Resistor|limits current", "Capacitor|stores charge", "Measure|voltage"]
    },
    analog: {
        title: "Inverting operational-amplifier circuit",
        description: "The input signal reaches the inverting input through Rin. Rf feeds part of the output back to that input, while the non-inverting input is grounded.",
        labels: ["Small input|signal", "Coupling|capacitor", "Biased transistor|amplifier", "Larger output|signal"]
    },
    digital: {
        title: "Half-adder logic circuit",
        description: "A half-adder adds two one-bit inputs. XOR produces the sum and AND produces the carry.",
        labels: ["Input A", "XOR gate|produces Sum", "Input B", "AND gate|produces Carry"]
    },
    verilog: {
        title: "RTL design and verification flow",
        description: "Write a hardware description, simulate it with a testbench, synthesize it into logic, and verify it on an FPGA or chip.",
        labels: ["Verilog|RTL code", "Testbench|simulation", "Logic|synthesis", "FPGA / chip"]
    },
    dsp: {
        title: "Digital signal-processing chain",
        description: "A signal is sampled into numbers, processed by an algorithm such as a digital filter, then converted back to an analogue signal when needed.",
        labels: ["Analogue input", "Sample +|convert", "Digital filter|or DSP", "Output signal"]
    },
    control: {
        title: "Closed-loop control system",
        description: "The controller compares the desired value with measured output. The difference, called error, guides the next control action.",
        labels: ["Desired|value", "Controller", "System /|plant", "Measured output"]
    },
    embedded: {
        title: "Microcontroller system",
        description: "A CPU runs firmware and communicates with memory and peripherals such as sensors, timers and communication ports.",
        labels: ["Sensor|inputs", "CPU +|firmware", "Memory +|timers", "Outputs /|display"]
    },
    ccn: {
        title: "How network layers carry data",
        description: "Application data is wrapped with transport and network information, sent as link-layer frames, and unpacked in reverse at the destination.",
        labels: ["Application|data", "TCP / UDP", "IP routing", "Ethernet /|Wi-Fi"]
    },
    iot: {
        title: "IoT device-to-cloud path",
        description: "A sensor reading is collected by a device, sent through a network to a cloud service, and shown or used by an application.",
        labels: ["Sensor|reading", "Microcontroller", "Network /|MQTT", "Cloud|dashboard"]
    },
    sensors: {
        title: "Measurement and instrumentation chain",
        description: "A sensor converts a physical quantity into a signal. Signal conditioning prepares it for conversion into digital data.",
        labels: ["Physical|quantity", "Sensor /|transducer", "Signal|conditioning", "ADC → digital|reading"]
    },
    semi: {
        title: "PN junction and depletion region",
        description: "Joining P-type and N-type semiconductor forms a depletion region. Its electric field helps explain diode current and one-way conduction.",
        labels: ["P-type|holes", "Depletion|region", "N-type|electrons", "Apply voltage|→ current"]
    },
    aptitude: {
        title: "A clear problem-solving sequence",
        description: "Translate a question into known values, select a suitable relationship, calculate carefully and check that the result makes sense.",
        labels: ["Read the|question", "List known|values", "Choose a|method", "Calculate|and check"]
    },
    automotive: {
        title: "Vehicle electronic control path",
        description: "Sensors report vehicle conditions to an ECU. The controller calculates an action and drives an actuator such as a motor or valve.",
        labels: ["Vehicle|sensor", "ECU|controller", "CAN / vehicle|network", "Motor or|actuator"]
    },
    communications: {
        title: "Digital communication system",
        description: "A transmitter encodes and modulates information, the channel adds noise, and a receiver detects and decodes the message.",
        labels: ["Message /|bits", "Encode +|modulate", "Noisy|channel", "Detect +|decode"]
    },
    electromagnetics: {
        title: "Electromagnetic wave link",
        description: "A changing current in a transmitting antenna creates a travelling electromagnetic wave that can induce a signal in a receiving antenna.",
        labels: ["Transmitter|current", "Transmit|antenna", "Travelling|wave", "Receive|antenna"]
    },
    "power-electronics": {
        title: "Buck converter (step-down DC supply)",
        description: "A controlled switch and inductor transfer energy from a higher DC input to a lower output. The capacitor smooths the output voltage.",
        labels: ["DC input", "Switch +|inductor", "Capacitor smooths|output", "Lower DC|output"]
    },
    vlsi: {
        title: "CMOS inverter",
        description: "A PMOS transistor pulls the output high when the input is low; an NMOS pulls it low when the input is high.",
        labels: ["VDD supply", "PMOS|pull-up", "Input →|both gates", "NMOS|pull-down"]
    }
};

const subjectStudyNotes = {
    basic: ["Voltage is energy per unit charge; current is the rate of charge flow. In a resistor, Ohm's law gives V = IR.", "Kirchhoff's current law says current entering a junction equals current leaving. Kirchhoff's voltage law says voltage rises and drops around a closed loop sum to zero.", "In a series circuit, current is shared through one path; in a parallel circuit, branches share the same voltage. Capacitors oppose sudden voltage changes; inductors oppose sudden current changes."],
    analog: ["A diode mainly conducts in forward bias. A rectifier uses this behaviour to turn AC into pulsating DC; a filter capacitor smooths the output.", "A transistor must be biased at a suitable operating point before a small signal is applied. In a common-emitter amplifier, the output is amplified and inverted.", "For an ideal inverting op-amp, voltage gain is −Rf/Rin. Negative feedback makes the gain predictable, provided the amplifier does not clip or exceed its bandwidth."],
    digital: ["Digital circuits represent information with logic 0 and 1. Boolean algebra and truth tables describe how gates transform those values.", "A half-adder has Sum = A XOR B and Carry = A AND B. A full-adder also accepts a carry-in, so it can be chained to add multi-bit numbers.", "Combinational outputs depend on current inputs only. Sequential circuits use a clock and storage elements, so their outputs can depend on previous states."],
    verilog: ["Verilog describes hardware structure and behaviour; it is not ordinary software running one instruction at a time. Concurrent assignments model hardware that operates in parallel.", "Use complete assignments in combinational logic to avoid inferring an unintended latch. Use non-blocking assignments (<=) for clocked registers.", "A testbench applies input sequences and checks outputs in simulation. Synthesis converts supported RTL into gates; simulation alone does not prove timing or physical correctness."],
    dsp: ["Sampling records a continuous signal at regular intervals. To avoid aliasing, sample above twice the highest frequency of a band-limited signal and use an anti-alias filter.", "Convolution gives the output of a linear time-invariant system from its input and impulse response. Fourier transforms show the signal's frequency content.", "The DFT analyses a finite sample block; the FFT computes the same DFT efficiently. FIR filters have finite impulse responses; IIR filters use feedback."],
    control: ["A system's transfer function is output divided by input in the Laplace domain, assuming zero initial conditions. Its poles help determine natural response and stability.", "Feedback compares the desired output with the measured output. The error drives the controller; negative feedback can reduce error but poorly chosen gain can cause oscillation.", "A PID controller combines proportional, integral and derivative action. Proportional responds to current error, integral accumulates past error, and derivative responds to its rate of change."],
    embedded: ["A microcontroller combines a processor, memory and peripherals. GPIO pins read digital inputs or drive outputs; always check voltage and current limits in the datasheet.", "A timer can measure intervals or create periodic events. An interrupt asks the processor to handle an event; keep its handler short and protect shared data.", "UART uses transmit and receive lines, SPI uses a clock plus data/select lines, and I2C shares clock/data with addressed devices. These protocols are not interchangeable."],
    ccn: ["A switch forwards local frames using MAC addresses. A router forwards IP packets between networks using routing tables.", "TCP provides a reliable ordered byte stream; UDP sends datagrams without guaranteeing delivery. DNS resolves names, while DHCP can assign network configuration.", "Subnet masks separate network and host bits. A default gateway is where a host sends traffic for destinations outside its local subnet."],
    iot: ["An IoT system commonly contains a sensor, a controller, a network connection, a service that stores or processes data, and a user interface.", "MQTT uses publishers, subscribers and a broker. Topics route messages; QoS levels trade delivery assurance against overhead.", "Use unique device identities, authenticated connections and protected credentials. A device should validate updates and continue safe operation when the network fails."],
    sensors: ["A sensor responds to a physical quantity; a transducer converts energy from one form to another. Accuracy describes closeness to a reference; precision describes repeatability.", "A Wheatstone bridge converts a small resistance change into a measurable voltage. An instrumentation amplifier boosts that small differential voltage while rejecting common-mode signal.", "Calibration compares an instrument with a reference. Resolution, noise, drift, loading and calibration uncertainty all limit the usefulness of a reading."],
    semi: ["Doping creates n-type material with more electrons or p-type material with more holes. When joined, carriers diffuse and form a depletion region at a PN junction.", "A forward-biased diode conducts after its junction barrier is sufficiently reduced. Reverse bias widens the depletion region until leakage or breakdown occurs.", "A MOSFET's gate electric field controls a conducting channel. Threshold voltage, mobility, geometry and temperature affect its behaviour; a real device is not an ideal switch."],
    aptitude: ["Write down what is known before choosing a formula. Keep units consistent, estimate the expected answer and check whether the result is reasonable.", "For percentages, change = (new − original)/original × 100%. For independent work rates, add the workers' rates, not their completion times.", "In verbal questions, find the subject and verb, check agreement and use surrounding sentences to infer meaning. In data questions, read the axes and units first."],
    automotive: ["An ECU reads sensors, runs control logic and drives actuators. Automotive electrical systems need protection against voltage transients, heat, vibration and electrical noise.", "CAN is a shared differential bus where messages are identified by priority-bearing IDs. Nodes arbitrate access and monitor errors; it is not simply a point-to-point serial link.", "A battery-management system monitors cell voltage, current and temperature. Functional safety requires detecting faults and moving to a defined safe response."],
    communications: ["A transmitter maps information onto a carrier; a receiver estimates the transmitted symbols despite noise and distortion. Bandwidth and signal-to-noise ratio limit capacity.", "AM changes carrier amplitude; FM changes carrier frequency. Digital schemes such as PSK and QAM encode bits into phase and/or amplitude states.", "Sampling and quantization create PCM. Matched filtering and correct sampling help detect symbols; coding can add redundancy to detect or correct errors."],
    electromagnetics: ["Electric and magnetic fields are related by Maxwell's equations. A changing magnetic field creates an electric field, and changing electric fields contribute to magnetic fields.", "A travelling plane wave has electric and magnetic fields perpendicular to each other and to the direction of propagation. Their ratio in a medium is its intrinsic impedance.", "A transmission-line load mismatch reflects part of an incident wave. Matching the load to the line reduces reflections; the Smith chart helps visualize impedance transformation."],
    "power-electronics": ["A power semiconductor is operated as a switch to control energy efficiently. Switching devices still have conduction, switching and thermal losses.", "In an ideal continuous-conduction buck converter, Vout ≈ D × Vin, where D is switch duty ratio. An inductor carries energy between switching intervals; the capacitor reduces ripple.", "A freewheeling diode provides a path for inductive current when a switch turns off. Real converter design must consider current ripple, ratings, heat, isolation and protection."],
    vlsi: ["A CMOS inverter pairs a PMOS pull-up with an NMOS pull-down. Ideally one is off in each steady logic state, but switching still consumes dynamic power.", "Setup time is how long data must be stable before a clock edge; hold time is how long it must remain stable after it. Violations can cause incorrect capture.", "The physical design flow places cells, builds a clock network and routes wires. Parasitic resistance/capacitance affect delay, so post-route timing can differ from RTL simulation."]
};

const subjectCircuitNotes = {
    basic: [["Voltage divider", "Two series resistors split an input voltage. For an unloaded divider, Vout = Vin × R2/(R1 + R2). A connected load changes the result."], ["RC charging circuit", "A resistor limits charging current into a capacitor. For a step input, the time constant is τ = RC; after one τ, an ideal capacitor reaches about 63% of its final voltage."], ["Bridge rectifier and smoothing capacitor", "Four diodes steer both AC half-cycles through a load in one direction. A parallel capacitor stores charge between peaks and reduces ripple."], ["Series and parallel resistor networks", "Series resistances add. Parallel conductances add, so 1/Req = Σ(1/R). Always check equivalent resistance against the individual values."]],
    analog: [["Diode bridge rectifier", "Four diodes produce full-wave rectification. The output ripple frequency is twice the AC input frequency; diode drops reduce the output."], ["Common-emitter BJT amplifier", "A biased transistor converts a small base-voltage change into a larger collector-voltage change. It inverts the signal and needs a stable bias point."], ["Inverting op-amp", "The non-inverting input is grounded and feedback resistor Rf connects output to the inverting node. With negative feedback and linear operation, Vout = −(Rf/Rin)Vin."], ["Non-inverting op-amp", "The signal enters the non-inverting input; a resistor divider feeds back to the inverting input. Ideal gain is 1 + Rf/Rg."], ["RC low-pass filter", "A series resistor and shunt capacitor attenuate high frequencies. The ideal cutoff is fc = 1/(2πRC)."]],
    digital: [["Half-adder", "Two inputs A and B produce Sum = A XOR B and Carry = A AND B. It cannot accept a carry from a previous bit."], ["Full-adder", "Three inputs A, B and Carry-in produce Sum = A XOR B XOR Cin and Carry-out = AB + ACin + BCin."], ["Multiplexer", "A select input chooses which data input reaches the output. An n-select-bit mux can select among 2ⁿ inputs."], ["D flip-flop", "On its active clock edge, a D flip-flop stores D and presents it at Q. Setup and hold times must be met."]],
    verilog: [["Combinational adder RTL", "Describe a full-adder with explicit sum and carry logic or the + operator. Test all input combinations and compare output to the truth table."], ["Clocked counter", "A register increments on a clock edge and usually has a reset. Use non-blocking assignments in the sequential always block."], ["Finite-state machine", "Separate state storage from next-state/output logic. Enumerate reset, legal transitions and default behaviour to avoid unintended latches."], ["Testbench stimulus and checking", "Drive inputs, wait for propagation/clock edges, then compare actual and expected outputs. Include boundary and reset cases."]],
    dsp: [["Anti-aliasing input filter", "An analogue low-pass filter removes frequencies above the usable Nyquist band before sampling. Sampling cannot undo aliasing after it has happened."], ["FIR filter", "A tapped-delay line multiplies present and delayed samples by coefficients and adds them. It is inherently stable for finite coefficients and can have linear phase."], ["IIR filter", "Feedback combines input samples and previous output samples. It can achieve sharp responses with fewer coefficients, but stability must be checked."], ["FFT spectrum analyser", "Window a finite sample block, compute its FFT and inspect magnitude versus frequency. Frequency-bin spacing is fs/N for N samples at rate fs."]],
    control: [["Negative-feedback block", "Subtract the measured output from the reference to form error e(t). The controller uses this error to drive the plant toward the target."], ["PID controller", "P, I and D terms are combined to shape response. Integral windup, derivative noise and actuator limits need practical handling."], ["Second-order RLC response", "An RLC network can be modelled with a second-order transfer function. Natural frequency and damping determine overshoot and settling."], ["Lead/lag compensator", "A lead network can improve phase margin and speed; a lag network can improve low-frequency accuracy. Verify the result with a frequency-response plot."]],
    embedded: [["GPIO LED output", "A microcontroller pin drives an LED through a current-limiting resistor. Calculate resistor power and ensure pin current stays within the datasheet rating."], ["ADC sensor input", "A sensor voltage is sampled by an ADC. Check input range, reference voltage, resolution and source impedance; filter noisy signals if needed."], ["UART serial connection", "Connect TX to the other device's RX and share ground; configure matching baud rate, data bits, parity and stop bits."], ["I2C sensor bus", "SDA and SCL are shared open-drain lines with pull-up resistors. Devices use addresses; check bus voltage and pull-up sizing."]],
    ccn: [["Ethernet switch", "Hosts send frames to a switch. The switch learns source MAC addresses and forwards known unicast frames to the matching port."], ["IP router", "A router examines the destination IP address and forwards a packet to the next hop selected by its routing table."], ["TCP client-server exchange", "A connection begins with a handshake, then uses sequence numbers and acknowledgements to provide ordered reliable delivery."], ["Subnet and default gateway", "A host compares destination and local subnet. Local destinations are sent directly; remote destinations go to the configured gateway."]],
    iot: [["Sensor-to-MCU interface", "A sensor connects through an analogue input, GPIO, I2C or SPI. Confirm supply voltage, logic levels, pinout and sample timing before wiring."], ["MQTT publish-subscribe", "A device publishes a measurement to a topic through a broker. A dashboard subscribes to that topic; protect the connection with authentication and TLS."], ["Battery-powered sensor node", "A low-power controller wakes, samples, transmits and sleeps. Sensor warm-up and radio transmission can dominate energy use."], ["Secure update path", "A device verifies an update's authenticity before installing it and supports recovery if power or connectivity fails mid-update."]],
    sensors: [["Wheatstone bridge", "Four resistive arms form a bridge; a small resistance change unbalances it and produces a differential output. Instrumentation amplifiers measure that small voltage."], ["Thermocouple measurement", "Two dissimilar metals create a voltage related to temperature difference. Accurate measurement needs cold-junction compensation."], ["RTD measurement", "An RTD's resistance changes with temperature. A constant-current source and voltage measurement can infer resistance; lead resistance may need compensation."], ["Strain-gauge amplifier", "A bonded gauge changes resistance with strain and is commonly placed in a bridge. Amplification, filtering and careful wiring are needed."]],
    semi: [["PN diode bias circuit", "A series resistor limits forward current through a diode. Choose the resistor from supply voltage, expected diode drop and safe current."], ["Zener shunt regulator", "A reverse-biased Zener clamps a node near its rated voltage while a series resistor limits current. Check both Zener and resistor power."], ["Common-source MOSFET stage", "A biased MOSFET converts gate-voltage changes into drain-current changes; a drain resistor converts these into an amplified, inverted output."], ["CMOS inverter", "A PMOS connects output toward VDD and an NMOS connects it toward ground. Their gates share the input; their drains share the output."]],
    aptitude: [["Percentage-change setup", "Write the original value and change separately. Percentage change = change/original × 100%; do not divide by the new value."], ["Work-rate setup", "If one person finishes in a days, their rate is 1/a job per day. Add simultaneous rates, then take the reciprocal for total time."], ["Series/parallel circuit numerical", "For a circuit question, label known values and redraw the connection. Use series/parallel reduction and Ohm's law; include units in every step."], ["Data chart interpretation", "Read the axis labels, scale and units first. Compare like with like, and calculate change relative to the stated baseline."]],
    automotive: [["CAN bus termination", "A high-speed CAN bus typically uses termination at both physical ends. Incorrect termination can cause reflections and communication errors."], ["H-bridge motor driver", "Four switches reverse current through a DC motor to change direction. Never turn on both switches in the same leg simultaneously; use suitable dead time."], ["Battery-management sensing", "Cell-monitor circuits measure voltage and temperature; current sensing estimates charge flow. Isolation and fault handling depend on pack voltage and architecture."], ["Automotive sensor interface", "A sensor may use a pull-up, bridge, current loop or digital bus. Confirm open/short diagnostics and transient protection requirements."]],
    communications: [["AM envelope detector", "A diode and RC network follow the envelope of an AM signal. The time constant must smooth carrier cycles but still follow the modulation."], ["PSK/QAM transmitter and receiver", "Bits map to phase/amplitude symbols, which modulate a carrier. The receiver synchronizes, estimates symbols and maps them back to bits."], ["PCM chain", "An anti-alias filter precedes sampling; quantization maps samples to levels and encoding produces bits. Quantization introduces error."], ["Matched-filter receiver", "A filter matched to the known pulse shape maximizes sampled SNR in AWGN. Timing synchronization is still required."]],
    electromagnetics: [["Transmission-line load", "A line with characteristic impedance Z0 and load ZL has reflection coefficient Γ = (ZL − Z0)/(ZL + Z0). A matched load has Γ = 0."], ["Dipole antenna", "An alternating current along a conductor radiates electromagnetic energy. Length and feed affect its pattern and input impedance."], ["Waveguide cutoff", "A waveguide only propagates modes above their cutoff frequency. Below cutoff, fields decay rather than carry power down the guide."], ["Transformer coupling", "Changing current in a primary winding creates changing magnetic flux that induces voltage in a coupled secondary winding. Core and winding losses are real." ]],
    "power-electronics": [["Buck converter", "When the switch is on, the inductor stores energy; when off, the freewheel path maintains current. In ideal continuous conduction, Vout = D Vin."], ["Boost converter", "The inductor stores energy while the switch is on and adds to the input while it is off. Ideal continuous-conduction gain is Vout = Vin/(1 − D)."], ["Single-phase diode bridge", "Two diodes conduct each half-cycle to produce full-wave output. Add a capacitor or inductor filter according to ripple and load needs."], ["H-bridge inverter", "A switch bridge reverses polarity across a load to create AC from DC. Switching sequence, dead time and device ratings are essential."]],
    vlsi: [["CMOS inverter", "Connect PMOS source to VDD and NMOS source to ground; join gates as input and drains as output. The output ideally complements the input."], ["Static CMOS NAND gate", "Use series NMOS in the pull-down network and parallel PMOS in the pull-up network. The output is low only when all inputs are high."], ["D flip-flop timing", "Data must satisfy setup and hold windows around the active clock edge. Timing analysis checks the launch-to-capture path delay."], ["Synchronous counter", "Flip-flops share a clock; combinational next-state logic calculates each next bit. Synthesis and timing checks reveal speed and area costs."]]
};

const additionalCircuitNotes = {
    basic: [["Series and parallel resistors", "Series: Req = R1 + R2. Parallel: 1/Req = 1/R1 + 1/R2. Reduce one section at a time before applying Ohm's law."], ["Thevenin equivalent", "Replace a linear two-terminal network by an open-circuit voltage Vth in series with Rth. The load sees the same terminal behaviour."], ["Norton equivalent", "Replace the network by a short-circuit current In in parallel with Rn. For the same terminals, Rn = Rth and Vth = In Rn."], ["RL transient circuit", "An inductor resists a sudden change in current. In a first-order RL circuit, the time constant is τ = L/R for the resistance seen by the inductor."], ["Series RLC resonance", "At resonance, inductive and capacitive reactance cancel. For an ideal series RLC, f0 = 1/(2π√LC)."], ["Wheatstone bridge", "A bridge is balanced when the ratio of one pair of arms equals the other pair; the detector voltage is then zero."], ["Transformer equivalent circuit", "An ideal transformer scales voltage by turns ratio and current inversely; winding resistance, leakage inductance and core losses model real behaviour."]],
    analog: [["Zener shunt regulator", "A reverse-biased Zener holds an approximate reference voltage while a series resistor limits current. Check minimum/maximum load current and Zener power."], ["Emitter follower", "A common-collector BJT stage has voltage gain near one, high input resistance and low output resistance; it is useful as a buffer."], ["Common-source MOSFET amplifier", "A biased MOSFET and drain resistor produce an amplified, inverted output. Source degeneration improves stability but reduces gain."], ["Differential amplifier", "A matched pair amplifies the difference between two inputs and rejects common-mode signals. Matching and tail-current source quality matter."], ["Wien-bridge oscillator", "A lead-lag RC network provides zero phase shift at one frequency; amplifier gain and amplitude stabilization sustain a low-distortion sine wave."], ["Active low-pass filter", "An op-amp with resistors and capacitors provides a buffered frequency-selective response. A second-order design needs its damping/Q specified."], ["Class-B push-pull output stage", "Complementary devices source and sink load current. Class B has crossover distortion near zero; class AB bias reduces it."], ["Astable multivibrator", "A regenerative switching circuit alternates between two states to generate a square wave; timing components set its period."]],
    digital: [["Full-adder", "Sum = A XOR B XOR Cin; carry-out = AB + ACin + BCin. Combine full-adders to build a ripple-carry adder."], ["Magnitude comparator", "Compare the most significant bits first; lower bits matter only when all more significant bits match."], ["Decoder and encoder", "A decoder activates an output selected by its binary input. An encoder converts an active input line into a binary code; priority encoders resolve multiple active lines."], ["SR latch", "Cross-coupled NOR or NAND gates store one bit. Avoid the forbidden simultaneous set/reset combination for the chosen logic convention."], ["JK flip-flop", "A clocked JK element holds, sets, resets or toggles based on J and K; it can be used in counter designs."], ["Ring and Johnson counters", "A ring counter circulates a one-hot pattern; a Johnson counter feeds back the inverted last stage and yields multiple states."], ["Synchronous up/down counter", "All flip-flops share the same clock; combinational next-state logic selects increment or decrement while avoiding ripple clocking."], ["Finite-state machine", "State registers store the current state; next-state logic and outputs depend on state and, for a Mealy machine, inputs."], ["Static RAM bit cell", "A typical SRAM bit cell uses cross-coupled inverters plus access transistors. Word lines select cells and bit lines carry read/write data."]],
    verilog: [["Parameterized counter", "Use a width parameter and a clocked register with reset and enable. Verify rollover and parameter edge cases in simulation."], ["Synchronizer chain", "Two or more destination-clocked registers reduce metastability propagation probability when sampling a single asynchronous control bit; they do not make arbitrary multi-bit buses safe."], ["FIFO interface", "A FIFO stores data in order using read/write pointers and full/empty logic. For independent clocks, use a verified asynchronous FIFO architecture."], ["Clock divider", "A counter can generate a slower clock or, preferably, a clock-enable pulse. Do not create unconstrained fabric clocks without understanding timing."], ["PWM generator", "Compare a counter with a programmable duty threshold. Define behaviour at 0%, 100%, reset and when the period changes."], ["Seven-segment decoder", "Combinational logic maps a binary digit to segment outputs. Confirm whether the display is common-anode or common-cathode and its active polarity."], ["UART transmitter", "A baud-rate timer shifts a start bit, data bits, optional parity and stop bit through a serial output. Sample timing and idle polarity matter."], ["Assertions and protocol checks", "Assertions check properties such as legal state transitions, handshake stability and bounded response; they complement simulation, not replace it."]],
    dsp: [["Moving-average filter", "A length-N moving average is a simple FIR low-pass filter. It smooths noise but also delays and blurs fast changes."], ["First-order IIR low-pass", "A recurrence combines current input with previous output. The pole location controls smoothing and must remain inside the unit circle for stability."], ["Notch filter", "A notch strongly attenuates a narrow frequency band, such as mains hum. Pole/zero placement determines notch depth and width."], ["Upsampler and anti-imaging filter", "Insert zeros to increase sample rate, then low-pass filter to remove spectral images."], ["Downsampler and anti-alias filter", "Low-pass filter before keeping every Mth sample; otherwise frequencies above the new Nyquist limit fold into the baseband."], ["Adaptive LMS filter", "The LMS algorithm updates filter coefficients using the error and input vector; step size controls convergence speed and stability."], ["Overlap-add convolution", "Split long signals into blocks, use FFT multiplication for each block and overlap the output tails to recover linear convolution."], ["Biquad section", "A second-order recursive section implements a pair of poles and zeros. Cascading sections is often numerically safer than one high-order polynomial."]],
    control: [["DC motor armature control", "Armature voltage controls current and torque; back EMF depends on speed. A speed loop commonly wraps a faster current loop."], ["P/PI/PID block", "Proportional action responds now, integral removes persistent error, and derivative anticipates change. Saturation requires anti-windup."], ["Lead compensator", "A lead network adds positive phase over a frequency band, often improving phase margin and response speed."], ["Lag compensator", "A lag network can raise low-frequency loop gain to reduce steady-state error while limiting high-frequency gain."], ["Second-order mass-spring-damper", "Mass, damping and stiffness create a second-order plant; natural frequency and damping ratio determine oscillation and settling."], ["State-space plant", "The equations xdot = Ax + Bu and y = Cx + Du connect internal states, input and output; feedback can use measured or estimated states."], ["Sampled-data feedback", "An ADC samples the output, a digital controller calculates a command, and a DAC/PWM drives the plant. Sampling delay affects stability."], ["Routh-Hurwitz stability test", "Build the Routh array from the characteristic polynomial. Sign changes in the first column indicate right-half-plane roots under standard conditions."]],
    embedded: [["Button debounce input", "A switch can bounce and create multiple edges. Use a time-based software filter or an RC plus Schmitt-trigger circuit, then test response time."], ["Timer interrupt", "Configure a periodic timer event and acknowledge its flag correctly. Keep the handler short; update shared state safely."], ["H-bridge DC motor driver", "A four-switch bridge reverses motor current to reverse direction. Add dead time and prevent shoot-through."], ["ADC input with RC filter", "A small RC network can reduce high-frequency noise before an ADC. Ensure settling time and source impedance satisfy the ADC datasheet."], ["Watchdog reset circuit", "Firmware periodically services the watchdog only after healthy progress. A timeout resets or signals a stalled system."], ["PWM LED dimmer", "A timer output switches an LED rapidly; duty ratio controls average brightness. Use a current-limiting resistor or rated driver."], ["SPI peripheral connection", "Connect SCLK, MOSI, MISO and chip-select as required, then match clock polarity/phase and timing to the peripheral."], ["I2C pull-up network", "Open-drain SDA/SCL need pull-ups. Choose resistance based on bus capacitance, rise-time limit and device sink-current capability."]],
    ccn: [["Ethernet frame path", "An endpoint adds source/destination MAC addresses and a frame check sequence. Switches forward within the LAN; routers replace the link-layer header at each routed hop."], ["ARP request/reply", "On IPv4 LANs, ARP discovers the MAC address associated with a local next-hop IP. The request is broadcast and the reply is normally unicast."], ["DHCP address assignment", "A client commonly uses Discover, Offer, Request and Acknowledge to obtain an address, lease and network settings."], ["DNS lookup", "A resolver follows DNS records or cached answers to obtain a destination address; DNS failure can prevent name-based access even when IP connectivity works."], ["TCP three-way handshake", "SYN, SYN-ACK and ACK establish initial sequence state before application data. Firewalls and loss can alter what an observer sees."], ["VLAN trunk", "A trunk carries frames from multiple VLANs using tags. Both ends must agree on allowed VLANs and native-VLAN handling."], ["NAT gateway", "A gateway rewrites address/port information for flows and tracks mappings. NAT is not equivalent to a firewall."], ["Wi-Fi access point", "Stations authenticate/associate with an access point and share a radio channel. Interference, signal strength and channel utilization affect throughput."]],
    iot: [["Sensor divider into ADC", "A resistive sensor can form a voltage divider feeding an ADC. Check loading, voltage range, resolution and safe current."], ["I2C environmental sensor", "A controller reads temperature/humidity registers over SDA/SCL. Confirm pull-ups, logic voltage, device address and register timing."], ["Relay driver with flyback diode", "A transistor or MOSFET drives a relay coil; a diode across a DC coil absorbs the inductive turn-off transient. Isolate mains wiring and use rated hardware."], ["MQTT telemetry path", "A device publishes measurements to a broker topic; subscribers receive them. Define topic naming, QoS, retained-message and reconnect behaviour."], ["Battery and regulator path", "A battery feeds a regulator and local decoupling capacitors. Select parts for input range, peak radio current, efficiency and low-battery behaviour."], ["OTA update state machine", "Download, authenticate, stage and verify an image before switching boot slots. Keep a recovery image or rollback path."], ["LoRa sensor node", "A low-power node sends a short radio packet to a gateway. Region-specific duty-cycle, data-rate and antenna rules apply."], ["Fail-safe actuator output", "Choose an output state that is safe during reset, brownout or lost communication; verify hardware pull resistors and firmware startup order."]],
    sensors: [["Wheatstone bridge and instrumentation amplifier", "A small bridge imbalance produces a differential voltage. Use an instrumentation amplifier with adequate input range, common-mode range and CMRR."], ["Thermistor divider", "A thermistor resistance changes strongly with temperature and forms a nonlinear divider. Linearize or use a calibration table; avoid self-heating."], ["RTD three-wire measurement", "A three-wire bridge or measurement method compensates much of the lead-wire resistance when wires are similar."], ["Thermocouple amplifier", "Amplify the small thermocouple voltage and add cold-junction compensation. Keep input filtering and grounding appropriate for low-level signals."], ["Strain-gauge quarter bridge", "One active gauge changes one bridge arm. Lead resistance, temperature drift and excitation stability can dominate small strain measurements."], ["LVDT signal conditioning", "An AC-excited primary couples to two secondary windings. Differential amplitude and phase indicate displacement and direction."], ["4–20 mA transmitter loop", "A transmitter encodes a measurement as loop current; 4 mA often represents the live zero, leaving room to detect an open-circuit fault."], ["Anti-alias filter before ADC", "A low-pass filter limits input bandwidth before sampling. Select its cutoff with the sample rate and required signal bandwidth in mind."]],
    semi: [["Diode clipper and clamper", "A clipper limits a waveform above/below a reference; a clamper shifts its DC level using a diode and capacitor."], ["BJT common-base configuration", "The common-base stage has low input resistance, high voltage gain and no phase reversal; it is useful at higher frequencies."], ["JFET self-bias", "A source resistor develops gate-source bias from drain current. Check device variation and the resulting Q-point."], ["MOSFET common-gate stage", "The gate is AC-grounded, signal enters the source, and output is taken at the drain; it offers low input resistance and useful high-frequency behaviour."], ["Photodiode transimpedance amplifier", "A photodiode current feeds an op-amp's inverting input and a feedback resistor converts current into voltage. Add feedback capacitance when needed for stability."], ["Zener reference with current limit", "A series resistor sets operating current and a Zener is reverse-biased across the load. Verify regulation range and power at no-load and full-load."], ["CMOS transmission gate", "Parallel NMOS and PMOS devices controlled by complementary signals pass both logic levels better than a single MOSFET switch."], ["SCR controlled rectifier", "A gate pulse turns on a forward-biased SCR; it remains on until current falls below holding current. AC phase control sets conduction angle."]],
    aptitude: [["Series-resistor calculation", "For series resistors, add values then use V = IR. For parallel resistors, add reciprocal conductances; keep the units consistent."], ["Voltage-divider calculation", "For an unloaded divider, Vout = Vin × Rbottom/(Rtop + Rbottom). A load in parallel with the bottom resistor changes the effective resistance."], ["RC time-constant question", "Calculate τ = RC with seconds and farads. A step response reaches about 63% after one time constant and is nearly settled after five."], ["AC RMS calculation", "For a sine wave, Vrms = Vpeak/√2. Do not use that relation for arbitrary waveforms without checking their shape."], ["Power calculation", "For a resistor, P = VI = I²R = V²/R. Select the equation using known values and check that the power rating has margin."], ["Probability tree", "Multiply probabilities along a path and add probabilities for mutually exclusive successful paths."], ["Statistics and standard deviation", "Mean describes central value; standard deviation describes spread. Distinguish population from sample formulas."], ["Complex-impedance calculation", "For sinusoidal steady state, represent R, L and C with complex impedance and combine series/parallel elements before calculating phasors."]],
    automotive: [["CAN transceiver and termination", "The controller communicates logic to a CAN transceiver, which drives differential CANH/CANL. Termination belongs at the two physical bus ends."], ["Automotive 12-V protection", "TVS diodes, reverse-polarity protection and filters can help with transients. Select parts against the required load-dump and surge test levels."], ["Fuel-injector low-side driver", "A transistor switches the inductive injector to ground; a clamp path limits turn-off voltage. Thermal and transient ratings are critical."], ["BLDC three-phase inverter", "Six switches energize motor phases in sequence or under PWM control. Hall/encoder or sensorless feedback provides rotor position information."], ["Battery-cell monitoring", "A monitor IC measures series cell voltages and temperatures. Isolation, balancing and open-wire detection depend on the system architecture."], ["PLC motor starter", "A contactor switches the motor supply while overload protection trips on excessive current. Interlocks prevent unsafe combinations."], ["Emergency-stop safety chain", "Safety-rated contacts remove actuator energy or command a safe stop. A standard software input alone is not a safety-rated emergency stop."], ["CAN bus fault diagnosis", "Check supply/ground, wiring, bus termination, error counters and message timing with suitable instruments before replacing modules."]],
    communications: [["AM diode envelope detector", "A diode rectifies the AM carrier and an RC network follows its envelope. Too large a time constant distorts modulation; too small leaves carrier ripple."], ["Superheterodyne receiver", "A mixer translates the selected RF channel to a fixed intermediate frequency for filtering and amplification."], ["PLL frequency synthesizer", "A phase detector, loop filter and controlled oscillator form feedback that locks an output frequency to a reference ratio."], ["Balanced modulator", "A nonlinear or switching circuit combines message and carrier while suppressing the carrier, producing DSB-SC."], ["FM discriminator", "A frequency-dependent network or PLL converts instantaneous frequency deviation into a baseband voltage."], ["PCM encoder chain", "Anti-alias filtering, sampling, quantization and binary encoding produce digital pulse-code modulation."], ["BPSK coherent receiver", "Correlate the received waveform with a synchronized carrier reference, sample the decision statistic and choose the nearest symbol."], ["OFDM transmitter", "Map symbols onto orthogonal subcarriers, use an IFFT and add a cyclic prefix to reduce multipath-induced intersymbol interference."]],
    electromagnetics: [["Coaxial transmission line", "The inner conductor and outer shield support a TEM wave. The characteristic impedance depends on geometry and dielectric properties."], ["Quarter-wave impedance transformer", "A lossless section of length λ/4 transforms a real load RL to input impedance Z0²/RL at its design frequency."], ["Dipole antenna feed", "A centre-fed dipole supports standing current and radiates. Input impedance and pattern depend on electrical length and surroundings."], ["Rectangular waveguide", "Conducting walls confine fields into TE/TM modes. Each mode has a cutoff frequency set by guide dimensions."], ["Faraday induction loop", "A changing magnetic flux through a loop induces emf according to Faraday's law; Lenz's law sets its opposing direction."], ["Parallel-plate capacitor field", "Ignoring edge fringing, the field between plates is nearly uniform and capacitance is proportional to plate area and permittivity."], ["Ground-plane monopole", "A quarter-wave vertical conductor works against a ground plane or counterpoise; feed and ground geometry affect radiation."], ["Impedance matching network", "L/C sections transform a source/load impedance at a design frequency. Matching can improve delivered power but is frequency-dependent."]],
    "power-electronics": [["Boost converter", "In continuous conduction, an ideal boost converter has Vout = Vin/(1 − D). The inductor stores energy while the switch is on and delivers it to the output when off."], ["Buck-boost converter", "The basic inverting topology can step voltage magnitude up or down with reversed output polarity. Non-inverting variants use different switch arrangements."], ["Single-phase full-controlled bridge", "Four thyristors control the average DC output by firing angle. Inductive load current may continue between supply half-cycles."], ["Three-phase diode bridge", "Six diodes conduct in pairs and produce six-pulse rectified voltage; source inductance causes commutation overlap."], ["Single-phase full-bridge inverter", "A four-switch bridge alternates load polarity. PWM shapes the fundamental; dead time prevents shoot-through."], ["Flyback converter", "A coupled inductor stores energy during switch on-time and transfers it to the secondary during off-time; isolation is possible."], ["Forward converter", "Energy transfers to the secondary while the switch is on; the transformer core also needs a reset mechanism."], ["PFC boost stage", "A controlled boost stage shapes input current to follow the rectified line voltage, improving power factor and reducing harmonics."], ["RC snubber", "A resistor-capacitor network limits dv/dt or ringing at a switching node. Choose values from measured parasitics and loss limits."], ["Three-phase induction-motor V/f drive", "Vary supply frequency and voltage together to approximately maintain air-gap flux below base speed; observe current and thermal limits."]],
    vlsi: [["CMOS NAND gate", "Series NMOS devices form the pull-down path; parallel PMOS devices form the pull-up. The output is low only when every input is high."], ["CMOS NOR gate", "Parallel NMOS devices form the pull-down; series PMOS devices form the pull-up. The output is high only when every input is low."], ["Transmission-gate multiplexer", "Complementary NMOS/PMOS pass gates select one data path. Decode logic must ensure only the intended path is on."], ["Static latch", "Cross-coupled inverters store a bit while access transistors connect the cell to bit lines during a write/read operation."], ["6T SRAM cell", "Two cross-coupled inverters and two access transistors form a common SRAM bit cell. Read stability and write margin trade-offs drive sizing."], ["Ring oscillator", "An odd number of inverting stages connected in a loop oscillates when propagation delay permits; frequency estimates process, voltage and temperature variation."], ["Clock-tree network", "Buffers distribute the clock to sequential cells while managing skew, insertion delay, transition and power."], ["Scan flip-flop chain", "Muxed flip-flops shift test data in scan mode and capture functional data in normal mode to improve manufacturing test coverage."], ["Synchronous reset circuit", "Reset is sampled on a clock edge; timing and reset release must be designed so all state elements start consistently."], ["Clock-domain synchronizer", "A two-flop chain can reduce metastability risk for a single-bit level crossing. Use handshake or asynchronous FIFO schemes for coherent multi-bit data."]]
};

const subjectTopicExtras = {
    basic: ["Charge, energy and electrical units", "Ideal and practical voltage/current sources", "Conductance and resistor colour codes", "Voltage dividers and loading", "Series/parallel capacitor and inductor combinations", "Power and energy in DC circuits", "Node-voltage and mesh-current methods", "Source transformation", "Superposition theorem", "Thevenin and Norton equivalents", "Maximum-power transfer", "RC and RL transients", "RLC resonance and damping", "Sinusoidal steady-state phasors", "Active, reactive and apparent AC power", "Three-phase star/delta basics", "Transformer turns ratio and losses", "Two-port network parameters", "Frequency response and Bode plots", "Circuit simulation and measurement uncertainty"],
    analog: ["PN diode models and load lines", "Zener regulators and reference circuits", "Clippers, clampers and voltage multipliers", "BJT fixed and voltage-divider bias", "MOSFET bias and source degeneration", "Small-signal hybrid-pi and MOS models", "Common-emitter and common-source stages", "Emitter/source followers and buffers", "Differential pairs and current mirrors", "Op-amp integrator and differentiator", "Summing and difference amplifiers", "Comparator and Schmitt trigger", "Active low/high-pass filters", "Band-pass and notch filters", "Wien-bridge and RC phase-shift oscillators", "Feedback stability and phase margin", "Noise, offset, slew rate and bandwidth", "Class A, B, AB and C power stages", "SPICE analysis and tolerance sweeps"],
    digital: ["Signed magnitude, 1's/2's complement and fixed-point numbers", "BCD, Gray code and parity", "Universal NAND/NOR implementation", "K-map simplification and don't-care terms", "Hazards and glitch reduction", "Half-adder, full-adder and carry propagation", "Subtractor and arithmetic logic unit", "Multiplexer, demultiplexer, encoder and decoder", "Magnitude comparator and priority encoder", "SR, D, JK and T storage elements", "Synchronous/asynchronous counters and registers", "Mealy and Moore finite-state machines", "Shift registers and sequence generators", "Setup, hold, propagation delay and clock skew", "SRAM, ROM and memory addressing", "Clock-domain crossing and metastability", "Low-power design and CMOS switching", "Scan testing and stuck-at faults"],
    verilog: ["Verilog lexical rules, literals and signedness", "Vectors, arrays, parameters and generate blocks", "Continuous assignments and procedural blocks", "Combinational always blocks and default assignments", "Blocking versus non-blocking assignments", "Synchronous/asynchronous reset coding", "Counters, timers, PWM and clock enables", "FSM state encoding and output logic", "Parameterized modules and reusable RTL", "Testbench clock/reset generation", "Directed, random and corner-case simulation", "Self-checking assertions and scoreboards", "Synthesis inference and latch detection", "Constraints, setup/hold and static timing analysis", "CDC synchronizers, handshakes and asynchronous FIFOs", "UART, SPI and I2C RTL interfaces", "FPGA pin constraints and resource mapping", "Lint, formal verification and design-for-test"],
    dsp: ["Discrete-time sequences and operations", "LTI properties, impulse and step responses", "Convolution and correlation", "Difference equations and system realization", "Fourier series and continuous Fourier transform", "DTFT and frequency response", "Z-transform, ROC and pole-zero plots", "Sampling, reconstruction and aliasing", "Quantization error and fixed-point arithmetic", "DFT properties and leakage", "FFT algorithms and computational complexity", "FIR direct/transposed structures", "Window and frequency-sampling FIR design", "IIR impulse-invariant and bilinear designs", "Stability and phase of digital filters", "Multirate interpolation and decimation", "Polyphase implementation", "Power spectral density and spectral estimation", "Adaptive LMS filtering", "DSP processor architecture and real-time constraints"],
    control: ["Modelling electrical, mechanical and thermal systems", "Block diagrams and signal-flow graphs", "First- and second-order time response", "Rise time, overshoot and settling time", "Steady-state error and system type", "Routh-Hurwitz stability test", "Root locus and pole placement", "Bode plot and gain/phase margins", "Nyquist stability criterion", "PID tuning and anti-windup", "Lead, lag and lead-lag compensation", "State-space representation", "Controllability and observability", "State feedback and observers", "Discrete-time models and z-transform", "Sampling and zero-order hold", "Digital PID implementation", "Frequency response of nonlinear systems", "Robustness and parameter sensitivity"],
    embedded: ["C data types, pointers, arrays and bitwise operators", "Memory map, stack, heap and linker basics", "GPIO modes, pull-ups and drive current", "ADC resolution, sampling and reference voltage", "PWM frequency and duty-cycle control", "Timer capture, compare and overflow", "Interrupt latency, priority and shared data", "UART framing and baud-rate calculation", "SPI modes, chip select and transfer timing", "I2C addressing, pull-ups and bus recovery", "DMA and peripheral data movement", "Watchdog, brownout and reset causes", "RTOS tasks, queues, semaphores and mutexes", "Scheduling, priority inversion and deadlocks", "Bootloader, firmware update and rollback", "Low-power states and wake sources", "JTAG/SWD debugging and logic-analyser use", "MISRA-style coding, unit tests and fault injection"],
    ccn: ["OSI model and encapsulation", "Ethernet, MAC learning and switching", "VLANs and trunk tagging", "IPv4 address, mask, CIDR and subnetting", "ARP, ICMP and DHCP", "Static and dynamic routing", "Longest-prefix matching and default routes", "NAT and port forwarding", "TCP handshake, flow and congestion control", "UDP datagrams and application use", "DNS records, caching and recursive resolution", "HTTP methods, status and TLS", "Sockets and client-server programming", "IPv6 addressing and neighbour discovery", "Wi-Fi association, channels and security", "Firewalls, ACLs and threat modelling", "QoS, latency, jitter and packet loss", "SDN, virtualization and cloud networking", "Packet capture and network troubleshooting"],
    iot: ["Sensor and actuator selection", "GPIO, ADC and electrical interfacing", "Microcontroller and edge gateway architecture", "Wi-Fi, Bluetooth LE, Zigbee and LoRa overview", "IPv4 networking and device provisioning", "MQTT broker, topics, QoS and retained messages", "HTTP REST APIs and JSON payloads", "CoAP and constrained-device messaging", "Cloud ingestion, storage and visualization", "Sampling, timestamping and data quality", "Battery life and sleep scheduling", "TLS, certificates and device identity", "Secure boot, OTA updates and rollback", "Access control, key rotation and secrets storage", "Offline behaviour and reconnect backoff", "Edge processing and event rules", "Fleet monitoring, logging and diagnostics", "Threat modelling and secure-by-design review"],
    sensors: ["Static and dynamic characteristics", "Accuracy, precision, sensitivity and resolution", "Linearity, hysteresis, drift and repeatability", "Calibration, traceability and uncertainty", "Temperature sensors: RTD, thermistor and thermocouple", "Strain gauge, load cell and Wheatstone bridge", "LVDT and displacement measurement", "Pressure, flow and level transducers", "Piezoelectric and capacitive sensors", "Instrumentation amplifier and common-mode rejection", "Bridge excitation and lead compensation", "Analogue filtering and anti-aliasing", "ADC range, resolution and quantization", "4–20 mA current loops and isolation", "Grounding, shielding and EMI", "Sensor loading, noise and self-heating", "Signal conditioning and linearization", "Fault diagnosis and open-wire detection"],
    semi: ["Crystal structure and energy bands", "Intrinsic and extrinsic semiconductors", "Drift, diffusion and mobility", "PN junction equilibrium and depletion width", "Diode equation, temperature and small-signal resistance", "Zener and avalanche breakdown", "Rectifier, clipper and clamper applications", "BJT operation, configurations and load line", "BJT small-signal hybrid-pi model", "MOS capacitor and C-V behaviour", "MOSFET regions, threshold and body effect", "JFET operation and biasing", "Photodiodes, LEDs and solar cells", "BJT/MOSFET frequency response and capacitance", "CMOS inverter switching and noise margin", "Short-channel effects and scaling", "Power-device ratings and safe operating area", "Device noise, breakdown and reliability"],
    aptitude: ["Fractions, decimals, ratios and percentages", "Profit, loss, discount and simple/compound interest", "Averages, weighted mean and mixtures", "Time, speed, distance and relative motion", "Work rates, pipes and combined tasks", "Linear/quadratic equations and inequalities", "Sequences, progressions and logarithms", "Permutations, combinations and probability", "Mean, median, variance and standard deviation", "Tables, charts and data interpretation", "Geometry, mensuration and coordinate basics", "Units, dimensions and estimation", "Set theory and Venn diagrams", "Statements, assumptions and logical inference", "Number series and pattern reasoning", "Grammar, sentence completion and vocabulary", "Reading comprehension and argument structure", "Matrices, determinants and linear equations", "Differentiation, integration and applications", "Complex numbers, vectors and basic differential equations"],
    automotive: ["Vehicle electrical architecture and 12/24-V systems", "Battery, alternator and starting circuits", "Automotive sensor types and signal interfaces", "ECU inputs, outputs and diagnostics", "CAN physical/data link and message priority", "LIN bus and gateway concepts", "OBD diagnostics and fault codes", "Fuel injector and solenoid drivers", "H-bridge and motor control", "ABS, airbag and safety overview", "Battery management and cell balancing", "EV traction inverter and motor types", "DC-DC converter and onboard charger", "PLC ladder logic and interlocks", "SCADA, HMI and industrial networks", "EMI/EMC, transient and load-dump protection", "Functional safety and fail-safe states", "HIL testing and fault injection", "Thermal management and derating"],
    communications: ["Amplitude modulation and spectra", "DSB-SC, SSB and VSB", "FM/PM and bandwidth", "Noise figure and cascaded noise", "Sampling, quantization and PCM", "Delta modulation and slope overload", "ASK, FSK, PSK and QAM", "Signal-space constellations and BER", "Matched filters and coherent detection", "Noncoherent detection and synchronization", "Information entropy and channel capacity", "Block and convolutional coding", "Inter-symbol interference and Nyquist pulses", "Equalization and channel estimation", "OFDM, cyclic prefix and subcarriers", "Spread spectrum and multiple access", "Fading, diversity and link budgets", "PLL carrier and frequency recovery"],
    electromagnetics: ["Vector coordinates and vector calculus", "Coulomb law, electric field and potential", "Gauss law and boundary conditions", "Capacitance and dielectric polarization", "Biot-Savart and Ampere laws", "Faraday induction and Lenz law", "Maxwell equations and continuity", "Plane-wave propagation and polarization", "Intrinsic impedance, reflection and transmission", "Poynting vector and power flow", "Skin depth and lossy media", "Transmission-line equations and Smith chart", "Impedance matching and quarter-wave transformer", "Rectangular waveguides and cutoff", "Cavity resonators and quality factor", "Dipole and monopole antennas", "Antenna gain, directivity and radiation pattern", "Friis transmission equation and link budget", "EMI, shielding and EMC"],
    "power-electronics": ["Power diode, SCR, TRIAC, MOSFET and IGBT", "Gate-drive isolation and protection", "Single/three-phase diode rectifiers", "Phase-controlled rectifiers and firing angle", "Buck, boost and buck-boost converters", "Flyback and forward isolated converters", "Continuous/discontinuous conduction modes", "Inverter topologies and PWM methods", "Harmonics, THD and output filters", "Power factor correction", "Snubbers, clamps and freewheeling paths", "Switching, conduction and magnetic losses", "Thermal resistance and heatsink design", "DC and AC motor drives", "Closed-loop voltage/current control", "Resonant and soft-switching converters", "Grid-connected converters and synchronization", "Device safe operating area and fault protection"],
    vlsi: ["MOSFET operation and CMOS inverter", "Noise margins and voltage-transfer curve", "CMOS NAND/NOR and compound gates", "Logical effort, sizing and gate delay", "Dynamic and static power", "Combinational datapath architecture", "Latches, flip-flops and clocking", "Setup/hold and clock-to-Q timing", "Static timing analysis and constraints", "RTL coding and synthesis mapping", "FSM and datapath verification", "CDC synchronizers and reset-domain crossing", "Scan chains and test coverage", "SRAM bitcells and memory interfaces", "Floorplanning, placement and routing", "Clock-tree synthesis and skew", "Parasitics, crosstalk and signal integrity", "Timing closure, PVT corners and signoff", "Low-power clock gating and power intent"]
};

function getSubjectTopics(subject) {
    return [...subject.topics, ...subjectTopicExtras[subject.id]];
}

subjects.forEach(subject => {
    subjectCircuitNotes[subject.id].push(...additionalCircuitNotes[subject.id]);
});

const interviewQuestionExtras = {
    basic: [["How do you find the Thevenin equivalent of a linear network?", "Find the open-circuit voltage at the terminals, then find the resistance seen from those terminals with independent voltage sources shorted and independent current sources opened."], ["Why is a capacitor open-circuit at DC steady state?", "After charging, its voltage is constant, so ideal current i = C dv/dt is zero."], ["What is power factor?", "It is the ratio of real power to apparent power in AC; for sinusoidal conditions it equals cos φ, where φ is the phase difference between voltage and current."]],
    analog: [["Why is a transistor amplifier biased?", "Biasing establishes a quiescent operating point so the signal can swing without unwanted cutoff or saturation distortion."], ["What is slew rate in an op-amp?", "It is the maximum rate of change of output voltage, usually expressed in V/µs; exceeding it distorts a fast or large signal."], ["What is the Barkhausen condition for oscillation?", "For sustained oscillation, loop gain magnitude is unity and total loop phase shift is an integer multiple of 360 degrees at the oscillation frequency."]],
    digital: [["What is the difference between a latch and a flip-flop?", "A latch is level-sensitive; a flip-flop captures data on a clock edge."], ["What causes setup-time violation?", "The data path is too slow to become stable before the receiving register's active clock edge."], ["What is a Mealy FSM?", "Its outputs depend on both current state and current inputs; a Moore FSM's outputs depend only on current state."]],
    verilog: [["Why use non-blocking assignments for sequential logic?", "They schedule register updates together at the end of the time step, which models edge-triggered hardware and avoids many simulation-order races."], ["What is a latch inferred in RTL?", "A latch is inferred when a combinational process does not assign an output on every possible control path, so the old value must be retained."], ["What is the difference between simulation and synthesis?", "Simulation evaluates behaviour in a simulator; synthesis maps supported RTL into hardware structures and may not preserve unsupported simulation-only constructs."]],
    dsp: [["What is the difference between linear and circular convolution?", "Linear convolution describes ordinary LTI output. The DFT multiplication property gives circular convolution unless sequences are zero-padded sufficiently."], ["Why use a window before an FFT?", "A finite record can create spectral leakage; a window reduces discontinuities at the block edges, with trade-offs in resolution and amplitude."], ["What makes an FIR filter linear phase?", "A real FIR filter has linear phase when its impulse response is symmetric or antisymmetric."]],
    control: [["What does steady-state error measure?", "It is the final difference between the reference input and output after transients have settled, when that limit exists."], ["What is phase margin?", "It measures how much additional phase lag can be added at unity-gain crossover before the loop reaches the −180° instability condition."], ["What do controllability and observability mean?", "Controllability asks whether inputs can move the state as needed; observability asks whether internal states can be inferred from outputs."]],
    embedded: [["Why should an interrupt service routine be short?", "Long handlers delay other interrupts and tasks. Capture the event quickly, then perform lengthy processing in normal task context."], ["What does volatile do in embedded C?", "It tells the compiler a value can change outside ordinary program flow, such as a memory-mapped register; it does not make access atomic or thread-safe."], ["When would you choose SPI over I2C?", "SPI is often chosen for higher throughput or simpler point-to-point timing; I2C saves pins and supports addressed devices on a shared bus."]],
    ccn: [["What happens when a host sends a packet to another subnet?", "It sends the frame to its default gateway's MAC address while the IP packet retains the remote destination address."], ["How does DNS help an application?", "It looks up records such as IP addresses for a domain name so the application can connect to a server."], ["What is the difference between a switch and a router?", "A switch forwards local frames using link-layer addresses; a router forwards packets between IP networks."]],
    iot: [["Why use MQTT instead of polling an HTTP endpoint?", "Publish-subscribe messaging can deliver events efficiently through a broker and supports lightweight devices; the best choice depends on reliability and system needs."], ["How should device credentials be handled?", "Use unique credentials, protect them in storage, rotate or revoke them, and never hard-code shared secrets in public firmware."], ["What should an IoT device do if the cloud connection fails?", "It should continue safe local behaviour, buffer data if appropriate, retry with backoff and report the fault when connectivity returns."]],
    sensors: [["What is the difference between accuracy and precision?", "Accuracy is closeness to a reference; precision is how closely repeated readings agree with one another."], ["Why use a Wheatstone bridge?", "It converts a small resistance change into a differential voltage that can be amplified and measured."], ["What is cold-junction compensation?", "It accounts for the reference-junction temperature when interpreting a thermocouple's voltage as a measurement at the sensing junction."]],
    semi: [["What is the depletion region?", "It is the region near a PN junction with few mobile carriers, leaving fixed ionized dopants and an internal electric field."], ["What is threshold voltage in a MOSFET?", "It is the approximate gate-to-source voltage at which a strong inversion channel forms; conduction and performance are not an ideal on/off step."], ["Zener versus avalanche breakdown?", "They are reverse-breakdown mechanisms associated with different field and carrier processes; device design determines the dominant mechanism."]],
    aptitude: [["How do you avoid errors in a percentage-change problem?", "Identify the original value as the denominator, convert the percentage carefully and check the direction of the change."], ["How do you solve a work-rate problem when people work together?", "Convert each completion time to a rate, add rates for simultaneous work, and invert the combined rate."], ["How do you approach a data-interpretation question?", "Read units and axes, identify the requested comparison, calculate using the correct baseline and check the scale."]],
    automotive: [["Why use differential signalling for CAN?", "It improves noise immunity because common-mode interference tends to affect both wires similarly and is rejected by the receiver within limits."], ["What is battery-cell balancing?", "It reduces cell-to-cell state-of-charge differences so a series pack can use its capacity safely and effectively."], ["What does a watchdog timer do?", "It can reset or signal a system when software fails to service it within a defined interval."]],
    communications: [["What is the Nyquist sampling condition?", "A band-limited signal must be sampled at more than twice its highest frequency for ideal reconstruction; practical systems also need anti-alias filtering."], ["What is the difference between ASK and PSK?", "ASK represents symbols through carrier amplitude; PSK represents them through carrier phase."], ["What is signal-to-noise ratio?", "It is signal power divided by noise power, often expressed in decibels; higher SNR generally supports more reliable communication."]],
    electromagnetics: [["What does a reflection coefficient of zero mean?", "The load is matched to the transmission line, so no incident wave is reflected at the load."], ["What is skin depth?", "It is the characteristic depth over which current density in a conductor falls significantly with distance from its surface."], ["What does antenna gain describe?", "It describes directional radiation relative to a reference antenna, accounting for directivity and efficiency."]],
    "power-electronics": [["Why is dead time required in an H-bridge?", "It prevents the upper and lower switch in one leg from conducting simultaneously, which would short the supply."], ["What does duty ratio control in a buck converter?", "In ideal continuous conduction it sets the average output approximately as Vout = D Vin."], ["Name major converter losses.", "Conduction losses, switching losses, magnetic-component losses, gate-drive losses and thermal-related losses all contribute."]],
    vlsi: [["What is clock skew?", "It is the difference in clock arrival time between sequential elements and can affect setup and hold timing."], ["What is dynamic power in CMOS?", "A common approximation is Pdynamic = α C V² f, where α is switching activity, C capacitance, V supply voltage and f frequency."], ["What is static timing analysis?", "It checks timing paths against clock and I/O constraints without requiring input-vector simulation."]]
};

const professionalInterviewQuestions = {
    basic: [
        ["A 12 V rail drops to 8 V when a board is connected. How would you investigate?", "Measure the supply at its terminals and at the board under load, then measure current and check for shorts, overload, wiring resistance and connector heating. Compare the drop with the source and cable ratings; isolate branches safely rather than replacing parts at random."],
        ["How would you verify a voltage-divider design before releasing it?", "Calculate the unloaded and loaded output, resistor dissipation and tolerance extremes. Then measure at minimum and maximum input and load, compare against the acceptance limits, and document the test setup and instrument uncertainty."]
    ],
    analog: [
        ["An op-amp output clips only at high frequency although its DC gain is correct. What do you check?", "Check slew-rate demand, gain-bandwidth product, output swing/current limits, capacitive-load stability and input common-mode range. Compare the required output slope with the datasheet slew rate and test with a representative load and waveform."],
        ["A closed-loop amplifier oscillates after the PCB layout changes. How would you debug it?", "Inspect feedback routing, bypass-capacitor placement, ground return and parasitic capacitance/inductance. Probe with a short ground spring, compare phase margin or step response, and test compensation or isolation changes one at a time."]
    ],
    digital: [
        ["A design passes simulation but fails timing on hardware. How would you narrow down the issue?", "Read the timing reports and constraints first; identify the failing register-to-register path, clock uncertainty, input/output delays and clock-domain crossings. Verify the implementation and operating corner, then optimize the actual critical path and rerun static timing."],
        ["An output glitches briefly during a state transition. What architectural causes would you investigate?", "Check whether outputs are decoded combinationally from multiple state bits, whether input signals are asynchronous, and whether hazards are possible. Consider registered outputs, synchronized inputs and a safe state encoding; verify behavior at the receiving interface."]
    ],
    verilog: [
        ["RTL simulation passes, but synthesis produces different hardware behavior. What is your debugging sequence?", "Check for inferred latches, incomplete assignments, blocking/non-blocking misuse, X or delay constructs, signed-width mismatches and unsupported constructs. Review synthesis warnings and the netlist, then reproduce with a self-checking testbench that models reset and clock timing."],
        ["How would you safely move a multi-bit status value between unrelated clock domains?", "Do not independently synchronize each bit and assume coherence. Use a handshake with stable data, a suitable asynchronous FIFO, or a Gray-coded pointer/counter where appropriate; verify reset sequencing and CDC analysis."]
    ],
    dsp: [
        ["A sampled sensor signal shows a false low-frequency tone. How would you determine whether it is aliasing?", "Check the analogue signal bandwidth and sampling rate, then predict alias frequencies using the sampling frequency. Inspect the anti-alias filter and acquisition path, increase the sample rate or filter appropriately, and compare spectra using a suitable window."],
        ["You need a real-time filter with tight RAM and latency limits. How do you choose between FIR and IIR?", "Translate requirements into passband/stopband, phase, latency, stability and arithmetic constraints. Compare order, coefficient/state memory and operation count; evaluate fixed-point quantization and worst-case execution time on the target before choosing."]
    ],
    control: [
        ["A motor speed loop overshoots badly after adding integral action. What would you inspect?", "Check loop bandwidth and gain, actuator saturation, integrator windup, sensor filtering and sample delay. Add anti-windup, tune using measured plant response and validate at load extremes rather than judging only a no-load step."],
        ["A controller is stable in simulation but oscillates on the real plant. What model gaps could explain this?", "Look for unmodelled delay, sampling and zero-order hold, sensor noise/filtering, actuator limits, friction, flexible modes and parameter variation. Measure the actual frequency/step response and validate robustness across operating conditions."]
    ],
    embedded: [
        ["A device fails once every few hours, and logs show corrupted shared data. How do you investigate?", "Identify every task and interrupt that accesses the data, then check atomicity, race conditions, buffer ownership and memory ordering. Use a bounded critical section, queue or safe lock-free pattern as appropriate; add timestamps and stress tests to reproduce the interleaving."],
        ["A field update occasionally bricks a controller after power loss. What would a robust update design include?", "Use authenticated images, integrity checks, a recoverable bootloader and A/B or rollback-capable storage. Write and verify the inactive image before switching boot state, make boot selection power-fail-safe, and test interruption at every update stage."]
    ],
    ccn: [
        ["An application works on the local network but intermittently fails across sites. What layers and evidence do you examine?", "Capture DNS resolution, routes, TCP/TLS setup and application timing at both ends. Check MTU/path-MTU discovery, firewall/NAT state, packet loss, retransmissions, asymmetric routing and certificate/time configuration; correlate traces with timestamps."],
        ["Users report slow transfers although ping latency is low. How would you distinguish the bottleneck?", "Measure throughput, loss, RTT under load, retransmissions and interface errors. Check congestion/window scaling, duplex or link negotiation, CPU bottlenecks and path capacity; use endpoint and network counters rather than treating ICMP latency as a throughput measure."]
    ],
    iot: [
        ["How would you design provisioning for thousands of devices without a shared factory password?", "Give each device a unique identity and credential, securely inject or derive it during manufacturing, authenticate enrollment, and support rotation and revocation. Protect private keys in suitable hardware where available and audit provisioning without exposing secrets."],
        ["A cloud outage must not stop a safety-related local function. What architecture do you propose?", "Keep the safety control loop local and deterministic, define safe behavior independent of cloud access, and isolate remote commands behind validation and authorization. Buffer noncritical telemetry with bounds, reconnect using backoff, and test prolonged outages and stale commands."]
    ],
    sensors: [
        ["A strain-gauge bridge drifts with temperature even when the applied load is constant. How do you separate thermal effects from strain?", "Characterize zero and span over temperature, check gauge self-heating, lead resistance, bonding and excitation stability, and use a suitable compensated bridge arrangement. Calibrate with a reference load and temperature; quantify residual error."],
        ["A measurement chain has adequate ADC resolution but noisy readings. What do you check before increasing ADC bits?", "Check sensor bandwidth and impedance, grounding, shielding, reference noise, analogue gain/filtering, aliasing, layout and ADC acquisition time. Measure noise at successive chain stages and compare input-referred noise with the required resolution."]
    ],
    semi: [
        ["A MOSFET runs hot in a switching converter even though its on-resistance looks acceptable. What losses and measurements matter?", "Estimate conduction loss using RMS current and temperature-dependent RDS(on), then switching, gate-drive and diode/body-diode losses. Check switching transitions, gate resistance, ringing, layout parasitics, thermal path and safe operating limits under worst-case conditions."],
        ["A diode fails in a prototype although its average current is below the datasheet rating. What else could cause it?", "Check repetitive peak and surge current, reverse voltage and recovery, junction temperature, transient energy, inrush, mounting/thermal resistance and derating. Capture startup and fault waveforms and compare each stress with the correct datasheet rating."]
    ],
    aptitude: [
        ["A 12-bit ADC with a 3.3 V reference measures 2.0 V. Estimate its ideal code and explain a sanity check.", "For an ideal unipolar converter, code is approximately (2.0/3.3) × 4095 ≈ 2482, subject to transfer convention and quantization. Check that the code is below full scale, units are consistent, and the input does not exceed the reference range."],
        ["A test report gives 2.00 V ± 1% while the requirement is 1.98–2.02 V. Is that enough to claim a pass?", "Not without understanding the uncertainty and decision rule. The tolerance implies 1.98–2.02 V, exactly the requirement boundary; measurement uncertainty may put the true value outside. Apply the lab's guard-band rule and report the measured value plus uncertainty."]
    ],
    automotive: [
        ["Several ECUs log CAN errors and the bus enters bus-off after a harness repair. What do you inspect?", "Check termination resistance with power removed, topology/stubs, connector pinout, CAN_H/CAN_L shorts and common-mode voltage. Capture differential waveforms and error counters, confirm bit timing and transceiver supply, and inspect the repair for intermittent contact or added capacitance."],
        ["A battery-management system reports one cell far below the others under acceleration. How do you decide whether the cell is weak or the measurement is faulty?", "Compare cell voltage under rest and load with pack current and temperature; inspect sense-wire connections, balancing state, ADC/reference diagnostics and synchronized samples. Follow the safety procedure, reproduce under controlled conditions and avoid bypassing protection based on a single reading."]
    ],
    communications: [
        ["A QPSK link meets signal strength targets but has worse BER than expected. What impairments do you test?", "Check EVM and constellation, carrier and timing recovery, frequency offset, phase noise, IQ imbalance, symbol timing, channel multipath, coding/interleaving and interference. Compare measured BER against the expected curve using the measured Eb/N0 and the same receiver assumptions."],
        ["How would you choose a modulation and coding scheme for a changing radio channel?", "Set throughput, latency, power and reliability targets, estimate channel quality and its variation, and choose a robust link adaptation policy with feedback and hysteresis. Include synchronization overhead, coding gain, retransmissions and worst-case coverage in the evaluation."]
    ],
    electromagnetics: [
        ["A 50-ohm RF system has a measured VSWR of 3:1. What does that imply, and what would you check next?", "The reflection-coefficient magnitude is (3−1)/(3+1) = 0.5, so mismatch is significant. Measure S11 across the operating band with a calibrated reference plane, then inspect connectors, feed, load and matching network; check whether the mismatch changes with frequency."],
        ["An antenna works on the bench but loses range in its enclosure. How do you investigate?", "Measure return loss and radiation performance in the assembled configuration. Check detuning by nearby metal, ground-plane size, dielectric loading, cable common-mode current, orientation and enclosure losses; compare with the intended installation and tune only after identifying the dominant change."]
    ],
    "power-electronics": [
        ["A buck converter output dips during a load step and rings afterward. Which design parameters and waveforms do you examine?", "Capture switch node, inductor current and output voltage with correct probing. Check control-loop bandwidth/phase margin, inductor saturation and ripple, output capacitance/ESR, compensation, current limit and load-step slew; compare measured behavior with the control-mode model."],
        ["A converter passes at room temperature but fails thermally at maximum input. How do you prioritize fixes?", "Measure device, inductor and board temperatures at rated load; estimate conduction and switching losses at the actual input and switching conditions. Check layout and thermal paths, gate drive, dead time and magnetic core loss, then derate or redesign and validate at worst-case ambient."]
    ],
    vlsi: [
        ["Setup timing passes before clock-tree synthesis but fails afterward. What reports and physical effects do you inspect?", "Compare clock latency/skew, uncertainty and insertion delay across stages, then inspect the new worst data path, congestion, wire parasitics and constraints. Apply appropriate placement, buffering or logic optimization and re-run signoff timing at all required corners."],
        ["A hold violation appears after clock-tree synthesis. Why is slowing the clock period not a valid general fix?", "Hold is a minimum-delay constraint around the same active clock edge, so increasing the period usually does not remove it. Inspect skew and short data paths, then insert delay cells or adjust clock-tree/placement while rechecking setup and all corners."]
    ]
};

// The EIE/ECE technical mock test is implemented in aptitude-test.js.

function renderDiagramSvg(subjectId) {
    const diagram = subjectDiagrams[subjectId];
    if (subjectId === "basic") {
        return `
            <svg viewBox="0 0 760 210" role="img" aria-labelledby="diagram-title-basic diagram-desc-basic">
                <title id="diagram-title-basic">${diagram.title}</title>
                <desc id="diagram-desc-basic">${diagram.description}</desc>
                <g class="circuit-wires">
                    <path d="M 90 68 V 91 M 90 119 V 166 H 675 V 68 H 605 M 495 68 H 380 M 360 68 H 330 M 220 68 H 160 M 160 68 H 90"></path>
                    <path d="M 84 92 H 96 M 78 105 H 102 M 84 118 H 96"></path>
                    <path d="M 220 68 L 230 53 L 245 83 L 260 53 L 275 83 L 290 53 L 305 83 L 320 53 L 330 68"></path>
                    <path d="M 360 43 V 93 M 380 43 V 93"></path>
                    <path d="M 495 68 L 505 53 L 520 83 L 535 53 L 550 83 L 565 53 L 580 83 L 595 53 L 605 68"></path>
                </g>
                <g class="circuit-labels">
                    <text x="90" y="35">DC supply</text>
                    <text x="274" y="112">R1: resistor</text>
                    <text x="370" y="112">C1: capacitor</text>
                    <text x="548" y="112">R2: load</text>
                    <text x="635" y="50">Output</text>
                    <text x="113" y="98">+</text>
                    <text x="113" y="119">−</text>
                    <text x="385" y="152">Vout</text>
                    <text x="385" y="187">Common return</text>
                </g>
            </svg>
        `;
    }

    if (subjectId === "analog") {
        return `
            <svg viewBox="0 0 760 220" role="img" aria-labelledby="diagram-title-analog diagram-desc-analog">
                <title id="diagram-title-analog">${diagram.title}</title>
                <desc id="diagram-desc-analog">${diagram.description}. This is an inverting operational amplifier circuit.</desc>
                <g class="circuit-wires">
                    <path d="M 65 105 H 130 M 210 105 H 280 H 400 M 580 140 H 650 M 280 105 V 45 H 330 M 450 45 H 650 V 140 M 400 165 H 360 V 195"></path>
                    <path d="M 130 105 L 140 90 L 155 120 L 170 90 L 185 120 L 200 90 L 210 105"></path>
                    <path d="M 330 45 L 340 30 L 355 60 L 370 30 L 385 60 L 400 30 L 415 60 L 430 30 L 450 45"></path>
                    <path d="M 400 65 L 580 140 L 400 195 Z"></path>
                    <path d="M 345 155 H 400 M 350 150 L 345 155 L 350 160"></path>
                </g>
                <g class="circuit-labels">
                    <text x="85" y="90">Vin</text>
                    <text x="170" y="145">Rin</text>
                    <text x="380" y="25">Rf (feedback)</text>
                    <text x="420" y="105">−</text>
                    <text x="420" y="173">+</text>
                    <text x="690" y="145">Vout</text>
                    <text x="360" y="215">Ground</text>
                </g>
            </svg>
        `;
    }

    if (subjectId === "digital") {
        return `
            <svg viewBox="0 0 760 220" role="img" aria-labelledby="diagram-title-digital diagram-desc-digital">
                <title id="diagram-title-digital">${diagram.title}</title>
                <desc id="diagram-desc-digital">${diagram.description}. Two inputs connect to an XOR gate for sum and an AND gate for carry.</desc>
                <g class="circuit-wires">
                    <path d="M 75 70 H 245 V 85 H 315 M 75 115 H 265 V 105 H 315 M 245 70 V 165 H 315 M 265 115 V 185 H 315 M 465 90 H 640 M 465 170 H 640"></path>
                    <path d="M 315 60 H 420 Q 465 60 465 95 Q 465 130 420 130 H 315 Z M 300 60 Q 345 95 300 130"></path>
                    <path d="M 315 145 H 420 Q 465 145 465 175 Q 465 205 420 205 H 315 Z"></path>
                </g>
                <g class="circuit-labels">
                    <text x="45" y="75">A</text>
                    <text x="45" y="120">B</text>
                    <text x="385" y="102">XOR</text>
                    <text x="385" y="184">AND</text>
                    <text x="685" y="95">Sum</text>
                    <text x="685" y="175">Carry</text>
                </g>
            </svg>
        `;
    }

    if (subjectId === "power-electronics") {
        return `
            <svg viewBox="0 0 760 240" role="img" aria-labelledby="diagram-title-power diagram-desc-power">
                <title id="diagram-title-power">${diagram.title}</title>
                <desc id="diagram-desc-power">${diagram.description}. A switch feeds an inductor and output; a diode, capacitor and load connect to the return line.</desc>
                <g class="circuit-wires">
                    <path d="M 105 65 H 205 M 275 65 H 330 M 440 65 H 630 V 190 H 105 V 65 M 535 65 V 100 M 535 155 V 190 M 330 65 V 110 M 330 155 V 190"></path>
                    <path d="M 205 65 L 215 50 L 230 80 L 245 50 L 260 80 L 275 65"></path>
                    <path d="M 330 65 C 340 45 350 45 360 65 C 370 85 380 85 390 65 C 400 45 410 45 420 65 C 430 85 435 85 440 65"></path>
                    <path d="M 305 110 L 330 155 L 355 110 Z M 312 160 H 348"></path>
                    <path d="M 535 65 V 110 M 520 110 H 550 M 520 126 H 550 M 535 126 V 190"></path>
                    <path d="M 615 125 L 625 110 L 640 140 L 655 110 L 670 140 L 685 110 L 695 125 M 655 125 V 190"></path>
                </g>
                <g class="circuit-labels">
                    <text x="105" y="45">Vin</text>
                    <text x="240" y="105">Switch</text>
                    <text x="385" y="105">Inductor L</text>
                    <text x="330" y="220">Freewheel diode</text>
                    <text x="535" y="90">Output capacitor</text>
                    <text x="655" y="105">Load</text>
                    <text x="640" y="50">Vout</text>
                </g>
            </svg>
        `;
    }

    if (subjectId === "vlsi") {
        return `
            <svg viewBox="0 0 760 240" role="img" aria-labelledby="diagram-title-vlsi diagram-desc-vlsi">
                <title id="diagram-title-vlsi">${diagram.title}</title>
                <desc id="diagram-desc-vlsi">${diagram.description}. The PMOS connects the output to the supply, and the NMOS connects it to ground.</desc>
                <g class="circuit-wires">
                    <path d="M 365 35 V 65 M 365 115 V 135 M 365 185 V 210 M 210 90 H 340 M 210 160 H 340 M 390 90 H 500 V 135 M 390 160 H 500 V 135 M 500 135 H 635"></path>
                    <path d="M 340 35 H 390 M 350 210 H 380 M 355 218 H 375 M 360 226 H 370"></path>
                    <path d="M 340 75 H 390 V 105 H 340 Z M 340 145 H 390 V 175 H 340 Z"></path>
                </g>
                <g class="circuit-labels">
                    <text x="365" y="25">VDD</text>
                    <text x="210" y="82">Input</text>
                    <text x="365" y="95">PMOS</text>
                    <text x="365" y="165">NMOS</text>
                    <text x="670" y="140">Output</text>
                    <text x="365" y="238">Ground</text>
                </g>
            </svg>
        `;
    }

    if (subjectId === "control") {
        return `
            <svg viewBox="0 0 760 220" role="img" aria-labelledby="diagram-title-control diagram-desc-control">
                <title id="diagram-title-control">${diagram.title}</title>
                <desc id="diagram-desc-control">${diagram.description}. The measured output is fed back to the controller.</desc>
                <defs>
                    <marker id="control-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                        <path d="M 0 0 L 8 4 L 0 8 z"></path>
                    </marker>
                </defs>
                <g class="diagram-arrows">
                    <path d="M 154 86 H 194 M 344 86 H 394 M 544 86 H 594" marker-end="url(#control-arrow)"></path>
                    <path d="M 670 122 V 174 H 269 V 122" marker-end="url(#control-arrow)"></path>
                </g>
                <g class="diagram-nodes">
                    <rect x="14" y="49" width="140" height="74" rx="10"></rect>
                    <rect x="194" y="49" width="150" height="74" rx="10"></rect>
                    <rect x="394" y="49" width="150" height="74" rx="10"></rect>
                    <rect x="594" y="49" width="150" height="74" rx="10"></rect>
                    <text x="84" y="91">Desired value</text>
                    <text x="269" y="91">Controller</text>
                    <text x="469" y="91">System / plant</text>
                    <text x="669" y="91">Measured output</text>
                </g>
                <text class="diagram-feedback-label" x="470" y="201">Feedback: compare output with target</text>
            </svg>
        `;
    }

    const nodeWidth = 154;
    const nodeGap = 32;
    const startX = 14;
    const labels = diagram.labels;
    const nodes = labels.map((label, index) => {
        const x = startX + index * (nodeWidth + nodeGap);
        const lines = label.split("|");

        return `
            <g>
                <rect x="${x}" y="49" width="${nodeWidth}" height="74" rx="10"></rect>
                <text x="${x + nodeWidth / 2}" y="${lines.length === 1 ? 91 : 79}">
                    ${lines.map((line, lineIndex) => `<tspan x="${x + nodeWidth / 2}" dy="${lineIndex === 0 ? 0 : 19}">${line}</tspan>`).join("")}
                </text>
            </g>
        `;
    }).join("");
    const arrows = labels.slice(0, -1).map((_, index) => {
        const x1 = startX + (index + 1) * nodeWidth + index * nodeGap + 4;
        const x2 = x1 + nodeGap - 8;
        return `<path d="M ${x1} 86 H ${x2}" marker-end="url(#diagram-arrow)"></path>`;
    }).join("");

    return `
        <svg viewBox="0 0 760 172" role="img" aria-labelledby="diagram-title-${subjectId} diagram-desc-${subjectId}">
            <title id="diagram-title-${subjectId}">${diagram.title}</title>
            <desc id="diagram-desc-${subjectId}">${diagram.description}</desc>
            <defs>
                <marker id="diagram-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 z"></path>
                </marker>
            </defs>
            <g class="diagram-arrows">${arrows}</g>
            <g class="diagram-nodes">${nodes}</g>
        </svg>
    `;
}

function renderCircuitTopicDiagram(subjectId, title) {
    const label = title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const markerId = `topic-arrow-${subjectId}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    let stages;
    let diagramType = "Concept flow";
    const topic = title.toLowerCase();

    if (/rectif|diode|zener/.test(topic)) {
        diagramType = "Diode circuit";
        stages = ["AC / DC input", "Diode network", "Filter / load"];
    } else if (/op-amp|operational amplifier|amplifier|emitter|mosfet|bjt|push-pull|differential/.test(topic)) {
        diagramType = "Amplifier circuit";
        stages = ["Input signal", "Active device", "Amplified output"];
    } else if (/resistor|voltage divider|rc |rl |rlc|filter|wien-bridge|bridge|transformer|oscillator/.test(topic)) {
        diagramType = "Passive circuit";
        stages = /transformer/.test(topic)
            ? ["AC input", "Primary / core", "Secondary output"]
            : /bridge/.test(topic)
                ? ["Excitation", "Bridge network", "Differential output"]
                : ["Input", "R / L / C network", "Output"];
    } else if (/adder|gate|logic|flip-flop|latch|counter|mux|decoder|encoder|comparator|memory|sram|seven-segment/.test(topic)) {
        diagramType = "Digital logic";
        stages = ["Logic inputs", title.replace(/&/g, "&amp;"), "Logic outputs"];
    } else if (/converter|buck|boost|inverter|h-bridge|power stage|freewheel/.test(topic)) {
        diagramType = "Power circuit";
        stages = ["DC source", "Switch + energy storage", "Load / output"];
    } else if (/sensor|measurement|thermocouple|rtd|strain|adc|gpio|uart|i2c|spi|button|timer|interface/.test(topic)) {
        diagramType = "Interface circuit";
        stages = ["Sensor / input", "Conditioning / controller", "Measured / driven output"];
    } else {
        stages = ["Input / reference", "Processing / system", "Output / response"];
    }

    const nodeX = [14, 190, 366];
    const nodes = stages.map((stage, index) => {
        const words = stage.split(/\s+/);
        const lines = words.length > 2
            ? [`${words[0]} ${words[1]}`, words.slice(2).join(" ")]
            : [stage];
        const lineMarkup = lines.map((line, lineIndex) =>
            `<tspan x="${nodeX[index] + 70}" dy="${lineIndex === 0 ? 0 : 14}">${line}</tspan>`
        ).join("");
        return `
            <g>
                <rect x="${nodeX[index]}" y="44" width="140" height="48" rx="7"></rect>
                <text x="${nodeX[index] + 70}" y="${lines.length > 1 ? 63 - 7 : 70}">${lineMarkup}</text>
            </g>
        `;
    }).join("");
    const arrows = [0, 1].map(index => {
        const start = nodeX[index] + 140;
        const end = nodeX[index + 1] - 9;
        return `<path d="M ${start} 68 H ${end}" marker-end="url(#${markerId})"></path>`;
    }).join("");

    return `
        <svg class="circuit-topic-diagram" viewBox="0 0 520 112" role="img" aria-label="${label}: ${diagramType}">
            <defs>
                <marker id="${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 z"></path>
                </marker>
            </defs>
            <text class="topic-diagram-title" x="14" y="20">${label} — ${diagramType}</text>
            <g class="topic-diagram-arrows">${arrows}</g>
            <g class="topic-diagram-nodes">${nodes}</g>
        </svg>
    `;
}

// SUBJECT CARDS AND SEARCH

const subjectGrid = document.getElementById("subjectGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

let activeFilter = "All";

function renderSubjects() {
    const searchTerm = searchInput.value.toLowerCase().trim();

    const filtered = subjects.filter(subject => {
        const matchesCategory =
            activeFilter === "All" ||
            subject.category === activeFilter;

        const searchableText = [
            subject.name,
            subject.desc,
            subject.basics,
            ...subjectCurricula[subject.id].flatMap(stage => stage.concepts),
            ...getSubjectTopics(subject)
        ].join(" ").toLowerCase();

        return matchesCategory &&
            searchableText.includes(searchTerm);
    });

    subjectGrid.innerHTML = filtered.map(subject => `
        <article
            class="subject-card"
            tabindex="0"
            role="button"
            data-id="${subject.id}"
            aria-label="Open ${subject.name}"
        >
            <img
                class="subject-image"
                src="${subject.image}"
                alt="${subject.name} related image"
                loading="lazy"
            >

            <div class="card-top">
                <span class="subject-icon">${subject.icon}</span>
                <span class="subject-number">
                    ${String(subjects.indexOf(subject) + 1).padStart(2, "0")}
                </span>
            </div>

            <h3>${subject.name}</h3>
            <p>${subject.desc}</p>

            <div class="card-bottom">
                <span class="topic-count">
                    ${getSubjectTopics(subject).length + subjectCurricula[subject.id].reduce((total, stage) => total + stage.concepts.length, 0)} learning concepts
                </span>
                <span class="card-arrow">↗</span>
            </div>
        </article>
    `).join("");

    noResults.hidden = filtered.length > 0;

    document.querySelectorAll(".subject-card").forEach(card => {
        card.addEventListener("click", () => {
            openSubject(card.dataset.id);
        });

        card.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openSubject(card.dataset.id);
            }
        });
    });
}

searchInput.addEventListener("input", renderSubjects);

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");
        activeFilter = button.dataset.filter;
        renderSubjects();
    });
});

// SUBJECT DETAILS POP-UP

const subjectModal = document.getElementById("subjectModal");
const modalBody = document.getElementById("modalBody");

function setSubjectTab(tabName) {
    modalBody.querySelectorAll("[data-subject-tab]").forEach(button => {
        const isSelected = button.dataset.subjectTab === tabName;
        button.setAttribute("aria-selected", String(isSelected));
        button.tabIndex = isSelected ? 0 : -1;
    });

    modalBody.querySelectorAll("[data-subject-panel]").forEach(panel => {
        panel.hidden = panel.dataset.subjectPanel !== tabName;
    });
}

function renderSubjectInterviewQuestions(subject) {
    const foundationQuestions = [...subject.questions, ...interviewQuestionExtras[subject.id]];
    const professionalQuestions = professionalInterviewQuestions[subject.id];
    const renderItems = (questions, startIndex, isProfessional = false) => questions
        .map((question, index) => `
            <details class="question-item${isProfessional ? " professional-question" : ""}">
                <summary>${isProfessional ? "Professional scenario · " : `${startIndex + index + 1}. `}${question[0]}</summary>
                <p>${question[1]}</p>
            </details>
        `).join("");

    return `${renderItems(foundationQuestions, 0)}
        <h4 class="professional-question-heading">Professional scenario questions</h4>
        <p class="panel-intro">Work through the diagnosis, trade-offs and validation plan before opening each model answer.</p>
        ${renderItems(professionalQuestions, foundationQuestions.length, true)}`;
}

function openSubject(id) {
    const subject = subjects.find(item => item.id === id);

    if (!subject) return;

    const curriculum = subjectCurricula[subject.id];
    const notes = subjectStudyNotes[subject.id];
    const circuitNotes = subjectCircuitNotes[subject.id];

    modalBody.innerHTML = `
        <p class="eyebrow">SUBJECT LEARNING ROADMAP</p>
        <img
            class="subject-image"
            src="${subject.image}"
            alt="${subject.name} related image"
        >
        <h2>${subject.icon} ${subject.name}</h2>
        <p>${subject.basics}</p>

        <div class="subject-tabs" role="tablist" aria-label="${subject.name} learning sections">
            <button class="subject-tab" id="tab-notes" type="button" role="tab" aria-controls="panel-notes" aria-selected="true" data-subject-tab="notes">Study Notes</button>
            <button class="subject-tab" id="tab-circuits" type="button" role="tab" aria-controls="panel-circuits" aria-selected="false" data-subject-tab="circuits" tabindex="-1">Circuits & Diagrams</button>
            <button class="subject-tab" id="tab-interview" type="button" role="tab" aria-controls="panel-interview" aria-selected="false" data-subject-tab="interview" tabindex="-1">Interview Prep</button>
        </div>

        <section id="panel-notes" class="subject-panel" role="tabpanel" aria-labelledby="tab-notes" data-subject-panel="notes">
            <h3>Clear subject notes</h3>
            <p class="panel-intro">Read the short explanations first, then use the roadmap below as your study checklist.</p>
            <ol class="study-notes">${notes.map(note => `<li>${note}</li>`).join("")}</ol>
            <div class="curriculum-levels">
                ${curriculum.map((stage, index) => `
                    <section class="curriculum-level">
                        <h3>${stage.level}</h3>
                        <p class="curriculum-guide">${curriculumGuides[subject.id][index]}</p>
                        <ul>${stage.concepts.map(concept => `<li>${concept}</li>`).join("")}</ul>
                    </section>
                `).join("")}
            </div>
            <h3>Topic checklist</h3>
            <ul class="expanded-topic-list">${getSubjectTopics(subject).map(topic => `<li>${topic}</li>`).join("")}</ul>
            <p class="curriculum-sources">
                Learn more:
                <a href="https://www.aicte.gov.in/sites/default/files/Model_Curriculum/Final_ECE.pdf" target="_blank" rel="noopener noreferrer">AICTE ECE Model Curriculum</a> ·
                <a href="https://nptel.ac.in/courses" target="_blank" rel="noopener noreferrer">NPTEL courses</a>.
            </p>
        </section>

        <section id="panel-circuits" class="subject-panel" role="tabpanel" aria-labelledby="tab-circuits" data-subject-panel="circuits" hidden>
            <h3>Important circuits, systems and diagrams</h3>
            <p class="panel-intro">This guide includes ${circuitNotes.length} circuit or system topics, each with its own visible diagram. Open any note for its operating principles and useful equations. Non-circuit subjects use system diagrams.</p>
            <figure class="subject-diagram">
                <h4>Visual guide: ${subjectDiagrams[subject.id].title}</h4>
                ${renderDiagramSvg(subject.id)}
                <figcaption>${subjectDiagrams[subject.id].description}</figcaption>
            </figure>
            <div class="circuit-topic-grid">
                ${circuitNotes.map(circuit => `
                    <article class="circuit-topic-card">
                        ${renderCircuitTopicDiagram(subject.id, circuit[0])}
                        <details class="circuit-note">
                            <summary>Open notes: ${circuit[0]}</summary>
                            <div class="circuit-note-body"><p>${circuit[1]}</p></div>
                        </details>
                    </article>
                `).join("")}
            </div>
            <p class="diagram-note">These are learning diagrams, not build-ready instructions. Check component datasheets and lab safety guidance before constructing a circuit.</p>
        </section>

        <section id="panel-interview" class="subject-panel" role="tabpanel" aria-labelledby="tab-interview" data-subject-panel="interview" hidden>
            <h3>Interview topics</h3>
            <p class="panel-intro">Practise explaining these topics aloud. Select any question bar to reveal a sample answer.</p>
            <ul class="interview-topic-list">${getSubjectTopics(subject).map(topic => `<li>${topic}</li>`).join("")}</ul>
            <div class="interview-question-list">${renderSubjectInterviewQuestions(subject)}</div>
            <button class="btn primary" id="goToQuestions">Practise in the question bank →</button>
        </section>

    `;

    modalBody.querySelectorAll("[data-subject-tab]").forEach(button => {
        button.addEventListener("click", () => setSubjectTab(button.dataset.subjectTab));
        button.addEventListener("keydown", event => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
            event.preventDefault();
            const tabs = [...modalBody.querySelectorAll("[data-subject-tab]")];
            const currentIndex = tabs.indexOf(button);
            const nextIndex = event.key === "Home" ? 0
                : event.key === "End" ? tabs.length - 1
                : (currentIndex + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
            tabs[nextIndex].focus();
            setSubjectTab(tabs[nextIndex].dataset.subjectTab);
        });
    });

    subjectModal.hidden = false;

    document.getElementById("goToQuestions").addEventListener("click", () => {
        document.getElementById("questionSubject").value = subject.id;
        renderQuestions();
        subjectModal.hidden = true;
        showDashboardPage("questions", true);
    });
}

document.getElementById("closeModal").addEventListener("click", () => {
    subjectModal.hidden = true;
});

subjectModal.addEventListener("click", event => {
    if (event.target === subjectModal) {
        subjectModal.hidden = true;
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        subjectModal.hidden = true;
    }
});

// INTERVIEW QUESTION BANK

const questionSubject = document.getElementById("questionSubject");
const questionList = document.getElementById("questionList");
const glassdoorRoleBySubject = {
    basic: "Electrical Engineer",
    analog: "Analog Design Engineer",
    digital: "Digital Design Engineer",
    verilog: "RTL Design Engineer",
    dsp: "DSP Engineer",
    control: "Control Systems Engineer",
    embedded: "Embedded Software Engineer",
    ccn: "Network Engineer",
    iot: "IoT Engineer",
    sensors: "Instrumentation Engineer",
    semi: "Semiconductor Engineer",
    aptitude: "Engineering Graduate",
    automotive: "Automotive Electronics Engineer",
    communications: "RF Engineer",
    electromagnetics: "Antenna Engineer",
    "power-electronics": "Power Electronics Engineer",
    vlsi: "VLSI Design Engineer"
};

function getGlassdoorRoleUrl(role) {
    const roleSlug = role.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    return `https://www.glassdoor.com/Interview/${roleSlug}-interview-questions-SRCH_KO0,${role.length}.htm`;
}

questionSubject.innerHTML = subjects.map(subject => `
    <option value="${subject.id}">${subject.name}</option>
`).join("");

function renderGlassdoorSubjectResources() {
    const selectedSubject = subjects.find(subject => subject.id === questionSubject.value);
    const selectedRole = selectedSubject && glassdoorRoleBySubject[selectedSubject.id];
    const selectedLinkMarkup = selectedSubject && selectedRole
        ? `<a href="${getGlassdoorRoleUrl(selectedRole)}" target="_blank" rel="noopener noreferrer">Glassdoor: ${selectedRole} interview questions ↗</a>`
        : "";
    const selectedResource = document.getElementById("selectedGlassdoorResource");
    const questionBankResource = document.getElementById("questionBankGlassdoorLink");

    selectedResource.innerHTML = selectedLinkMarkup;
    questionBankResource.innerHTML = selectedLinkMarkup;
    document.getElementById("glassdoorSubjectGrid").innerHTML = subjects.map(subject => {
        const role = glassdoorRoleBySubject[subject.id];
        return `
            <a href="${getGlassdoorRoleUrl(role)}" target="_blank" rel="noopener noreferrer">
                <strong>${subject.name}</strong>
                <span>Glassdoor · ${role} interviews ↗</span>
            </a>
        `;
    }).join("");
}

function renderQuestions() {
    const subject = subjects.find(item =>
        item.id === questionSubject.value
    );

    if (!subject) return;

    const standardQuestions = [...subject.questions, ...interviewQuestionExtras[subject.id]];
    const professionalQuestions = professionalInterviewQuestions[subject.id];
    questionList.innerHTML = `
        <h3>Core interview questions</h3>
        ${standardQuestions.map((question, index) => `
            <details class="question-item">
                <summary>${index + 1}. ${question[0]}</summary>
                <p>${question[1]}</p>
            </details>
        `).join("")}
        <h3 class="professional-question-heading">Professional scenario questions</h3>
        <p class="panel-intro">Explain your troubleshooting steps, assumptions, design trade-offs and verification plan.</p>
        ${professionalQuestions.map(question => `
            <details class="question-item professional-question">
                <summary>Professional scenario · ${question[0]}</summary>
                <p>${question[1]}</p>
            </details>
        `).join("")}
    `;
}

function renderFeaturedInterviewQuestions() {
    const featuredQuestions = [
        ["analog", 0],
        ["embedded", 0],
        ["sensors", 1],
        ["communications", 0],
        ["power-electronics", 0],
        ["vlsi", 0]
    ];
    const container = document.getElementById("featuredInterviewQuestions");

    container.innerHTML = featuredQuestions.map(([subjectId, questionIndex]) => {
        const subject = subjects.find(item => item.id === subjectId);
        const question = professionalInterviewQuestions[subjectId][questionIndex];

        return `
            <details class="question-item featured-interview-question">
                <summary><span>${subject.name}</span>${question[0]}</summary>
                <p>${question[1]}</p>
                <p class="answer-coaching"><strong>Interview tip:</strong> explain the measurements or evidence you would collect before proposing a fix.</p>
            </details>
        `;
    }).join("");
}

questionSubject.addEventListener("change", () => {
    renderQuestions();
    renderGlassdoorSubjectResources();
});

// QUESTION OF THE DAY

const dailyQuestions = [
    [
        "What is the difference between a microprocessor and a microcontroller?",
        "A microcontroller integrates a CPU, memory and peripherals on one chip. A microprocessor typically needs more external components."
    ],
    [
        "What is the function of a diode?",
        "A diode allows current to flow mainly in one direction under normal operating conditions."
    ],
    [
        "What is an interrupt in an embedded system?",
        "An interrupt signals the processor that an event needs attention, allowing it to respond to hardware or software events."
    ],
    [
        "What is the Nyquist sampling criterion?",
        "For a band-limited signal with maximum frequency fmax, ideal sampling requires a sampling frequency greater than 2 times fmax."
    ],
    [
        "What is negative feedback?",
        "Negative feedback returns part of a system's output in opposition to its input, helping control system behaviour."
    ]
];

let dailyIndex = 0;

function updateDailyQuestion() {
    document.getElementById("dailyQuestion").textContent =
        dailyQuestions[dailyIndex][0];

    document.getElementById("dailyAnswer").textContent =
        dailyQuestions[dailyIndex][1];

    document.getElementById("dailyAnswer").hidden = true;

    document.getElementById("revealAnswer").textContent =
        "Reveal answer ↓";
}

const generalAptitudeResources = [
    {
        name: "Quantitative Aptitude",
        description: "Percentages, ratios, time and work, profit and loss",
        url: "https://www.indiabix.com/aptitude/questions-and-answers/"
    },
    {
        name: "Logical Reasoning",
        description: "Series, puzzles, coding-decoding and patterns",
        url: "https://www.indiabix.com/logical-reasoning/questions-and-answers/"
    },
    {
        name: "Verbal Ability",
        description: "Grammar, vocabulary and sentence correction",
        url: "https://www.indiabix.com/verbal-ability/questions-and-answers/"
    },
    {
        name: "Data Interpretation",
        description: "Tables, charts and numerical data",
        url: "https://www.google.com/search?q=data+interpretation+placement+aptitude+practice"
    },
    {
        name: "Placement Mock Tests",
        description: "Practice common placement aptitude questions",
        url: "https://www.geeksforgeeks.org/aptitude-gq/"
    }
];

function renderAptitudeLinks() {
    const generalGrid = document.getElementById("aptitudeGeneralGrid");
    const subjectGrid = document.getElementById("aptitudeSubjectGrid");

    if (!generalGrid || !subjectGrid) {
        console.error("Aptitude section HTML elements are missing.");
        return;
    }

    generalGrid.innerHTML = generalAptitudeResources.map(resource => `
        <a class="aptitude-card"
           href="${resource.url}"
           target="_blank"
           rel="noopener noreferrer">
            <strong>${resource.name}</strong>
            <span>${resource.description}</span>
            <span class="aptitude-link-text">Start practicing ↗</span>
        </a>
    `).join("");

    if (!Array.isArray(subjects)) {
        console.error("The subjects list is missing or invalid.");
        subjectGrid.innerHTML = "<p>Subject list could not be loaded.</p>";
        return;
    }

    subjectGrid.innerHTML = subjects.map(subject => {
        const query = `${subject.name} technical MCQs quizzes interview questions`;
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

        return `
            <a class="aptitude-card"
               href="${url}"
               target="_blank"
               rel="noopener noreferrer">
                <strong>${subject.name}</strong>
                <span>${subject.desc || "Technical practice and revision"}</span>
                <span class="aptitude-link-text">Practice MCQs &amp; questions ↗</span>
            </a>
        `;
    }).join("");
}

document.getElementById("revealAnswer").addEventListener("click", () => {
    const answer = document.getElementById("dailyAnswer");

    answer.hidden = !answer.hidden;

    document.getElementById("revealAnswer").textContent =
        answer.hidden ? "Reveal answer ↓" : "Hide answer ↑";
});

// APTITUDE QUIZ

const quizQuestionPool = [
    { id: "q01", topic: "NUMERICAL ABILITY", question: "What is 3/5 of 250?", options: ["125", "150", "175", "200"], correct: 1, explanation: "250 × 3/5 = 150." },
    { id: "q02", topic: "NUMERICAL ABILITY", question: "A product costs ₹640. What is its price after a 15% discount?", options: ["₹544", "₹550", "₹560", "₹576"], correct: 0, explanation: "The discount is ₹96, so the sale price is ₹640 − ₹96 = ₹544." },
    { id: "q03", topic: "RATIO AND PROPORTION", question: "Two quantities are in the ratio 2:3 and sum to 45. What is the larger quantity?", options: ["18", "25", "27", "30"], correct: 2, explanation: "There are 5 equal parts; each is 45/5 = 9. The larger quantity is 3 × 9 = 27." },
    { id: "q04", topic: "NUMERICAL REASONING", question: "A train travels 180 km in 3 hours at a constant speed. What is its speed?", options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"], correct: 2, explanation: "Speed = distance/time = 180/3 = 60 km/h." },
    { id: "q05", topic: "TIME AND WORK", question: "A can finish a job in 12 days and B in 18 days. How long do they take working together?", options: ["6 days", "7.2 days", "9 days", "15 days"], correct: 1, explanation: "Their combined daily rate is 1/12 + 1/18 = 5/36 job per day, so the time is 36/5 = 7.2 days." },
    { id: "q06", topic: "NUMERICAL ABILITY", question: "Find the simple interest on ₹5,000 at 8% per year for 2 years.", options: ["₹400", "₹600", "₹800", "₹1,000"], correct: 2, explanation: "Simple interest = principal × rate × time / 100 = ₹800." },
    { id: "q07", topic: "STATISTICS", question: "What is the mean of 14, 18, 22 and 26?", options: ["18", "19", "20", "21"], correct: 2, explanation: "The sum is 80; dividing by 4 gives a mean of 20." },
    { id: "q08", topic: "NUMBER SERIES", question: "Find the next number: 2, 6, 12, 20, 30, __", options: ["36", "40", "42", "44"], correct: 2, explanation: "The terms are n(n + 1); the next is 6 × 7 = 42." },
    { id: "q09", topic: "PROBABILITY", question: "A bag has 5 red and 3 blue balls. One blue ball is removed. What is the probability the next ball is red?", options: ["3/8", "5/8", "5/7", "3/7"], correct: 2, explanation: "After removing a blue ball, 5 red balls remain among 7 total balls, so the probability is 5/7." },
    { id: "q10", topic: "DATA INTERPRETATION", question: "A firm's revenue rises from ₹120 lakh to ₹150 lakh. What is the percentage increase?", options: ["20%", "25%", "30%", "35%"], correct: 1, explanation: "The increase is ₹30 lakh. 30/120 × 100 = 25%." },
    { id: "q11", topic: "ALGEBRA", question: "Solve 3x − 7 = 20.", options: ["7", "8", "9", "11"], correct: 2, explanation: "Add 7 to both sides and divide by 3: x = 27/3 = 9." },
    { id: "q12", topic: "GEOMETRY", question: "What is the area of a rectangle measuring 12 cm by 7 cm?", options: ["38 cm²", "72 cm²", "84 cm²", "96 cm²"], correct: 2, explanation: "Area = length × width = 12 × 7 = 84 cm²." },
    { id: "q13", topic: "VERBAL ABILITY", question: "Choose the grammatically correct sentence.", options: ["Each of the components have been tested.", "Each of the components has been tested.", "Each of the component have been tested.", "Each components has been tested."], correct: 1, explanation: "Each is singular and takes the singular verb has." },
    { id: "q14", topic: "VERBAL ABILITY", question: "Complete the sentence: She has been preparing for the examination ___ January.", options: ["for", "from", "since", "during"], correct: 2, explanation: "Since is used with a specific starting point in time." },
    { id: "q15", topic: "VOCABULARY", question: "Choose the word closest in meaning to 'scarce'.", options: ["Abundant", "Limited", "Ordinary", "Visible"], correct: 1, explanation: "Scarce means insufficient or limited in quantity." },
    { id: "q16", topic: "VERBAL REASONING", question: "Select the best completion: 'The measurements were repeated ___'", options: ["because the first set contained an inconsistency.", "although the apparatus was the only.", "unless the results were careful.", "despite the data had recorded."], correct: 0, explanation: "The first option is the only grammatically complete and logically coherent reason." },
    { id: "q17", topic: "READING COMPREHENSION", question: "A sensor is calibrated against a reference before use. What is the primary purpose?", options: ["To increase its physical size", "To compare its readings with a known standard", "To eliminate the need for units", "To guarantee zero measurement uncertainty"], correct: 1, explanation: "Calibration establishes the relationship between an instrument's readings and a known reference; it does not eliminate all uncertainty." },
    { id: "q18", topic: "VERBAL ABILITY", question: "Choose the sentence with the correct use of 'fewer'.", options: ["The new design uses fewer energy.", "The new design uses fewer components.", "The new design uses fewer water.", "The new design uses fewer equipment."], correct: 1, explanation: "Fewer is used with countable plural nouns, such as components." },
    { id: "q19", topic: "NUMBER SERIES", question: "Find the next number: 1, 4, 9, 16, __", options: ["20", "24", "25", "32"], correct: 2, explanation: "These are consecutive squares; the next is 5² = 25." },
    { id: "q20", topic: "WORK RATE", question: "Three identical machines make 90 parts in 6 hours. At the same rate, how many parts do 4 machines make in 3 hours?", options: ["45", "60", "75", "120"], correct: 1, explanation: "Each machine makes 90/(3×6) = 5 parts per hour. Four machines for 3 hours make 60 parts." },
    { id: "q21", topic: "PROBABILITY", question: "A fair six-sided die is rolled. What is the probability of getting an even number or a number greater than 4?", options: ["1/3", "1/2", "2/3", "5/6"], correct: 2, explanation: "The qualifying outcomes are 2, 4, 5 and 6: 4/6 = 2/3." },
    { id: "q22", topic: "DATA INTERPRETATION", question: "A class has 40 students, and 30% study instrumentation. How many students is that?", options: ["10", "12", "14", "16"], correct: 1, explanation: "0.30 × 40 = 12 students." },
    { id: "q23", topic: "ALGEBRA", question: "If x + y = 14 and x − y = 4, what is x?", options: ["5", "7", "9", "10"], correct: 2, explanation: "Adding the equations gives 2x = 18, so x = 9." },
    { id: "q24", topic: "RATIO AND PROPORTION", question: "A map uses a scale of 1:50,000. What actual distance does 4 cm represent?", options: ["200 m", "500 m", "2 km", "20 km"], correct: 2, explanation: "4 × 50,000 = 200,000 cm = 2 km." },
    { id: "q25", topic: "VERBAL ABILITY", question: "Choose the best connector: 'The prototype was inexpensive; ___, it met the accuracy requirement.'", options: ["however", "therefore", "for example", "similarly"], correct: 0, explanation: "However signals the contrast between low cost and satisfying the accuracy requirement." },
    { id: "q26", topic: "NUMERICAL REASONING", question: "A value of 80 is increased by 25% and then decreased by 20%. What is the final value?", options: ["80", "84", "96", "100"], correct: 0, explanation: "80 × 1.25 × 0.80 = 80; the percentage changes cancel multiplicatively." },
    { id: "q27", topic: "LOGICAL REASONING", question: "All relays in a test batch passed inspection. Unit R is from that batch. What follows?", options: ["Unit R failed inspection.", "Unit R passed inspection.", "Unit R was not inspected.", "No conclusion is possible."], correct: 1, explanation: "The statement applies to every relay in the batch, including Unit R." },
    { id: "q28", topic: "NUMERICAL ABILITY", question: "A laboratory records 18, 22, 25 and 35 readings. What is their median?", options: ["22", "23.5", "24", "25"], correct: 1, explanation: "With four ordered values, the median is (22 + 25)/2 = 23.5." }
];

const QUIZ_LENGTH = 7;
const QUIZ_STORAGE_KEY = "electrolearn.usedAptitudeQuestionIds";
const quizStatus = document.getElementById("quizStatus");
let quizQuestions = [];
let quizTestNumber = 1;
let quizIndex = 0;
let quizScore = 0;
let selectedOption = null;
let answered = false;

function loadUsedQuizQuestionIds() {
    try {
        const savedIds = localStorage.getItem(QUIZ_STORAGE_KEY);
        if (!savedIds) return new Set();

        const parsedIds = JSON.parse(savedIds);
        if (!Array.isArray(parsedIds) || !parsedIds.every(id => typeof id === "string")) {
            throw new Error("Saved quiz progress is not a list of question IDs.");
        }

        return new Set(parsedIds.filter(id =>
            quizQuestionPool.some(question => question.id === id)
        ));
    } catch (error) {
        console.error("Unable to read saved quiz progress.", error);
        quizStatus.textContent = "Quiz progress could not be read from this browser; question rotation will restart.";
        return new Set();
    }
}

function saveUsedQuizQuestionIds(usedIds) {
    try {
        localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify([...usedIds]));
        return true;
    } catch (error) {
        console.error("Unable to save quiz progress.", error);
        quizStatus.textContent = "This browser could not save quiz progress. Questions may repeat after you leave this page.";
        return false;
    }
}

function startQuizTest() {
    const usedIds = loadUsedQuizQuestionIds();
    let availableQuestions = quizQuestionPool.filter(question =>
        !usedIds.has(question.id)
    );

    if (availableQuestions.length < QUIZ_LENGTH) {
        usedIds.clear();
        availableQuestions = [...quizQuestionPool];
        quizStatus.textContent = "You completed the full question bank. A new question cycle is starting.";
    }

    for (let index = availableQuestions.length - 1; index > 0; index--) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [availableQuestions[index], availableQuestions[swapIndex]] =
            [availableQuestions[swapIndex], availableQuestions[index]];
    }

    quizQuestions = availableQuestions.slice(0, QUIZ_LENGTH);
    quizTestNumber = Math.floor(usedIds.size / QUIZ_LENGTH) + 1;
    quizIndex = 0;
    quizScore = 0;

    quizQuestions.forEach(question => usedIds.add(question.id));
    saveUsedQuizQuestionIds(usedIds);
    renderQuiz();
}

function renderQuiz() {
    const question = quizQuestions[quizIndex];

    selectedOption = null;
    answered = false;

    document.getElementById("quizTopic").textContent =
        question.topic;

    document.getElementById("quizProgress").textContent =
        `Test ${quizTestNumber} · Question ${quizIndex + 1} of ${quizQuestions.length}`;

    document.getElementById("quizQuestion").textContent =
        question.question;

    document.getElementById("quizOptions").innerHTML =
        question.options.map((option, index) => `
            <button class="quiz-option" data-index="${index}">
                <strong>${String.fromCharCode(65 + index)}.</strong>
                ${option}
            </button>
        `).join("");

    document.getElementById("quizFeedback").textContent = "";
    document.getElementById("checkAnswer").hidden = false;
    document.getElementById("nextQuestion").hidden = true;

    document.querySelectorAll(".quiz-option").forEach(button => {
        button.addEventListener("click", () => {
            if (answered) return;

            selectedOption = Number(button.dataset.index);

            document.querySelectorAll(".quiz-option").forEach(option => {
                option.classList.remove("selected");
            });

            button.classList.add("selected");
        });
    });
}

document.getElementById("checkAnswer").addEventListener("click", () => {
    if (selectedOption === null) {
        document.getElementById("quizFeedback").textContent =
            "Please select an answer first.";
        return;
    }

    answered = true;

    const question = quizQuestions[quizIndex];

    document.querySelectorAll(".quiz-option").forEach((button, index) => {
        if (index === question.correct) {
            button.classList.add("correct");
        }

        if (index === selectedOption && index !== question.correct) {
            button.classList.add("wrong");
        }
    });

    const isCorrect = selectedOption === question.correct;
    if (isCorrect) quizScore += 1;

    document.getElementById("quizFeedback").textContent =
        (isCorrect ? "Correct! " : "Not quite. ") +
        question.explanation +
        (quizIndex === quizQuestions.length - 1
            ? ` Test complete: ${quizScore}/${quizQuestions.length} correct.`
            : "");

    document.getElementById("checkAnswer").hidden = true;
    document.getElementById("nextQuestion").hidden = false;

    document.getElementById("nextQuestion").textContent =
        quizIndex === quizQuestions.length - 1
            ? `Start Test ${quizTestNumber === quizQuestionPool.length / QUIZ_LENGTH ? 1 : quizTestNumber + 1} →`
            : "Next Question →";
});

document.getElementById("nextQuestion").addEventListener("click", () => {
    if (quizIndex === quizQuestions.length - 1) {
        startQuizTest();
        return;
    }

    quizIndex += 1;
    renderQuiz();
});

// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();

// DASHBOARD PAGE NAVIGATION

const dashboardLinks = [...document.querySelectorAll("[data-page-link]")];
const dashboardSections = [...document.querySelectorAll("[data-page-section]")];
const pageHashTargets = {
    home: "home",
    subjects: "subjects",
    interview: "interview",
    questions: "questionBank",
    aptitude: "aptitude",
    circuits: "circuits",
    projects: "projects"
};
const appLayout = document.querySelector(".app-layout");
const sidebarToggle = document.getElementById("sidebarToggle");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const sidebarToggleLabel = sidebarToggle.querySelector(".sidebar-toggle-label");
const mobileSidebarQuery = window.matchMedia("(max-width: 600px)");

function setSidebarOpen(open) {
    if (mobileSidebarQuery.matches) {
        appLayout.classList.toggle("mobile-sidebar-open", open);
        sidebarBackdrop.hidden = !open;
        sidebarToggle.setAttribute("aria-expanded", String(open));
        sidebarToggleLabel.textContent = open ? "Close navigation" : "Open navigation";
        return;
    }

    appLayout.classList.remove("mobile-sidebar-open");
    appLayout.classList.toggle("sidebar-collapsed", !open);
    sidebarBackdrop.hidden = true;
    sidebarToggle.setAttribute("aria-expanded", String(open));
    sidebarToggleLabel.textContent = open ? "Collapse navigation" : "Expand navigation";
}

setSidebarOpen(!mobileSidebarQuery.matches);
let previousMobileSidebarMode = mobileSidebarQuery.matches;
sidebarToggle.addEventListener("click", () => {
    setSidebarOpen(sidebarToggle.getAttribute("aria-expanded") !== "true");
});
sidebarBackdrop.addEventListener("click", () => setSidebarOpen(false));
document.addEventListener("keydown", event => {
    if (event.key === "Escape" && mobileSidebarQuery.matches) setSidebarOpen(false);
});
window.addEventListener("resize", () => {
    if (previousMobileSidebarMode !== mobileSidebarQuery.matches) {
        previousMobileSidebarMode = mobileSidebarQuery.matches;
        setSidebarOpen(!mobileSidebarQuery.matches);
    }
});
document.querySelector(".sidebar-nav").addEventListener("click", event => {
    if (event.target.closest("[data-page-link]") && mobileSidebarQuery.matches) {
        setSidebarOpen(false);
    }
});

function showDashboardPage(page, updateHistory = false) {
    const pageExists = dashboardSections.some(section => section.dataset.pageSection === page);
    if (!pageExists) page = "home";

    appLayout.classList.toggle("home-view", page === "home");
    if (page === "home") {
        setSidebarOpen(!mobileSidebarQuery.matches);
    } else {
        appLayout.classList.remove("sidebar-collapsed", "mobile-sidebar-open");
        sidebarBackdrop.hidden = true;
        sidebarToggle.setAttribute("aria-expanded", "false");
        sidebarToggleLabel.textContent = "Open navigation";
    }

    dashboardSections.forEach(section => {
        section.hidden = section.dataset.pageSection !== page;
    });

    dashboardLinks.forEach(link => {
        if (link.dataset.pageLink === page) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    if (updateHistory) {
        history.pushState({ page }, "", `#${pageHashTargets[page]}`);
    }

    window.scrollTo(0, 0);
}

function showPageFromHash() {
    const targetId = decodeURIComponent(window.location.hash.slice(1));
    const target = targetId ? document.getElementById(targetId) : null;
    const pageSection = target && target.closest("[data-page-section]");
    showDashboardPage(pageSection ? pageSection.dataset.pageSection : "home");
}

document.addEventListener("click", event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = decodeURIComponent(link.getAttribute("href").slice(1));
    const target = targetId ? document.getElementById(targetId) : null;
    const pageSection = target && target.closest("[data-page-section]");
    const page = link.dataset.pageLink || (pageSection && pageSection.dataset.pageSection);
    if (!page) return;

    event.preventDefault();
    showDashboardPage(page, true);
});

window.addEventListener("popstate", showPageFromHash);
showPageFromHash();

// INITIALISE THE WEBSITE

renderSubjects();
renderQuestions();
renderGlassdoorSubjectResources();
renderFeaturedInterviewQuestions();
updateDailyQuestion();
startQuizTest();
renderAptitudeLinks();

/* =====================================
   INTERVIEW VIDEO LINKS FOR ALL SUBJECTS
===================================== */

const interviewVideoSubjects = [
    {
        name: "Basic Electronics",
        category: "CORE ELECTRONICS",
        icon: "⚡",
        description: "Ohm's law, Kirchhoff's laws, circuits, diodes and basic interview questions.",
        search: "basic electronics technical interview questions answers"
    },
    {
        name: "Analog Electronic Circuits",
        category: "CORE ELECTRONICS",
        icon: "〰",
        description: "Op-amps, transistor amplifiers, feedback, oscillators and filters.",
        search: "analog electronics interview questions op amp transistor"
    },
    {
        name: "Digital Design (DD)",
        category: "DIGITAL ELECTRONICS",
        icon: "▦",
        description: "Logic gates, Boolean algebra, K-maps, flip-flops and counters.",
        search: "digital design interview questions logic gates flip flops"
    },
    {
        name: "Verilog HDL",
        category: "VLSI & DIGITAL DESIGN",
        icon: "{ }",
        description: "Verilog coding, testbenches, blocking and non-blocking assignments.",
        search: "Verilog HDL technical interview questions answers"
    },
    {
        name: "Digital Signal Processing (DSP)",
        category: "SIGNALS & SYSTEMS",
        icon: "〰",
        description: "Sampling, aliasing, convolution, FFT, Z-transform and digital filters.",
        search: "digital signal processing DSP interview questions"
    },
    {
        name: "Control Systems",
        category: "CONTROL ENGINEERING",
        icon: "⟳",
        description: "Transfer functions, stability, feedback, Bode plots and PID controllers.",
        search: "control systems engineering interview questions PID stability"
    },
    {
        name: "Embedded Controllers",
        category: "EMBEDDED SYSTEMS",
        icon: "▣",
        description: "Embedded C, microcontrollers, interrupts, timers, ADC and communication protocols.",
        search: "embedded systems microcontroller embedded C interview questions"
    },
    {
        name: "Computer Communication Networks (CCN)",
        category: "NETWORKING",
        icon: "⌘",
        description: "OSI model, TCP/IP, routers, switches and network protocols.",
        search: "computer communication networks CCN interview questions OSI TCP IP"
    },
    {
        name: "Internet of Things (IoT)",
        category: "CONNECTED DEVICES",
        icon: "◉",
        description: "Arduino, ESP32, sensors, MQTT, cloud connectivity and IoT projects.",
        search: "IoT interview questions Arduino ESP32 MQTT"
    },
    {
        name: "Sensors & Instrumentation",
        category: "INSTRUMENTATION",
        icon: "⌖",
        description: "Sensors, transducers, RTDs, thermocouples, calibration and measurement.",
        search: "sensors instrumentation engineering interview questions"
    },
    {
        name: "Semiconductor Devices",
        category: "SEMICONDUCTORS",
        icon: "◒",
        description: "PN junctions, doping, diodes, BJT, MOSFET and semiconductor physics.",
        search: "semiconductor devices interview questions PN junction MOSFET BJT"
    },
    {
        name: "Engineering Mathematics & Aptitude",
        category: "PLACEMENT APTITUDE",
        icon: "√",
        description: "Quantitative aptitude, percentages, probability, reasoning and numerical problems.",
        search: "engineering placement aptitude questions with solutions"
    },
    {
        name: "Automotive & Industrial Electronics",
        category: "INDUSTRIAL & AUTOMOTIVE",
        icon: "⚙",
        description: "ECUs, CAN bus, automotive sensors, PLC, SCADA and industrial control.",
        search: "automotive embedded systems CAN bus PLC industrial electronics interview questions"
    }
];

const videoGrid = document.getElementById("videoSubjectGrid");
const videoSearch = document.getElementById("videoSearch");

function renderInterviewVideos() {
    if (!videoGrid || !videoSearch) return;

    const searchTerm = videoSearch.value.toLowerCase().trim();

    const matchingSubjects = interviewVideoSubjects.filter(subject => {
        const searchableContent = [
            subject.name,
            subject.category,
            subject.description,
            subject.search
        ].join(" ").toLowerCase();

        return searchableContent.includes(searchTerm);
    });

    if (matchingSubjects.length === 0) {
        videoGrid.innerHTML = `
            <p class="video-empty">
                No matching subjects found. Try another search.
            </p>
        `;
        return;
    }

    videoGrid.innerHTML = matchingSubjects.map(subject => {
        const youtubeSearchUrl =
            "https://www.youtube.com/results?search_query=" +
            encodeURIComponent(subject.search);

        return `
            <article class="video-subject-card">
                <div class="video-subject-icon" aria-hidden="true">
                    ${subject.icon}
                </div>

                <span class="video-category">
                    ${subject.category}
                </span>

                <h3>${subject.name}</h3>

                <p>${subject.description}</p>

                <a
                    class="video-watch-link"
                    href="${youtubeSearchUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Find ${subject.name} interview videos on YouTube"
                >
                    Watch Interview Videos ↗
                </a>
            </article>
        `;
    }).join("");
}

if (videoSearch && videoGrid) {
    videoSearch.addEventListener("input", renderInterviewVideos);
    renderInterviewVideos();
}
