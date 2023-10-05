import { List, ListItem, Button } from './FeedbackOptions.styled';

export function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  let content = [];
  for (let i = 0; i < Math.min(options.length, onLeaveFeedback.length); i++) {
    content.push(
      <ListItem key={i}>
        <Button onClick={onLeaveFeedback[i]}>{options[i]}</Button>
      </ListItem>
    );
  }

  return <List>{content}</List>;
}
