const Footer = () => {
  const date = new Date();
  return (
    <footer>
      &copy; {date.getFullYear()} - All Rights Reserved. Created by me
    </footer>
  );
};

export default Footer;
