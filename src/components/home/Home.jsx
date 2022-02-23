import Carousel from 'react-elastic-carousel'
import { Playbtn } from '../playbutton/Playbtn';
import { Slider } from '../slider/Slider'
import { Slider1 } from '../slider/Slider1'

export const Home = () => {
    const breakPoints = [
        {width: 1, itemsToShow:1},
        {width: 500, itemsToShow:2},
        {width: 768, itemsToShow:3},
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

        {/* <Playbtn /> */}

        <h1>Home</h1>
    </div>
}