import React, { PureComponent } from 'react'



export const Footer=()=>{

    return(
        <div className="footer">
          <div className="footer-wrapper">
          <div className="lefttexticon">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCKo1W1tVuMgTL6PrJ_WuhiYjIYT88UU1vtA&usqp=CAU" />hello@discovery.com
             <p>022-43491100 +91-8433774761(Mon-Fri,excluding Holidays 11am-4pm)</p>
             <p>Discovery India, 5th Floor, WeWork BKC, C20 G Block, Bandra Kurla Complex, Mumbai 400051</p>
          </div>
         
         <div className="rightstore">
           <div>
               <p>Follow us</p>
               <span className="followusicon">
                   <img  src="https://cdn-icons-png.flaticon.com/512/152/152810.png"/>
               </span>
               <span className="followusicon">
                   <img  src="https://image.similarpng.com/very-thumbnail/2021/01/Facebook-icon-design-on-transparent-background-PNG.png"/>
               </span>
           </div>

           <div className="rightstore-icon">
           <p>discovery+ App</p>
           <span>
               <img src="https://www.kindpng.com/picc/m/114-1144091_download-google-play-png-apple-app-store-icon.png"/>
           </span>
          <span className="followusicon">
              <img src="https://www.discoveryplus.in/cb122e6023f5abe83abbb470c6229ad5.svg"/>
          </span>
          
           </div>

         </div>
         

        </div>
        </div>
    )
    
}