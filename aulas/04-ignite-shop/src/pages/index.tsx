import { HomeContainer, Product } from '@/styles/pages/home';
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Image from 'next/image';

import camiseta1 from '../assets/camiseta.png'
import camiseta2 from '../assets/camiseta2.png'
import camiseta4 from '../assets/camiseta4.png'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <Product className='keen-slider__slide'>
        <Image
          alt='Camiseta Rocket Seat 1'
          src={camiseta1}
          width={520}
          height={480}
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image
          alt='Camiseta Rocket Seat 2'
          src={camiseta2}
          width={520}
          height={480}
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image
          alt='Camiseta Rocket Seat 3'
          src={camiseta4}
          width={520}
          height={480}
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image
          alt='Camiseta Rocket Seat 3'
          src={camiseta4}
          width={520}
          height={480}
        />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
