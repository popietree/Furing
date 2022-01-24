import classes from './ContactPg.module.css';
import Contact from '../components/Layout/Contact';
import QuoteForm from '../components/QuoteForm';
const ContactPg = () => {
  return (
    <div className={classes.contact}>
      <QuoteForm />
      {/* <Contact /> */}
    </div>
  );
};

export default ContactPg;
