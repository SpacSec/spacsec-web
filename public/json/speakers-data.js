const speakers = [
  {
    name: "Prof. Walter Peeters",
    image: "/images/Prof.WalterPeeters.jpg",
    institute: "Adviser",
    location: "International Space University",
    country: "France",
    details: `
    Has been with ESA since 1983 after initial activities in industry (construction, petrochemical). 
    In ESA: project control and coordination on the Hermes project and the EUROMIR flights with Russia, 
    among others. Former Head of the Coordination Office of the European Astronaut Centre in Cologne.
    <br><br>
    Lecturer in Space Marketing (Technical University of Delft) and former visiting professor 
    in Non-profit Marketing (Catholic University of Louvain).
    <br>
    Founding Director of IISC (International Institute of Space Commerce)
    <br>
    Former Dean and President of ISU (till 2018)
    `,
    linkedin: "#",
  },
  {
    name: "Prof. Ajay Gupta",
    image: "/images/Prof.AjayGupta.jpg",
    institute: "Western Michigan University",
    location: "Michigan",
    country: "USA",
    details: `
      Ajay Gupta is a Professor of Computer Science at Western
      Michigan University. He is quite active in IEEE-Computer
      Society being the Vice-Chair of the Technical Activities
      Committees in 2015-2016 and elected twice as the Chair of
      the Technical committee on Parallel Processing from 2011 to
      2015. <br><br>
      From 1998 to 2002, he was the Chairman of
      the Computer Science Department at Western Michigan
      University. Dr. Gupta received his Ph.D. in Computer Science
      from Purdue University in 1989, his M.S. in Mathematics and
      Statistics from the University of Cincinnati in 1984, and
      his B.E. (Honors) in Electrical and Electronics Engineering
      from Birla Institute of Technology and Sciences, Pilani,
      India in 1982
    `,
    linkedin: "#",
  },
  {  //not yet available
    name: "Dr. Pljonkin A. Pavlovich",
    image: "/images/Dr.PljonkinA.Pavlovich.png",
    institute: "Ministry of Education and Science of the Russian Federation",
    location: "Southern Federal University",
    country: "",
    details: `
    
    `,
    linkedin: "https://www.google.com/",
  },
  { //not yet available
    name: "Dr. Anshuman Kalla",
    image: "/images/AnshumanKalla.png",
    institute: "Postdoctoral Visiting Researcher",
    location: "CWC",
    country: "University of Oulu, Finland",
    details: `
  
    `,
    linkedin: "#",
  },
  {  //content writer
    name: "Dr. Geeta Sikka",
    image: "/images/Dr.GeetaSikka.png",
    institute: "NIT Kurukshetra",
    location: "Jalandhar",
    country: "India",
    details: `
  
    `,
    linkedin: "#",
  },
  { //content writer
    name: "Dr. PK Garg",
    image: "/images/Dr.P.K.Garg.png",
    institute: "India Institute Of Technology",
    location: "Roorkee",
    country: "India",
    details: `
  
    `,
    linkedin: "#",
  },
  { //not yet available
    name: "Dr. Arvind Sharma",
    image: "/images/dummy.jpg",
    institute: "Hindustan Aeronautics Limited",
    location: "Nasik",
    country: "India",
    details: `
  
    `,
    linkedin: "#",
  },
  { //content writer
    name: "Dr. B.B. Gupta",
    image: "/images/Dr.B.B.Gupta.png",
    institute: "NIT Kurukshetra",
    location: "Jalandhar",
    country: "India",
    details: `
  
    `,
    linkedin: "#",
  },
  { //content writer
    name: "Cem Avsar",
    image: "/images/CemAvsar.png",
    institute: "Managing Director bei beSpace GmbH and Scientific Coordinator",
    location: "TU, Berlin, Germany",
    country: "",
    details: `
  
    `,
    linkedin: "#",
  },
  {
    name: "Dr. Vidhyacharan Bhaskar",
    image: "/images/Dr.VidhyacharanBhaskar.png",
    institute: "San Francisco State University",
    location: "California",
    country: "USA",
    details: `
    Dr. Vidhyacharan Bhaskar received the B.Sc. degree in Mathematics from 
    the University of Madras, Chennai, India in 1992, M.E. degree in Electrical 
    & Communication Engineering from the Indian Institute of Science, Bangalore 
    in 1997, and the M.S.E. and Ph.D. degrees in Electrical Engineering from the 
    University of Alabama in Huntsville in 2001 and 2002, respectively. Since 2015, 
    he is a Professor in the Department of Electrical and Computer Engineering at San 
    Francisco State University, San Francisco, California, USA.<br><br>
    His research interests include MIMO wireless communications, signal processing, 
    error control coding and queuing theory. He is an IEEE Senior member (SM-IEEE) and 
    is a member of IET (M-IET, UK). He is a Fellow of Institute of Electronics and 
    Telecommunication Engineers (F-IETE), and a Fellow of Institute of Engineers (F-IE), 
    Kolkata, India. He is also a Life member of the Indian Society of Technical 
    Education (LM-ISTE) and a member of the Indian Science Congress (M-ISC).
    `,
    linkedin: "#",
  },
  {
    name: "Dr. Pushpendu Kar",
    image: "/images/Dr.PushpenduKar.png",
    institute: "School of Computer Science at the University of Nottingham (Ningbo China Campus)",
    location: "",
    country: "UK",
    details: `
    Dr. Pushpendu Kar is an Assistant Professor in the School of Computer 
    Science at the University of Nottingham Ningbo China (China campus of 
    the University of Nottingham UK).  Before this, he was a Research Fellow 
    in the Department of ICT and Natural Sciences at Norwegian University of 
    Science and Technology (NTNU), Norway, the Department of Electrical & 
    Computer Engineering at National University of Singapore (NUS) and the 
    Energy Research Institute at Nanyang Technological University (NTU), Singapore.
    <br><br>
    Dr. Kar has the expertise to work on different aspects of Wireless Sensor 
    Networks, the Internet of Things, and Content Centric Networking. He also 
    has the expertise to simulate these networks using Matlab and NS3 simulator.  
    He has implemented these networks with sophisticated techniques for automation 
    and control in a smart building environment, healthcare, and transportation. He 
    has the expert skill to develop JAVA programs for real-life projects.
    `,
    linkedin: "#",
  },
  {
    name: "Dr. Hari B. Hablani",
    image: "/images/Dr.HariB.Hablani.png",
    institute: "Professor (Dept. of Aerospace Engineering)",
    location: "IIT, Bombay",
    country: "India",
    details: `
    Prior to joining IITB, Dr. Hablani was a Visiting Faculty Professor at the 
    Department of Aerospace Engineering, IIT Kanpur, during July 2008 - July 2009, 
    where he taught three graduate courses concerning satellite orbits; spacecraft 
    guidance, navigation, and control; and integrated air navigation.  In addition, 
    he conducted research with B. Tech students concerning aircraft navigation aided 
    by ISRO’s GAGAN (GPS Aided Geostationary Augmented Navigation) and IRNSS 
    (Indian Regional Navigation Satellite System) programs; radar imaging surveillance 
    satellites; attitude determination, control, and GPS-based navigation of nanosatellites. 
    <br>
    Over the last five years, he has guided 15 MTech, Dual Degree and BTech students’ projects. 
    Some of these research areas are Spacecraft dynamics and control, Launch vehicles or Reusable 
    Launch Vehicles, Satellite-based air navigation, Missile Guidance and relative navigation, 
    Motion compensation of synthetic aperture radar on a cruise flight.
    `,
    linkedin: "#",
  },
];
module.exports = speakers;
