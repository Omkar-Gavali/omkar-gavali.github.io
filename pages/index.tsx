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
              <h2>I'm Omkar, I'm a Research Software Engineer and PhD candidate at the University of Marburg, working at the intersection of machine learning and multimodal information retrieval. </h2>
              <p>
                Currently, I'm part of the <strong>Visual Analytics for Images from Colonial Contexts (<em>VaBiKo</em>)</strong> project at the <strong>University of Marburg</strong>, where I develop <em>research software</em> and conduct studies on <strong>multimodal information retrieval</strong>. I'm pursuing my <strong>PhD</strong> under the supervision of <strong>Prof. Dr. Ralph Ewerth</strong>, focusing on methods that integrate <strong>visual</strong> and <strong>textual understanding</strong> to enhance <em>information access</em> and <em>discovery</em>.
              </p>

              <p>
                I hold a <strong>Master’s degree</strong> in <strong>IT Business & Digitalization</strong> from <strong>HTW Berlin</strong>, where my thesis, <em>“Information Retrieval on Large Corpus of Data Using LLM: RAG Approach”</em>, investigated the integration of <strong>large language models (LLMs)</strong> for <em>efficient data retrieval</em>.
              </p>

              <p className="mb-5">
                Outside my core research, I'm passionate about developing <strong>intelligent systems</strong> that make information more <em>accessible</em> and <em>interpretable</em> through <strong>machine learning</strong> and <strong>data visualization</strong>.
              </p>

              
              
              {/* <Link href="/resume-remy-beumier"> */}
              <Link href="/CV_Omkar.pdf">
                <a className="btn mb-4 mr-4" target="_blank">
                  Check out my resume
                  <AiFillCaretRight className="ml-1" />
                </a>
              </Link>
              <a className="btn mb-4" href="CV_Omkar.pdf" target="_blank" download>
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
            <p>Projects under construction — assembling cool stuff & bribing the bugs with snacks. Check back soon!</p>
          {/* <Grid data={projects.filter((x) => x.homepage).slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Link href="/projects">
              <a className="btn">
                Check all projects
                <AiFillCaretRight className="ml-1" />
              </a>
            </Link>
          </div> */}
        </div>
      </section>

      <section id="blog" className="">
        <div className="container" data-aos="fade-right">
          <h2>Blog</h2>
          <p>I write some stuff about coding and the web in general. Updates coming soon!!.</p>
          {/* <Grid data={posts.slice(0, 3)} className="mt-10 mb-10" />
          <div className="btn-wrapper-right">
            <Link href="/blog">
              <a className="btn">
                Check all posts
                <AiFillCaretRight className="ml-1" />
              </a>
            </Link>
          </div> */}
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
