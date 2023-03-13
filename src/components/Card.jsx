import PropTypes from 'prop-types'
import './cards.css'

// Hacemos uso de las props
export const Card = ({title, image, url, text}) => {
  return (
    // utilizamos animate.css y bootstrap
    <div className="card text-center bg-dark h-100 d-inline-block animate__animated animate__fadeInRight">
      <div className="overflow">
        <img src={image} alt="One" className='card-img-top' />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {/* Validacion en caso de que no pasen texto */}
          {
            text ? text : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore libero aspernatur sed odit natus nobis eos dolor quia ipsam voluptates. At asperiores modi repellat doloribus aperiam excepturi quos fuga quidem!'
          }
        </p>
        <a href={url} className='btn btn-outline-primary position-absolute bottom-0 start-50 translate-middle' target="_blank" >
          Go to {title}
        </a>
      </div>
    </div>
  );
};
// Con esto indicamos que los parametros(props) tengan un tipo de dato y si es requerido o no
Card.proptype = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
}