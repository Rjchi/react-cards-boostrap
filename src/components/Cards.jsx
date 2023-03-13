import { Card } from "./Card";
import imageOne from '../img/image1.jpg';
import imageDos from '../img/image2.jpg';
import imageTres from '../img/image3.jpg';

export const Cards = () => {

  // Este arreglo de objetos va a contener tarjetas (Card)
  const cards = [
    {
      id: 1,
      title: '1-Web',
      image: imageOne,
      url: '#',
    },
    {
      id: 2,
      title: '2-Web',
      image: imageDos,
      url: '#'
    },
    {
      id: 3,
      title: 'Git',
      image: imageTres,
      url: 'https://github.com/Rjchi',
      text: 'Esta es mi cuenta de git',
    },
  ]
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {/* Automatizamos el codigo */}

        {
          cards.map( ({id, title, image, url, text}) => (
            // Siempre se debe poner el una clave unica
            <div key={id} className="col-md-4">
              {/* Le pasamos como propiedades el titulo y la imagen */}
              <Card title={title} image={image} url={url} text={text} />
            </div>
          ) )
        }

        {/*<div className="col-md-4">
            <Card />
        </div>
        <div className="col-md-4">
            <Card />
        </div>
        <div className="col-md-4">
            <Card />
        </div> */}
      </div>
    </div>
  );
};
