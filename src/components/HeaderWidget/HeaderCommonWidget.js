import { ThreeDots } from 'react-loading-icons';
import Globe from 'react-globe.gl';
import PropTypes from 'prop-types';
import style from './HeaderCommonWidget.module.css';

const HeaderCommonWidget = (props) => {
  const { death, location } = props;

  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
      ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
    ],
  }));

  // const styleMax = {
  //   // Adding media query..
  //   '@media (max-width: 500px)': {
  //     display: 'none',
  //   },
  // };

  return (
    <div className={style.worldContainerStats}>
      <div className={style.imgWorldContainer}>
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          arcsData={arcsData}
          backgroundColor="#0000"
          height={300}
          width={500}
          arcColor="color"
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcDashAnimateTime={() => Math.random() * 4000 + 500}
        />
      </div>
      <div className={style.worldInfoStats}>
        <h2>{location}</h2>
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
  death: PropTypes.number,
  location: PropTypes.string.isRequired,
};

HeaderCommonWidget.defaultProps = {
  death: null,
};

export default HeaderCommonWidget;
