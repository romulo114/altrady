import React, { useState } from "react"
import SectionHeader from "../../components/common/SectionHeader"
import SectionLayout from "../../layouts/SectionLayout"

const FAQSection = ({ title, content, questions }) => {
  const [activeIdx, setActiveIdx] = useState(-1)
  return (
    <SectionLayout sectionName="faq">
      <SectionHeader title={title} content={content} />

      <div className="container faq-body">
        {questions.map(({ title, content }, idx) => (
          <div
            className={idx === activeIdx ? "faq-item active" : "faq-item"}
            key={idx}
          >
            <h4
              className="faq-item__title position-relative"
              onClick={() => {
                if (idx === activeIdx) setActiveIdx(-1)
                else setActiveIdx(idx)
              }}
              onKeyDown={() => {
                if (idx === activeIdx) setActiveIdx(-1)
                else setActiveIdx(idx)
              }}
              role="presentation"
            >
              {title}
            </h4>
            <p className="faq-item__content">{content}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  )
}

export default FAQSection
