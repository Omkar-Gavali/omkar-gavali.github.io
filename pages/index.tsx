import Link from 'next/link';
import { AiFillCaretRight } from 'react-icons/ai';
import { MdFileDownload } from 'react-icons/md';
import Grid from '@components/grid';
import Layout from '@components/layout';
import Logo from '@components/logo';
import Tech from '@components/tech';
import { PostType, ProjectType } from '@types';

type HomeProps = {
  title: string;
  description: string;
  projects: ProjectType[];
  posts: PostType[];
};

export default function Home({ title, description, projects, posts }: HomeProps) {
  const skillsList = ['html', 'css', 'javascript', 'react', 'jquery', 'sass', 'angular'];

  return (
    <Layout title={title} description={description}>
      <section id="splash" className="splash">
        <div>
          <div className="container" data-aos="fade-up">
            <div className="t-center">
              <h1>Omkar Gavali</h1>
              <p>Machine Learning Researcher</p>
              <Logo />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about svg-divider">
        <div className="home-shapes"></div>
        <div className="container" data-aos="fade-right">
          <div className="cols cols-lg">
            <div className="col">
              <h2>I'm Omkar, I'm a Research Softawre Engineer in the (Visual Analytics for Images from Colonial Contexts)VaBiKo project at University of Marburg. a PhD candidate at Leibniz Universität Hannover. I'm supervised by Prof. Dr. Ralph Ewerth. My research interests are in Multimodal information retreival. </h2>
              <p>
               My research focuses on multimodal information retrieval, where I explore ways to combine text and image understanding to enhance how we access and interpret complex datasets.
               I hold a Master's degree in IT Business & Digitalization from HTW Berlin, where my thesis, “Information Retrieval on Large Corpus of Data Using LLM: RAG Approach,” investigated the integration of large language models for efficient data retrieval.
               Outside my core research, I'm passionate about developing intelligent systems that make information more accessible and interpretable through machine learning and data visualization.
              </p>
              
              <p>
                I began coding everyday for a living and as a hobby with <strong>HTML</strong>, <strong>CSS</strong> and{' '}
                <strong>JavaScript</strong>. I could improve my skills step by step by working as a team player, using{' '}
                <strong>Git</strong>, <strong>Agile</strong> methodologies, <strong>NPM</strong> and{' '}
                <strong>Figma</strong>, among others.
              </p>
              <p className="mb-5">
                <strong>React</strong> is now an essential part of my daily coding routine, combined with{' '}
                <strong>Redux</strong>, <strong>Ant Design</strong>, <strong>Sass</strong>, <strong>CSS-in-JS</strong>{' '}
                and many more.
              </p>
              <Link href="/resume-remy-beumier">
                <a className="btn mb-4 mr-4" target="_blank">
                  Check out my resume
                  <AiFillCaretRight className="ml-1" />
                </a>
              </Link>
              <a className="btn mb-4" href="remy-beumier-resume.pdf" target="_blank" download>
                Download my resume
                <MdFileDownload className="ml-1" />
              </a>
            </div>

            <div className="col centered-v">
              <img
                src="/images/developer-thinking.svg"
                alt="developer thinking next to a computer"
                width="270"
                height="112"
                loading="lazy"
                className="about__img mt-5 mb-5"
              />
              <div className="about__languages my-2 mx-2">
                {skillsList.map((s) => (
                  <Link key={s} href={`/projects?${s}`}>
                    <a data-hover={s}>
                      <Tech name={s} />
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="pattern">
        <div className="container" data-aos="fade-left">
          <h2>Projects</h2>
          <p>I build projects as a living and as a hobby. Here is a list of my favorites.</p>
          <Grid data={projects.filter((x) => x.homepage).slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Link href="/projects">
              <a className="btn">
                Check all projects
                <AiFillCaretRight className="ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="">
        <div className="container" data-aos="fade-right">
          <h2>Blog</h2>
          <p>I write some stuff about coding and the web in general. Here are the latest posts.</p>
          <Grid data={posts.slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Link href="/blog">
              <a className="btn">
                Check all posts
                <AiFillCaretRight className="ml-1" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = require('@data/projects');
  const posts = require('@data/posts');

  return {
    props: {
      title: 'Omkar Gavali | ML Researcher',
      description:
        "Omkar Gavali's portfolio website as a AI Developer Based in Berlin. Discover a bit about myself, my projects, my posts and how to contact me.",
      projects: projects,
      posts: posts,
    },
  };
}
