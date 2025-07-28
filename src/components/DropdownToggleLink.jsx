// ==========================================================
// ==========================================================
const DropdownToggleLink = props => {
  const {
    title,
    className,
    ...others
  } = props;
  return <a href="#" data-bs-toggle="dropdown" className={className || 'dropdown-item dropdown-toggle'} {...others}>
      {title}
    </a>;
};

export default DropdownToggleLink;