import React, { useState, useRef, useEffect } from "react";

const HomePage: React.FC = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  const availableCommands = [
    "help",
    "h",
    "about",
    "experience",
    "education",
    "technical skills",
    "awards and achievements",
    "licenses & certifications",
    "projects",
    "volunteering",
    "publications",
    "hobbies",
    "contacts",
  ];

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [output]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      processCommand(input);
      setInput("");
      setHistory([input, ...history].slice(0, 20)); // Keep only the last 20 commands
      setHistoryIndex(null);
    } else if (e.key === "ArrowUp") {
      if (historyIndex === null && history.length > 0) {
        setHistoryIndex(0);
        setInput(history[0]);
      } else if (historyIndex !== null && historyIndex < history.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setInput(history[historyIndex + 1]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex !== null) {
        if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1);
          setInput(history[historyIndex - 1]);
        } else {
          setHistoryIndex(null);
          setInput("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const matchingCommand = availableCommands.find((cmd) =>
        cmd.startsWith(input.toLowerCase())
      );
      if (matchingCommand) {
        setInput(matchingCommand);
      }
    } else if (e.ctrlKey && e.key === "c") {
      e.preventDefault();
      const newOutput = [...output];
      const coloredVisitor = '<span style="color: orange;">visitor</span>';
      newOutput.push(coloredVisitor + `@terminal.prashant.dev:-$ ${input}`);
      newOutput.push("^C");
      setOutput(newOutput);
      setInput("");
    }
  };

  const processCommand = (command: string) => {
    if (command === "clear") {
      setOutput([]);
    } else {
      const newOutput = [...output];
      const coloredVisitor = '<span style="color: orange;">visitor</span>';
      newOutput.push(coloredVisitor + `@terminal.prashant.dev:-$ ${command}`);

      setOutput(newOutput);

      switch (command.toLowerCase()) {
        case "help":
        case "ant -h":
          newOutput.push(
            "usage: ant [-v | --version] [-h | --help] [-ab | about] [-ex | --experience] [-s | --skills]"
          );
          newOutput.push(
            "           [-ed | --education] [-ts | technical skills] [-aw | --awards and achievements]"
          );
          newOutput.push(
            "           [-pr | --projects] [-vo | volunteering] [-pb | --publications] [-hb | hobbies]"
          );
          newOutput.push(" ");
          newOutput.push("These are common commands used:");
          newOutput.push(" ");
          newOutput.push(
            "About              A brief introduction highlighting your professional goals and experience."
          );
          newOutput.push(
            "Experience:        A chronological list of your past jobs, including roles, responsibilities, and accomplishments."
          );
          newOutput.push(" ");
          newOutput.push(
            "Education:         Your academic qualifications, including degrees, institutions, and relevant coursework."
          );
          newOutput.push(
            "Technical Skills:  A list of technical proficiencies, programming languages, tools, and software."
          );
          newOutput.push(
            "Awards:            Recognition or accomplishments you've received."
          );
          newOutput.push(" ");
          newOutput.push(
            "Projects:          Personal or professional projects you've worked on, highlighting your contributions."
          );
          newOutput.push(
            "Volunteering:      Community service or volunteer work experience."
          );
          newOutput.push(" ");
          newOutput.push(
            "Skills:            A broader list of skills, including soft skills like communication, teamwork, and problem-solving."
          );
          newOutput.push(
            "Publications:      Any articles, papers, or books you've authored or co-authored."
          );
          newOutput.push(" ");
          newOutput.push(
            "Hobbies:           Personal interests and activities outside of work."
          );
          newOutput.push(" ");
          break;
        case "about":
        case "ant -ab":
          newOutput.push(" ");
          newOutput.push(
            "Adaptable and articulate Engineer with 6 year's experience in managing design and implementation of Spring Boot web services "
          );
          newOutput.push(
            "and well-versed in deployments, migrations, and data storage solutions. A proactive contributor who excels in delivering the right tools, "
          );
          newOutput.push(
            "resources, and support – at the right time. Eager to learn new things and to solve real life problems."
          );
          newOutput.push(" ");
          break;
        case "experience":
        case "ant -ex":
          let exIndex = 0;
          const experienceLines = [
            " ",
            '   <span style="color: orange;">Experience</span>',
            " ",
            '   <span style="color: orange;">Airtel | Senior Software Engineer (Java Backend Developer)                            Aug 2022 – present</span>',
            " ",
            "   • Led a team of 14 resources in Developing and implementing the One-EPC platform, under unified platform approach to",
            "     centralize Product Catalog across all lines of business, replacing disparate catalog systems",
            "   • Engineered workflows that optimized Product Lifecycle Management, cutting Go-to-Market time from 7 days to 1 day",
            "   • Facilitated requirements gathering sessions with business stakeholders, offering innovative solutions and guiding the team",
            "     through solutioning phases to effectively achieve project objectives",
            "   • Managed critical channel api’s, overseeing 900+ TPS across diverse Airtel channels with 99.9% success rate under all",
            "     order creation journey’s, significantly impacting revenue and overall working functionality",
            "   • Spearheaded the Proof of Concept for Aerospike as a caching solution, critical for performance optimization and",
            "     scalability of the platform, Developed cache utility service to reload cached data",
            "   • Enhanced critical API endpoints for fetching product catalog for DTH, managing a traffic volume exceeding 30M/day",
            "   • Built microservice which supported MyWifi functionalities over Airtel Thanks App including modem reboot, reset",
            "     credentials, guest, optimize wifi, etc, enhancing broadband service capabilities and customer experience",
            "   • Implemented many customer-facing APIs to manage Airtel’s broadband journey, with a traffic of over 3M requests/ day",
            "     achieving 99.97% success rate",
            "   • Implemented automated workflows for troubleshooting internet connectivity issues, significantly reducing resolution",
            "     time and enhancing operational efficiency which resulted in 14% drop in SRs",
            " ",
            '   <span style="color: orange;">Accenture | Application Development Analyst                                          Aug 2021 – Aug 2022</span>',
            " ",
            "   • Designed and developed Broadband provisioning system as an application aligning with business requirements and",
            "     analyzed and enacted technical solutions",
            "   • Developed configserver application to enhance flexibility and minimizing downtime configuration management",
            "   • Built Autoretry module to automate retry mechanisms for technical failures, improving system resilience",
            "   • Implemented provisioning and persist microservices for specific technical and functional requirements",
            " ",
            '   <span style="color: orange;">Infosys | Senior System Engineer                                                     Jun 2018 – Aug 2021</span>',
            "   • Developed, and maintained critical functionality projects for Cisco, focusing on enhancing Order Processing Layer",
            "   • Built mircroservices for importing orders from external systems, validation and data transformation before persistence",
            "     using Java, Spring Boot, MongoDB, Kafka, etc",
            "   • Engineered scheduler service to automate tasks, reducing manual effort by 40 Hrs/mo, improving operational efficiency",
            "   • Led a team of 4 resources in developing the Component Business Model as part of the Order Processing Layer program.",
            "     Managed project timelines, coordinated remote work, and collaborated closely with cross-functional teams",
            "   • Architected and optimized workflows for diverse order types including standard hardware, software products, invoice",
            "     items, cancel orders, etc, improving efficiency and accuracy in order processing",
            "   • Architected and optimized workflows, Served as a subject matter expert for normalization issues in production",
            " ",
            '   <span style="color: orange;">Infosys | System Engineer</span>',
            "   • Implemented asynchronous data processing capabilities using Kafka, significantly enhancing system scalability and",
            "     performance in handling large volumes of hits",
            "   • Developed complex functional scenarios for order booking journey’s, using Java, Plsql, Rest Apis, etc",
            " ",
          ];

          const displayExNextLine = () => {
            if (exIndex < experienceLines.length) {
              newOutput.push(experienceLines[exIndex]);
              setOutput([...newOutput]);
              exIndex++;
              setTimeout(displayExNextLine, 80); // Adjust the delay as needed
            }
          };

          displayExNextLine();

          break;
        case "education":
        case "ant -ed":
          let edIndex = 0;
          const educationLines = [
            " ",
            '   <span style="color: orange;">Education</span>',
            " ",
            '   <span style="color: orange;">TCET, Mumbai University, Mumbai                                                      July 2014 - July 2018</span>',
            " ",
            "       Bachelor of Engineering major in Electronics and Engineering (CGPA of 8.00) Mumbai MH, India",
            " ",
            '       Activities and societies: Participated in Project exhibition "I.C. The Future", Participated in Cultural Festival "TCET Sojourn"',
            '       Participated in Seminar on "Building Professional Skills for Consultancy Environment", Joined NSS (National Service Scheme), Joined ISTE (Indian Society for Technical Education.)',
            " ",
            '   <span style="color: orange;">Royal College of Arts Science and Commerce                                           July 2012 - July 2024</span>',
            " ",
            "       Higher Secondary Education, Science:       Grade: 73.38",
            " ",
            "       Activities and societies: Volleyball.",
            " ",
            '   <span style="color: orange;">G.S Jangid Memorial School                                                           July 2010 - July 2012</span>',
            " ",
            "       Secondary School Certificate:              Grade: 90.73",
            " ",
            "       Activities and societies: Cricket, Football, Quiz, Painting.",
            " ",
          ];

          const displayEdNextLine = () => {
            if (edIndex < educationLines.length) {
              newOutput.push(educationLines[edIndex]);
              setOutput([...newOutput]);
              edIndex++;
              setTimeout(displayEdNextLine, 80); // Adjust the delay as needed
            }
          };

          displayEdNextLine();
          break;
        case "technical skills":
        case "ant -ts":
          let tsIndex = 0;
          const tsLines = [
            " ",
            '   <span style="color: orange;">Technical Skills</span>',
            " ",
            '   <span style="color: orange;">Technologies:/span>',
            " ",
            "       Java, Python, Spring Boot, Spring MVC, Microservices, REST, Kibana, Grafana, MongoDB, AWS, PLSQL, Aerospike, Oracle,",
            "       JUnit, Mockito, Hibernate, DBMS, JavaScript, Weblogic, Spring, Docker, JPA, OpenShift Kubernetes, Jira, Apicurio",
            " ",
            '   <span style="color: orange;">Skills:/span>',
            " ",
            "       Data Structures and Algorithms(DSA), Design Patterns and System Design",
            " ",
            '   <span style="color: orange;">Tools:/span>',
            " ",
            "       Postman, IntelliJ Idea, VS Code, Jira, Bitbucket, Git/GitHub, Grafana, Kibana, U-release/U-deploy, Jenkins, SQL Developer",
            " ",
          ];
          const displayTsNextLine = () => {
            if (edIndex < tsLines.length) {
              newOutput.push(tsLines[tsIndex]);
              setOutput([...newOutput]);
              tsIndex++;
              setTimeout(displayTsNextLine, 80); // Adjust the delay as needed
            }
          };

          displayTsNextLine();
          break;
        case "licenses & certifications":
        case "ant -lc":
          let lcIndex = 0;
          const lcLines = [
            " ",
            '   <span style="color: orange;">Licenses & certifications</span>',
            " ",
            '   <a href = "https://www.credly.com/badges/fffc0040-9986-40a7-bb31-6dba4f1fa9a3/linked_in_profile" style="color: orange;">Professional Cloud Architect Certification</a>                  Aug 2024 - Aug 2026',
            "   Google",
            "   Credential ID 07213e2ec8c74af38c60950a43ae8589",
            " ",
            '   <span style="color: orange;">Open Digital Framework Foundation</span>                           Apr 2024',
            "   TM Forum",
            " ",
            '   <span style="color: orange;">TM Forum Open API Foundation</span>                                Apr 2024',
            "   TM ForumTM Forum",
            " ",
            '   <a href = "https://www.credly.com/badges/e1852155-1a41-4ae8-b572-112dda495c4f?source=linked_in_profile" style="color: orange;">AWS Certified Developer – Associate</a>                         Mar 2022 - Mar 2025',
            "   Amazon Web Services (AWS)",
            "   Credential ID 8PBRD6JLGJR1QSSK",
            " ",
            '   <a href = "https://www.credly.com/badges/fe8a88d5-90f6-47c4-9f21-683ec0fb7a7c?source=linked_in_profile" style="color: orange;">AWS Certified Solutions Architect – Associate</a>               Dec 2021 - Dec 2024',
            "   Amazon Web Services (AWS)",
            "   Credential ID E1N92JQJNE11QGS1",
            " ",
          ];
          const displayLcNextLine = () => {
            if (lcIndex < lcLines.length) {
              newOutput.push(lcLines[lcIndex]);
              setOutput([...newOutput]);
              lcIndex++;
              setTimeout(displayLcNextLine, 80); // Adjust the delay as needed
            }
          };

          displayLcNextLine();
          break;
        case "awards and achievements":
        case "ant -aw":
          let awIndex = 0;
          const awLines = [
            " ",
            '   <span style="color: orange;">Awards and Achievements</span>',
            " ",
            '   • <span style="color: orange;">AWS Certified Solutions Architect – Associate</span> and <span style="color: orange;">AWS Certified Developer – Associate</span>',
            '   • <span style="color: orange;">TM Forum Open API Foundation</span> and <span style="color: orange;">Open Digital Framework Foundation</span>',
            '   • Awarded <span style="color: orange;">Best Team, 2023</span> and <span style="color: orange;">Airtel Super Squad Award, 2023</span> for performance at Airtel',
            '   • Awarded <span style="color: orange;">Certificate of Appreciation</span>, in 2019 and 2020 for performance at Infosys',
            '   • Awarded <span style="color: orange;">Above & Beyond Award, 2024</span> and <span style="color: orange;">Broadband Excellence Awards, 2022</span> for performance at Airtel',
            '   • Awarded <span style="color: orange;">Insta Awards</span>, in 2019 and 2021 for performance at Infosys',
            " ",
          ];
          const displayAwNextLine = () => {
            if (awIndex < awLines.length) {
              newOutput.push(awLines[awIndex]);
              setOutput([...newOutput]);
              awIndex++;
              setTimeout(displayAwNextLine, 80); // Adjust the delay as needed
            }
          };

          displayAwNextLine();
          break;
        case "projects":
        case "ant -pr":
          let prIndex = 0;
          const prLines = [
            " ",
            '   <span style="color: orange;">Projects</span>',
            " ",
            '   <span style="color: orange;">Enterprise Product Catalog (EPC)                                                     May 2023 - Present</span>',
            '   <span style="color: orange;">Associated with Airtel Digital</span>',
            " ",
            "   This is one platform which is a part of charter vision of Airtel, where the complete catalog should be modelled, maintained, federated,",
            "   derived from one application. In the earlier Airtel world all standalone lobs maintained their own catalog and various channels had to",
            "   derive the product information from each one of them seperately also product life cycle management process was manual and different layer.",
            "   In the platform vision one-epc has been developed with a single mindset that all the product related information should be fetched from",
            "   a single standalone application. Developed one-epc application compliant with TM Forum, Onbaorded these APIs on gloo, Performed Key POC",
            "   for aerospike as a cache with desired tps. Undertook requirements from business, came with the solutioning. Lead the team for better and",
            "   smooth deliverables. Designed and articulated the application as per business requirement to fulfill the need of the hour. To facilitate",
            "   smooth modelling, federation process and complete lifecycle management. developed productOffering/ productOfferings Listing api to fetch",
            "   the product details based on catalog/ lob and also support different kind of filters as per requirements from business. Onboarded various",
            "   channels on these new apis and provided support/ assistance wherever required.",
            " ",
            "   Key Deliverables",
            "   Broabdand | Postpaid | Airfiber | IR COCP - IR on prepay | IR Inflight | Black + FWA | IR Set1 == Set2 | Black | Prepaid | D2I Booking Amount",
            "   | DTH | Black complete modelling process | Prepaid complete admin view + modelling process + federation and approval process through workflow.",
            " ",
            "   Lead a team of eighteen to deliver the platform based charter one-epc to develop and design a unified view or channel for enterprise catalogue",
            "   through out airtel. Designed and Developed Microservices. Designed project specifications aligning with business requirements and analysed and",
            "   enacted technical solutions. Acted as a pivotal contact for managing team throughout.",
            " ",
            '   <span style="color: orange;">Skills:</span> Spring Boot · Aerospike · Oracle Database · Kibana · Grafana · Apicurio · Open API · Gloo',
            " ",
            '   <span style="color: orange;">Broadband | My Wifi                                                                  Aug 2022 - May 2023</span>',
            '   <span style="color: orange;">Associated with Airtel Digital</span>',
            " ",
            "   In Broadband configurations My Wifi is a core journey, it is a backend layer which directly interacts with different systems and also is an ",
            "   interface between network layer applications and provides multiple functionalities in broadband configurations. Lead a team of 7 to deliver ",
            "   the project with stringent timelines, my key responsibilities lies in understanding the requirements from business, come up with the solutioning,",
            "   post that develop and lead the team during development activities help them during the phases and perform smooth and timely deliveries. ",
            "   Post production deployment/ Go Live, support operations team for smooth operations onboarding also making bug free production deployment.",
            " ",
            "   Key Journeys Designed and Developed: Get Device Info | Get Connected Devices | Modem Reboot | Reset Credentials | Optimize Wifi | Pause Devices ",
            "   | Unpause Devices | Reset Credentials GuestWifi | Optimize Wifi Channel Check | Get Device History | Guest Wifi Enable/Disable | Band Wifi Enable/Disable ",
            "   | Wifi Switch Status Check | Wifi Switch Status Enable/Disable | Get SSID List | Get Paused Devices | Get Brand Model Master | Current Channel Values ",
            "   | Get Port Status | Get OS List | Get Connection Details | Get Access Point Info | Get Network Latency | LDAP PLAN UPDATE | Firmware upgrade | ",
            "   Create Guest Wifi(AW) | Get Remaining Balance",
            " ",
            '   <span style="color: orange;">Skills:</span> Spring Boot · Solace · Oracle Database · Kibana · Grafana · Swagger',
            " ",
            '   <span style="color: orange;">Network Experience Charter - Handling Network Issue		                              Dec 2022 - Mar 2023</span>',
            '   <span style="color: orange;">Associated with Airtel Digital</span>',
            " ",
            "   Lead a team of four people to develop and deliver the application as per project timelines. Being a team player supported team members whereever",
            "   required. Designed project specifications aligning with business requirements and analyzed and enacted technical solutions. Developed Spring-boot",
            "   microservices. Identification of possible reasons and actions required when a customer experiences issues in internet connectivity / slow browsing",
            "   / frequent disconnections. With the Automation process and use of various tools – Embed UR, TR - across channels, issues can be detected automatically",
            "   and resolved remotely. Developed various automatic flows to troubleshoot customer issues related to internet issues and then run the automated process",
            "   to resolve the same once resolved update the same and if any other hardware issue faced and requires engineer visit then raise SR for engineers visit.",
            " ",
            '   <span style="color: orange;">Skills: Spring Boot · AppDynamics · Swagger · Oracle Database · SOAP · RESTful WebServices</span>',
            " ",
            '   <span style="color: orange;">Device Nucleus									                                                     Aug 2021 - Aug 2022</span>',
            '   <span style="color: orange;">Associated with Accenture</span>',
            " ",
            "   Designed and Developed Microservices. Designed project specifications aligning with business requirements and analysed and enacted technical solutions.",
            "   Developed Spring boot based microservices, config server to fetch the properties stored at an external file location, designed auto retrial module to",
            "   automatically retry any technical failures in device nucleus system. Enhanced and implemented provisioning and persist modules for specific technical and",
            "   functional requirements. Acted as a pivotal contact for managing any issues in production or testing and provided resolution plans throughout the project.",
            " ",
            "   Lead a team of four members to fulfill the delivery timelines without any major issues and to strictly follow the project requirements.",
            " ",
            '   <span style="color: orange;">Order Processing player							                                               Jan 2019 - Aug 2021</span>',
            "   Associated with Infosys, Cisco</span>",
            " ",
            "   Order Processing Layer is the central program or central layer which maintains everything from order creation to order closure under Cisco system. ",
            "   Once the order is created and persisted into Opl system I. e. stored into no sql database, it is then processed through various functionalities and ",
            "   validation based on product and thus the order passes through different workflow steps. At various joint point data is interfaced into other system for ",
            "   their processing such and credit system for credit calculation or invoicing system for invoice generation, etc. once all the workflow steps are completed ",
            "   then the order is closed. ",
            " ",
            '   <span style="color: orange;">Component Business Model under OPL    			                                        Jan 2019 - Aug 2021</span>',
            '   <span style="color: orange;">Associated with Infosys, Cisco</span>',
            " ",
            "   Component Business Model is a new project under Order Processing layer program for integrating new acquisition under Cisco from cloud to import these ",
            "   orders into OPL system. from cloud order is imported into opl layer and then processed further based on product and update signal are sent back to cloud",
            "   through different apis at required steps of the workflow for these orders. ",
            " ",
            '   <span style="color: orange;">Secure Hashing Algorithm for Video				                                          Sep 2017 - May 2018</span>',
            '   <span style="color: orange;">Associated with University of Mumbai</span>',
            " ",
            '   <span style="color: orange;">Secure Hashing Algorithm is a method or process through which the message is converted into smaller size that is it is ',
            "   compressed it uses message digest algorithm for converting the variable length data into fixed length data and then it creates a hash value of the data",
            "   of 160 bits length thus when the data file is opened it will require the hash value or figure print to open the data file i.e. video file in regard to ",
            "   this paper for the receiver to view the video file. Video is a collection of data or information in itself for compressing it and then creating a hash ",
            "   value or figure print of it and maintain its quality at the same time is a difficult task which is what this algorithm is trying to achieve.",
            " ",
            '   <span style="color: orange;">Health Monitoring Sysytem						                                              May 2017 - Mar 2018</span>',
            '   <span style="color: orange;">Associated with University of Mumbai</span>',
            " ",
            "   Health monitoring system is used for detecting the pulse rate as well as the temperature of the patient and constantly monitors it at the time interval",
            "   of 5 sec and then stores it in the nearby device i.e. computer. micro-controller is used to control all the functions and RF transmitter and receiver ",
            "   is used for transmission of data to the PC.",
            " ",
            '   <span style="color: orange;">Rescue-Bot										                                                      Apr 2017 - Mar 2018</span>',
            '   <span style="color: orange;">Associated with University of Mumbai</span>',
            " ",
            "   Rescue-Bot is the project which is used to detect the human being by using a wireless remote controlled Robot, which have the sensors that detects the",
            "   presence of the human being and indicates the presence to user. As it is a wireless Robot it can be easily mobilized and can be controlled. This can be",
            "   used to detect terrorists/thief inside the building. RF Communication ranges in between 30 KHz to 300 GHz. RF communication works by creating ",
            "   electromagnetic waves at a source and being able to pick up those electromagnetic waves at a particular destination. These electromagnetic waves travel ",
            "   through the air at near the speed of light. The wavelength of an electromagnetic signal is inversely proportional to the frequency i.e., the higher the ",
            "   frequency, the shorter the wavelength. In this project we use micro controller, which is programmed to control the input and output modules interfaced to it. ",
            "   The controller makes use of a PIR based input sensor to sense the human being and give us an alert indication. The controlling device of the whole system ",
            "   is a Microcontroller to which RF receiver, PIR sensor and DC motors are interfaced. The remote control has control buttons interfaced to RF transmitter. ",
            "   Whenever a button is pressed, the data related to that button will be transmitted through RF transmitter. This data will be received by RF receiver and ",
            "   is fed to the Microcontroller. The Microcontroller processes this data and acts accordingly on Robot motors. PIR sensor is interfaced to the Microcontroller ",
            "   which continuously monitors human presence and intimates to the controller. The controller alerts through Buzzer if human presence is present. The ",
            "   Microcontroller is programmed using Embedded C language.",
            " ",
            '   <span style="color: orange;">100W Inverter									                                                    Nov 2016 - Mar 2017</span>',
            '   <span style="color: orange;">Associated with University of Mumbai</span>',
            " ",
            "   Inverter is a small circuit which converts the direct current (DC) to alternating current (AC). The power of a battery is converted in to main voltages.",
            "   This power can be used for electronic appliances like television, mobile phones, computer etc. the main function of the inverter is to convert DC to AC ",
            "   and step-up transformer is used to create main voltages from resulting AC.",
            " ",
            '   <span style="color: orange;">Satellite Communication							                                             Jun 2016 - Sep 2016</span>',
            '   <span style="color: orange;">Associated with University of Mumbai</span>',
            " ",
            "   Satellite communication using arduino and sensors to send data via receiver signal.",
            " ",
            '   <span style="color: orange;">Mechanical Suspension Bridge					                                             Nov 2014 - Mar 2015</span>',
            '   <span style="color: orange;">Associated with University of Mumbai</span>',
            " ",
            "   It was a project for the mechanics subject. Mechanical Suspension bridge consisted of two syringes filled with fluids and a wooden structure in the shape",
            "   of bridge and the syringes are attached on both the sides of the bridge on pushing the bottom part of the syringes the bridge pulls the strings up and ",
            "   when the tension in the syringes are released the bridge comes down.",
            " ",
          ];
          const displayPrNextLine = () => {
            if (prIndex < prLines.length) {
              newOutput.push(prLines[prIndex]);
              setOutput([...newOutput]);
              prIndex++;
              setTimeout(displayPrNextLine, 80); // Adjust the delay as needed
            }
          };

          displayPrNextLine();
          break;
        case "volunteering":
        case "ant -vo":
          let voIndex = 0;
          const voLines = [
            " ",
            '   <span style="color: orange;">Volunteer</span>',
            " ",
            '   <span style="color: orange;">National Service Scheme                                                           Aug 2015 - May 2017</span>',
            '   <span style="color: orange;">Social Services</span>',
            " ",
            "   The National Service Scheme (NSS) is an Indian government-sponsored public service program conducted by the Department of Youth Affairs and Sports of ",
            "   the Government of India. ",
            " ",
            '   Successfully Participated in the events organised by NSS for the period of two years for helping those in need and with the motto of "Not Me But You" ',
            "   actually making a difference. NSS helps everyone to open-up and speak in front of a crowd for the well being of not only one but the nation as a whole. ",
            "   It takes in to appreciation of everyone's point of view and create a bond between them. ",
            " ",
            "   There has been many moments during this period which I want to do again and some of them are",
            " ",
            "   • Organized Blood Donation Camps.",
            "   • Organized Free Medical Camps in Government schools to distribute free medicine, provide free health check-ups",
            "   • Taught students at government schools",
            "   • Presented paper for E-Waste Management.",
            "   • Promoted and participated in Tree Plantation rally",
            "   • Participated in many awareness rallies, cleanliness drives, medical camps",
            "   • Performed flash mobs, rallies and street play to educate rural population",
            "   • Promoted anti-tobacco and alcohol ban campaigns",
            "   • Organized seminars on road safety and personal and public hygiene",
            '   • Supported the Prime Minister\'s initiative, "Swachh Bharat Abhiyan"',
            "   • Participated in seven-day residential camp to a remote village in Thane district of Maharashtra",
            " ",
            '   <span style="color: orange;">Smile Foundation									                                                 Jan 2016 - Apr 2017</span>',
            '   <span style="color: orange;">Social Services</span>',
            "   Volunteered in Smile Foundation in 2016 and 2017, Mumbai.",
            "   It was a joyful experience of encouraging the runners in the marathon.",
            " ",
            '   <span style="color: orange;">Making A Difference (M.A.D.) Foundation				                                   Oct 2016 - Apr 2017</span>',
            '   <span style="color: orange;">Arts and CultureArts and Culture</span>',
            " ",
            '   M.A.D Foundation and Mumbai First organised "Hamara Station Hamari Shaan" a public Private initiative which helped beautify & Transform 36 Railway ',
            "   stations of Mumbai to celebrate the Daan Utsav week.",
            " ",
            '   <span style="color: orange;">TCET MUN											                                                     Sep 2016 - Apr 2017</span>',
            '   <span style="color: orange;">Economic Empowerment</span>',
            " ",
            "   Worked as member of Logistics in Thakur College of Engineering & Technology Model United Nations Conference 2016.",
            " ",
            '   <span style="color: orange;">Rotary Club of Bombay Kandivli						                                         Oct 2015 - Apr 2017</span>',
            '   <span style="color: orange;">Social Services</span>',
            " ",
            "   Rotary Club of Bombay Kandivli organised a Traffic rules awareness and management programme and Traffic police department, Mumbai gave training in ",
            "   traffic regulation and management on rotary public safety awareness day.",
            " ",
          ];
          const displayVoNextLine = () => {
            if (voIndex < voLines.length) {
              newOutput.push(voLines[voIndex]);
              setOutput([...newOutput]);
              voIndex++;
              setTimeout(displayVoNextLine, 80); // Adjust the delay as needed
            }
          };

          displayVoNextLine();
          break;
        case "publications":
        case "ant -pb":
          let pbIndex = 0;
          const pbLines = [
            " ",
            '   <span style="color: orange;">Secure Hashing Algorithm (SHA)for Video                                  IARJSET, Jan 1, 2018</span>',
            "   Secure Hashing Algorithm provides the user to the knowledge of the data being manipulated as well as the hash value can be used for authentication in this way",
            "   it provides better security to the user data files.",
            " ",
            '   <span style="color: orange;">CP Connection with Spring Boot, Reading a Large Clob Response                     Jan, 2020</span>',
            "   Published Book of Knowledge on Configuring Hikari CP Connection with Spring Boot, Reading a Large Clob Response.",
            " ",
          ];
          const displayPbNextLine = () => {
            if (pbIndex < pbLines.length) {
              newOutput.push(pbLines[pbIndex]);
              setOutput([...newOutput]);
              pbIndex++;
              setTimeout(displayPbNextLine, 80); // Adjust the delay as needed
            }
          };

          displayPbNextLine();
          break;
        case "hobbies":
        case "ant -hb":
          let hbIndex = 0;
          const hbLines = [
            " ",
            '   <span style="color: orange;">Hobbies</span>',
            " ",
            "   • Reading Books • Travelling • Playing Cricket • Watching Movies • Listening to Music • Playing Chess • Playing Badminton • Playing Football",
            "   • Watching documentaries • Watching web-series • Watching anime • Playing Video Games • Eating • Cooking • Gardening • Photography •",
            "   • Watching Stand-up Comedy • Watching Ted Talks • Learning new things • Solving Puzzles • Painting • Writing • Reading current Affairs",
            "   • Learning new technologies • Buidling new things • Business Analysis",
            " ",
          ];
          const displayHbNextLine = () => {
            if (hbIndex < hbLines.length) {
              newOutput.push(hbLines[hbIndex]);
              setOutput([...newOutput]);
              hbIndex++;
              setTimeout(displayHbNextLine, 80); // Adjust the delay as needed
            }
          };
          displayHbNextLine();
          break;
        case "contacts":
        case "ant -co":
          let coIndex = 0;
          const coLines = [
            " ",
            '   <span style="color: orange;">Contacts</span>',
            " ",
            '   <a href = "ppandey1201@gmail.com" style="color: orange;">Gmail</a>    |    <a style="color: orange;">+91 9029103637</a>    |     <a href = "https://www.linkedin.com/in/call-prashant" style="color: orange;">linkedin</a>',
            " ",
          ];
          const displayCoNextLine = () => {
            if (coIndex < coLines.length) {
              newOutput.push(coLines[coIndex]);
              setOutput([...newOutput]);
              coIndex++;
              setTimeout(displayCoNextLine, 80); // Adjust the delay as needed
            }
          };

          displayCoNextLine();
          break;
        default:
          newOutput.push(`Command not found: ${command}`);
      }
      setOutput(newOutput);
    }
  };
  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="buttons">
          <span className="button red"></span>
          <span className="button yellow"></span>
          <span className="button green"></span>
        </div>
      </div>
      <div className="terminal-body" ref={terminalBodyRef}>
        <pre>
          <span className="visitor" style={{ color: "orange" }}>
            visitor
          </span>
          @terminal.prashant.dev:-$ welcome
          <br />
          <code>
            {`
                                                                                   
@@@@@@@   @@@@@@@    @@@@@@    @@@@@@   @@@  @@@      @@@@@@   @@@  @@@  @@@@@@@  
@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@@@@@   @@@  @@@     @@@@@@@@  @@@@ @@@  @@@@@@@  
@@!  @@@  @@!  @@@  @@!  @@@  !@@       @@!  @@@     @@!  @@@  @@!@!@@@    @@!    
!@!  @!@  !@!  @!@  !@!  @!@  !@!       !@!  @!@     !@!  @!@  !@!!@!@!    !@!    
@!@@!@!   @!@!!@!   @!@!@!@!  !!@@!!    @!@!@!@!     @!@!@!@!  @!@ !!@!    @!!    
!!@!!!    !!@!@!    !!!@!!!!   !!@!!!   !!!@!!!!     !!!@!!!!  !@!  !!!    !!!    
!!:       !!: :!!   !!:  !!!       !:!  !!:  !!!     !!:  !!!  !!:  !!!    !!:    
:!:       :!:  !:!  :!:  !:!      !:!   :!:  !:!     :!:  !:!  :!:  !:!    :!:    
 ::       ::   :::  ::   :::  :::: ::   ::   :::     ::   :::   ::   ::     ::    
 :         :   : :   :   : :  :: : :     :   : :      :   : :  ::    :      :     
                                                                                  
            `}
            <br />
            Welcome to my terminal portfolio! (version 1.0.0)
            <br />
            For a list of available commands, type `
            <span className="visitor" style={{ color: "orange" }}>
              help
            </span>
            `.
            <br />
            {output.map((line, index) => (
              <div key={index}>
                <span dangerouslySetInnerHTML={{ __html: line }} />
              </div>
            ))}
            <div className="input-line">
              <span className="visitor" style={{ color: "orange" }}>
                visitor
              </span>
              @terminal.prashant.dev:-${" "}
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                className="terminal-input"
                autoFocus
              />
            </div>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default HomePage;
