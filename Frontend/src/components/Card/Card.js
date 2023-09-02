import './Card.css';
// import image from '../../assets/img/3-removebg-preview.png';

const Card = ({ title, desc, btn, image, onClick }) => {
  return (
    <article className='card'>
      <div className='path'></div>
      <img src={image} alt='' />
      <h3>{title}</h3>
      <p>{desc}</p>
      <button type='button' class='btn btn-success' onClick={onClick}>
        {btn}
      </button>
    </article>
  );
};
export default Card;
