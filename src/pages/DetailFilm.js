import React from 'react';
import { useParams } from 'react-router-dom';

const movieData = {
  1: {
    title: 'John Wick',
    description: 'John Wick is a retired hitman seeking vengeance for the killing of his dog, a gift from his deceased wife.',
    genre: 'Action, Crime',
    img: 'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6d3d1461d50778271845ce7ec81ba2c5d76a20f7f84e5061cd099aabaedc77f9._RI_TTW_.jpg',
  },
  2: {
    title: 'Oppenheimer',
    description: 'Oppenheimer is a biographical drama film about the life of J. Robert Oppenheimer, the physicist who led the Manhattan Project during World War II.',
    genre: 'Biography, Drama, History',
    img: 'https://m.media-amazon.com/images/I/71lqDylcvGL.jpg',
  },
  3: {
    title: 'The Matrix',
    description: 'The Matrix is a science fiction action film that depicts a dystopian future where reality as perceived by most humans is a simulated reality.',
    genre: 'Action, Sci-Fi',
    img: 'https://m.media-amazon.com/images/I/81s85sLZznL._AC_SY679_.jpg',
  },
  // Tambahkan data film lainnya sesuai kebutuhan
};

function DetailFilm() {
  const { movieId } = useParams();
  const filmDetail = movieData[movieId];

  if (!filmDetail) {
    return <div>Film not found</div>;
  }

  return (
    <div>
      <img src={filmDetail.img} alt={filmDetail.title} style={{ maxWidth: '100%' }} />
      <h1>{filmDetail.title}</h1>
      <p>{filmDetail.description}</p>
      <p><strong>Genre:</strong> {filmDetail.genre}</p>
      {/* Tampilkan informasi detail film lainnya sesuai kebutuhan */}
    </div>
  );
}

export default DetailFilm;
