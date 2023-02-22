const Header = ({ handleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="btn toggle"
        onClick={() => handleDarkMode((prevMode) => !prevMode)}
        
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
