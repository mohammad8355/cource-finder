export default function CourceDetail() {
  return (
    <div className="details">
      <div className="details-overview">
        <button className="back-btn">&#x3c;</button>
        <img
          src="https://camo.githubusercontent.com/3795e5487dfe7c70b09b3e40c9d7a170bbb61aaec2b8bc35a2b4d0b5af1205ca/68747470733a2f2f7777772e69696d2e66722f65636f6c652d7765622f77702d636f6e74656e742f75706c6f6164732f323031372f30312f48544d4c352e6a7067"
          alt=""
        />
        <header>
          <h2>title</h2>
          <p>duration</p>
          <p>categories</p>
          <p>price</p>
        </header>
      </div>
      <section>
        <p>description about cource .....</p>
        <a href="#">link</a>
      </section>
    </div>
  );
}
