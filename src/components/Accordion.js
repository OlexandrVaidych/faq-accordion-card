import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ questionsAnswers }) => {
    let showDescription, fontWeightBold, ariaExpanded;
    const [activeIndex, setActiveIndex] = useState(1);

    const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
        if(index === activeIndex){
            showDescription = "show-description";
            fontWeightBold = "font-weight-bold";
            ariaExpanded = "true";
        }
        else{
            showDescription = "";
            fontWeightBold = "";
            ariaExpanded = "false";
        }
        return (
            <AccordionItem
                showDescription={showDescription}
                fontWeightBold={fontWeightBold}
                ariaExpanded={ariaExpanded}
                item={item}
                index={index}
                onClick={() => {
                    setActiveIndex(index);
                }}
            />
        );
    });

    return (
        <div className="faq">
            <h1 className="faq__title">FAQ</h1>
            <dl className="faq__list">{renderedQuestionsAnswers}</dl>
        </div>
    );
}

export default Accordion;
