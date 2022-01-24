import classes from './Footer.module.css';
import Copyright from './Copyright';
import Contact from './Contact';
const Footer = () => {
  return (
    <div className={classes.footer}>
      <Copyright /> <Contact />
    </div>
  );
};

export default Footer;
