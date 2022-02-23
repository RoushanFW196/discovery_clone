import "./Details.css";
import { Image } from "./Image";
let info = {
  url: "https://bit.ly/3sdtyyB",
  heading: "Dark Mysteries: Anjaan Kahaniyaan",
  tags: ["Supernatural", "Investigation"],
  description: "India's paranormal mysteries, like never seen before!",
  agerating: "A",
  contains: "Frightening Scenes",
  languages: ["Telugu", "Malyalam", "Hindi", "English", "Kannada", "Tamil"],
};
export const Details = () => {
  return (
    <div className="whole-cont">
      <div className="imgcont">
        {/* hello world */}
        <img id="image_1" src={info.url} />
      </div>
      <div className="details-cont">
        <div className="left-cont">
          <div className="header-left flex">
            <div className="svg-cont">
              <Image />
            </div>
            <div>
              <h1>{info.heading}</h1>
            </div>
          </div>
          <p>
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
          <p>{info.description}</p>
          <p>
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
            <p className="flex">
              <text className="languages-text">Languages </text>{" "}
              <div className="flex-wrap">
                {info.languages.map((e) => (
                  <p>{e}&nbsp;</p>
                ))}
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
