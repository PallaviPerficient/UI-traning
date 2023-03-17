import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './announcement.scss';

const AnnouncementEditConfig = {
    emptyLabel: 'Announcement',
      isEmpty: function(props) {
        return !props || !props.title;
    }
};

const Announcement = (props) => {
    console.log("props Announcement",props);

    const settings = {
      className: "announcement",
      dots: true,
      arrows: false,
      infinite: false,
      fade: true,
      autoplay: true,
      speed: 1000,
      adaptiveHeight: true
    };

    return (
      <>
        <div className='announcement'>
          <div className='announcement_title'>{props.title}</div>
          <div className='announcement_description'>{props.description}</div>
          <Slider {...settings}>
            <img
              src={props.fileReference}
              alt="Image first"
              className='announcement_img'
            />
            <img
              src={props.fileReference}
              alt="Forest"
              className='announcement_img'
            />
          </Slider >
        </div>
      </>
    );
  };
      

MapTo('wknd-spa-react/components/announcement')(Announcement, AnnouncementEditConfig);
