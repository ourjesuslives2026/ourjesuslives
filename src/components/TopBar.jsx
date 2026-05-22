export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <span className="topbar__dot" />
        <span>Sunday Worship · Sheffield · 10:30am</span>
        <span className="topbar__sep">/</span>
        <span>New here? <a href="#visit">Plan your visit →</a></span>
      </div>
    </div>
  );
}
