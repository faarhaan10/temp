import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../../Question/Question';

const SingleTopic = () => {
    const topic = useLoaderData().data;
    console.log(topic)
    return (
        <div>
            <h1>Topic: <strong>{topic.name}</strong></h1>
            <h2>Questions: {topic.total}</h2>
            <hr />
            {
                topic.questions.map((question ,index)=><Question
                key={question.id}
                index={index}
                ques={question}
                />)
            }

        </div>
    );
};

export default SingleTopic;