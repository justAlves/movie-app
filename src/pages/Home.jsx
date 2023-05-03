import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from '../components/Header';
import Asidebar from '../components/Asidebar';
import Footer from '../components/Footer';
import 'swiper/css';

function Home() {
  const [nav, setNav] = useState(false);
  const [movies, setMovies] = useState([]);

  const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4a49a18d46198f17824a1b4004067347&language=en-US&page=1';

  useEffect(() => {
    async function getMovies() {
      const data = await axios.get(apiUrl).then((i) => {
        setMovies(i.data.results);
        console.log(i.data.results);
      });
    }

    getMovies();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Asidebar nav={nav} />
        <main className="p-4">
          <div className="md:hidden mb-4">
            <button type="button" onClick={() => setNav(!nav)}>
              {!nav ? <Menu /> : <X />}
            </button>
          </div>
          <div className="">
            <h1 className="font-bold text-xl">Melhores avaliados</h1>
            <div className="mt-4">
              <Swiper
                slidesPerView={7}
                spaceBetween={30}
                centeredSlides
                className="max-sm:w-[1200px] md:w-[1300px] lg:w-[1300px] xl:w-[1500px]"
              >
                {movies.map((i, k) => (
                  <SwiperSlide className="transition-all rounded overflow-hidden hover:scale-110">
                    <img className="hover:-rotate-2 transition-all" src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt={i.title} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
