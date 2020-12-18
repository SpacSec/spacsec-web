const speakers = [
  {
    name: "Prof. Walter Peeters",
    image: "/images/Prof.WalterPeeters.jpg",
    institute: "International Space University",
    location: "Illkirch-Graffenstaden",
    country: "France",
    //details: `
    //Has been with ESA since 1983 after initial activities in industry (construction, petrochemical). 
    //In ESA: project control and coordination on the Hermes project and the EUROMIR flights with Russia, 
    //among others. Former Head of the Coordination Office of the European Astronaut Centre in Cologne.
    //<br><br>
    //Lecturer in Space Marketing (Technical University of Delft) and former visiting professor 
    //in Non-profit Marketing (Catholic University of Louvain).
    //<br>
    //Founding Director of IISC (International Institute of Space Commerce)
    //<br>
    //Former Dean and President of ISU (till 2018)
    //`,
    workprofile: "https://www.isunet.edu/prof-walter-peeters/",
    linkedin: "#",
  },
  {
    name: "Dr. Hari B. Hablani",
    image: "/images/Dr.HariB.Hablani.png",
    institute: "Indian Institute of Technology",
    location: "Bombay",
    country: "India",
    //details: `
    //Prior to joining IITB, Dr. Hablani was a Visiting Faculty Professor at the 
    //Department of Aerospace Engineering, IIT Kanpur, during July 2008 - July 2009, 
    //where he taught three graduate courses concerning satellite orbits; spacecraft 
    //guidance, navigation, and control; and integrated air navigation.  In addition, 
    //he conducted research with B. Tech students concerning aircraft navigation aided 
    //by ISRO’s GAGAN (GPS Aided Geostationary Augmented Navigation) and IRNSS 
    //(Indian Regional Navigation Satellite System) programs; radar imaging surveillance 
    //satellites; attitude determination, control, and GPS-based navigation of nanosatellites. 
    //<br>
    //Over the last five years, he has guided 15 MTech, Dual Degree and BTech students’ projects. 
    //Some of these research areas are Spacecraft dynamics and control, Launch vehicles or Reusable 
    //Launch Vehicles, Satellite-based air navigation, Missile Guidance and relative navigation, 
    //Motion compensation of synthetic aperture radar on a cruise flight.
    //`,
    workprofile: "https://www.aero.iitb.ac.in/~hbhablani/",
    linkedin: "#",
  },
  { 
    name: "Cem Avsar",
    image: "/images/CemAvsar.png",
    institute: "Managing Director at beSpace GmbH and Scientific Coordinator",
    location: "TU, Berlin, Germany",
    country: "",
    //details: `
    //Cem Avsar is a managing director at beSpace GmbH and a research assistant 
    //at TU Berlin. Being a Study Program Manager in the Master of Space Engineer 
    //program, he has taught and supervised many students. Before this, he has 
    //given lectures on satellite technology, aerospace technology, aerospace 
    //electronics etc. He believes in hands-on learning and has introduced novel 
    //ways to teach the students.<br><br>
    //In 2010, he earned his diploma in Aerospace Engineering from TU 
    //Berlin. He has also been a research associate in the iBOSS project and a 
    //former CAD graphic designer at Ingencio, Berlin.
    //`,
    workprofile: "https://www.raumfahrttechnik.tu-berlin.de/menue/ueber_uns/mitarbeiterinnen/dipl_ing_cem_avsar/",
    linkedin: "https://www.linkedin.com/in/cemavsar/",
  },
  { 
    name: "Dr. PK Garg",
    image: "/images/Dr.P.K.Garg.png",
    institute: "India Institute of Technology",
    location: "Roorkee",
    country: "India",
    //details: `
    //Dr P.K. Garg is a professor at the Indian Institute of Technology, Roorkee. 
    //In 1991, he earned a Ph.D. in Remote Sensing from the University of Bristol 
    //followed by a post-doctoral in 1999. His areas of interest lie in satellite 
    //image analysis, land-use mapping, land surveying, digital image processing, 
    //GPS Survey and GIS.<br><br>
    //Dr Garg worked at the University of Roorkee for nineteen years before 
    //joining IIT Roorkee in 2001. Along with this, he has also authored several 
    //books.
    //`,
    workprofile: "https://www.iitr.ac.in/departments/CE/pages/People+Faculty+Garg_P_K_.html",
    linkedin: "#",
  },
  {  
    name: "Dr. Geeta Sikka",
    image: "/images/Dr.GeetaSikka.png",
    institute: "National Institute of Technology",
    location: "Jalandhar",
    country: "India", 
    //details: `
    //Dr Geeta Sikka is an associate professor at the National Institute of 
    //Technology, Jalandhar. Her research interests lie in data mining, data 
    //warehousing, databases, data science, big data and cloud computing. 
    //<br><br>
    //Dr Sikka completed her M.Tech in Computer Science from Punjab Agricultural 
    //University in 2004. Later she earned a Ph.D. in Analysis & Design of 
    //Analogy based Software Effort Estimation Approaches from NIT, Jalandhar. 
    //Apart from this, she has also contributed to many chapters in various books.
    //`,
    workprofile: "https://www.nitj.ac.in/index.php/nitj_cinfo/Faculty/30",
    linkedin: "#",
  },
  {
    name: "Dr. Vidhyacharan Bhaskar",
    image: "/images/Dr.VidhyacharanBhaskar.png",
    institute: "San Francisco State University",
    location: "California",
    country: "USA",
    //details: `
    //Dr. Vidhyacharan Bhaskar received the B.Sc. degree in Mathematics from 
    //the University of Madras, Chennai, India in 1992, M.E. degree in Electrical 
    //& Communication Engineering from the Indian Institute of Science, Bangalore 
    //in 1997, and the M.S.E. and Ph.D. degrees in Electrical Engineering from the 
    //University of Alabama in Huntsville in 2001 and 2002, respectively. Since 2015, 
    //he is a Professor in the Department of Electrical and Computer Engineering at San 
    //Francisco State University, San Francisco, California, USA.<br><br>
    //His research interests include MIMO wireless communications, signal processing, 
    //error control coding and queuing theory. He is an IEEE Senior member (SM-IEEE) and 
    //is a member of IET (M-IET, UK). He is a Fellow of Institute of Electronics and 
    //Telecommunication Engineers (F-IETE), and a Fellow of Institute of Engineers (F-IE), 
    //Kolkata, India. He is also a Life member of the Indian Society of Technical 
    //Education (LM-ISTE) and a member of the Indian Science Congress (M-ISC).
    //`,
    workprofile: "https://engineering.sfsu.edu/lecturer-profile-vidhyacharan-bhaskar",
    linkedin: "#",
  },
  { 
    name: "Dr. B.B. Gupta",
    image: "/images/Dr.B.B.Gupta.png",
    institute: "National Institute of Technolog",
    location: "Kurukshetra",
    country: "India",
    //details: `
    //Dr B.B. Gupta is an assistant professor at the National Institute of 
    //Technology, Kurukshetra. He has an experience of over ten years in teaching 
    //and research and has published more than two hundred research papers. His 
    //interests lie primarily in information security, cyber security, big data 
    //analytics, botnet detection, network performance evaluation and much more.
    //<br><br>
    //He was awarded the Best Faculty Award at NIT Kurukshetra in 2019. Apart 
    //from this, he was also a member of ACM, IEEE and SIGCOMM.
    //`,
    workprofile: "https://nitkkr.ac.in/comp_faculty_details.php?idd=96",
    linkedin: "#",
  },
  {
    name: "Dr. Pushpendu Kar",
    image: "/images/Dr.PushpenduKar.png",
    institute: "University of Nottingham",
    location: "(Ningbo China Campus)",
    country: "UK",
    //details: `
    //Dr. Pushpendu Kar is an Assistant Professor in the School of Computer 
    //Science at the University of Nottingham Ningbo China (China campus of 
    //the University of Nottingham UK).  Before this, he was a Research Fellow 
    //in the Department of ICT and Natural Sciences at Norwegian University of 
    //Science and Technology (NTNU), Norway, the Department of Electrical & 
    //Computer Engineering at National University of Singapore (NUS) and the 
    //Energy Research Institute at Nanyang Technological University (NTU), Singapore.
    //<br><br>
    //Dr. Kar has the expertise to work on different aspects of Wireless Sensor 
    //Networks, the Internet of Things, and Content Centric Networking. He also 
    //has the expertise to simulate these networks using Matlab and NS3 simulator.  
    //He has implemented these networks with sophisticated techniques for automation 
    //and control in a smart building environment, healthcare, and transportation. He 
    //has the expert skill to develop JAVA programs for real-life projects.
    //`,
    workprofile: "https://www.nottingham.edu.cn/en/Science-Engineering/People/Staff-Profile-Redirect.aspx?name=pushpendu-kar",
    linkedin: "https://www.linkedin.com/in/pushpendu-kar-b39576104/",
  },
  { 
    name: "Dr. Anshuman Kalla",
    image: "/images/AnshumanKalla.png",
    institute: "CWC",
    location: "University of Oulu",
    country: "Finland",
    workprofile: "https://sites.google.com/site/kallanshuman/",
    linkedin: "https://www.linkedin.com/in/anshuman-kalla-b41b23133/",
  },
];
module.exports = speakers;
