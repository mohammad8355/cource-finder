import CourceItem from "./CourceItem";
export default function CourceList({ cources }) {
  return (
    <div className="container-fluid col-12 ">
      <ul className="list">
        {cources.map((item) => (
          <CourceItem item={item} key={item.id.videoId} />
        ))}
      </ul>
    </div>
  );
}
