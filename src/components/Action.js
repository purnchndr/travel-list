const Action = ({ sortBy, setSortBy, onClearList }) => {
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input Order</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by packed status</option>
        <option value="quantity">Sort by Item quantity</option>
      </select>
      <button type="button" onClick={() => onClearList()}>
        Reset
      </button>
    </div>
  );
};

export default Action;
