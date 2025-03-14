import React from "react";

const SearchBox = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  // const filteredPlanets = useMemo(
  //   () => planets.filter((planet) => planet.includes(query)),
  //   [planets, query]
  // );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="topic" placeholder="Search articles..." />
        <input type="text" name="topic" placeholder="Search articles..." />
        <input type="text" name="topic" placeholder="Search articles..." />
        <input type="text" name="topic" placeholder="Search articles..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
