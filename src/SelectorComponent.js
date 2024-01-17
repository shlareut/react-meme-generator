// Import JSON file for defining the dropdown options.
import templates from './memeTemplates.json';

// Selector component.
export default function SelectorComponent(props) {
  return (
    <div>
      <label htmlFor={props.type}>{props.title}</label>
      <select
        id={props.type}
        name={props.type}
        onChange={(event) => {
          const newValue = event.currentTarget.value;
          props.setValue(newValue);
        }}
      >
        {/* Iterate through static JSON file and map id's into a new array. */}
        {/* Use the new id array for creating dropdown options */}
        {templates.map((item) => (
          <option key={`item-${item.id}`} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
    </div>
  );
}
