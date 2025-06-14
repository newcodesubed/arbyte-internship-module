function ListRenderer({ data = [], renderItem, itemKey }) {
  return (
    <>
      {data.map((item, index) => {
        const key = itemKey ? itemKey(item, index) : index;
        return <div key={key}>{renderItem(item, index)}</div>;
      })}
    </>
  );
}

export default ListRenderer;
