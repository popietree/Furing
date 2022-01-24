import classes from './Hero.module.css';
const Hero = () => {
  return (
    <div className={classes.heroTextBox}>
      <h1 className={classes.headingPrimary}>Professional Printing Services</h1>
      <p className={classes.heroDescription}>
        We print restaurant menus, to go menus, NCR invoices, flyers, envelopes,
        and much more
      </p>

      <a href='#cta' className={classes.btnFull}>
        {/* change to link to order */}
        Get quote now
      </a>
    </div>
  );
};
export default Hero;
