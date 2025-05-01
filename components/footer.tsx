import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';

const footerLinks = [
  {
    link: 'https://omkar-gavali.github.io/',
    title: 'Github',
    icon: FaGithub,
  },
  {
    link: 'https://omkar-gavali.github.io/',
    title: 'Codepen',
    icon: FaCodepen,
  },
  {
    link: 'https://www.linkedin.com/in/omkar-gavali-9048551a6/',
    title: 'Codesandbox',
    icon: SiCodesandbox,
  },
  {
    link: 'https://www.linkedin.com/in/omkar-gavali-9048551a6/',
    title: 'LinkedIn',
    icon: FaLinkedin,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="contact over-h svg-divider">
      <div className="container" data-aos="fade-left">
        <p className="mb-5">Feel free to get in touch and stay connected with me via these different channels.</p>
        <div className="mb-10">
          {footerLinks.map((f) => {
            const Icon = f.icon;
            return (
              <a key={f.link} href={f.link} target="_blank" rel="noopener noreferrer" className="btn mb-4 mr-4">
                <Icon title={f.title} aria-labelledby={f.title} />
                <span className="ml-1">{f.title}</span>
              </a>
            );
          })}
        </div>
        <p className="contact__copy">
          &copy; {new Date().getFullYear()} |{' '}
          <span itemProp="author" itemScope itemType="http://schema.org/Person">
            <span itemProp="name">Omkar Gavali</span>
          </span>
        </p>
      </div>
    </footer>
  );
}
