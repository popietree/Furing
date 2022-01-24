import classes from './ServiceGallery.module.css';
import notepad from '../assets/img/notepad.jpg';
import notepadStack from '../assets/img/notepadStack.jpg';
import invoice from '../assets/img/invoice.jpg';
import ncr from '../assets/img/ncr.jpg';
import togoMenu from '../assets/img/togoMenu.png';
import menu from '../assets/img/menu.png';
import cleaning from '../assets/img/cleaning.png';

import ImgContain from './Layout/ImgContain';
import ImgContainMenu from './Layout/ImgContainMenu';

const ServiceGallery = () => {
  return (
    <section className={classes.sectionServices}>
      <div className={classes.galleryInvoice}>
        <div className={classes.imageBox}>
          <ImgContain src={notepad} />
          <p className={classes.imgDescription}>Invoice notepad</p>
        </div>
        <div className={classes.imageBox}>
          <ImgContain src={notepadStack} />
          <p className={classes.imgDescription}>Invoice notepads</p>
        </div>
        <div className={classes.imageBox}>
          <ImgContain src={invoice} />
          <p className={classes.imgDescription}>Invoice</p>
        </div>
        <div className={classes.imageBox}>
          <ImgContain src={ncr} />
          <p className={classes.imgDescription}> NCR Invoice</p>
        </div>
      </div>

      <div className={classes.galleryMenu}>
        <div className={classes.imageBox}>
          <ImgContainMenu src={menu} />
          <p className={classes.imgDescription}> Menu</p>
        </div>
        <div className={classes.imageBox}>
          <ImgContainMenu src={togoMenu} />
          <p className={classes.imgDescription}> To go Menu</p>
        </div>
        <div className={classes.imageBox}>
          <ImgContainMenu src={cleaning} />
          <p className={classes.imgDescription}> Laundry Invoice</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceGallery;
