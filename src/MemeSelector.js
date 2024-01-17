import templates from './memeTemplates.json';

export default function MemeSelector(props) {
  return (
    <div>
      <label htmlFor="template">Meme template</label>
      <select
        id="template"
        name="template"
        onChange={(event) => {
          const newMeme = event.currentTarget.value;
          props.setMeme(newMeme);
        }}
      >
        {/* Use static file memeTemplates.json to create a map of selector options directly from the json file */}
        {templates.map((item) => (
          <option key={`meme-${item.id}`} value={item.id}>
            {item.id}
          </option>
        ))}
      </select>
    </div>
  );
}
