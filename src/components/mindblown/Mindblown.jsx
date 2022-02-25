import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import { getdata } from '../../redux/actions/data';
import { getvideo } from '../../redux/actions/video';
import './mindblown.css'

export const Mindblown = () => {
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

    return <div>
        {/* <Navbar /> */}

        <div className='data'>
            {loading && <img id='spin' src='/images/spin-loader.gif'/>}
            {data && data.map((e, i) => {
                return <div id='container-data'> 
                    <div key={i}  onClick={(() => {
                    handleSubmit(e)
                })}>
                    <img id='thumb' src={e.thumbnail}/>
                    <h2 id='title'>{e.title}</h2>
                    {/* <p>{e.description}</p>  */}
                </div>
               </div>   
            })}
        </div>
        <h1>mindblown</h1>
    </div>
}