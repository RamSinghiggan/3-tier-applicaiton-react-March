
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import ImageSlider from '../ImageSlider';
import { SlideData } from '../SlideData';

export default function Products() {
  return (
    <>
    <ImageSlider slides={SlideData} />
      <Cards />
      <Footer />
    </>
  );
  
}