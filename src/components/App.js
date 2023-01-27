import React, {useState, useEffect} from "react";


function App() {
  const [dogPic, setDogPic] = useState(null)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogPic(data.message))
  },[])

  return (
    <div>
      {dogPic && <img src= {dogPic}></img>}
    </div>
  );
}

export default App;
