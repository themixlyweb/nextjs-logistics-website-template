import Link from 'next/link';

/**
 * NextLink component wraps Next.js Link to simplify usage.
 * 
 * @param {Object} props
 * @param {string} props.href - The target URL.
 * @param {string} [props.className] - Optional CSS classes for styling.
 * @param {React.ReactNode} props.title - The content or text inside the link.
 */
const NextLink = ({ href, className, title }) => {
  return (
    <Link href={href} passHref>
      {/* 
        Use an anchor tag inside Link to apply className 
        and improve accessibility.
      */}
      <p className={className}>
        {title}
      </p>
    </Link>
  );
};

export default NextLink;
