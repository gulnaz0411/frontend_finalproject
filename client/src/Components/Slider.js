import React from 'react';
import { Carousel } from 'react-bootstrap';
import content from '../content.jpg';

  export default function Slider() {
    return (
    <>
     <Carousel>
        <Carousel.Item style={{'height': '650px'}}>
            <img
              className="d-block w-100"
              src={content}
              alt="slide"
            />
           <Carousel.Caption>
              <h3>ПРОКАТ ВЕЛОСИПЕДОВ</h3>
              <p>МЫ ПРЕДЛАГАЕМ ШИРОКИЙ ВЫБОР ВЕЛОСИПЕДОВ НА ВЫБОР, ВКЛЮЧАЯ ДОРОЖНЫЕ ВЕЛОСИПЕДЫ,<br/> ГОРНЫЕ ВЕЛОСИПЕДЫ И ГОРОДСКИЕ ВЕЛОСИПЕДЫ.<br/> ВСЕ НАШИ ВЕЛОСИПЕДЫ НАХОДЯТСЯ В ХОРОШЕМ СОСТОЯНИИ И ПОСТАВЛЯЮТСЯ СО ШЛЕМАМИ И ВЕЛОСИПЕДНЫМИ ЗАМКАМИ.</p>
           </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{'height': '650px'}}>
            <img
              className="d-block w-100"
              src={content}
              alt="slide"
            />
           <Carousel.Caption>
              <h3>ВЕЛОСИПЕДНЫЕ ТУРЫ</h3>
              <p>ПОЗНАКОМЬТЕСЬ С ГОРОДОМ ПО-НОВОМУ С ПОМОЩЬЮ ОДНОГО ИЗ НАШИХ ВЕЛОСИПЕДНЫХ ТУРОВ.<br/> НАШИ ТУРЫ ПОД РУКОВОДСТВОМ ОПЫТНЫХ ГИДОВ ПРОВЕДУТ ВАС ЧЕРЕЗ<br/> ЛУЧШИЕ ДОСТОПРИМЕЧАТЕЛЬНОСТИ И СКРЫТЫЕ ЖЕМЧУЖИНЫ ГОРОДА.</p>
           </Carousel.Caption>   
        </Carousel.Item>
        <Carousel.Item style={{'height': '650px'}}>
            <img
              className="d-block w-100"
              src={content}
              alt="slide"
            />
           <Carousel.Caption>
              <h3>РЕМОНТ ВЕЛОСИПЕДОВ</h3>
              <p>ЕСЛИ ВАШ ВЕЛОСИПЕД НУЖДАЕТСЯ В РЕМОНТЕ ИЛИ ТЕХНИЧЕСКОМ ОБСЛУЖИВАНИИ,<br/> НАШИ ОПЫТНЫЕ МЕХАНИКИ МОГУТ ПОМОЧЬ. МЫ ПРЕДЛАГАЕМ ШИРОКИЙ СПЕКТР<br/> УСЛУГ ОТ БАЗОВОЙ НАСТРОЙКИ ДО КАПИТАЛЬНОГО РЕМОНТА ВЕЛОСИПЕДА.</p>
           </Carousel.Caption>   
        </Carousel.Item>

     </Carousel>
    </>
)}