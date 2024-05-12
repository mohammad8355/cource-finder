import CourseItem from "./CourseItem";
export default function CourseList({ courses }) {
  return (
    <div className="container-fluid col-12 ">
      <ul className="list">
        {courses.map((item) => (
          <CourseItem item={item} key={item.id.videoId} />
        ))}
      </ul>
    </div>
  );
}
