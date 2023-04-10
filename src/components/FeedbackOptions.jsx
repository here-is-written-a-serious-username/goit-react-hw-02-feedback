import React from "react";

const FeedbackOptions = ({ onLeaveFeedback }) => {
    return (
        <>
            <button type='button' onClick={onLeaveFeedback} name='good'>Good</button>
            <button type='button' onClick={onLeaveFeedback} name='neutral'>Neutral</button>
            <button type='button' onClick={onLeaveFeedback} name='bad'>Bad</button>
        </>
    );
};

export default FeedbackOptions;