import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Confetti from 'react-confetti';
import { Loading } from './components/Loading';

export const MyCarousel = () => {
    const [darkBackground, setDarkBackground] = useState('');
    const [projects, setProjects] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [recycler, setRecycler] = useState('true');

    useEffect(() => {
      fetch("https://json-server-iota-black.vercel.app/projects", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className="App">
          <header>
            <Carousel>
              {projects.length > 0 &&
                projects.map((project) => (
                  <Carousel.Item 
                    interval={60000} 
                    key={project.id} 
                    onMouseOver={() => {setRecycler(false)}} 
                    onMouseLeave={() => {setRecycler(true)}}
                  >            
                    <Confetti
                      className='confetti'
                      width='1400vh'
                      height='1000vh'
                      recycle={recycler}
                      numberOfPieces={400}
                      tweenDuration={10000}
                      friction={0.999}
                      wind={0.01}
                    />
                    <div style={{filter: darkBackground}}>              
                      <h1>{project.name} <span>{project.id}</span> </h1>
                      <p>{project.enunc}</p>
                      <p>{project.enuncdois}</p>
                      <h3>Código:</h3>
                    </div>
                    <img 
                      onMouseOver={() => {setDarkBackground('blur(6px) grayscale(100%)')}}
                      onMouseLeave={() => {setDarkBackground('')}}
                      src={require(`${project.imagem}`)} 
                      className='imagem'
                      alt='Imagem do exercício'
                    />
                  </Carousel.Item>
                ))
              }
              {!removeLoading && <Loading />}
              {removeLoading && projects.length === 0  && (
                <h1>You have no projects yet : <span>&#40;</span> </h1>
                )
              } 
            </Carousel>
          </header>
        </div>
    );
}
