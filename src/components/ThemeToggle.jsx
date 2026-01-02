export default function ThemeToggle() {
  const toggleTheme = () => {
    const theme = document.documentElement.dataset.theme;
    document.documentElement.dataset.theme =
      theme === "light" ? "dark" : "light";
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-outline-light btn-sm"
      title="Toggle Theme"
    >
      <i className="bi bi-moon-stars-fill"></i>
    </button>
  );
}
