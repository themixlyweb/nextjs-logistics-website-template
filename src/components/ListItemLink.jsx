import NextLink from './NextLink';

/**
 * ListItemLink renders an <li> containing a Next.js link component.
 * @param {Object} props
 * @param {string} props.href - The URL to link to.
 * @param {string} props.title - The link text.
 * @param {string} [props.linkClassName='nav-link'] - CSS class for the anchor/link.
 * @param {string} [props.liClassName='nav-item'] - CSS class for the list item.
 */
const ListItemLink = ({
  linkClassName = 'nav-link',
  liClassName = 'nav-item',
  href,
  title
}) => {
  return (
    <li className={liClassName}>
      <NextLink className={linkClassName} href={href} title={title} />
    </li>
  );
};

export default ListItemLink;
