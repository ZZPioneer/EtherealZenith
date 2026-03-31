import { Language, Experience, HonorsData } from "../../types";

export interface EducationPageContent {
  title: string;
  about: string;
  openToWork: string;
  viewHonorsLabel: string;
  honorsTitle: string;
  competitionsTitle: string;
  scholarshipsLabel: string;
  titlesLabel: string;
  experiences: Experience[];
  honors: HonorsData;
}

export const EDUCATION_DATA: Record<Language, EducationPageContent> = {
  zh: {
    title: "教育经历",
    about: "关于你的教育经历。",
    openToWork: "边学边做+等待实习",
    viewHonorsLabel: "查看在校荣誉",
    honorsTitle: "在校荣誉",
    competitionsTitle: "竞赛奖项",
    scholarshipsLabel: "奖学金",
    titlesLabel: "荣誉称号",
    experiences: [
      {
        id: "1",
        year: "2024 - Present",
        title: "学士 / 计算机科学与技术",
        institution: "温州商学院 信息工程学院",
        description:
          "学习了计算机科学和软件工程基础课程，包括数据结构、算法、数据库、操作系统等。学习了python、java、c++等编程语言。web前端开发，vue、springboot框架。",
        type: "education",
      },
      {
        id: "2",
        year: "2021 - 2024",
        title: "大专 / 工业互联网应用",
        institution: "杭州科技职业技术学院 物联网学院",
        description:
          "学习了简单的高等数学，包括线性代数、微积分等。学习了python和Linux等编程语言。web前端开发，电气控制与PLC编程、生产线数字化设计与仿真（NXMCD）。",
        type: "education",
      },
    ],
    honors: {
      scholarships: [
        "2022年省政府奖学金",
        "2022年校一等奖学金",
        "2023年省政府奖学金",
        "2023年校二等奖学金",
        "2025年国家励志奖学金",
        "2025年校一等奖学金",
      ],
      titles: [
        "2022年校三好学生",
        "2024年省优秀毕业生",
        "2024年校行知学子",
        "2025年学院优秀共产党员",
        "2025年校三好学生",
      ],
      competitions: [
        {
          level: "国家级",
          awards: ["二等奖 | 2022年获第16届西门子杯全国智能挑战赛初赛"],
        },
        {
          level: "省级",
          awards: ["二等奖 | 2023年全国大学生数学建模竞赛"],
        },
        {
          level: "省级",
          awards: ["铜奖 | 2023年获浙江省第十八届挑战杯"],
        },
        {
          level: "国家级",
          awards: ["一等奖 | 2023年MathorCup高校数学建模挑战赛"],
        },
        {
          level: "校级",
          awards: [
            "一等奖 | 2023年获第十八届“挑战杯”大学生课外学术科技作品竞赛",
          ],
        },
      ],
    },
  },
  en: {
    title: "Education",
    about: "A summary of my educational background and academic journey.",
    openToWork: "Learning by Doing + Seeking Internships",
    viewHonorsLabel: "View Honors & Awards",
    honorsTitle: "Honors & Awards",
    competitionsTitle: "Competition Awards",
    scholarshipsLabel: "Scholarships",
    titlesLabel: "Honorary Titles",
    experiences: [
      {
        id: "1",
        year: "2024 - Present",
        title: "Bachelor / Computer Science and Technology",
        institution:
          "School of Information Engineering, Wenzhou Business College",
        description:
          "Studied fundamental courses in computer science and software engineering, including Data Structures, Algorithms, Databases, and Operating Systems. Learned programming languages such as Python, Java, and C++. Skilled in Web front-end development using Vue and Spring Boot frameworks.",
        type: "education",
      },
      {
        id: "2",
        year: "2021 - 2024",
        title: "Associate Degree / Industrial Internet Applications",
        institution:
          "School of Internet of Things, Hangzhou Polytechnic",
        description:
          "Studied basic higher mathematics, including Linear Algebra and Calculus. Learned programming languages such as Python and Linux. Skilled in Web front-end development, Electrical Control and PLC Programming, and Digital Production Line Design and Simulation (NX MCD).",
        type: "education",
      },
    ],
    honors: {
      scholarships: [
        "2022 Provincial Government Scholarship",
        "2022 First-Class School Scholarship",
        "2023 Provincial Government Scholarship",
        "2023 Second-Class School Scholarship",
        "2025 National Encouragement Scholarship",
        "2025 First-Class School Scholarship",
      ],
      titles: [
        "2022 Outstanding Student (School Level)",
        "2024 Provincial Outstanding Graduate",
        "2024 'Xingzhi' Student (School Level)",
        "2025 Outstanding CPC Member of the College",
        "2025 Outstanding Student (School Level)",
      ],
      competitions: [
        {
          level: "National",
          awards: [
            "2nd Prize | 16th Siemens Cup National Intelligent Manufacturing Challenge (Preliminary)",
          ],
        },
        {
          level: "Provincial",
          awards: [
            "2nd Prize | 2023 National Mathematical Modeling Contest for College Students",
          ],
        },
        {
          level: "Provincial",
          awards: ["Bronze Award | 18th 'Challenge Cup' of Zhejiang Province"],
        },
        {
          level: "National",
          awards: [
            "1st Prize | 2023 MathorCup Mathematical Modeling Challenge for College Students",
          ],
        },
        {
          level: "School",
          awards: [
            "1st Prize | 18th 'Challenge Cup' Extracurricular Academic and Scientific Works Competition",
          ],
        },
      ],
    },
  },
};
