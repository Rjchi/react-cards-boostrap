import imageOne from '../img/image1.jpg';

export const Card = () => {
  return (
    <div className="card text-center bg-dark">
      <img src={imageOne} alt="One" />
      <div className="card-body text-light">
        <h4 className="card-title">My title</h4>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          ratione nulla praesentium nemo, dolores quibusdam ipsam facilis
          adipisci odit debitis, pariatur, modi maxime laborum voluptate
          quisquam dolore libero fugiat velit.
        </p>
        <a href="#" className='btn btn-outline-primary'>
          Go to this website
        </a>
      </div>
    </div>
  );
};
