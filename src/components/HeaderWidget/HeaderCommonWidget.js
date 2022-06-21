/* eslint-disable arrow-body-style */

import { ThreeDots } from 'react-loading-icons';
import PropTypes from 'prop-types';
import style from './HeaderCommonWidget.module.css';

const HeaderCommonWidget = (props) => {
  const { death, location } = props;

  return (
    <div className={style.worldContainerStats}>
      <div className={style.imgWorldContainer}>
        <img
          src={`/images/${location}.png`}
          alt={location}
          className={style.worldImgStats}
        />
      </div>

      <div className={style.worldInfoStats}>
        <h3>{location} data</h3>
        {death ? (
          <h4>{`${death}`} Deaths</h4>
        ) : (
          <h4>
            <ThreeDots className={style.ThreeDots} />
          </h4>
        )}
      </div>
    </div>
  );
};

HeaderCommonWidget.propTypes = {
  death: PropTypes.string,
  location: PropTypes.string.isRequired,
};

HeaderCommonWidget.defaultProps = {
  death: null,
};

export default HeaderCommonWidget;
