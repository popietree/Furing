import classes from './ImgContain.module.css';
const ImgContain = (props) => {
  return (
    <div className={classes.imgContain}>
      <img
        src={props.src}
        alt='one collated and stapled notepad'
        class='logo'
      />
    </div>
  );
};
export default ImgContain;
