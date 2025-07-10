body {
  font-family: Arial, sans-serif;
  background: #f2f2f2;
  display: flex;
  justify-content: center;
  padding-top: 50px;
}

.container {
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 350px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input[type="text"] {
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: #f9f9f9;
  margin: 8px 0;
  padding: 10px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li.completed {
  text-decoration: line-through;
  color: gray;
}

.delete-btn {
  background-color: #dc3545;
  border: none;
  color: white;
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
}
