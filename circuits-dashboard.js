/* ElectroLearn Circuits Dashboard. Vanilla JS; no framework required. */
(() => {
"use strict";
const root=document.getElementById("elCircuits"); if(!root||root.dataset.ready)return; root.dataset.ready="1";
const $=id=>document.getElementById(id), PROGRESS="electroLearnCircuitProgressV1", QUIZZES="electroLearnCircuitQuizV1";
const data=[
["ohm","Ohm's Law & Resistors","Circuit Fundamentals","Beginner","Relate voltage, current, and resistance.","DC source","Resistor","Multimeter","Ohm's law is V = I × R. In a series path, current is the same through each component. Measure voltage across a component and current through the path.","Circuit analysis","Lab measurements","What current flows through 10 Ω at 5 V?",["0.5 A","2 A","50 A","0.05 A"],0,"I = V/R = 5/10 = 0.5 A.","resistor"],
["divider","Voltage Divider","Circuit Fundamentals","Beginner","Create a lower voltage using two series resistors.","Input source","R1 and R2","Ground reference","With a light load, Vout = Vin × R2/(R1 + R2). A connected load changes the effective lower resistance, so account for loading.","Reference voltages","Sensor interfaces","With Vin = 10 V and equal resistors, Vout is:",["10 V","5 V","2 V","0 V"],1,"Equal resistors divide the input voltage in half.","divider"],
["led","LED Current Limiter","Circuit Fundamentals","Beginner","Drive an LED safely from a DC supply.","DC supply","LED","Series resistor","The resistor limits LED current. Estimate R = (Vsupply − Vf)/I and check the LED datasheet. Do not connect a bare LED directly to a voltage source.","Status indicators","Embedded projects","Why is a resistor placed in series with an LED?",["Limit current","Store data","Convert DC to AC","Change polarity"],0,"The resistor limits current and helps prevent LED damage.","led"],
["rc","RC Low-Pass Filter","Filters & Signals","Beginner","Pass slow signal changes and attenuate higher frequencies.","Resistor","Capacitor","Input and output","The resistor is in series with input; the capacitor connects output to ground. Cutoff fc = 1/(2πRC). Above cutoff, output amplitude decreases.","Noise reduction","ADC filtering","If R increases, cutoff frequency generally:",["Increases","Decreases","Always doubles","Does not change"],1,"fc = 1/(2πRC), so increasing R lowers cutoff frequency.","rc"],
["clipper","Diode Clipper","Diodes & Rectifiers","Intermediate","Limit a waveform above or below a chosen level.","Diode(s)","Resistor","AC input","A diode clipper conducts over part of the waveform and limits that portion. Clipping level depends on diode orientation, forward drop, and any bias source.","Wave shaping","Signal conditioning","A clipper is used to:",["Limit waveform amplitude","Measure temperature","Store code","Generate Wi-Fi"],0,"A clipper removes or limits waveform portions beyond a threshold.","diode"],
["half","Half-Wave Rectifier","Diodes & Rectifiers","Beginner","Convert one half-cycle of AC into pulsating DC.","AC source","One diode","Load resistor","The diode conducts on one half-cycle and blocks the other. A smoothing capacitor reduces ripple but must be selected for voltage and load current.","AC-to-DC concepts","Power supplies","How many diodes are in a basic half-wave rectifier?",["One","Two","Four","Six"],0,"The basic half-wave rectifier uses one diode.","half"],
["bridge","Bridge Rectifier","Diodes & Rectifiers","Intermediate","Use both AC half-cycles to produce full-wave pulsating DC.","Four diodes","AC source","Load and optional capacitor","Two diodes conduct on each half-cycle, keeping load current in the same direction. A real bridge has two forward drops in the conducting path.","Power supplies","Rectifier labs","Load current direction is:",["Same for both half-cycles","Reversed each half-cycle","Always zero","Random"],0,"The bridge steers current through the load in the same direction.","bridge"],
["zener","Zener Shunt Regulator","Diodes & Rectifiers","Intermediate","Create an approximate voltage reference using reverse breakdown.","Zener diode","Series resistor","Supply and load","A reverse-biased Zener holds a roughly constant voltage in breakdown. The series resistor limits current; check current and power ratings.","Voltage references","Clamping","What is the series resistor's main role?",["Limit current","Increase breakdown voltage","Convert DC to AC","Replace the supply"],0,"The resistor limits current and drops excess input voltage.","zener"],
["bjt","BJT Low-Side Switch","Transistors & Amplifiers","Beginner","Use a small control signal to switch a load.","NPN transistor","Base resistor","Load and supply","Base current drives an NPN transistor toward saturation. For an inductive load, add a suitable flyback path. Select components for the load current.","Relay drivers","Load control","A typical NPN low-side load is between:",["Supply and collector","Base and ground only","Base and emitter only","Two GPIO pins"],0,"The load is commonly between positive supply and collector; emitter is near ground.","bjt"],
["ce","Common-Emitter Amplifier","Transistors & Amplifiers","Intermediate","Amplify small signals with a BJT voltage-gain stage.","BJT","Bias network","Collector/emitter resistors","The bias network sets the operating point. Small input changes produce larger collector-voltage changes in the active region, typically with inversion.","Sensor preamps","Analog labs","A common-emitter amplifier normally:",["Inverts the signal","Has no bias needs","Outputs only digital code","Has zero gain"],0,"Its midband output is typically about 180° out of phase with the input.","amplifier"],
["opamp","Inverting Op-Amp","Op-Amps & Analog","Intermediate","Amplify an input with adjustable, inverting gain.","Op-amp","Input resistor Rin","Feedback resistor Rf","For an ideal op-amp in its linear region, gain = −Rf/Rin. Real circuits are limited by supply rails, bandwidth, slew rate, and output current.","Signal conditioning","Audio stages","If Rf = 20 kΩ and Rin = 10 kΩ, gain is:",["−2","+2","−0.5","+10"],0,"Inverting gain is −Rf/Rin = −2.","opamp"],
["comp","Comparator","Op-Amps & Analog","Beginner","Compare two voltages and switch output state.","Comparator IC","Signal input","Reference voltage","The output changes according to which input is higher. A dedicated comparator is often preferable to an op-amp for switching. Hysteresis can reduce chatter.","Threshold detection","Zero-crossing detection","A comparator determines:",["Which voltage is higher","Wire resistance by itself","Code length","Capacitance automatically"],0,"A comparator compares two voltages.","comp"],
["timer","555 Astable Timer","Timing & Digital","Intermediate","Generate a repeating pulse or square wave.","555 IC","Timing resistor(s)","Timing capacitor","The capacitor repeatedly charges and discharges, toggling the output. Frequency and duty cycle depend on the circuit configuration and component values.","Blinkers","Pulse generation","In astable mode, a 555 typically makes:",["Repeating pulses","Only fixed DC","A temperature reading alone","An Ethernet frame"],0,"Astable operation repeatedly charges and discharges the timing capacitor.","timer"],
["logic","Basic Logic Gates","Timing & Digital","Beginner","Build Boolean functions with AND, OR, and NOT.","Logic IC or simulator","Digital inputs","Output indicator","AND is high only when all inputs are high; OR is high when at least one input is high; NOT inverts. Follow real IC voltage limits.","Digital systems","Control logic","A 2-input AND outputs 1 when:",["Both inputs are 1","Either input is 1","Both are 0","Only A is 1"],0,"AND is high only when both inputs are high.","logic"],
["latch","SR Latch","Timing & Digital","Intermediate","Store one bit using cross-coupled logic gates.","Two NOR or NAND gates","Set input","Reset input","An SR latch is a bistable element. Set/reset behaviour and forbidden input combinations depend on whether NOR or NAND gates are used.","Sequential logic","Switch debouncing concepts","An SR latch is:",["A bistable memory element","A rectifier","Only a filter","A voltage source"],0,"It holds one of two stable states and stores one bit.","latch"],
["rlc","Series RLC Resonance","Filters & Signals","Intermediate","Study resonance in resistor-inductor-capacitor networks.","Resistor","Inductor","Capacitor and AC source","At ideal series resonance, XL and XC cancel. f0 = 1/(2π√LC). Resistance limits current and affects resonance sharpness.","Frequency selection","Radio tuning concepts","At ideal series resonance, XL and XC are:",["Equal in magnitude","Both infinite","Always zero","Unrelated"],0,"At resonance, inductive and capacitive reactances cancel.","rlc"],
["ina","Instrumentation Amplifier","Op-Amps & Analog","Advanced","Amplify small differential signals while rejecting common-mode voltage.","Instrumentation amp","Gain-setting resistor","Differential sensor","High input impedance and common-mode rejection help measure small differential signals. Check input range, output swing, reference pin, and supply limits.","Bridge sensors","Strain gauges","A key advantage is:",["High input impedance and CMRR","No power needed","Wi-Fi output","Zero noise always"],0,"Instrumentation amplifiers are designed for accurate differential measurement.","ina"],
["ldr","LDR Light Sensor","Sensors & Instrumentation","Beginner","Convert a light-dependent resistance into a voltage.","LDR","Fixed resistor","Supply and ADC","An LDR usually has lower resistance as illumination rises. A divider converts resistance change into voltage; output direction depends on component placement.","Automatic lighting","Light measurement","An LDR's resistance usually falls when:",["Light increases","Light decreases","It becomes a battery","A pin changes name"],0,"Common LDRs have lower resistance at higher illumination.","sensor"],
["therm","NTC Thermistor","Sensors & Instrumentation","Beginner","Measure temperature changes via resistance changes.","NTC thermistor","Fixed resistor","Supply and ADC","An NTC thermistor's resistance decreases as temperature rises. A divider creates a measurable voltage; accurate conversion requires calibration or the datasheet equation.","Temperature monitoring","Embedded logging","For an NTC, when temperature rises, resistance:",["Falls","Rises","Always stays fixed","Becomes a source"],0,"NTC means negative temperature coefficient.","therm"],
["wheat","Wheatstone Bridge","Sensors & Instrumentation","Intermediate","Convert small resistance changes into differential voltage.","Four resistive arms","Excitation source","Differential measurement input","The bridge is balanced when its arm ratios match. A sensor resistance change unbalances it, producing a small differential voltage often amplified by an instrumentation amplifier.","Strain gauges","Pressure sensors","A bridge is balanced when:",["Arm ratios match","All resistors are zero","Supply is removed","Output is always shorted"],0,"Matching divider ratios produce zero ideal differential output.","bridge2"],
["pwm","PWM DC Motor Driver","Power & Motor Control","Intermediate","Control average motor power using switching and PWM.","DC motor","MOSFET or driver IC","PWM signal and protection","PWM varies the fraction of each cycle that the driver is on. Use a suitable driver and flyback protection; never power a motor directly from a microcontroller GPIO.","Robotics","Fan speed control","Increasing duty cycle generally increases average drive when:",["Supply/load are comparable","Motor is disconnected","PWM is not switching","Controller has no power"],0,"A larger duty cycle applies power for a larger fraction of each period.","motor"],
["buck","Buck Converter","Power & Motor Control","Advanced","Step down DC voltage efficiently using switching conversion.","Controlled switch","Inductor","Diode/synchronous switch and capacitor","The inductor stores and transfers energy over switching cycles. Ideal continuous-conduction output is approximately D × Vin; real design depends on feedback, ripple, layout, and ratings.","Embedded power rails","Battery devices","A buck converter primarily:",["Steps down DC voltage","Steps up AC frequency only","Measures light","Stores files"],0,"A buck converter is a DC-DC step-down converter.","buck"],
["mosfet","MOSFET Low-Side Switch","Power & Motor Control","Intermediate","Switch a load using a logic-level N-channel MOSFET.","N-channel MOSFET","Load","Gate control and pulldown","The load sits between positive supply and drain; source is near ground. Check RDS(on) at the actual gate voltage and thermal limits.","LED strips","Solenoid control","The source in a typical N-channel low-side switch is near:",["Ground","Gate input","Positive supply only","A floating point"],0,"The source is commonly grounded in a low-side N-channel switch.","mosfet"],
["adc","Sensor-to-ADC Interface","Embedded & Mixed Signal","Intermediate","Condition an analogue sensor signal for a microcontroller ADC.","Sensor","Optional divider/buffer","MCU ADC and common reference","Check ADC range, source impedance, resolution, and sampling needs. Never exceed absolute maximum pin voltage; use scaling or buffering if required.","Arduino projects","Data acquisition","Before connecting a sensor to an ADC, check:",["Input voltage limits","Only wire colour","Page title","Monitor brightness"],0,"The signal must stay within the ADC's allowed electrical range.","adc"],
["hbridge","H-Bridge Motor Control","Power & Motor Control","Advanced","Reverse DC motor polarity electronically.","H-bridge driver","DC motor","Motor supply and control inputs","Opposite diagonal switch pairs apply opposite polarities. Use safe switching sequences and prevent shoot-through; check driver and motor current ratings.","Robotics","Automotive actuators","An H-bridge lets a DC motor:",["Run in either direction","Run without power","Measure resistance alone","Create an ADC reference"],0,"The H-bridge reverses polarity across the motor.","hbridge"],
["schmitt","Schmitt Trigger","Timing & Digital","Intermediate","Clean up noisy or slowly changing signals using hysteresis.","Comparator or Schmitt IC","Input signal","Reference and feedback","Separate upper and lower thresholds prevent repeated switching when a noisy signal hovers near one threshold.","Switch debouncing","Sensor cleanup","Hysteresis mainly reduces:",["Chatter near threshold","Wire resistance","Need for power","Analogue signals"],0,"Different rising and falling thresholds reduce unwanted toggling.","schmitt"],
["pll","Phase-Locked Loop Blocks","Communication & RF","Advanced","Understand phase comparison, loop filtering, and controlled oscillation.","Phase detector","Loop filter","Controlled oscillator and feedback","A PLL compares reference phase with feedback and adjusts an oscillator through a loop filter. Capture range, stability, and loop bandwidth are design considerations.","Frequency synthesis","Clock recovery","A PLL adjusts its oscillator based on:",["Phase/frequency error","Wire colour","Ambient light only","Text labels"],0,"The feedback error is filtered and used to steer the oscillator toward lock.","pll"]
];
const subjects=[
 ["basic","Basic Electronics"],["analog","Analog Electronic Circuits"],["digital","Digital Design (DD)"],["verilog","Verilog HDL"],["dsp","Digital Signal Processing"],["control","Control Systems"],["embedded","Embedded Controllers"],["ccn","Computer Communication Networks"],["iot","Internet of Things (IoT)"],["sensors","Sensors & Instrumentation"],["semi","Semiconductor Devices"],["aptitude","Engineering Mathematics & Aptitude"],["automotive","Automotive & Industrial Electronics"],["communications","Communication Systems"],["electromagnetics","Electromagnetic Fields"],["power-electronics","Power Electronics"],["vlsi","VLSI Design"]
];
const resourceLinks={
 basic:[["TI Precision Labs","https://www.ti.com/video/series/precision-labs.html","Free lessons on foundational analog circuits and measurement."]],
 analog:[["TI Precision Labs","https://www.ti.com/video/series/precision-labs.html","Sequenced analog design lessons, videos, and experiments."]],
 digital:[["Nand2Tetris","https://www.nand2tetris.org/","A project-based path from logic gates to a simple computer."]],
 verilog:[["AMD Vivado Synthesis Guide","https://docs.amd.com/r/en-US/ug901-vivado-synthesis/Verilog","Official guidance for synthesizable Verilog designs."]],
 dsp:[["MIT OpenCourseWare search: digital signal processing","https://ocw.mit.edu/search/?q=digital%20signal%20processing","University course materials and lecture resources."]],
 control:[["MathWorks Control Systems Tutorials","https://www.mathworks.com/learn/tutorials/control-systems.html","Introductory and advanced control design tutorials."]],
 embedded:[["Arduino Documentation","https://docs.arduino.cc/","Microcontroller programming, boards, and hardware references."]],
 ccn:[["Cisco Networking Academy","https://www.netacad.com/","Networking courses and hands-on learning pathways."]],
 iot:[["Cisco Networking Academy: IoT","https://www.netacad.com/courses/iot","Internet of Things courses and practical learning."]],
 sensors:[["TI Precision Labs","https://www.ti.com/video/series/precision-labs.html","Analog sensing, signal chains, amplifiers, and data converters."]],
 semi:[["MIT OpenCourseWare search: semiconductor devices","https://ocw.mit.edu/search/?q=semiconductor%20devices","University material on semiconductor physics and devices."]],
 aptitude:[["GATE 2026 official syllabus and papers","https://gate2026.iitg.ac.in/exam-papers-and-syllabus.html","Official syllabus and previous examination papers."]],
 automotive:[["TI Precision Labs","https://www.ti.com/video/series/precision-labs.html","Practical electronics training useful for automotive sensing and signal chains."]],
 communications:[["Keysight Learn","https://www.keysight.com/us/en/resources/learn.html","Learning materials for RF, communications, and test engineering."]],
 electromagnetics:[["MIT OpenCourseWare search: electromagnetics","https://ocw.mit.edu/search/?q=electromagnetics","University course materials on fields and electromagnetic waves."]],
 "power-electronics":[["Texas Instruments Power Management","https://www.ti.com/power-management/overview.html","Power conversion concepts, product references, and design resources."]],
 vlsi:[["OpenROAD documentation","https://openroad.readthedocs.io/en/latest/","Open-source digital implementation flow documentation."]]
};
const resourceCatalog=subjects.map(([id,name])=>({
 id,name,
 links:[
  [`MIT OpenCourseWare: ${name}`,`https://ocw.mit.edu/search/?q=${encodeURIComponent(name)}`,"Search free university course materials for this subject."],
  ...resourceLinks[id]
 ]
}));
const existingSubjectByCircuit={
 ohm:"basic",divider:"basic",led:"basic",rc:"dsp",clipper:"analog",half:"analog",bridge:"analog",zener:"analog",bjt:"analog",ce:"analog",opamp:"analog",comp:"analog",timer:"digital",logic:"digital",latch:"digital",rlc:"communications",ina:"sensors",ldr:"sensors",therm:"sensors",wheat:"sensors",pwm:"automotive",buck:"power-electronics",mosfet:"embedded",adc:"embedded",hbridge:"automotive",schmitt:"digital",pll:"communications"
};
data.forEach(c=>{c[16]=existingSubjectByCircuit[c[0]]||"basic"});
const subjectExamples=[
 ["analog-filter","Second-Order Active Low-Pass Filter","analog","Intermediate","Build a two-pole active filter and relate its response to component values.","Op-amp","R1, R2, C1, C2","Dual supply or suitable single supply","The RC network sets the poles and the op-amp buffers or adds gain. Check the amplifier's bandwidth, input common-mode range and output swing before choosing values.","Audio conditioning","Anti-alias front end","What happens above the filter's cutoff region?",["Output is attenuated","Gain becomes infinite","The supply is disconnected","Frequency becomes DC"],0,"A low-pass filter attenuates sufficiently higher frequencies; the exact response depends on its topology.","activeFilter"],
 ["digital-counter","Synchronous 4-Bit Counter","digital","Intermediate","Connect flip-flops and combinational logic to count clock edges in binary.","Four D flip-flops","XOR/AND logic","Clock, reset and decoupling","All flip-flops share the clock. Combinational next-state logic toggles each bit when all lower bits are high; reset and setup/hold timing must be respected.","Event counting","Digital timing labs","In a synchronous counter, the flip-flops are triggered by:",["A shared clock edge","Their own output voltage","The power rail ripple","An analogue filter"],0,"Synchronous counter storage elements use a common clock.","counter"],
 ["verilog-counter","Verilog Counter Hardware","verilog","Intermediate","Relate clocked HDL to a realizable flip-flop circuit.","D flip-flops","Next-state logic","Clock and reset","A clocked always block with non-blocking assignments describes storage elements; synthesis maps the logic to flip-flops and gates. The schematic represents hardware, not software execution.","FPGA design","RTL simulation","A clocked non-blocking assignment generally infers:",["Sequential storage","An ideal resistor","An RF antenna","A voltage regulator"],0,"Clocked RTL normally represents sequential hardware such as flip-flops.","verilogCounter"],
 ["dsp-antialias","Anti-Aliasing Input Filter","dsp","Intermediate","Filter analogue content before sampling it with an ADC.","Series resistor","Shunt capacitor","Signal source and ADC","A low-pass network attenuates out-of-band content before sampling. Set cutoff with the sampling rate and signal bandwidth; filtering cannot recover information already aliased.","Data acquisition","Audio sampling","Why filter before an ADC?",["Reduce out-of-band energy that can alias","Increase ADC bit depth","Remove the sampling clock","Convert every signal to DC"],0,"Anti-alias filtering reduces frequencies that could fold into the sampled band.","antiAlias"],
 ["control-feedback","Closed-Loop Motor Speed Control","control","Advanced","Use measured speed feedback to correct motor drive.","Speed sensor","Controller / error amplifier","PWM motor driver","The reference is compared with measured speed; the controller adjusts PWM duty cycle to reduce error. Stability, sensor scaling, saturation and safe current limits matter.","Servo systems","Speed regulation","Negative feedback acts to:",["Reduce the difference between reference and measured output","Increase error without limit","Remove the sensor","Set motor speed without power"],0,"A correctly signed feedback loop drives the controlled output toward its reference.","controlLoop"],
 ["embedded-gpio","MCU GPIO Relay Driver","embedded","Beginner","Drive a relay safely from a low-current microcontroller output.","MCU GPIO","NPN transistor or MOSFET","Relay coil and flyback diode","The GPIO controls a transistor; the transistor switches coil current. A flyback diode across a DC coil limits inductive voltage when switched off. Never drive the coil directly from a GPIO.","Isolated load control","Embedded I/O labs","Why is a flyback diode placed across a DC relay coil?",["To limit the inductive turn-off voltage","To increase GPIO output current","To set the MCU clock","To measure the coil temperature"],0,"The diode provides a current path for stored coil energy when the switch opens.","relayDriver"],
 ["ccn-ethernet","Ethernet PHY Link Interface","ccn","Advanced","Trace the signal path between a network PHY and an Ethernet cable.","Ethernet PHY","Isolation magnetics","RJ45 connector and termination","The PHY drives a differential pair through isolation magnetics to the cable. Pair routing, impedance, termination and isolation requirements depend on the PHY datasheet and Ethernet standard.","Ethernet interfaces","Network hardware","What is the purpose of Ethernet isolation magnetics?",["Provide galvanic isolation and couple differential signals","Store packet data","Replace the PHY clock","Convert packets into DC"],0,"The magnetics couple the line signal while providing galvanic isolation.","ethernet"],
 ["iot-node","IoT Sensor Node Interface","iot","Intermediate","Connect a resistive sensor, ADC and low-power controller as a system.","Sensor divider","RC input filter","MCU ADC and radio module","A divider converts sensor resistance to voltage; an RC filter limits noise before the ADC. The MCU samples and sends readings. Keep the sensor voltage within ADC limits and budget radio peak current.","Environmental monitoring","Battery-powered telemetry","What must be checked before the sensor divider reaches the ADC?",["ADC input range and source impedance","Only the sensor's wire colour","Wi-Fi password length","Display brightness"],0,"The signal must meet the converter's voltage and acquisition requirements.","iotNode"],
 ["sensor-bridge","Strain-Gauge Bridge Front End","sensors","Intermediate","Measure small resistance changes using a bridge and differential amplifier.","Quarter-bridge strain gauge","Bridge completion resistors","Instrumentation amplifier and ADC","Strain changes one bridge arm and produces a small differential voltage. A low-drift instrumentation amplifier raises it for conversion; excitation, lead resistance and temperature effects require attention.","Load cells","Structural monitoring","A balanced bridge ideally has:",["Zero differential output","Maximum output at zero excitation","Infinite arm resistance","No relation between its arms"],0,"Equal bridge ratios produce zero ideal differential voltage.","strainGauge"],
 ["semi-iv","Diode I-V Measurement","semi","Beginner","Measure a diode's current-voltage behaviour with a current-limited test circuit.","Diode under test","Series current-limiting resistor","Adjustable supply and ammeter","Sweep the supply while recording diode voltage and current. The series resistor limits current; observe polarity and device ratings, and avoid exceeding the diode's power limits.","Device characterization","Semiconductor laboratory","Why is a series resistor needed during an I-V sweep?",["To limit diode current","To make the diode emit RF","To cancel its junction","To set an ADC clock"],0,"The resistor limits current and protects the device during measurement.","diodeIV"],
 ["math-network","Kirchhoff Resistor Network","aptitude","Beginner","Practise node-voltage and equivalent-resistance calculations in a small network.","DC source","Two parallel branches","Series resistors and ground","Apply Kirchhoff's current law at the junction and Ohm's law in each branch. Reduce parallel resistance or solve simultaneous equations to find branch currents.","Circuit numericals","Engineering aptitude practice","At an ideal node, the algebraic sum of currents is:",["Zero","Always equal to the supply voltage","Infinite","Equal to resistance"],0,"Kirchhoff's current law states that current entering and leaving a node balances.","kclNetwork"],
 ["automotive-driver","Automotive Inductive Load Driver","automotive","Advanced","Switch an automotive-style inductive load with transient protection.","Protected MOSFET driver","Inductive load","Supply transient clamp and current sensing","A protected switch controls the load and limits inductive turn-off energy. Automotive supplies can contain surges and reverse polarity; choose protection and components to the required vehicle standard.","Solenoid actuation","Industrial actuator control","An inductive load driver must account for:",["Turn-off energy and supply transients","Only the nominal logic level","The colour of the enclosure","The MCU screen resolution"],0,"Inductive energy and harsh supply transients can exceed switch ratings without suitable protection.","automotiveDriver"],
 ["comms-am","AM Modulator and Envelope Detector","communications","Intermediate","Follow an amplitude-modulated signal from generation through detection.","Carrier oscillator","Modulator / RF amplifier","Diode envelope detector and RC load","The modulator varies carrier amplitude with the message. A diode-capacitor detector follows the envelope; its time constant should reject carrier ripple yet track the message.","Radio receivers","Modulation laboratories","The detector's RC time constant should:",["Smooth carrier cycles while following the message envelope","Be zero for every signal","Equal the carrier amplitude","Stop the diode conducting"],0,"A suitable time constant balances carrier-ripple rejection against message tracking.","amReceiver"],
 ["em-resonator","LC Antenna Tuning Network","electromagnetics","Advanced","Relate inductance and capacitance to a resonant frequency-selective network.","Inductor","Tuning capacitor","Antenna / receiver input","The LC network resonates near f0 = 1/(2π√LC) in the ideal model. Real losses, antenna impedance and parasitics shift response; matching and safety depend on frequency and power.","RF tuning","Antenna matching studies","Increasing the tuning capacitance while L is fixed makes ideal resonance:",["Lower in frequency","Higher in frequency","Unchanged","A DC voltage"],0,"Resonant frequency varies inversely with the square root of capacitance.","lcAntenna"],
 ["power-buck","Feedback Buck Converter","power-electronics","Advanced","Study switching, energy storage and closed-loop DC output regulation.","MOSFET switch","Inductor and catch diode","Output capacitor and feedback divider","The switch and inductor transfer energy to the output; a controller adjusts duty cycle from the feedback divider. Verify switch/diode ratings, inductor saturation, ripple, compensation and layout.","Embedded power rails","DC-DC converter design","In a buck converter, the inductor primarily:",["Transfers and stores energy across switching intervals","Measures output resistance","Creates the clock reference","Blocks all DC current"],0,"The inductor smooths current and transfers energy from the switching stage to the load.","buckFeedback"],
 ["vlsi-inverter","CMOS Inverter","vlsi","Intermediate","Build the basic complementary MOS logic gate from transistor devices.","PMOS pull-up","NMOS pull-down","Input, output and supply rails","The PMOS connects the output to the positive rail when input is low; the NMOS pulls it to ground when input is high. Real designs account for switching thresholds, load capacitance and leakage.","Standard-cell logic","CMOS design fundamentals","For a stable CMOS inverter input high, which device pulls output low?",["NMOS","PMOS only","Both supplies shorted intentionally","Neither transistor"],0,"A high input turns on the NMOS pull-down and turns off the PMOS pull-up.","cmosInverter"]
].map(c=>[c[0],c[1],"Subject examples",c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15],c[2]]);
data.push(...subjectExamples);
let progress=read(PROGRESS), quizzes=read(QUIZZES), active=null, answered=false;
function read(k){try{return JSON.parse(localStorage.getItem(k)||"{}")||{}}catch(e){return {}}}
function write(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){alert("Could not save progress. Check browser storage settings.")}}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function svg(kind,circuitId=""){
 let s="";
 const line=(x1,y1,x2,y2)=>`<path class="wire" d="M${x1} ${y1}L${x2} ${y2}"/>`,
  path=d=>`<path class="symbol" d="${d}"/>`,
  text=(x,y,t,cls="label")=>`<text class="${cls}" x="${x}" y="${y}">${esc(t)}</text>`,
  node=(x,y)=>`<circle class="node" cx="${x}" cy="${y}" r="4"/>`,
  box=(x,y,w,h,t)=>`<rect class="block" x="${x}" y="${y}" width="${w}" height="${h}" rx="5"/><text class="inside" x="${x+w/2}" y="${y+h/2+5}">${esc(t)}</text>`,
  ground=(x,y)=>`${line(x,y,x,y+9)}${line(x-14,y+9,x+14,y+9)}${line(x-9,y+14,x+9,y+14)}${line(x-4,y+19,x+4,y+19)}`,
  rH=(x1,x2,y,t="R")=>{let a=x1+20,b=x2-20,d=`M${a} ${y}`;for(let i=0;i<6;i++)d+=`L${a+(b-a)*(i+.5)/6} ${y+(i%2?8:-8)}`;d+=`L${b} ${y}`;return `${line(x1,y,a,y)}${path(d)}${line(b,y,x2,y)}${text((x1+x2)/2,y-13,t)}`},
  rV=(x,y1,y2,t="R")=>{let a=y1+18,b=y2-18,d=`M${x} ${a}`;for(let i=0;i<6;i++)d+=`L${x+(i%2?8:-8)} ${a+(b-a)*(i+.5)/6}`;d+=`L${x} ${b}`;return `${line(x,y1,x,a)}${path(d)}${line(x,b,x,y2)}${text(x+25,(y1+y2)/2,t)}`},
  cV=(x,y1,y2,t="C")=>{let m=(y1+y2)/2;return `${line(x,y1,x,m-7)}${line(x-13,m-6,x+13,m-6)}${line(x-13,m+6,x+13,m+6)}${line(x,m+7,x,y2)}${text(x+26,m+5,t)}`},
  cH=(x1,x2,y,t="C")=>{let m=(x1+x2)/2;return `${line(x1,y,m-7,y)}${line(m-6,y-13,m-6,y+13)}${line(m+6,y-13,m+6,y+13)}${line(m+7,y,x2,y)}${text(m,y-19,t)}`},
  source=(x,y1,y2,t="VDC",ac=false)=>{let m=(y1+y2)/2;return `${line(x,y1,x,m-29)}<circle class="source" cx="${x}" cy="${m}" r="29"/>${ac?path(`M${x-16} ${m}q8 -13 16 0t16 0`):`${text(x-9,m-2,"+")}${text(x+9,m+14,"−")}`}${line(x,m+29,x,y2)}${text(x,m-38,t)}`},
  diode=(x1,x2,y,t="D")=>{let m=(x1+x2)/2;return `${line(x1,y,m-20,y)}${path(`M${m-18} ${y-15}L${m+4} ${y}L${m-18} ${y+15}Z`)}${line(m+7,y-17,m+7,y+17)}${line(m+7,y,x2,y)}${text(m,y-23,t)}`},
  diodeAt=(x,y,angle)=>`<g transform="translate(${x} ${y}) rotate(${angle})">${line(-52,0,-20,0)}${path("M-18 -14L4 0L-18 14Z")}${line(7,-16,7,16)}${line(7,0,52,0)}</g>`,
  amp=(x,y,w=115,h=100,t="U1")=>`${path(`M${x} ${y}L${x+w} ${y+h/2}L${x} ${y+h}Z`)}${text(x+7,y+h/2-12,"+")}${text(x+7,y+h/2+20,"−")}${text(x+w*.43,y+h/2+5,t,"inside")}`,
  transistor=(x,y,t="Q1")=>`${`<circle class="source" cx="${x}" cy="${y}" r="43"/>`}${line(x-63,y,x-22,y)}${line(x-22,y-30,x-22,y+30)}${line(x-22,y-20,x+22,y-42)}${line(x-22,y+20,x+24,y+42)}${path(`M${x+8} ${y+28}l16 14-21 1Z`)}${text(x+34,y-48,t)}`,
  acSource=(x,y,t="AC")=>`${line(x,y-55,x,y-29)}<circle class="source" cx="${x}" cy="${y}" r="29"/>${path(`M${x-16} ${y}q8 -13 16 0t16 0`)}${line(x,y+29,x,y+55)}${text(x,y-64,t)}`,
  rails=(x1=90,x2=550,top=70,bottom=210)=>`${line(x1,top,x2,top)}${line(x1,bottom,x2,bottom)}`;

 switch(kind){
 case "ohm":case "resistor":case "math-network":case "kclNetwork":
   if(kind==="math-network"||kind==="kclNetwork")s+=source(100,85,200,"VDC")+line(100,85,100,75)+line(100,75,480,75)+rV(250,75,200,"R1")+rV(430,75,200,"R2")+line(100,200,480,200)+line(100,200,100,210)+node(250,75)+node(430,75)+text(250,225,"I1")+text(430,225,"I2");
   else s+=source(100,85,200,"VDC")+line(100,85,100,75)+line(100,75,210,75)+rH(210,365,75,"R1")+line(365,75,470,75)+rV(470,75,145,"R2")+rV(470,145,210,"R3")+line(100,200,100,210)+line(100,210,470,210)+node(470,145)+text(490,150,"Vout");
   break;
 case "mosfet":case "pwm":case "motor":
   s+=text(120,52,"V+")+line(120,60,120,80)+box(120,80,150,50,"Inductive load")+line(270,105,365,105)+line(365,105,365,130)+box(315,130,100,48,"N-MOSFET")+line(365,178,365,210)+ground(365,210)+box(60,145,120,45,"PWM / GPIO")+rH(180,315,167,"Rgate")+line(315,167,315,154)+line(120,80,120,65)+path("M137 80L150 80M143 74L143 86")+path("M120 130L120 166L150 166")+text(120,151,"Flyback");
   break;
 case "divider":case "ldr":case "therm":case "sensor":
   s+=rails(130,500,65,205)+text(130,49,"VCC")+rV(275,65,135,kind==="ldr"||circuitId==="ldr"?"LDR":"R1")+node(275,135)+rV(275,135,205,kind==="therm"?"NTC":"R2")+ground(275,205)+line(275,135,455,135)+text(455,124,"Vout");
   if(kind==="ldr"||circuitId==="ldr")s+=path("M315 78l35 -18m-10 -2l10 2-2 10M315 98l35 -18m-10 -2l10 2-2 10");
   break;
 case "led":
   s+=source(110,90,190,"VDC")+line(110,90,110,80)+rH(110,295,80,"Rlimit")+diode(295,445,80,"LED")+line(445,80,485,80)+rV(485,80,190,"Load")+line(110,190,485,190)+ground(485,190);
   if(kind==="led")s+=path("M390 49l27 -22m-10 0l10 0 0 10M407 63l27 -22m-10 0l10 0 0 10");
   break;
 case "diodeIV":
   s+=source(110,90,190,"VDC")+line(110,90,110,80)+rH(110,295,80,"Rlimit")+diode(295,445,80,"DUT")+line(445,80,485,80)+line(485,80,485,190)+line(110,190,485,190)+ground(485,190)+text(485,218,"Current measure");
   break;
 case "rc":case "antiAlias":case "dsp-antialias":
   s+=line(70,125,175,125)+rH(175,340,125,"R")+line(340,125,515,125)+node(340,125)+cV(340,125,205,"C")+ground(340,205)+text(70,109,"Vin")+text(515,113,"Vout")+text(340,236,"Low-pass");
   break;
 case "rlc":case "em-resonator":case "lcAntenna":
   s+=line(75,145,155,145)+rH(155,260,145,"R")+line(260,145,295,145)+path("M295 145c0-28 34-28 34 0s34 28 34 0 34-28 34 0 34 28 34 0")+line(431,145,470,145)+text(363,103,"L")+cV(470,145,210,"C")+line(470,210,75,210)+line(75,210,75,145)+text(75,126,"Vin")+ground(470,210);
   break;
 case "half":
   s+=acSource(115,140,"AC")+line(115,85,115,75)+rH(115,300,75,"Rlimit")+line(300,75,455,75)+diode(300,455,75,kind==="zener"?"Zener":"D1")+line(455,75,455,145)+rV(455,145,205,"Load")+line(455,205,115,205)+line(115,195,115,205)+ground(455,205);
   break;
 case "diode":
   s+=acSource(95,145,"Vin")+line(95,90,95,75)+rH(95,300,75,"Rseries")+line(300,75,500,75)+node(380,75)+line(380,75,380,105)+path("M365 106L395 106L380 131Z")+line(365,136,395,136)+line(380,136,380,180)+ground(380,180)+text(405,129,"Dclamp")+rV(500,75,195,"Rload")+line(500,195,95,195)+line(95,195,95,200)+text(500,55,"Vout");
   break;
 case "zener":
   s+=source(100,85,200,"Vin")+line(100,85,100,75)+rH(100,310,75,"Rseries")+line(310,75,500,75)+node(390,75)+line(390,75,390,105)+path("M375 106L405 106L390 131Z")+line(375,136,405,136)+line(390,136,390,195)+ground(390,195)+text(420,128,"Zener")+rV(500,75,195,"Load")+line(500,195,100,195)+text(500,55,"Vout");
   break;
 case "bridge":
   s+=`<circle class="source" cx="320" cy="250" r="20"/>${path("M307 250q6 -10 13 0t13 0")}${line(300,250,140,250)}${line(140,250,140,140)}${line(140,140,170,140)}${line(340,250,500,250)}${line(500,250,500,140)}${line(500,140,470,140)}${line(170,140,285,75)}${line(170,140,285,205)}${line(470,140,355,75)}${line(470,140,355,205)}${line(285,75,355,75)}${line(285,205,355,205)}${diodeAt(225,108,-30)}${diodeAt(410,108,210)}${diodeAt(225,173,210)}${diodeAt(410,173,-30)}${text(220,82,"D1")}${text(420,82,"D2")}${text(220,204,"D3")}${text(420,204,"D4")}${node(285,75)}${node(355,205)}${line(320,75,320,112)}${rV(320,112,180,"")+line(320,180,320,205)}${text(320,54,"+Vout")}${text(380,147,"Load")}${text(380,215,"−Vout")}${text(320,222,"AC source")}`;
   break;
 case "bjt":case "ce":case "amplifier":case "relayDriver":case "embedded-gpio":
   s+=rails(115,515,65,210)+text(115,49,"VCC")+box(145,115,82,48,"GPIO")+line(227,139,276,139)+rH(276,345,139,"Rbase")+line(345,139,370,139)+transistor(415,145,kind==="ce"?"Q1":"Q1")+line(415,102,415,65)+line(415,65,515,65)+line(415,188,415,210)+ground(415,210)+rV(515,65,130,"Load")+line(515,130,515,210)+node(415,65);
   if(["relayDriver","embedded-gpio","automotiveDriver","automotive-driver"].includes(kind))s+=path("M498 145l34 0m-34 12l34 0m-34 12l34 0")+text(515,195,"Coil")+path("M530 132l0-18 18 0-18-16");
   if(kind==="ce")s+=cH(115,225,139,"Cin");
   break;
 case "buck":case "power-buck":case "buckFeedback":
   s+=text(90,72,"Vin")+line(90,80,90,125)+box(90,125,92,52,"SW")+line(182,151,235,151)+path("M235 151c0-23 30-23 30 0s30 23 30 0 30-23 30 0 30 23 30 0")+line(355,151,510,151)+text(304,115,"L")+node(390,151)+cV(440,151,210,"Cout")+ground(440,210)+rV(510,65,120,"Load")+line(510,120,510,151)+ground(510,151)+line(390,151,390,205)+diode(300,390,205,"Dfree")+line(300,205,300,151)+box(90,195,140,38,"Controller")+line(230,214,260,214)+line(260,214,260,151)+text(390,49,"Vout");
   break;
 case "opamp":
   s+=line(70,150,155,150)+rH(155,285,150,"Rin")+line(285,150,345,150)+amp(345,85,115,100,"U1")+line(345,150,345,205)+ground(345,205)+line(460,135,535,135)+line(510,135,510,65)+rH(350,510,65,"Rf")+line(350,65,350,150)+node(350,150)+text(535,118,"Vout");
   break;
 case "activeFilter":case "analog-filter":
   s+=line(65,120,135,120)+rH(135,270,120,"R1")+line(270,120,315,120)+node(270,120)+cV(270,120,195,"C1")+ground(270,195)+amp(345,75,115,100,"Buffer")+line(315,120,345,120)+line(460,125,555,125)+line(500,125,500,155)+line(500,155,345,155)+text(555,108,"Vout")+text(65,104,"Vin");
   break;
 case "comp":case "schmitt":
   s+=text(70,106,"Vin +")+line(70,115,345,115)+text(70,174,"Vref −")+line(70,160,345,160)+amp(345,85,115,100,"CMP")+line(460,135,550,135)+text(550,118,"OUT");
   if(kind==="schmitt")s+=line(510,135,510,205)+rH(350,510,205,"Rfb")+line(350,205,350,160)+node(350,160);
   break;
 case "ina":
   s+=text(70,104,"Sensor +")+line(70,115,235,115)+text(70,180,"Sensor −")+line(70,165,235,165)+box(235,85,175,112,"Instrumentation amp")+line(410,141,540,141)+text(540,122,"Vout")+text(320,222,"REF / gain set");
   break;
 case "controlLoop":case "control-feedback":
   s+=box(55,80,105,56,"Reference")+line(160,108,205,108)+box(205,80,100,56,"Σ error")+line(305,108,350,108)+box(350,80,115,56,"Controller")+line(465,108,510,108)+box(510,80,95,56,"Motor")+line(560,136,560,195)+line(560,195,105,195)+box(55,170,100,50,"Sensor")+line(105,170,105,130)+text(320,224,"Feedback loop");
   break;
 case "logic":case "latch":case "counter":case "verilogCounter":case "digital-counter":case "verilog-counter":
   if(kind==="counter"||kind==="digital-counter"||kind==="verilogCounter"||kind==="verilog-counter"){for(let i=0;i<4;i++){let x=100+i*115;s+=box(x,95,82,75,`DFF ${i}`)+line(x+41,210,x+41,170)+text(x+41,229,"CLK");if(i<3)s+=line(x+82,132,x+115,132)+text(x+98,119,"Q");}s+=line(70,210,510,210)+line(70,210,70,185)+text(70,174,"CLK");}
   else {s+=box(130,85,125,60,kind==="latch"?"NOR 1":"AND")+box(385,85,125,60,kind==="latch"?"NOR 2":"OR")+line(70,112,130,112)+text(70,98,kind==="latch"?"Set":"A")+line(255,112,385,112)+line(510,112,565,112)+text(565,98,"Y");if(kind==="latch"){s+=line(510,112,530,112)+line(530,112,530,65)+line(530,65,195,65)+line(195,65,195,85)+line(385,130,360,130)+line(360,130,360,180)+line(360,180,450,180)+line(450,180,450,145)+line(70,155,130,155)+text(70,173,"Reset");}}
   break;
 case "timer":
   s+=box(250,75,145,110,"555 TIMER")+text(275,104,"TRIG")+text(275,132,"THR")+text(275,160,"DIS")+line(70,120,250,120)+text(70,104,"VCC")+line(395,120,550,120)+text(550,104,"OUT")+rV(140,65,125,"RA")+rV(140,125,190,"RB")+line(140,65,140,50)+line(140,50,320,50)+cV(320,120,205,"Ctiming")+line(320,50,320,75)+line(320,185,320,205)+ground(320,205);
   break;
 case "wheat":case "bridge2":case "strainGauge":case "sensor-bridge":
   s+=line(320,45,320,70)+line(320,70,200,105)+line(320,70,440,105)+rV(200,105,195,"R1 / gauge")+rV(440,105,195,"R3")+line(200,195,320,230)+line(440,195,320,230)+line(320,230,320,248)+ground(320,248)+line(200,150,220,150)+line(220,150,220,180)+line(220,180,485,180)+line(485,180,485,166)+line(440,150,465,150)+line(465,150,465,140)+line(465,140,485,140)+node(200,150)+node(440,150)+box(485,125,105,58,"INA")+text(537,215,"Vout")+text(320,29,"Excitation");
   break;
 case "adc":case "iotNode":
   s+=box(70,90,115,65,kind==="iotNode"?"Sensor":"Signal")+rH(185,290,122,"R")+line(290,122,350,122)+cV(290,122,195,"C")+ground(290,195)+box(350,82,110,80,"ADC")+line(460,122,515,122)+box(515,82,95,80,kind==="iotNode"?"MCU / RF":"MCU")+text(70,75,"Analog in")+text(515,189,"Data");
   break;
 case "hbridge":
   s+=box(115,72,115,48,"Q1 high")+box(410,72,115,48,"Q2 high")+box(115,165,115,48,"Q3 low")+box(410,165,115,48,"Q4 low")+line(230,96,300,96)+line(410,96,340,96)+line(230,189,300,189)+line(410,189,340,189)+line(300,96,300,189)+line(340,96,340,189)+box(300,120,40,45,"M")+line(300,142,265,142)+line(340,142,375,142)+text(265,129,"A")+text(375,129,"B")+text(320,50,"+Vm")+ground(320,213);
   break;
 case "automotiveDriver":case "automotive-driver":
   s+=text(105,48,"Protected supply")+line(105,58,105,85)+box(105,85,155,52,"Inductive load")+line(260,111,367,111)+box(310,130,115,55,"Protected FET")+line(367,185,367,215)+ground(367,215)+box(60,155,110,40,"Control")+line(170,175,225,175)+line(225,175,225,157)+rH(225,310,157,"Rg")+line(310,157,310,155)+path("M120 72L245 72M120 64L120 80M245 64L245 80")+text(183,61,"TVS / clamp")+text(367,211,"Current sense");
   break;
 case "cmosInverter":case "vlsi-inverter":
   s+=text(320,42,"VDD")+line(320,48,320,80)+box(245,80,150,52,"PMOS pull-up")+line(320,132,320,145)+node(320,145)+box(245,145,150,52,"NMOS pull-down")+line(320,197,320,220)+ground(320,220)+line(90,120,245,105)+line(90,160,245,170)+text(90,142,"Vin")+line(320,145,520,145)+text(520,130,"Vout");
   break;
 case "pll":
   s+=box(75,90,115,60,"Phase detector")+line(45,120,75,120)+text(45,103,"REF")+box(240,90,105,60,"Loop filter")+line(190,120,240,120)+box(395,90,110,60,"VCO")+line(345,120,395,120)+line(505,120,575,120)+text(575,103,"Output")+line(455,150,455,195)+line(455,195,130,195)+line(130,195,130,150)+text(280,221,"Feedback");
   break;
 case "ethernet":
   s+=box(60,85,135,72,"MAC / PHY")+line(195,105,275,105)+line(195,137,275,137)+box(275,80,130,82,"Isolation magnetics")+line(405,105,480,105)+line(405,137,480,137)+box(480,85,120,72,"RJ45 / cable")+text(235,91,"TX±")+text(440,91,"Pair");
   break;
 case "amReceiver":
   s+=box(45,100,95,60,"Carrier")+line(140,130,175,130)+box(175,100,105,60,"AM modulator")+line(280,130,320,130)+box(320,100,105,60,"RF stage")+line(425,130,455,130)+diode(455,555,130,"Ddet")+line(555,130,585,130)+cV(555,130,205,"C")+ground(555,205)+rV(585,130,205,"Rload")+text(45,85,"Message + RF");
   break;
 default:
   s+=box(190,85,260,80,kind)+line(75,125,190,125)+line(450,125,565,125)+text(75,108,"Input")+text(565,108,"Output");
 }
 return `<svg viewBox="0 0 640 280" role="img" aria-label="${esc(kind)} circuit schematic"><style>.wire,.symbol{fill:none;stroke:#7dd3fc;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}.symbol{stroke:#38bdf8}.block{fill:#102337;stroke:#38bdf8;stroke-width:2}.source{fill:#0b1725;stroke:#38bdf8;stroke-width:2}.node{fill:#7dd3fc}.label,.inside{fill:#dff5ff;font-family:Arial,sans-serif;font-size:15px;text-anchor:middle}.inside{font-size:13px}</style>${s}</svg>`;
}
function initCategories(){
 [...new Set(data.map(c=>c[2]))].sort().forEach(cat=>{let o=document.createElement("option");o.value=cat;o.textContent=cat;$("elcCategory").append(o)});
 subjects.forEach(([id,name])=>{let o=document.createElement("option");o.value=id;o.textContent=name;$("elcSubject").append(o)});
 const tabs=$("elcSubjectTabs");
 [["all","All subjects"],...subjects].forEach(([id,name])=>{
  const count=data.filter(c=>id==="all"||c[16]===id).length;
  const button=document.createElement("button");
  button.type="button";button.className="elc-subject-tab";button.dataset.subject=id;
  button.setAttribute("aria-pressed","false");
  button.innerHTML=`${esc(name)} <span>${count}</span>`;
  tabs.append(button);
 });
 tabs.addEventListener("click",e=>{
  const button=e.target.closest("[data-subject]");
  if(!button)return;
  $("elcSubject").value=button.dataset.subject;
  render();
 });
}
function stats(){let done=data.filter(c=>progress[c[0]]?.done).length,pct=Math.round(done/data.length*100),all=Object.values(quizzes);$("elcTotal").textContent=data.length;$("elcDone").textContent=done;$("elcPercent").textContent=pct+"%";$("elcProgressText").textContent=`${done} of ${data.length}`;$("elcProgressBar").style.width=pct+"%";$("elcQuizAcc").textContent=all.length?Math.round(all.filter(x=>x.correct).length/all.length*100)+"%":"—"}
function render(){
 const q=$("elcSearch").value.toLowerCase().trim(),lev=$("elcLevel").value,cat=$("elcCategory").value,subject=$("elcSubject").value,status=$("elcStatus").value;
 const found=data.filter(c=>(!q||c.join(" ").toLowerCase().includes(q))&&(lev==="all"||c[3]===lev)&&(cat==="all"||c[2]===cat)&&(subject==="all"||c[16]===subject)&&(status==="all"||(status==="done"?!!progress[c[0]]?.done:!progress[c[0]]?.done)));
 $("elcCount").textContent=`${found.length} circuit${found.length===1?"":"s"} found`;$("elcSubjectTabs").querySelectorAll("[data-subject]").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.subject===subject)));const grid=$("elcGrid");grid.replaceChildren();
 renderResources(subject);
 if(!found.length){let e=document.createElement("div");e.className="elc-empty";e.textContent="No circuits match. Try changing your search or filters.";grid.append(e);return}
 found.forEach(c=>{let card=document.createElement("article");card.className="elc-card";let subjectName=subjects.find(s=>s[0]===c[16])?.[1]||c[2];card.innerHTML=`<div class="elc-cardtop"><span class="elc-pill">${esc(c[3])}</span><span class="elc-status">${progress[c[0]]?.done?"✓ Completed":"○ To learn"}</span></div><h4>${esc(c[1])}</h4><p>${esc(c[4])}</p><div class="elc-mini">${svg(c[15],c[0])}</div><div class="elc-cardfoot"><span>${esc(subjectName)}</span><button type="button" class="elc-open" data-id="${esc(c[0])}">Study circuit</button></div>`;grid.append(card)})
}
function renderResources(subject){
 const selected=subject==="all"?resourceCatalog:resourceCatalog.filter(group=>group.id===subject);
 const linkCount=selected.reduce((total,group)=>total+group.links.length,0);
 $("elcResourceCount").textContent=`${linkCount} links`;
 $("elcResourceIntro").textContent=subject==="all"
  ?"Browse free university courses and trusted engineering references grouped by subject."
  :`Continue studying ${selected[0].name} with these university courses and engineering references.`;
 const list=$("elcResourceList");
 list.replaceChildren();
 selected.forEach(group=>{
  const section=document.createElement("section");
  section.className="elc-resource-group";
  const heading=document.createElement("h4");
  heading.textContent=group.name;
  const cards=document.createElement("div");
  cards.className="elc-resource-cards";
  group.links.forEach(([title,url,description])=>{
   const card=document.createElement("article");
   card.className="elc-resource-card";
   card.innerHTML=`<h5><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)} <span aria-hidden="true">↗</span></a></h5><p>${esc(description)}</p>`;
   cards.append(card);
  });
  section.append(heading,cards);
  if(subject==="all"){
   const disclosure=document.createElement("details");
   disclosure.className="elc-resource-disclosure";
   const summary=document.createElement("summary");
   summary.textContent=`${group.name} — ${group.links.length} links`;
   disclosure.append(summary,section);
   list.append(disclosure);
  }else{
   list.append(section);
  }
 });
}
function open(id){active=data.find(c=>c[0]===id);if(!active)return;answered=false;$("elcDetail").hidden=false;$("elcMeta").textContent=(subjects.find(s=>s[0]===active[16])?.[1]||active[2])+" • "+active[3];$("elcTitle").textContent=active[1];$("elcDiagram").innerHTML=svg(active[15],active[0]);$("elcParts").innerHTML=active.slice(5,8).map(x=>`<li>${esc(x)}</li>`).join("");$("elcWorking").textContent=active[8];$("elcUses").innerHTML=active.slice(9,11).map(x=>`<li>${esc(x)}</li>`).join("");$("elcQuestion").textContent=active[11];$("elcFeedback").textContent="";$("elcOptions").replaceChildren();active[12].forEach((v,i)=>{let b=document.createElement("button");b.type="button";b.className="elc-option";b.textContent=String.fromCharCode(65+i)+". "+v;b.onclick=()=>answer(i);$("elcOptions").append(b)});$("elcNotes").value=progress[id]?.notes||"";updateComplete();$("elcDetail").scrollIntoView({behavior:"smooth",block:"start"})}
function answer(i){if(answered||!active)return;answered=true;let correct=i===active[13];[...$("elcOptions").children].forEach((b,j)=>{b.disabled=true;if(j===active[13])b.classList.add("correct");else if(j===i)b.classList.add("wrong")});$("elcFeedback").textContent=(correct?"Correct! ":"Not quite. ")+active[14];$("elcFeedback").style.color=correct?"#86efac":"#fda4af";quizzes[active[0]]={correct,date:new Date().toISOString()};write(QUIZZES,quizzes);stats()}
function updateComplete(){let b=$("elcComplete"),done=!!progress[active?.[0]]?.done;b.textContent=done?"✓ Completed — click to undo":"Mark as completed";b.classList.toggle("complete",done)}
$("elcGrid").addEventListener("click",e=>{let b=e.target.closest("[data-id]");if(b)open(b.dataset.id)});
["elcSearch","elcLevel","elcCategory","elcSubject","elcStatus"].forEach(id=>$(id).addEventListener(id==="elcSearch"?"input":"change",render));
$("elcReset").onclick=()=>{$("elcSearch").value="";$("elcLevel").value="all";$("elcCategory").value="all";$("elcSubject").value="all";$("elcStatus").value="all";render()};
$("elcClose").onclick=()=>{$("elcDetail").hidden=true;active=null};
$("elcComplete").onclick=()=>{if(!active)return;progress[active[0]]={...(progress[active[0]]||{}),done:!progress[active[0]]?.done,updated:new Date().toISOString()};write(PROGRESS,progress);stats();render();updateComplete()};
$("elcNotes").addEventListener("input",()=>{if(!active)return;progress[active[0]]={...(progress[active[0]]||{}),notes:$("elcNotes").value};write(PROGRESS,progress)});
initCategories();render();stats();
})();