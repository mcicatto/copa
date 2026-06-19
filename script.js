body {
  margin: 0;
  font-family: Arial;
  background: #0a0f1f;
  color: white;
  display: flex;
}

.sidebar {
  width: 250px;
  height: 100vh;
  background: #111a2e;
  position: fixed;
  overflow-y: auto;
  padding: 20px;
}

.sidebar h2 {
  color: gold;
}

.sidebar button {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  background: #1b2742;
  border: none;
  color: white;
  cursor: pointer;
  text-align: left;
}

.sidebar button:hover {
  background: #2c3e66;
}

main {
  margin-left: 250px;
  padding: 30px;
  width: 100%;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

h1 {
  color: #00d4ff;
}

.card {
  background: #121a2b;
  padding: 15px;
  border-radius: 10px;
  margin-top: 10px;
  max-width: 800px;
}

.card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}
