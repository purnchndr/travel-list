const Stats = ({ items }) => {
  const length = items.length;
  if (!length)
    return (
      <footer className="stats">
        <em>Try adding some stuff in your list 📃</em>
        <p>
          <small>
            created by <a href="https://purnchndr.github.io"> Purnachandra</a>
          </small>
        </p>
      </footer>
    );
  const packed = items.reduce((acc, item) => (item.packed ? ++acc : acc), 0);
  const percentages = Math.round((packed / length) * 100);

  return (
    <footer className="stats">
      {percentages !== 100 ? (
        <em>
          You have {length} items in your list, And you have already packed{" "}
          {packed}, {percentages}% packing done.
        </em>
      ) : (
        <em>You have packed all, just fly... 🛫 </em>
      )}
      <p>
        <small>
          created by <a href="https://purnchndr.github.io"> Purnachandra</a>
        </small>
      </p>
    </footer>
  );
};

export default Stats;
