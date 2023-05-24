import React from "react"
import { PlanCheck } from "../../utils/imgLoader"

const AnnualRow = ({ title, description, ch1, ch2, ch3 }) => {
  return (
    <>
      <div className="col-lg-3 col-sm-12 col-12 border-trb plan-content">
        <h4 className="option-title">{title}</h4>
        <p className="description">{description}</p>
      </div>
      <div className="col-lg-3 col-4 d-flex justify-content-center align-items-center border-trb">
        {ch1 && (
          <img
            alt={"Option Check"}
            src={PlanCheck}
            className="option-check w-fit-content"
          />
        )}
      </div>
      <div className="col-lg-3 col-4 d-flex justify-content-center align-items-center border-trb">
        {ch2 && (
          <img
            alt={"Option Check"}
            src={PlanCheck}
            className="option-check w-fit-content"
          />
        )}
      </div>
      <div className="col-lg-3 col-4 d-flex justify-content-center align-items-center border-tb">
        {ch3 && (
          <img
            alt={"Option Check"}
            src={PlanCheck}
            className="option-check w-fit-content"
          />
        )}
      </div>
    </>
  )
}

export default AnnualRow
