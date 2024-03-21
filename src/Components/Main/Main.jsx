import React, { useEffect } from 'react';
import './main.css';
import './main.scss';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsClipboardCheck } from 'react-icons/bs';

// Let me import the images
import img from '../../assest/img.jpg';
import img2 from '../../assest/img2.jpg';
import img3 from '../../assest/img3.jpg';
import img4 from '../../assest/img4.jpg';
import img5 from '../../assest/img5.jpg';
import img6 from '../../assest/img6.jpg';
import img7 from '../../assest/img7.jpg';
import img8 from '../../assest/img8.jpg';
import img9 from '../../assest/img9.jpg';

import Abs from 'aos';
import 'aos/dist/aos.css';

//  Let me paste the array named data

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: "Bora Bora",
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The epitome of romance, Bora Bora is one of the best travel destination in the World. This place is known for its luxurious stays and adventurous activites.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: "Machu Picchu",
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu is a mountain in Peeru, rising over Machu Picchu, the so-called Lost city of Incas. This place is popular among tourists as the sunrise from the sun Gate is simply spectacular.'
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Great Barrier Reef",
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is lavish and beauty. Always interesting to be in this place'
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: "Cappadocia",
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'Accoriging to the World Tourism Ranking, 45 Millon people visit Turkey each year, and from that about 2 Millon come to vist Cappadocia. This place is known for its luxurious stays and adventurous activities'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: "Guanajuato",
        location: 'Mexico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A city in central Mexico, guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very atteractively painted with the most bright colors available. Always welcome.'
    },

    {
        id: 6,
        imgSrc: img6,
        destTitle: "Cinque Terre",
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seaFood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
    },

    {
        id: 7,
        imgSrc: img7,
        destTitle: "Angkor Wat",
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities'
    },

    {
        id: 8,
        imgSrc: img8,
        destTitle: "Taj Mahal",
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathakingly beautiful. This place is known for its luxurious stays and adventurous activities '
    },

    {
        id: 9,
        imgSrc: img9,
        destTitle: "Bali Island",
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    }
]

const Main = () => {
    // Lets create a react hook to add a scroll animation.....
    useEffect(() => {
        Abs.init({ duration: 2000 })
    }, [])
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 data-aos='fade-right' className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* so guys, here we are going to use higher order arrary method(map). to do that we shall
                use a list of object in one array. i'm going to create an array named data from that we shall .map() array to fetch each
                desitnation at once.*/}

                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} data-aos='fade-up' className="singleDestination">
                                {/* Here it will return single id from the map array */}

                                <div className="imgDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>
                                    <button className='btn flex'>
                                        DETAILS <BsClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main