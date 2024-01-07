export default function CreateTodo() {
  const containerStyle = {
    textAlign: 'center',
    margin: '20px',
  };

  const inputStyle = {
    padding: '10px',
    margin: '5px',
    width: '200px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    padding: '10px',
    margin: '10px 0',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <input type="text" placeholder="Title" style={inputStyle} />
      <br />
      <input type="text" placeholder="Description" style={inputStyle} />
      <br />
      <button style={buttonStyle}>Add a Todo</button>
    </div>
  );
}
