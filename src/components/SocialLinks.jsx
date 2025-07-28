// Social media links data
const links = [
  {
    id: 1,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/',
  },
  {
    id: 2,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/',
  },
  {
    id: 3,
    icon: 'uil uil-whatsapp',
    url: 'https://www.whatsapp.com/',
  },
];

// SocialLinks Component
// Renders a list of social media icons with links opening in a new tab
const SocialLinks = ({ className = 'nav social mt-4' }) => {
  return (
    <nav className={className} aria-label="Social media links">
      {links.map(({ id, icon, url }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"  // Added noopener for security best practice
          aria-label={`Visit our ${icon.split(' ').pop().replace('uil-', '')} page`} // Accessible label
        >
          {/* Icon with styling */}
          <i className={`${icon} fs-26 bg-white rounded`} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
