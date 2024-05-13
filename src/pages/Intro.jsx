import { Outlet, Link } from "react-router-dom";
function Intro() {
  return(
    <>
      <div>
        <h1>함께 웃을 수 있는 사람<strong>Yong Lee</strong></h1>
        <h4>프론트 개발자를 희망하고 있습니다.</h4>
        <h4>고민하고 더 좋은 방안을 찾는 것을 좋아합니다.</h4>
        <h4>함께 블라블라</h4>
      </div>
      <button>
      <Link to='/information'>Information</Link>
      </button>
    
    </>
  )
}

export default Intro;