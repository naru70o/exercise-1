import "./AnimalCard.css";

const AnimalCard = () => {
  return (
    <div className="animal-card">
      <img
        src={
          "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
        alt={"African Lion"}
        className="animal-card-image"
      />
      <div className="animal-card-content">
        <h2 className="animal-card-name">African Lion</h2>
        <p className="animal-card-info">
          The lion (Panthera leo) is a large cat of the genus Panthera native to
          Africa and India. It has a muscular, deep-chested body, short, rounded
          head, round ears, and a hairy tuft at the end of its tail.
        </p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="animals-container">
      <AnimalCard />
      <AnimalCard />
      <AnimalCard />
    </div>
  );
}
