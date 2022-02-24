
import "./explore.css";
import React from "react";
import styled from "styled-components";
import {Footer} from '../../footer/Footer.jsx';
export const Explore=()=>{



    return(
        <Explorediv>
       <div className="explore-channelswrapper">

      <div className="explore-header">
          <h2>Live Channels</h2>
      </div>

      <div className="explore-channelslist">
          <a href="https://www.discoveryplus.in/channel/discovery-science?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/09/06/59d187d5-1a08-461d-832c-a225a55f99c6.png?bf=0&f=jpg&p=true&q=85&w=250"/></a>
          <a href="https://www.discoveryplus.in/channel/discovery-channel?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/09/06/7eed96cb-3c78-42e3-aaef-364101bc5115.png?bf=0&f=jpg&p=true&q=85&w=250"/></a>
           <a href="https://www.discoveryplus.in/channel/investigation-discovery?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/09/06/3a1a78f6-ee48-46ff-a42a-9780d6f426e0.png?bf=0&f=jpg&p=true&q=85&w=250"/></a>
          <a href="https://www.discoveryplus.in/channel/animal-planet?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/09/06/686381d9-5ec1-4281-a169-d445daa66d2c.png?bf=0&f=jpg&p=true&q=85&w=250"/></a>
      
         <a href="https://www.discoveryplus.in/channel/tlc?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/09/06/a363a4f2-d346-45f7-91b3-e9067c53d4ea.png?bf=0&f=jpg&p=true&q=85&w=260"/></a>

      
       <a href="https://www.discoveryplus.in/channel/discovery-kids?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/12/16/f24c50c6-b65b-408e-bf71-a46f58df4827.png?bf=0&f=jpg&p=true&q=85&w=260"/></a>
      
      <a href="https://www.discoveryplus.in/channel/discovery-turbo?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/09/06/0e38f005-1d15-4b87-bac5-77deeb4f900e.png?bf=0&f=jpg&p=true&q=85&w=260"/></a>
      
      <a href="https://www.discoveryplus.in/channel/eurosport-india?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/12/16/e81e70aa-2cb4-4cdc-9596-b17072c7227d.png?bf=0&f=jpg&p=true&q=85&w=260"/></a>

<a href="https://www.discoveryplus.in/channel/food-network?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/12/16/512a525a-6841-4a53-bd25-22f5f055dd1a.png?bf=0&f=jpg&p=true&q=85&w=260 "/></a>
 
  <a href="https://www.discoveryplus.in/channel/dmax?liveStream=true "><img src="https://ap2-prod-images.disco-api.com/2020/12/16/b47e7ecc-6b07-4e17-976a-b5d7d14932d8.png?bf=0&f=jpg&p=true&q=85&w=260"/></a>

   <a href="https://www.discoveryplus.in/channel/trvl-channel?liveStream=true"><img src="https://ap2-prod-images.disco-api.com/2020/12/16/d7e67400-9a56-4943-9056-94d4686566b1.png?bf=0&f=jpg&p=true&q=85&w=260"/></a>

      </div>
</div>


       <div className="explore_showsfullepisode">
          <div className="explore-header">
           <h2>Explore Shows and Full Episodes</h2>
          </div>
        <div className="explore-channel">
         <img src="https://ap2-prod-images.disco-api.com/2020/12/03/a93d5186-e59d-4881-b402-86ae7525c8fe.png?bf=0&f=jpg&p=true&q=85&w=260"/>
         <img src="https://ap2-prod-images.disco-api.com/2021/04/22/61fd0ea6-bc32-4d0d-bb9d-7563c4835f41.png?bf=0&f=jpg&p=true&q=85&w=260"/>
         <img src="https://ap2-prod-images.disco-api.com/2020/12/16/0f3a24cd-4622-4ff9-a373-91333bca0d3f.png?bf=0&f=jpg&p=true&q=85&w=260"/>
         <img src="https://ap2-prod-images.disco-api.com/2021/04/01/9f3bf0c9-acab-4033-b072-97f6d02c6843.png?bf=0&f=jpg&p=true&q=85&w=260"/>
       </div>
    </div>
    <Footer/>
    </Explorediv>
   
    )
};



const  Explorediv = styled.div`
  color:#ffffff ;
  font-size:20px;
  line-height:32px;
  font-weight:500;
 text-align:left;
 background-color:#1a1c21;
 margin:0;
 padding:0;
 width:1500px;
 height:270px;
`
