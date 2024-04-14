import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosStar } from "react-icons/io";
const Reviews = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="border bg-zinc-600 p-4 rounded-md">
              <div className="w-20 h-20 rounded-full bg-white  mx-auto"></div>
              <p className="text-center font-bold text-white text-xl my-5">Hafiz Abubakar</p>
              <div className="text-orange-400 text-3xl w-fit mx-auto flex">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
              </div>
              <p className="text-center text-white font-semibold my-5">"As a current student in the 10 billion dollar program, I can say that the quality of teaching is outstanding. Mr Balawal Virk, in particular, has been an excellent instructor, interacting well with the students and creating a supportive learning environment. The WhatsApp group has been a valuable resource, providing a platform for students to collaborate and receive support from the instructors. Balawal Virk and his team are always available to answer questions and provide additional resources. The assignments and tasks are designed to challenge and engage students, contributing significantly to my learning. Overall, I would highly recommend the 10 billion dollar program to other students."</p>
             
            </div>
            <div className="border bg-zinc-600 p-4 rounded-md">
              <div className="w-20 h-20 rounded-full bg-white  mx-auto"></div>
              <p className="text-center font-bold text-white text-xl my-5">Khadija Batool</p>
              <div className="text-orange-400 text-3xl w-fit mx-auto flex">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
              </div>
              <p className="text-center text-white font-semibold my-5">"As a current student in the 10 billion dollar program, I can say that the quality of teaching is outstanding. Mr Balawal Virk, in particular, has been an excellent instructor, interacting well with the students and creating a supportive learning environment. The WhatsApp group has been a valuable resource, providing a platform for students to collaborate and receive support from the instructors. Balawal Virk and his team are always available to answer questions and provide additional resources. The assignments and tasks are designed to challenge and engage students, contributing significantly to my learning. Overall, I would highly recommend the 10 billion dollar program to other students."</p>
            </div>
            <div className="border bg-zinc-600 p-4 rounded-md">
              <div className="w-20 h-20 rounded-full bg-white  mx-auto"></div>
              <p className="text-center font-bold text-white text-xl my-5">Abdul Basit</p>
              <div className="text-orange-400 text-3xl w-fit mx-auto flex">
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
                <IoIosStar/>
              </div>
              <p className="text-center text-white font-semibold my-5">"As a current student in the 10 billion dollar program, I can say that the quality of teaching is outstanding. Mr Balawal Virk, in particular, has been an excellent instructor, interacting well with the students and creating a supportive learning environment. The WhatsApp group has been a valuable resource, providing a platform for students to collaborate and receive support from the instructors. Balawal Virk and his team are always available to answer questions and provide additional resources. The assignments and tasks are designed to challenge and engage students, contributing significantly to my learning. Overall, I would highly recommend the 10 billion dollar program to other students."</p>
            </div>
          </Slider>
        </div>
      );
}




export default Reviews