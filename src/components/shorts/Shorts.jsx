import './shorts.css'
import My_img from './myImg.png'
// import Short_video from './short_video/Short_video.js'
import { useDispatch, useSelector } from 'react-redux';
import { getdata } from '../../redux/actions/data';
import { useEffect } from 'react';
import Footer from '../footer/Footer';

export const Shorts = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((state) => ({
        // loading: state.dataState.loading,
        data: state.dataState.data,
    }));

    console.log(loading);
    useEffect(() => {
        dispatch(getdata("home"))
    }, []);
    return <div>
    <div id="shorts-main">

        <div id="short-left-main">
            <h3 id="shorts-left-first-h3">Categories wise</h3>
            <p className="shorts-left"><a href="">All</a></p>
            <p className="shorts-left"><a href="">Adventure</a></p>
            <p className="shorts-left"><a href="">Food</a></p>
            <p className="shorts-left"><a href="">Science</a></p>
            <p className="shorts-left"><a href="">Animals</a></p>
            <p className="shorts-left"><a href="">Lifestyle</a></p>
        </div>
        <div>
            {/* <Short_video /> */}<div></div>
            {/* {loading && <img id='spin1' src='/images/spin-loader.gif'/>}  */}
            {data && data.map((e, i) => {
                return <div id='container-data'>
                    <div key={i}>

                        <iframe id='shorts-iframe' width="770" height="423" src={e.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        {/* <img id='thumb' src={e.thumbnail}/> */}
                    </div>
                </div>
            })}

        </div>
        <div>
            <img src={My_img} alt="" />
        </div>
    </div>
    <Footer />
    </div>
}