interface Props {
  onChange: (newValue: string) => void;
  onDelete: () => void;
  text: string;
}

export default function ListItem(props: Props) {
  const { onChange, onDelete, text } = props;
  const handleChange = () => {
    onChange(prompt("New value?") || text);
  };
  return (
    <li>
      <button onClick={handleChange}>Edit</button>
      <button onClick={onDelete}>Delete</button>
      {text}
    </li>
  );
}
