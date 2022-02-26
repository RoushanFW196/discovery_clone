import React from "react";
import "./discovery_grid.css";
import Premium_carousel from "../premium_carousel/Premium_carousel.js"
import Premium_single_video from "../premium-single-video/Premium_single_video.js"
import Grid_compo from "./Grid_compo.js"

function Discovery_grid() {
  return (
    <div className="discoveryGrid">
        <h1 id="grid_head">Get It All With discovery+</h1>
      <div id="grid_main">

       <Grid_compo src1="https://ap2-prod-images.disco-api.com/2021/12/21/1ba9e855-0426-462b-bcfd-6667ca51b99b.png?bf=0&f=jpg&p=true&q=85&w=312" src2="https://ap2-prod-images.disco-api.com/2021/12/21/9999c652-3e08-46ce-8b83-d4d7e01c3497.png?bf=0&f=jpg&p=true&q=85&w=312" pTag1="Binge" pTag2="Browse" pTag_hidden1="New & Classic Hit Shows" pTag_hidden2="Show of Every Genre"/>
       
       <Grid_compo src1="https://ap2-prod-images.disco-api.com/2021/12/21/e3d5f3d0-4acc-4a46-b3bc-646f832b9326.png?bf=0&f=jpg&p=true&q=85&w=312" src2="https://ap2-prod-images.disco-api.com/2021/12/21/a5b80ce1-4659-4977-b5dc-cdbf9c03641c.png?bf=0&f=jpg&p=true&q=85&w=312" pTag1="Watch" pTag2="Find" pTag_hidden1="HGTV, Food Network, TLC, ID, and more" pTag_hidden2="New Shows All The Time"/>

       <Grid_compo src1="https://ap2-prod-images.disco-api.com/2021/12/21/b8c2ea45-9c74-4005-9f7e-4a8d447a98eb.png?bf=0&f=jpg&p=true&q=85&w=312" s pTag1="Stream" pTag_hidden1="BBC & Natural History Collections"/>

        <Grid_compo src1="https://ap2-prod-images.disco-api.com/2022/1/3/3fbd93c4-e18d-4238-ac5f-dab703206b00.png?bf=0&f=jpg&p=true&q=85&w=312" src2="https://ap2-prod-images.disco-api.com/2022/1/3/1c6abfca-43d4-49f9-8bce-2310e2e1bb2e.png?bf=0&f=jpg&p=true&q=85&w=312" pTag1="Enjoy" pTag2="Can't Miss" pTag_hidden1="Your Favourite Celebrities" pTag_hidden2="Exclusive discovery+ Originals"/>
      </div>

      <div className="flex-main">
      <img src="https://ap2-prod-images.disco-api.com/2020/09/06/686381d9-5ec1-4281-a169-d445daa66d2c.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/09/24/4e836c72-0d57-48ad-a7d3-6295d78ad47c.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/09/06/7eed96cb-3c78-42e3-aaef-364101bc5115.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/12/16/f24c50c6-b65b-408e-bf71-a46f58df4827.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/09/06/59d187d5-1a08-461d-832c-a225a55f99c6.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/09/06/0e38f005-1d15-4b87-bac5-77deeb4f900e.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/12/16/b47e7ecc-6b07-4e17-976a-b5d7d14932d8.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/12/16/e81e70aa-2cb4-4cdc-9596-b17072c7227d.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/12/16/ac437d0c-82ce-4259-9133-7db3c8fc772f.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/09/06/3a1a78f6-ee48-46ff-a42a-9780d6f426e0.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/09/06/a363a4f2-d346-45f7-91b3-e9067c53d4ea.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      <img src="https://ap2-prod-images.disco-api.com/2020/12/16/d7e67400-9a56-4943-9056-94d4686566b1.png?bf=0&f=png&p=true&q=85&w=150" alt="" />
      </div>
      <h1 className="secHead">Thousands of Premium Shows</h1>
      <Premium_carousel/>
      <Premium_single_video/>
    </div>
  );
}

export default Discovery_grid;
