import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Burak",
  lastName: "Adıgüzel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend Developer",
  avatar: "/images/avatar.webp",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Turkish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/adiguzelburak",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/adiguzelburak/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adiguzelburak@icloud.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/adiguzelburak",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Istanbul-based Frontend Developer specializing in modern web
        applications. Experienced in building sophisticated admin panels and
        real-time tracking systems with React.js, TypeScript, and Next.js.
        Passionate about creating efficient, user-centric solutions with clean,
        maintainable code.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ziylan Medya",
        timeframe: "05.2024 - Current",
        role: "Frontend Developer",
        achievements: [
          <>
            Outdoor advertising with backpacks featuring integrated holographic
            propellers
          </>,
          <>
            Developed an admin panel enabling real-time tracking of HoloWalkers
            using Google Maps API.
          </>,
          <>Designed routes for HoloWalkers using Google Maps API.</>,
          <>Enabled remote control of backpacks.</>,
          <>
            Developed an Analytics page for analyzing the performance and route
            data of HoloWalkers
          </>,
          <>
            Worked with React.js, TypeScript, TanStack Query, TailwindCSS,
            Google Maps API, Firebase
          </>,
        ],
        images: [
          {
            src: "/images/projects/holopack/1.png",
            alt: "Holopark Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/holopack/2.png",
            alt: "Holopark Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/holopack/3.png",
            alt: "Holopark Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/holopack/4.png",
            alt: "Holopark Project",
            width: 16,
            height: 9,
          },

          {
            src: "/images/projects/holopack/5.png",
            alt: "Holopark Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "TM Group",
        timeframe: "11.2022 - 09.2023",
        role: "Frontend Developer",
        achievements: [
          <>Web development for cryptocurrency trading projects</>,
          <>
            Worked with Next.js, WebSocket, TypeScript, Redux, and TailwindCSS
            technologies.
          </>,
        ],
        images: [
         

        ],
      },
      {
        company: "Mars Robotics",
        timeframe: "07.2021 - 11.2022",
        role: "Frontend Developer",
        achievements: [
          <>
            Production and software development of AMR (Autonomous Mobile
            Robots) for industrial use
          </>,
          <>
            Developed web and desktop applications for monitoring and
            controlling mobile robots
          </>,
          <>Created a mobile application for robot control.</>,
          <>
            Utilized React.js, WebSocket, TypeScript, TailwindCSS, C# WPF, and
            Xamarin.Forms.
          </>,
        ],
        images: [],
      },
      {
        company: "DogGO",
        timeframe: "12.2020 - 07.2021",
        role: "Frontend Developer",
        achievements: [
          <>
            An application enabling dog owners to meet needs such as walking,
            grooming, and home care
          </>,
          <>Enhancements were made to the admin panel and website.</>,
          <>Worked with React.js, Redux Saga, and REST API technologies.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dokuz Eylül University",
        description: <>Public Finance</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>
            Proficient in building modern web applications using React.js,
            Next.js, and TypeScript. Expert in state management with Redux,
            TanStack Query, and Redux Saga. Strong experience with TailwindCSS
            for responsive and maintainable styling.
          </>
        ),
        images: [],
      },
      {
        title: "API Integration",
        description: (
          <>
            Experienced in integrating various APIs including Google Maps,
            WebSocket for real-time applications, and RESTful services. Skilled
            in Firebase integration for backend services.
          </>
        ),
        images: [],
      },
      {
        title: "Development Tools & Practices",
        description: (
          <>
            Proficient with Git for version control, experienced in implementing
            CI/CD pipelines, and skilled in using modern development tools for
            optimized frontend development workflows.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, gallery };
