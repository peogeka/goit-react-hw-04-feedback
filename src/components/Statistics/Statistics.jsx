import { List, ListItem, Text } from './Statistics.styled';

export function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <List>
      <ListItem>
        <Text>Good: {good}</Text>
      </ListItem>
      <ListItem>
        <Text>Neutral: {neutral}</Text>
      </ListItem>
      <ListItem>
        <Text>Bad: {bad}</Text>
      </ListItem>
      <ListItem>
        <Text>Total: {total}</Text>
      </ListItem>
      <ListItem>
        <Text>Positive feedback: {positivePercentage}%</Text>
      </ListItem>
    </List>
  );
}
