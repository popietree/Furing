import Logo from './Logo';
import classes from './Copyright.module.css';
const Copyright = () => {
  return (
    <div className={classes.copyright}>
      <Logo />
      <p>
        <p>富 榮 印 務</p> &copy; <span className={classes.year}>2022</span>{' '}
        Furing Printing
      </p>
    </div>
  );
};

export default Copyright;
