import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Danielle",
  lastName: "Williams",
  name: `Danielle Williams`,
  role: "Data Science and Analytics",
  avatar: "/images/IMG_3689.JPG",
  email: "daniwill16@yahoo.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/daniwill16/danielle_portfolio_website",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/danielle-williams-206221309/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/once_ui/",
    essential: false,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/IMG_3689.JPG",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering the future, one line of data at a time</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
    I'm Danielle, a Computer Science major at <Text as="span" size="xl" weight="strong">Louisiana State University</Text>, where I concentrate in <br /> Data Science and Analytics.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am Danielle Williams, a Computer Science student majoring in Data Science and Analytics with a passion for turning complex data into clear insights,
        building meaningful projects, and developing the technical skills that will shape my future in tech. I enjoy exploring how data, problem-solving, and 
        creativity come together to make smarter, more impactful solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Aeropostale",
        timeframe: "January 2024 - January 2026",
        role: "Sales Associate",
        achievements: [
          <>
           Provided high-quality customer service by helping shoppers with product selection, styling advice,
           sizing guidance, and handling inquiries, returns, and exchanges professionally.
          </>,
          <>
            Collaborated with coworkers to meet daily sales goals while maintaining
            POS accuracy, store organization, and strong visual merchandising standards.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/aeropostalelogo.jpg",
            alt: "Aeropostale Logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Outlier AI",
        timeframe: "June 2024 - October 2024",
        role: "AI Trainer",
        achievements: [
          <>
            Evaluated AI model outputs through systematic review, performance analysis, and root‑cause
            investigation to ensure accuracy, consistency, and alignment with expected solutions.
          </>,
          <>
            Supported model training and improvement by analyzing large volumes of responses, preparing analytical reports with key 
            insights and recommendations, and collaborating with cross‑functional teams across national and international locations to drive data‑driven enhancements.
          </>,
        ],
        images: [
          {
            src: "/images/outlierlogo.webp",
            alt: "Outlier AI Logo",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Louisiana State University",
        description: <>Major: Computer Science - Data Science and Analytics. Expected Completion = May 2027</>,
      },
      {
        name: "Haughton High School",
        description: <>Graduated in May 2023</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: (
          <>Proficient in Python, Java, SQL, and JavaScript for building data-driven applications, backend systems, and interactive web functionality.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Java",
            icon: "java",
          },
          {
            name: "SQl",
            icon: "sql",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frameworks & Libraries",
        description: (
          <>Experienced in developing responsive, full-stack applications using React and Next.js.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Tools & Technologies",
        description: (
          <>Skilled in using Git, GitHub, and VS Code for efficient development, version control, and collaborative workflows.</>
        ),
        tags: [
          {
            name: "GitHub",
            icon: "github",
          },
          {
            name: "VS Code",
            icon: "vscode",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/achievements",
  label: "Accomplishments",
  title: "Achievements, involvement, and activities by Danielle Williams",
  description: `Awards, honors, and accomplishments by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Completed and Current Projects`,
  description: `Completed and current projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/IMG_3689.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/SteamAchievement.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/SteamAchievement3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/DeansList1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/ReeletteLogo.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/SteamAchievement2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/IMG_7853.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/IMG_0468.JPG",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
