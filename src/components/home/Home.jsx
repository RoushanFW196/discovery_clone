import { useEffect } from 'react';
import Carousel from 'react-elastic-carousel'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getdata } from '../../redux/actions/data';
import { getvideo } from '../../redux/actions/video';
import Footer from '../footer/Footer';
import { PlaybtnVideo } from '../playbutton/PlaybtnVideo';
import { Slider } from '../slider/Slider'
import { Slider1 } from '../slider/Slider1'
import { Text } from '../videoDetails/Textvideo';
import "./home.css"

export const Home = () => {
    const dispatch = useDispatch();
    const {user} = useAuth()
    const navigate = useNavigate()
    const { loading,error, errorMessage, data, video } = useSelector((state) => ({
        loading: state.dataState.loading,
        error: state.dataState.error,
        errorMessage: state.dataState.errorMessage,
        data: state.dataState.data,
        video: state.videoState.video
      }));

    //   console.log(error, errorMessage);
    console.log("vide", video);
    // console.log(data);
    useEffect(() => {
        dispatch(getdata("home"))
    }, []);

    const handleSubmit = (video) => {
        dispatch(getvideo(video))
        if(user){
            navigate("../details")
        }else{
            navigate("../login")
        }
    }
    

    const breakPoints = [
        {width: 1, itemsToShow:2},
        {width: 500, itemsToShow:3},
        {width: 768, itemsToShow:4},
        {width: 1200, itemsToShow:5}
      ];
    return <div>
        {/* <Navbar /> */}
        <Carousel >
                <Slider imgs="https://ap2-prod-images.disco-api.com/2022/02/03/75244632-39e6-4b12-b544-65d9f78c9de9.jpeg?w=600&p=true&q=75"/>
                <Slider imgs="https://ap2-prod-images.disco-api.com/2022/02/01/55364f91-61b7-4b85-9ad7-3fcccfd25192.jpeg?w=600&p=true&q=75"/>
                <Slider imgs="https://ap2-prod-images.disco-api.com/2021/05/31/a69a221b-f00b-49e3-ae53-41ba6f04fa9c.jpeg?w=600&p=true&q=75"/>
        </Carousel>
        <Carousel breakPoints={breakPoints}>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/2a76ce95-fdcc-492d-b78e-42932a724e0f.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/d35919b6-0146-457d-b48e-ac101c134111.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/c7f3d702-f0a8-40e3-958c-955a9180affc.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/07/01/58001170-51ce-474e-8dda-70f97c5a74f4.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/04/23/6ac7cb1d-1d65-47bd-8df1-af2fba730f82.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/04/16/0063fb3a-2b5f-416f-b7b1-e526bf4c1b37.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/31684436-5910-4f5e-97d7-939d5eabdc9f.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/3c871fae-9fab-4c79-a8fb-b73b62547828.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/83f75fdc-5ae5-4fda-9f28-f6e4813bcf45.jpeg?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/03/01/131b26fd-0931-4719-8866-132a458eafd8.jpeg?w=600&p=true&q=75"/>
        </Carousel>
        {/* <Text /> */}

        <div className='data'>
            {loading && <img id='spin' src='/images/spin-loader.gif'/>}
            {data && data.map((e, i) => {
                return <div id='container-data'> 
                    <div key={i}  onClick={(() => {
                    handleSubmit(e)
                })}>
                    <div id="play1"><PlaybtnVideo/></div>

                    <img id='thumb' src={e.thumbnail}/>
                    <h2 id='title'>{e.title}</h2>
                    {/* <p>{e.description}</p>  */}
                </div>
               </div>   
            })}
        </div>

        <h2 className='title1'>Shows You Love</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/03/75244632-39e6-4b12-b544-65d9f78c9de9.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/22/4b0e6d10-8234-4474-aeb8-dd6e84678a54.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/12/29/432efa03-7d71-4def-85a2-5b37df1128e5.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/10/8efb9e9b-5e86-4071-9f81-b40b41d0f795.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Newly Added Shows</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/22/4b0e6d10-8234-4474-aeb8-dd6e84678a54.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/01/55364f91-61b7-4b85-9ad7-3fcccfd25192.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/07/531dad54-80eb-47bd-aa37-ab89b3cb8604.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/18/d4760121-3ed1-4c03-9778-bb93b891a2a8.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Stream For Free Now</h2>
        <div className='grid1'>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/09/2093f1c5-526d-40d2-bc8f-3bcfd314acee.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/03/02/31003161-2366-49fd-87a0-ab246624916d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/04/01f7617e-70d0-4dea-87a9-1751f5e17989.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/30/cb16adfc-e05b-4144-b713-81e69f1e3a52.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/16/f6b93f04-3aa9-4816-9b61-6df273140f45.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/22/845e6e55-3d4b-4bfc-a65b-68c0ca3c2458.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Your Favourites, Ab Hindi Mein</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/30/06763bbb-d0b4-4beb-ba97-96cdd9c7866d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/24/70c5caba-8975-4077-b25e-740be60af2fd.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/07/28/6960ba3e-3611-42c2-98ca-a6f9dd4a3c56.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/09/25/c1d49d6e-0979-4045-875b-3c26427a6310.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Your Favourites, Ippothu Tamilil</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/14/5f3385e6-966b-4f8d-8bb5-7017dda1fe9e.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/14/156b0b55-8635-485b-b5f3-80c104125cb3.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/12/dac91021-4dec-443a-8eb8-39cb8e90c418.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/09/10/651f18ec-6098-46ba-8483-a64de9730429.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Your Favourites, Ippudu Telugulo</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/08/17/ea163ffd-15b9-425e-a2d3-7409029409ec.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/07/26/1ed876cf-95a0-40fd-94e3-ed3560da2a75.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/18/ee6f8eb4-971a-4630-866e-81009fb15605.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/04/03/1a6d615b-fb8f-49e0-81fd-1630f8a05551.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Cheaters & Swindlers!</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2020/07/13/dea2223e-9be0-418b-bd14-984b5980f698.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/05/06/502fe718-3b06-45c0-b878-c4e3e63ef9ba.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/26/9612397e-679c-4011-abd7-7045248ca804.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/09/07/7bab98eb-96e6-4333-bf27-0c28af70e87c.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>The Best Of BBC</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/03/18/4e555985-4c87-401c-8116-eaaa67cdad1e.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/09/01/5f1a62b4-73eb-4922-92b2-d037225997d5.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/10/22/0c55dd2b-73aa-4ca1-9d14-bd7ddd2ee09a.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/07/28/6960ba3e-3611-42c2-98ca-a6f9dd4a3c56.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>discovery+ India Originals</h2>
        <div className='grid1'>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/22/4b0e6d10-8234-4474-aeb8-dd6e84678a54.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/03/75244632-39e6-4b12-b544-65d9f78c9de9.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/27/0003b850-4077-4aa6-a5b6-38f3065c0c24.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/18/f501b757-edf1-4369-95e3-dbc1a9d66c56.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/30/6044c787-b9f8-4121-9642-fb97f4a17610.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/12/10/75f31924-487b-4dde-ae19-a70e52b680d4.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Popular For Kids</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/10/8efb9e9b-5e86-4071-9f81-b40b41d0f795.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/07/6a422c8d-06e5-44b5-bdde-1b5386692c3d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/03/c2692d38-f66d-4c8b-8384-441b4ebb4482.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/09/9efca6f6-94bb-4a12-b497-bf65940477c0.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Sports You Can't Miss</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/08/24/d285028a-f3c8-440e-bb38-3565f6425960.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/08/07/07393548-80ed-452e-9bf7-aab1f4dc2346.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/08/20/c465c474-656d-4c84-aea9-acedbe7e719d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/18/e72ab4bb-0ed8-41b1-a532-33fa650b8045.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Spotlight: Armed Forces</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/18/ee6f8eb4-971a-4630-866e-81009fb15605.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/08/12/2c750527-8f53-4dd0-a956-b68e4c90be5b.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/14/5f3385e6-966b-4f8d-8bb5-7017dda1fe9e.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/03/03/0b5e031c-2106-4175-bc35-110de31689c7.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>For History Buffs</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/31/a69a221b-f00b-49e3-ae53-41ba6f04fa9c.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/03/18/4e555985-4c87-401c-8116-eaaa67cdad1e.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/01/22/a37fd70e-a3ac-40d8-b801-bfe1d53cc7ea.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/27/00c02be8-bdf3-4964-a125-e11f1ef8684f.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Calling All Singles!</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/26/2031394c-9450-4d13-b1f0-623658a9b5c6.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/09/2b8c4108-db37-4555-a8c7-10e9e111e11f.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/01/08/34ebc9e5-45b2-430a-bcfb-e92ceabc9de6.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/12/24/e13eb912-9c97-4f53-9dcc-993ca19bb919.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>

        <Footer />
    </div>
}