export interface Committee {
  id: number;
  name: string;
  img: string;
  fullName: string;
  description: string;
  agenda: string;
  chairpersons: Array<{
    name: string;
    role: string;
    imgSrc: string;
  }>;
}

export const committees: Committee[] = [
  {
    id: 1,
    name: "ECOSOC",
    img: "/comm/ECOSOC.png",
    fullName: "ECONOMIC AND SOCIAL COUNCIL",
    description: `The Economic and Social Council (ECOSOC) is one of the six principal organs of the United Nations, responsible for promoting international cooperation on economic, social, and environmental issues. In Model United Nations, ECOSOC serves as a platform for delegates to address global challenges such as sustainable development, humanitarian crises, climate change, and international trade.

At our MUN, ECOSOC provides delegates with the opportunity to represent nations, engage in constructive debate, and develop practical, consensus-based solutions. Through research, negotiation, and resolution drafting, participants learn to balance national interests with global priorities.

This council helps delegates sharpen skills in diplomacy, public speaking, and policy-making while fostering an understanding of the complexities of global governance. ECOSOC in MUN is not just about debate—it's about building solutions for a better world.`,
    agenda: "The global future economic order.",
    chairpersons: [
      { name: "Karthik V", role: "Chairperson", imgSrc: "/cp/ecosoc-cp.jpeg" },
      { name: "Aditya PV", role: "Vice Chairperson", imgSrc: "/cp/ecosoc-vp.jpeg" },
    ]
  },
  {
    id: 2,
    name: "IPC",
    img: "/comm/IPC.png",
    fullName: "International Press Corps",
    description: `The International Press Corps (IPC) is a unique committee in Model United Nations that simulates the role of international media organizations. Unlike traditional committees where delegates represent countries, IPC delegates act as journalists, photographers, and media representatives covering the MUN conference.

IPC delegates are responsible for reporting on committee sessions, conducting interviews with delegates and chairpersons, and creating various forms of media content including articles, press releases, and multimedia presentations. This committee provides participants with hands-on experience in journalism, media ethics, and international communication.

Through their work, IPC delegates develop skills in research, writing, interviewing, and multimedia production while gaining a comprehensive understanding of how media influences international relations and policy-making processes.`,
    agenda: "Media coverage and reporting on global issues and committee proceedings.",
    chairpersons: [
      { name: "Ann", role: "Co-Head Of Journalism", imgSrc: "/cp/ann.jpeg" },
      { name: "Keerthana", role: "Co-Head Of Journalism", imgSrc: "/cp/keerthana.jpeg" },
      { name: "Prabhu Shankar", role: "Head of Photography", imgSrc: "/cp/prabhu.jpg" },
    ]
  },
  {
    id: 3,
    name: "SCEA",
    img: "/comm/SCEA.png",
    fullName: "Special Committee on Economic Affairs",
    description: `The Special Committee on Economic Affairs (SCEA) is a specialized committee focused on addressing critical economic challenges facing the global community. This committee delves into complex economic issues such as trade policies, financial regulations, economic development strategies, and international economic cooperation.

SCEA provides delegates with an opportunity to explore the intricate relationships between economic policies and their social, political, and environmental impacts. Delegates learn to analyze economic data, understand market dynamics, and develop comprehensive policy solutions that balance economic growth with sustainable development.

Through rigorous debate and negotiation, participants develop expertise in economic diplomacy, policy analysis, and international economic governance. SCEA is ideal for delegates interested in economics, finance, and international trade relations.`,
    agenda: "Sustainable economic development and international trade relations.",
    chairpersons: [
      { name: "Ravi Vatsan", role: "Chairperson", imgSrc: "/cp/scea-cp.jpg" },
      { name: "Arvind Pandey", role: "Joint Secretary", imgSrc: "/cp/scea-js.jpg" },
    ]
  },
  {
    id: 4,
    name: "UNHRC",
    img: "/comm/UNHRC.png",
    fullName: "United Nations Human Rights Council",
    description: `The United Nations Human Rights Council (UNHRC) is a principal body within the UN system responsible for strengthening the promotion and protection of human rights around the globe. In Model United Nations, UNHRC provides delegates with a platform to address critical human rights issues, humanitarian crises, and social justice concerns.

UNHRC delegates work on complex topics such as refugee rights, gender equality, freedom of expression, and the protection of vulnerable populations. Through research, debate, and resolution drafting, participants learn to balance national sovereignty with international human rights obligations.

This committee helps delegates develop skills in human rights advocacy, international law, and humanitarian diplomacy. UNHRC is particularly valuable for delegates interested in law, human rights, social justice, and international humanitarian affairs.`,
    agenda: "Protection of human rights in conflict zones and humanitarian crises.",
    chairpersons: [
      { name: "TCA Varshini", role: "Chairperson", imgSrc: "/cp/unhrc-cp.jpeg" },
      { name: "Sudharsan Sukumar", role: "Vice Chairperson", imgSrc: "/cp/unhrc-vp.jpeg" },
    ]
  },
  {
    id: 5,
    name: "UNGA",
    img: "/comm/ECOSOC.png",
    fullName: "United Nations General Assembly",
    description: `The United Nations General Assembly (UNGA) is one of the six main organs of the United Nations and serves as its chief deliberative, policymaking, and representative body. Comprising all 193 member states, each with an equal vote, it provides a unique forum for multilateral discussion on international issues covering peace, security, development, human rights, and international law. Unlike the Security Council, where only a few states hold veto power, the UNGA gives every nation an equal voice in global affairs. It meets annually in New York, most notably during the General Debate, where world leaders present their views on pressing global challenges. While its resolutions are generally non-binding, the UNGA plays a crucial role in shaping international norms, approving the UN budget, electing non-permanent members of the Security Council, and appointing the Secretary-General, making it the central platform for international dialogue and cooperation.`,
    agenda: " Emergency special Session of the Unga Freeze date : Jan 10, 1980",
    chairpersons: [
      { name: "Hrishekesh", role: "Chairperson", imgSrc: "/cp/Hrishikesh.jpg" },
      { name: "Aashrith Narayn", role: "Vice Chairperson", imgSrc: "/cp/Ashrith.jpg" },
    ]
  },
  {
    id: 6,
    name: "UNSC",
    img: "/comm/ECOSOC.png",
    fullName: "United Nations Security Council",
    description: `The United Nations Security Council (UNSC) is one of the six main organs of the United Nations and holds primary responsibility for maintaining international peace and security. It has 15 members: 5 permanent members (China, France, Russia, the United Kingdom, and the United States), who hold veto power, and 10 non-permanent members elected by the General Assembly for two-year terms. Unlike the General Assembly, the UNSC can adopt legally binding resolutions on member states. Its powers include authorizing peacekeeping missions, imposing sanctions, and approving the use of force to address threats to international peace. The Council also recommends the appointment of the UN Secretary-General and the admission of new member states. While it is the most powerful UN body, its structure, especially the veto system, has often been criticized for limiting representation and effectiveness.`,
    agenda: "Situation in Georgia - August 1, 2008",
    chairpersons: [
      { name: "Lokesh N", role: "Chairperson", imgSrc: "/cp/Lokesh.jpg" },
      { name: "Anirudh S", role: "Vice Chairperson", imgSrc: "/cp/Anirudh.jpg" },
    ]
  }
];

export const getCommitteeById = (id: string | number): Committee | undefined => {
  const numId = typeof id === 'string' ? parseInt(id) : id;
  return committees.find(committee => committee.id === numId);
};
