import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getdata } from '../../redux/actions/data';
import { getvideo } from '../../redux/actions/video';
import { PlaybtnVideo } from '../playbutton/PlaybtnVideo';
import Carousel from 'react-elastic-carousel'
import { Slider } from '../slider/Slider'
import { Slider1 } from '../slider/Slider1'
import "./kids.css"
import Footer from '../footer/Footer';

export const Kids = () => {
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
        dispatch(getdata("kids"))
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
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:2},
        {width: 768, itemsToShow:3},
        {width: 1200, itemsToShow:5}
      ];
    return <div>
        {/* <Navbar /> */}
        <Carousel >
                <Slider imgs="https://ap2-prod-images.disco-api.com/2021/11/03/c2692d38-f66d-4c8b-8384-441b4ebb4482.jpeg?w=600&p=true&q=75"/>
                <Slider imgs="https://ap2-prod-images.disco-api.com/2022/01/09/9efca6f6-94bb-4a12-b497-bf65940477c0.jpeg?w=600&p=true&q=75"/>
                <Slider imgs="https://ap2-prod-images.disco-api.com/2020/12/31/95e8e9a4-d3db-425c-8562-64e047f3b1c0.jpeg?w=600&p=true&q=75"/>
                <Slider imgs="https://ap2-prod-images.disco-api.com/2022/01/07/6a422c8d-06e5-44b5-bdde-1b5386692c3d.jpeg?w=600&p=true&q=75"/>
        </Carousel>
        <h2 className='title'>Heroes We Love!</h2>
        <Carousel breakPoints={breakPoints}>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/02/10/4620a6ae-cfd7-4903-accf-ca89569e6659.png?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/06/01/00536194-ebf1-4e21-bdf6-d97db59cc7a0.png?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/06/01/688be121-47ca-4ded-a098-da0d2758fca0.png?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/06/01/bc0c4a31-757c-48fb-b833-a43cf1154270.png?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/06/01/28f06ece-201b-4980-9149-0132a33ac842.png?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/06/01/db4270d4-03ca-4859-9d78-2d80f324a9d0.png?w=600&p=true&q=75"/>
                <Slider1 imgs="https://ap2-prod-images.disco-api.com/2021/02/10/41ba5603-8c9b-4827-bc86-e005151ae284.png?w=600&p=true&q=75"/>
        </Carousel>

        <div className='data'>
            {loading && <img id='spin' src='/images/spin-loader.gif'/>}
            {data && data.map((e, i) => {
                return <div id='container-data'> 
                    <div key={i}  onClick={(() => {
                    handleSubmit(e)
                })}>
                    <div id="play1"><PlaybtnVideo/></div>

                    <img id='thumb-kids' src={e.thumbnail}/>
                    <h2 id='title'>{e.title}</h2>
                    {/* <p>{e.description}</p>  */}
                </div>
               </div>   
            })}
        </div>

        
        <h2 className='title1'>Everyone's Watching</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/10/8efb9e9b-5e86-4071-9f81-b40b41d0f795.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/07/6a422c8d-06e5-44b5-bdde-1b5386692c3d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/03/c2692d38-f66d-4c8b-8384-441b4ebb4482.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/21/e3e7ba89-144e-489f-bc33-009de1c51235.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Little Singham VS Kaal</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/10/0caa5575-87e2-40fe-a568-c9a0d32dc454.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/05/e2615b8b-c4a9-4570-b7b3-d17b7fe582cc.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/18/80a8bf16-5be9-42a8-89fe-b27427454dbe.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/12/08/5ba7be79-71d5-4238-b4f5-56be697e1875.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>New Releases</h2>
        <div className='grid1'>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/15/66a1ad14-8736-4d3e-8ea4-9540afb857ec.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/11/2e13b1fd-6610-48c4-ad55-7e3600224f60.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/02/03/afcd778a-8481-4dd0-9559-2a22fe49468c.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/31/9d983e9f-89ab-48ef-9167-da80404c59a8.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/28/de8a94f3-e500-4c8a-a210-dd6d8fcae991.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/20/de63d99f-d09f-4681-9759-01d6ae1ececc.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>New Releases</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/20/de63d99f-d09f-4681-9759-01d6ae1ececc.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/19/1f2ecaea-2889-4681-b224-62f406c084d4.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/09/20/1f73f3f1-2625-4a62-9010-bdf3ca9b66d3.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/27/d8b8186b-c021-4db1-82b3-54321e6a6a30.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Top Toons</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/03/ffe69674-a2da-4d2a-b3a2-296d52632a01.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/05/59902e44-ac37-468a-b701-753b278235a4.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/03/c2692d38-f66d-4c8b-8384-441b4ebb4482.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/24/439721d6-10bd-4ec3-aae2-f1423f5a46e2.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Family Time</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/28/de8a94f3-e500-4c8a-a210-dd6d8fcae991.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2022/01/31/9d983e9f-89ab-48ef-9167-da80404c59a8.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/09/23/e8ac48a8-4747-40ce-8efa-1063c076c82d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/20/eed4f529-a171-41a7-92b2-1224fef0c368.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Junior Chefs Who Impress!</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2020/12/31/95e8e9a4-d3db-425c-8562-64e047f3b1c0.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/08/21/a5e2777a-2340-460a-958d-fb8fe6e1a08d.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/04/29/33c61a5f-6469-4e21-a515-48bcb6978530.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/08/11/4a937c3d-a9c2-4133-b42f-44ab11fa9c4a.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Kisna Movies</h2>
        <div className='grid1'>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/12/4996333f-ca23-4313-b59c-49ae25fa9586.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/12/eab2d48b-fc6f-4c0f-ad2a-354ccdff607c.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/12/f9a0b4bd-1f4c-4b86-aba1-6676d00b8f78.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/12/c4768e5b-40f1-4b3c-a86e-f8d232627c83.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/07/11/126abddb-6d46-4dbb-a332-1d764c8a5e14.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/02/10/70034152-5608-4ec2-804f-405ba8513204.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Animated Blockbusters</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/10/47d2a33b-86e3-443d-8a36-d05976a4855a.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/05/26625ecf-ee41-4395-b535-32d4f9addefb.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/07/11/126abddb-6d46-4dbb-a332-1d764c8a5e14.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/12/c4768e5b-40f1-4b3c-a86e-f8d232627c83.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Fun Science & Engineering</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2020/04/01/35dbe484-a6f1-4b5e-bb62-180f85b997de.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/26/37504c86-4739-4d18-9445-31c4bd3d9ced.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/01/29/884eef70-d774-46a1-9c86-5eb3cddec1cf.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/27/06a72e85-b00b-42fe-996f-d9879b39827f.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Discovering Our Animal Friends</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/11/28/19c7d2b1-57f4-426d-872a-feaa4e5b7f5e.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/10/20/41522b5c-e810-4c82-a941-8785f442ae08.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/01/29/7effa409-565e-410e-af08-9a64e1faa189.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2020/02/24/4a1e7e8f-19bf-4ecc-95e8-ed2211e3408a.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        <h2 className='title1'>Adventures of Kid Krrish</h2>
        <div className='grid'>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/10/be8c68b8-3333-47d1-b02d-15a23d2c2537.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/15/4125b32b-f990-4e50-8940-7606344ac895.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/06/07/f6d40c60-dbe7-4517-aa25-05080cf95533.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
            <img src='https://ap2-prod-images.disco-api.com/2021/05/10/87df39ed-c16b-45b8-a1eb-98c6215aecea.jpeg?bf=0&f=jpg&p=true&q=85&w=600'/>
        </div>
        
        <Footer />
    </div>
}