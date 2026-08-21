import { ISkillListItem, SkillLevel } from "@/interfaces";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Intermediate,
        icon: "/skills/typescript.svg",
      },
      // {
      //   title: "Dart",
      //   level: SkillLevel.Expert,
      //   icon: "/skills/dart.svg",
      // },
    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Intermediate,
        icon: "/skills/css.svg",
      },
      // {
      //   title: "SASS",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/sass.svg",
      // },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },
      {
        title: "Tailwind CSS",
        level: SkillLevel.Expert,
        icon: "/skills/tailwind.svg",
      },
    ],
  },
  {
    title: "AI & Agentic Development",
    items: [
      {
        title: "AI Agents",
        level: SkillLevel.Intermediate,
        icon: "/skills/ai-agents.svg",
      },
      {
        title: "Sub-Agents",
        level: SkillLevel.Intermediate,
        icon: "/skills/sub-agents.svg",
      },
      {
        title: "Claude Skills",
        level: SkillLevel.Intermediate,
        icon: "/skills/claude-skills.svg",
      },
      {
        title: "MCP",
        level: SkillLevel.Intermediate,
        icon: "/skills/mcp.svg",
      },
      {
        title: "Tool Use",
        level: SkillLevel.Intermediate,
        icon: "/skills/tool-use.svg",
      },
    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: "/skills/socket-io.png",
      },
      {
        title: "CodeIgniter",
        level: SkillLevel.Intermediate,
        icon: "/skills/codeigniter.svg",
      },
      // {
      //   title: "Nest.js",
      //   level: SkillLevel.Beginner,
      //   icon: "/skills/nestjs.svg",
      // },
    ],
  },
  // {
  //   title: "Mobile App Development",
  //   items: [
  //     {
  //       title: "Flutter",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/flutter.svg",
  //     },
  //     {
  //       title: "GetX",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/getx.png",
  //     },
  //   ],
  // },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
      {
        title: "MySQL",
        level: SkillLevel.Beginner,
        icon: "/skills/mysql.svg",
      },
      {
        title: "Supabase",
        level: SkillLevel.Intermediate,
        icon: "/skills/supabase.svg",
      },
    ],
  },
  {
    title: "Cloud & Automation",
    items: [
      {
        title: "AWS",
        level: SkillLevel.Intermediate,
        icon: "/skills/aws.svg",
      },
      {
        title: "n8n",
        level: SkillLevel.Intermediate,
        icon: "/skills/n8n.svg",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github-white.png",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Firebase",
        level: SkillLevel.Intermediate,
        icon: "/skills/firebase.svg",
      },
      {
        title: "Ubuntu",
        level: SkillLevel.Intermediate,
        icon: "/skills/ubuntu.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;