// Import JSON file for defining the dropdown options.
import templates from './memeTemplates.json';

// Selector controlling the meme template.
export default function MemeSelector(props) {
  return (
    <div>
      <label htmlFor="template">Meme template</label>
      <select
        id="template"
        name="template"
        onChange={(event) => {
          const newMeme = event.currentTarget.value;
          props.handleMeme(newMeme);
        }}
      >
        {/* Iterate through static JSON file and map the meme id into a new array. */}
        {/* Use the new meme-id array for creating dropdown options */}
        {templates.map((item) => (
          <option key={`meme-${item.id}`} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
    </div>
  );
}
