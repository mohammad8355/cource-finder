export default function CourceItem({ item }) {
  return (
    <li className="item col-lg-3 col-md-4 col-6 col-12">
      <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} />
      <h1>{item.snippet.title}</h1>
      <p>{item.snippet.description}</p>
      <button className="btn">more</button>
    </li>
  );
}
