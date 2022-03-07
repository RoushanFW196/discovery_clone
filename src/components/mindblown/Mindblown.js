// import React from "react";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getdata } from '../../redux/actions/data';
import { getvideo } from '../../redux/actions/video';
import Footer from '../footer/Footer';
import { PlaybtnVideo } from '../playbutton/PlaybtnVideo';
import Mb_compo from "./mb-compo/Mb_compo.js";

function Mindblown() {
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
        dispatch(getdata("mindblown"))
    }, []);

    const handleSubmit = (video) => {
        dispatch(getvideo(video))
        if(user){
            navigate("../details")
        }else{
            navigate("../login")
        }
    }
  return (
    <>
       <div className='data'>
            {loading && <img id='spin' src='/images/spin-loader.gif'/>}
            {data && data.map((e, i) => {
                return <div id='container-data'> 
                    <div key={i}  onClick={(() => {
                    handleSubmit(e)
                })}>
                  <div id="play1"><PlaybtnVideo/></div>

                    <img id='thumb-mindblown' src={e.thumbnail}/>
                    <h2 id='title'>{e.title}</h2>
                    {/* <p>{e.description}</p>  */}
                </div>
               </div>   
            })}
        </div>
        <h2 id='mindblown-centerHead'>Mindblown</h2>
      <div id="mindblown-grid">
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/2/28/82f106f9-2e54-4eb4-b338-7fc71d15835c.jpg?f=jpg&p=true&q=85&w=1024"
            title="That's Elephantastic!"
            title_hidden="Explore the world of these mighty mammals."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/2/26/3347de81-d535-4eb7-8350-002e17b7b50d.jpg?f=jpg&p=true&q=85&w=1024"
            title="On The Indian Tiger Trail"
            title_hidden="Beloved and feared in equal measures, few big cats inspire as much awe in..."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/1/23/1ba32b51-a3b6-4b62-af7c-5c0a0a06f084.jpg?f=jpg&p=true&q=85&w=1024"
            title="Science vs God"
            title_hidden="Faith and fact have been at loggerheads for centuries. Watch..."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/4/19/229b4e2f-4e33-47f3-aee1-7e603bca0552.jpg?f=jpg&p=true&q=85&w=1024"
            title="Nature's Uncanny Mysteries"
            title_hidden="Scientists attempt to answer some of the universe's pressing questions."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2021/6/24/3ebaaefd-5293-46df-b634-8744308ccd43.jpg?f=jpg&p=true&q=85&w=1024"
            title="Aliens Among Us?"
            title_hidden="A young planetary system compared to the rest of the universe — and..."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/11/8/6b12bd66-caca-4f81-8a76-ba4354382778.jpg?f=jpg&p=true&q=85&w=1024"
            title="Did You Know?"
            title_hidden="The answer to all your curiosities is here!"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/11/2/840937fb-b18b-4461-8c44-b9b5a2db993a.jpg?f=jpg&p=true&q=85&w=1024"
            title="Mission Big Cats"
            title_hidden="A tale of survival, struggle, love and unity."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2021/6/17/386d8885-66e2-4936-8d58-daa5fe844f1b.jpg?f=jpg&p=true&q=85&w=1024"
            title="The Science Of Hollywood"
            title_hidden="From reel to real, ever wondered how Hollywood works?"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/10/17/14d4fde3-8d54-403f-bb52-51acd4a573d8.jpg?f=jpg&p=true&q=85&w=1024"
            title="Exploring Egypt"
            title_hidden="It's time to discover Egypt's wonders."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/10/11/b7da68f5-ec66-43e1-bd74-d540e4d3468c.jpg?f=jpg&p=true&q=85&w=1024"
            title="Tour The World's Museums"
            title_hidden="Discover stunning treasures at the world's museums."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/10/4/68779f01-67b5-44f0-af06-9f5afaca5e6c.jpg?f=jpg&p=true&q=85&w=1024"
            title="Earth's Mightiest Rivers"
            title_hidden="These rivers bring life, destruction & meaning to many."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/9/26/e7bc107f-bc5d-41c3-abab-11405b82c1c3.jpg?f=jpg&p=true&q=85&w=1024"
            title="Cute Cats!"
            title_hidden="What makes cats such a unique species?"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2021/6/17/dd6f123c-ea5f-42d4-be48-23496d45a171.jpg?f=jpg&p=true&q=85&w=1024"
            title="Incredible Humans"
            title_hidden="A sneak-peek into the world of ordinary people doing extraordinary work!"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/9/19/6c3fff76-841a-49e8-943f-e4e44be2b266.jpg?f=jpg&p=true&q=85&w=1024"
            title="Incredible Asia!"
            title_hidden="Travel the world's largest continent through your screen now!"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/9/13/e8174f07-d042-4dbc-b904-097572473434.jpg?f=jpg&p=true&q=85&w=1024"
            title="Secrets Of The Sun"
            title_hidden="There's more to our solar system's star than you know!"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/9/10/8eb79598-ed30-4dae-98b6-3b1609c959de.jpg?f=jpg&p=true&q=85&w=1024"
            title="Frozen Wonders"
            title_hidden="Life finds a way even when temperatures drop below freezing point."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2021/6/21/53e73223-86ed-4d04-9b7d-e7ac3d3dcab7.jpg?f=jpg&p=true&q=85&w=1024"
            title="Kids Gone Wild"
            title_hidden="Watch these feisty kids get into the mood for adventure and wild experiments."
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/8/24/bb879662-b9c1-4866-aa9d-3ceb17e1a3af.jpg?f=jpg&p=true&q=85&w=1024"
            title="Mysteries Of The Black Hole"
            title_hidden="Will Black Hole remain a mystery forever?"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/8/17/53097d34-aa47-48ed-bdb4-aa4f9ee7dc52.jpg?f=jpg&p=true&q=85&w=1024"
            title="The Bear Facts"
            title_hidden="These Bears are as sweet as deadly!"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/8/8/24659298-8a54-45d3-8414-2ea39a8f394e.jpg?f=jpg&p=true&q=85&w=1024"
            title="Amazing Africa!"
            title_hidden="What happens in Africa, stays in Africa!"
          />
        </div>
        <div>
          <Mb_compo
            src="https://ap2-prod-images.disco-api.com/2020/8/1/fabf2986-bae2-458a-87f6-23c2e548078a.jpg?f=jpg&p=true&q=85&w=1024"
            title="A Bird's-Eye View!"
            title_hidden="A sneak peek into the world of our feathered friends."
          />
        </div>

        {/* <Footer /> */}
      </div>
      <Footer />
    </>
  );
}

export default Mindblown;
