import "./details.scss";
import { useEffect, useState } from "react";
import { Image } from "./Image";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
let info = {
  url: "https://bit.ly/3sdtyyB",
  heading: "Dark Mysteries: Anjaan Kahaniyaan",
  tags: ["Supernatural", "Investigation"],
  description: "India's paranormal mysteries, like never seen before!",
  agerating: "A",
  contains: "Frightening Scenes",
  languages: ["Telugu", "Malyalam", "Hindi", "English", "Kannada", "Tamil"],
};
let episodesData = [
  {
    image: "https://bit.ly/3BT1JyH",
    duration: "22:30",
    name: "Possession",
    description: "Experts explore how posession transforms life for the good and evil.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/08/a96df768-f3a3-30e7-8fe5-c6f6e9629e08.jpeg?w=600&p=true&q=75",
    duration: "25:10",
    name: "Sorcery and Curses",
    description: "People from a small town in Bengal claimed to be cursed and possessed.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/08/b5dc0f0f-1aa9-3c19-a15e-c6027151821e.jpeg?w=600&p=true&q=75",
    duration: "27:58",
    name: "Hauntings",
    description: "A panoramal investigator explores areas haunted by spirits.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/10/77312c58-8cdd-358d-a0b6-3678a76af66a.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "26:32",
    name: "Reincarnation",
    description: "Embark on a journey across India in the search of the unexplained.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/09/8865da81-1eb4-35df-a054-68f4ed18ef21.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "26:04",
    name: "Cursed Places",
    description: "Experts explore the myths behind cursed settlements.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/23/02c9f11e-9a0d-3513-ac1c-5edb1bf042c6.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "23:50",
    name: "Black Magic",
    description: "Two young people seem to be affected by black magic.",
}
];
let shortsData = [
  {
    image: "https://ap2-prod-images.disco-api.com/2022/02/24/6dc1351d-d1fb-302d-8b63-f3b81762521c.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "01:45",
    name: "Is black magic the cause of this family's illness",
    description: "Dark magic from an evil djinn could be the cause of family's illness",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/18/ae772eab-4797-3e09-ab1c-bb7e75d83055.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "00:29",
    name: "Dark Mysteries Anjaan Kahaniyaan - Trailer",
    description: "00:29",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/18/46a122e8-a770-39fe-bb09-fdfc6938fce4.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "01:51",
    name: "Possessed by a demon, Priest performs holy rites",
    description: "This series searches across India and beyond for the unexplained.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/18/096d368e-c4aa-3b22-a806-950b90806c2c.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "01:56",
    name: "The silence is shattered",
    description: "A priest tribe tries to remove a curse brought upon a girl.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/18/70920f3b-9642-39a1-afef-b5ad82de6020.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "01:41",
    name: "Is this young boy reincarnated from the past?",
    description: "This series searches across India and beyond for the unexplained.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/18/8d2010c1-eeb9-3e65-8c6b-08c1baf2acb2.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "01:44",
    name: "The Haunted Ghost Mines In Mussoorie",
    description: "A panoramal investigator researches haunted mines in Uttarakhand.",
},
{
    image: "https://ap2-prod-images.disco-api.com/2022/02/18/4fb7294e-5f63-385a-9541-6de22b908f00.jpeg?bf=0&f=jpg&p=true&q=85&w=200",
    duration: "01:54",
    name: "The curse of Talakadu, A city buried under sand dunes.",
    description: "Legends say Talakadu was buried under sand dunes due to a princess' curse.",
},
];
export const Details = () => {
  const [episodes, setEpisodes] = useState(true);
  const [shorts, setShorts] = useState(false);
  const {user} = useAuth()
  const navigate = useNavigate()
  const { video } = useSelector((state) => ({
    video: state.videoState.video
  }));

  useEffect(() => {
    !user && navigate('../')
  }, [user])
  return (
    <div>
    <div className="whole-cont">
      <div className="imgcont">
        {/* hello world */}
        {/* <img id="image_1" src={info.url} /> */}
        <iframe width="1110" height="623" src={video.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="details-cont">
        <div className="left-cont">
          <div className="header-left flex">
            <div className="svg-cont">
              <Image />
            </div>
            <div>
              <h1>{video.title}</h1>
            </div>
          </div>
          <p className="detals-pTag">
            {/* {info.tags[0]}&nbsp;{info.tags[1]} */}
            {info.tags.map((e) => (
              <span>
                <span className="dot"></span>
                {e}
              </span>
            ))}
          </p>
          <button className="button flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="styles-playerIcon-D0BiVuxl"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fff"
                d="M18.657 12.338L8.03 18.409h-.001c-.213.121-.474.121-.686 0-.212-.121-.343-.345-.343-.587V5.678c0-.242.131-.466.343-.587.212-.121.473-.121.686 0l10.627 6.071h.002c.21.122.342.346.342.588s-.131.466-.343.588z"
              ></path>
            </svg>
            <h6 className="">Watch Now</h6>
          </button>
          <p className="detals-pTag">{video.description}</p>
          <p className="detals-pTag">
            Age Rating: {info.agerating} | Contains: {info.contains}
          </p>
        </div>
        <div className="right-cont">
          <div className="top-buttons">
            <button>
              <div className="btncont">
                <svg
                  width="22px"
                  height="20px"
                  viewBox="0 0 22 20"
                  class="styles-favoriteIcon-3VuS4im-"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <desc>Created with Sketch.</desc>
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="Shorts-Copy"
                      transform="translate(-345.000000, -701.000000)"
                      stroke="gray"
                      stroke-width="1.5"
                    >
                      <path
                        d="M360.683055,701.75 C359.884958,701.75 359.127378,701.923432 358.410327,702.270448 C357.686498,702.620746 357.060957,703.115706 356.532347,703.753626 C356.312372,704.019089 356.119842,704.296446 355.954894,704.58577 C355.789918,704.296527 355.597363,704.019128 355.377356,703.753626 C354.848746,703.115706 354.223205,702.620746 353.499376,702.270448 C352.782325,701.923432 352.024745,701.75 351.226648,701.75 C349.764566,701.75 348.510316,702.286868 347.461243,703.354288 C346.913219,703.899002 346.497246,704.518742 346.207435,705.220014 C345.889707,705.965342 345.738146,706.727888 345.750727,707.51561 C345.763455,708.388382 345.94714,709.212916 346.303121,709.989977 C346.659881,710.768735 347.167854,711.426426 347.988878,712.122201 C348.191368,712.294689 349.002808,713.022293 350.42437,714.306643 C353.363751,716.98911 355.188086,718.647117 356.007587,719.284583 C356.494523,718.844633 357.778118,717.681712 359.858411,715.795862 C362.110653,713.75586 363.507451,712.488096 364.079286,711.966103 C364.734513,711.427626 365.244452,710.769942 365.609838,709.993594 C365.9764,709.214748 366.15888,708.385547 366.15888,707.506325 C366.15888,706.700016 366.0073,705.931368 365.703028,705.200583 C365.412457,704.49748 364.996484,703.87774 364.454682,703.339282 C363.401611,702.280272 362.146104,701.75 360.683055,701.75 Z"
                        id="Path"
                      ></path>
                    </g>
                  </g>
                </svg>
                <p>Favorite</p>
              </div>
            </button>
            <button className="rightbbttn">
              <div className="btncont">
                <svg
                  width="22px"
                  height="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  class="styles-shareIcon-2cyIe6VX"
                  fill="gray"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15.033 12.047c.816 0 1.514.292 2.095.875A2.87 2.87 0 0 1 18 15.023a2.87 2.87 0 0 1-.872 2.102 2.852 2.852 0 0 1-2.095.875 2.852 2.852 0 0 1-2.094-.875 2.87 2.87 0 0 1-.872-2.102v-.2l-4.871-3.46a3.95 3.95 0 0 1-1.393 1.217 3.85 3.85 0 0 1-1.834.452c-1.096 0-2.031-.388-2.806-1.166C.388 11.088 0 10.15 0 9.05c0-1.1.388-2.038 1.163-2.815.775-.778 1.71-1.167 2.806-1.167 1.136 0 2.098.416 2.886 1.247l5.292-2.675a2.735 2.735 0 0 1-.08-.663c0-.818.29-1.519.872-2.102A2.852 2.852 0 0 1 15.033 0c.816 0 1.514.292 2.095.875A2.87 2.87 0 0 1 18 2.977a2.87 2.87 0 0 1-.872 2.101 2.852 2.852 0 0 1-2.095.875c-.895 0-1.643-.342-2.245-1.026L7.637 7.542c.2.483.3.985.3 1.508 0 .322-.04.644-.12.966l4.73 3.378c.282-.415.639-.744 1.073-.985a2.862 2.862 0 0 1 1.413-.362zM13.951 1.91a1.467 1.467 0 0 0-.441 1.076c0 .422.15.78.451 1.076.3.295.658.442 1.072.442.415 0 .772-.147 1.073-.442.3-.295.45-.654.45-1.076 0-.423-.15-.785-.45-1.086a1.462 1.462 0 0 0-1.073-.453 1.48 1.48 0 0 0-1.082.463zm-8.198 8.93a2.444 2.444 0 0 0 .741-1.79c0-.698-.247-1.295-.741-1.79a2.428 2.428 0 0 0-1.784-.745c-.695 0-1.29.248-1.784.744a2.444 2.444 0 0 0-.742 1.79c0 .697.247 1.294.742 1.79.494.496 1.089.744 1.784.744.695 0 1.29-.248 1.784-.744zm10.343 5.268c.307-.294.46-.653.46-1.075 0-.423-.15-.785-.45-1.087a1.462 1.462 0 0 0-1.073-.452c-.414 0-.771.15-1.072.452-.3.302-.451.664-.451 1.087 0 .422.15.78.451 1.075.3.295.658.443 1.072.443.415 0 .769-.148 1.063-.443z"
                  ></path>
                </svg>
                <p>Share</p>
              </div>
            </button>
          </div>
          <div className="languages">
            <p className="flex details-pTag">
              <text className="languages-text">Languages </text>{" "}
              <div className="flex-wrap">
                {info.languages.map((e) => (
                  <p className="detals-pTag">{e}&nbsp;</p>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
      {episodes && (
        <div className="episodes-shorts">
          <div className="episode-headers flex">
            <div
              className="shorts-button"
              onClick={() => {
                toggleEpisodes(setEpisodes, setShorts);
              }}
            >
              Episodes
            </div>
            <div
              className="episodes-button"
              onClick={() => {
                toggleShorts(setEpisodes, setShorts);
              }}
            >
              Shorts
            </div>
          </div>
          <div className="episode-cont flex">
            {episodesData.map((e) => (
              <div className="episode-card">
                <div
                  className="episode-image"
                  style={{ backgroundImage: `url(${e.image})` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="styles-premiumIcon-1cFRuPCc"
                  >
                    <defs>
                      <linearGradient
                        id="9uyyd0dnra"
                        x1="39.966%"
                        x2="67.41%"
                        y1="71.229%"
                        y2="0%"
                      >
                        <stop offset="0%" stop-color="#2175D9"></stop>
                        <stop offset="100%" stop-color="#2789FF"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <g>
                        <g transform="translate(-749 -116) translate(749 116)">
                          <rect
                            width="24"
                            height="24"
                            fill="#2789FF"
                            rx="2"
                          ></rect>
                          <path
                            fill="#FFF"
                            fill-rule="nonzero"
                            d="M16.44 16.75H6.631l-1.71-4.61c.736.494 1.617.772 2.55.772 1.857 0 3.334-1.754 4.063-3.51.73 1.756 2.207 3.51 4.063 3.51.928 0 1.812-.282 2.552-.782l-1.71 4.62zM16.687 18.556H6.367c-.242 0-.437-.197-.437-.455 0-.24.195-.437.437-.437h10.32c.241 0 .437.196.437.455 0 .24-.196.437-.437.437zM11.536 8.645c.73 0 1.323-.592 1.323-1.322 0-.73-.592-1.323-1.323-1.323-.73 0-1.322.592-1.322 1.323 0 .73.592 1.322 1.322 1.322zM4.45 11.669c.47 0 .85-.38.85-.85s-.38-.85-.85-.85-.85.38-.85.85.38.85.85.85zM18.622 9.968c.47 0 .85.38.85.85s-.38.85-.85.85-.85-.38-.85-.85.38-.85.85-.85z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="timestamp">
                    <p className="detals-pTag">{e.duration}</p>
                  </div>
                </div>
                <div className="episode-details">
                  <h4>{e.name}</h4>
                  <p className="detals-pTag">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {shorts && (
        <div className="episodes-shorts">
          <div className="episode-headers flex">
            <div
              className="episodes-button"
              onClick={() => {
                toggleEpisodes(setEpisodes, setShorts);
              }}
            >
              Episodes
            </div>
            <div
              className="shorts-button"
              onClick={() => {
                toggleShorts(setEpisodes, setShorts);
              }}
            >
              Shorts
            </div>
          </div>
          <div className="episode-cont flex">
            {shortsData.map((e) => (
              <div className="episode-card">
                <div
                  className="episode-image"
                  style={{ backgroundImage: `url(${e.image})` }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="styles-premiumIcon-1cFRuPCc"
                  >
                    <defs>
                      <linearGradient
                        id="9uyyd0dnra"
                        x1="39.966%"
                        x2="67.41%"
                        y1="71.229%"
                        y2="0%"
                      >
                        <stop offset="0%" stop-color="#2175D9"></stop>
                        <stop offset="100%" stop-color="#2789FF"></stop>
                      </linearGradient>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <g>
                        <g transform="translate(-749 -116) translate(749 116)">
                          <rect
                            width="24"
                            height="24"
                            fill="#2789FF"
                            rx="2"
                          ></rect>
                          <path
                            fill="#FFF"
                            fill-rule="nonzero"
                            d="M16.44 16.75H6.631l-1.71-4.61c.736.494 1.617.772 2.55.772 1.857 0 3.334-1.754 4.063-3.51.73 1.756 2.207 3.51 4.063 3.51.928 0 1.812-.282 2.552-.782l-1.71 4.62zM16.687 18.556H6.367c-.242 0-.437-.197-.437-.455 0-.24.195-.437.437-.437h10.32c.241 0 .437.196.437.455 0 .24-.196.437-.437.437zM11.536 8.645c.73 0 1.323-.592 1.323-1.322 0-.73-.592-1.323-1.323-1.323-.73 0-1.322.592-1.322 1.323 0 .73.592 1.322 1.322 1.322zM4.45 11.669c.47 0 .85-.38.85-.85s-.38-.85-.85-.85-.85.38-.85.85.38.85.85.85zM18.622 9.968c.47 0 .85.38.85.85s-.38.85-.85.85-.85-.38-.85-.85.38-.85.85-.85z"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <div className="timestamp">
                    <p className="detals-pTag">{e.duration}</p>
                  </div>
                </div>
                <div className="episode-details">
                  <h4>{e.name}</h4>
                  <p className="detals-pTag">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  <Footer />
    </div>
  );
};

function toggleEpisodes(setEpisodes, setShorts) {
  setEpisodes(true);
  setShorts(false);
}
function toggleShorts(setEpisodes, setShorts) {
  setEpisodes(false);
  setShorts(true);
}