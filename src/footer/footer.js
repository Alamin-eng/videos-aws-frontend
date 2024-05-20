import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div>
        {" "}
        <span>&copy;</span> {year} Created with <span>&hearts;</span> by
        Mohammad Alamin
      </div>
      <div>
        <span>&reg;</span> Education purpose only
      </div>
      <div>
        {" "}
        All vidoes and trademarks are property of their respective owners
      </div>
    </div>
  );
}
