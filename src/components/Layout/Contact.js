import classes from './Contact.module.css';
const Contact = () => {
  return (
    <div className={classes.contact}>
      <p className={classes.footerHeading}> Contact us</p>
      <div className={classes.contacts}>
        <p> 趙國榮 Gordon Zhao</p>
        <p> 微信號 tel: (415) 971-6316</p>
        <p> e-mail: sffuring@yahoo.com</p>
      </div>
    </div>
  );
};

export default Contact;
