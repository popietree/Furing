import classes from './ContactPg.module.css';
import Contact from '../components/Layout/Contact';

const ContactPg = () => {
  return (
    <div className={classes.contact}>
      <h2 className='headingSecondary'>Contact us</h2>

      <p className={classes.contacts}>
        <p> 趙國榮 Gordon Zhao</p>
        <p> 微信號 tel: (415) 971-6316</p>
        <p> e-mail: sffuring@yahoo.com</p>
      </p>
    </div>
  );
};

export default ContactPg;
