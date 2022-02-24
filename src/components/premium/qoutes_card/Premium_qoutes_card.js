import React from 'react'
import "./premium_qoutes_card.css"

function Premium_qoutes_card(props) {
  return (
    <div className="premium_qoutes_card">
    <blockquote className="quotebox quotebox--quotes premium_set-by-flex">
        <div className="premium_qoutes_card_1st_div"><cite>{props.title}</cite>
        </div>
        <div className="premium_qoutes_card_2nd_div">
            <cite>
                <div className="premium_ratting_size">{props.ratting_name}<span className="premium_star_color-style">{props.stars}<span className="premium_star_color-style_none">{props.extra}</span> </span>
                </div>
            </cite>
        </div>
    </blockquote>
</div>
  )
}

export default Premium_qoutes_card
