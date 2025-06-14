function ListRenderer({ data = [], renderItem, itemKey }) {
  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => {
        const key = itemKey ? itemKey(item, index) : index;
        return <div key={key}>{renderItem(item, index)}</div>;
      })}
    </div>
  );
}

export default ListRenderer;
