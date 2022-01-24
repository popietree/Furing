import classes from './ImgContainMenu.module.css';
const ImgContainMenu = ({ src }) => {
  return (
    <div className={classes.imgContainMenu}>
      <img
        className={classes.imgContainMenu}
        src={src}
        alt='one collated and stapled notepad'
        class='logo'
      />
    </div>
  );
};
export default ImgContainMenu;
