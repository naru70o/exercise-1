/*
This file demonstrates React props usage and is currently inactive. To use it, import this component into main.jsx and render it there.
*/

// props example
/*
const props = {
  name: "mohamed",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHxYft1f_Ln_y_scKnh8-g5rLMmce7JKyPQ&s"
}
*/

function Avatar(props) {
  // GETTING THE PROPS VALUE (destructuring)
  const name = props.name;
  const image = props.image;
  console.log(image);

  // console.log(name);
  return (
    <div>
      <img src={image} alt="" width={100} height={100} />
      {/* USING THE VALUE FROM PROPS */}
      <h1>{name}</h1>
    </div>
  );
}

function App() {
  return (
    <>
      {/* create the props */}
      <Avatar
        name="owl"
        image="https://libertywildlife.org/wp-content/uploads/2024/10/liberty-wildlife-profile-willis.jpg"
      />

      <Avatar
        name="eagle"
        image="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/636107892/1200"
      />
      {/* <Avatar /> */}
    </>
  );
}

export default App;
