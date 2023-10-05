import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good => good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral => neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad => bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return good > 0 ? Math.round((good * 100) / countTotalFeedback()) : 0;
  };

  return (
    <>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={[handleClickGood, handleClickNeutral, handleClickBad]}
          />
        }
      />

      <Section
        title="Statistics"
        children={
          countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )
        }
      />
    </>
  );
}
