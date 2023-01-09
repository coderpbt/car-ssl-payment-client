import React from 'react';
import b1 from '../../../assets/images/banner/1.jpg';
import b2 from '../../../assets/images/banner/2.jpg';
import b3 from '../../../assets/images/banner/3.jpg';
import b4 from '../../../assets/images/banner/4.jpg';
import b5 from '../../../assets/images/banner/5.jpg';
import b6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';


const bannerData = [
  {
      image: b1,
      prev: 6,
      id: 1,
      next: 2
  },
  {
      image: b2,
      prev: 1,
      id: 2,
      next: 3
  },
  {
      image: b3,
      prev: 2,
      id: 3,
      next: 4
  },
  {
      image: b4,
      prev: 3,
      id: 4,
      next: 5
  },
  {
      image: b5,
      prev: 4,
      id: 5,
      next: 6
  },
  {
      image: b6,
      prev: 5,
      id: 6,
      next: 1
  }
]


const Banner = () => {
  return (
    <div className="carousel w-full py-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
  );
};

export default Banner;