import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export const MyCarousel = () => {
    return (
        <div className="App">
          <header>
            <Carousel>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>1</span></h1>
                <p>Escreva uma função que coloque todos os zeros de um array no final:</p>
                <h3>Código:</h3>
                <img 
                    src={require('./img/img1.png')} 
                    alt="Image One"
                    className='imagem'
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>2</span></h1>
                <p>Escreva uma função que encontre o elemento que aparece mais vezes em um array, exemplo:</p>
                <p>Input : array(1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 6) Output : 5 </p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img2.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>3</span></h1>
                <p>Escreva uma função que retorne à quantidade de caracteres da última palavra em uma frase:</p>
                <p>Input: “Estou praticando exercícios” Output: 10</p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img3.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>4</span></h1>
                <p>Escreva uma função que retorne o número que aparece o número ímpar de vezes em um array:</p>
                <p>Input : array(4, 5, 4, 5, 2, 2, 3, 3, 2, 4, 4) Output : 2</p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img4.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>5</span></h1>
                <p>Escreva uma função que retorne true caso uma palavra seja um palíndromo</p>
                <p>(palavra que lendo de trás para frente possui o mesmo significado, exemplo: osso):</p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img5.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>6</span></h1>
                <p>Crie uma função que mascare números de um cartão de crédito:</p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img6.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>7</span></h1>
                <p>Escreva uma função que inverta as posições dos elementos dentro de um array:</p>
                <p>Input: array(5, 3, 1, 15)</p>
                <p>Output: array(15, 1, 3, 5)</p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img7.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
              <Carousel.Item interval={5000}>
                <h1>Exercício <span>8</span></h1>
                <p>Crie uma função que encontre o elemento N que, somado a outro elemento N ou K dentro de um array, resulte na soma 6:</p>
                <p>Não deve ser utilizado loops para resolver esse exercício.</p>
                <h3>Código:</h3>
                <img className='imagem'
                    src={require('./img/img8.png')} 
                    alt="Image One"
                />
              </Carousel.Item>
            </Carousel>
          </header>
        </div>
      );
}
