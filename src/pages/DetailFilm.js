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
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      3: {
        title: 'The Matrix',
        description: 'The Matrix is a science fiction action film that depicts a dystopian future where reality as perceived by most humans is a simulated reality.',
        genre: 'Action, Sci-Fi',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      4: {
        title: 'Inception',
        description: 'Inception is a mind-bending science fiction film about a thief who enters the dreams of others to steal their secrets.',
        genre: 'Action, Adventure, Sci-Fi',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      5: {
        title: 'Forrest Gump',
        description: 'Forrest Gump is a heartwarming drama that follows the life of a man with a low IQ who inadvertently influences several historical events.',
        genre: 'Drama, Romance',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      6: {
        title: 'Avatar',
        description: 'Avatar is a science fiction film set in the distant future on the planet Pandora, where a paraplegic marine is selected to participate in the Avatar Program.',
        genre: 'Action, Adventure, Sci-Fi',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      7: {
        title: 'The Shawshank Redemption',
        description: 'The Shawshank Redemption is a drama film that tells the story of a banker who is sentenced to life in Shawshank State Penitentiary.',
        genre: 'Drama',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      8: {
        title: 'The Dark Knight',
        description: 'The Dark Knight is a superhero film where Batman faces the Joker, a criminal mastermind who seeks to create chaos in Gotham City.',
        genre: 'Action, Crime, Drama',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      9: {
        title: 'Pulp Fiction',
        description: 'Pulp Fiction is a black comedy crime film that weaves interconnected stories of criminals in Los Angeles.',
        genre: 'Crime, Drama',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
      10: {
        title: 'Interstellar',
        description: 'Interstellar is a science fiction film about a group of astronauts who travel through a wormhole near Saturn in search of a new habitable planet for humanity.',
        genre: 'Adventure, Drama, Sci-Fi',
        img: 'https://source.unsplash.com/720x720?movie-poster',
      },
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
