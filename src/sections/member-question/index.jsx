import React from "react"
import { PlanCheck } from "../../utils/imgLoader"
import { Image } from "../../components/image"

const ListItem = ({ value }) => (
  <div className="d-flex mb-2 align-items-baseline">
    <Image
      alt={"Option Check"}
      src={PlanCheck}
      className="option-check w-fit-content mr-3"
    />
    <p>{value}</p>
  </div>
)

const QuestionSection = ({
  questionHeader,
  questionContent,
  questionFooter,
  questions,
}) => {
  const len = questions.length
  const leftPart = questions.slice(0, len / 2)
  const rightPart = questions.slice(len / 2)
  const leftItem = leftPart.map((item, idx) => (
    <ListItem key={idx} value={item} />
  ))
  const rightItem = rightPart.map((item, idx) => (
    <ListItem key={idx} value={item} />
  ))
  return (
    <section className="section member">
      <div className="mb-5">
        <h2 className="section-title">{questionHeader}</h2>
        <p className="section-content">{questionContent}</p>
      </div>
      <div className="question-list">
        <div>{leftItem}</div>
        <div>{rightItem}</div>
      </div>
      {questionFooter !== "" && <p className="mt-5">{questionFooter}</p>}
    </section>
  )
}

export default QuestionSection
