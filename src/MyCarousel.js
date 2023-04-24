import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const MyCarousel = () => {
    const [darkBackground, setDarkBackground] = useState('');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data)
          setProjects(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className="App">
          <header>
            <Carousel>
              {projects.length > 0 &&
                projects.map((project) => (
                  <Carousel.Item interval={5000} key={project.id}>
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
            </Carousel>
          </header>
        </div>
      );
}
