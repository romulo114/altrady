import React from "react"
import { YesIcon, NoIcon, WaitingIcon } from "../../utils/imgLoader"
import { Image } from "../image"

const CompareComponent = ({
  desc,
  altrady,
  altradyContent,
  coinigy,
  coinigyContent,
  waiting,
  coinigyYes,
}) => {
  return (
    <div className="layout-container compare-section">
      <div className="text-center">
        {desc && <h3 className="title">{desc}</h3>}
        <div className="row mt-5">
          <div className="col-sm-6">
            {waiting ? (
              <Image
                src={WaitingIcon}
                alt="waiting icon"
                width={70}
                height={70}
              />
            ) : (
              <Image src={YesIcon} alt="yes icon" width={70} height={70} />
            )}
            <h4 className="my-3">{altrady}</h4>
            <p>{altradyContent}</p>
          </div>
          <div className="col-sm-6 mt-48">
            {coinigyYes ? (
              <Image src={YesIcon} alt="yes icon" width={70} height={70} />
            ) : (
              <Image src={NoIcon} alt="no icon" width={70} height={70} />
            )}
            <h4 className="my-3">{coinigy}</h4>
            <p>{coinigyContent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareComponent
