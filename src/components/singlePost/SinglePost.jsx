import "./singlePost.css";
export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor .
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Firas Sriha</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea quaerat
          dignissimos dolore similique iste natus, voluptatibus eaque culpa in
          sapiente incidunt autem repudiandae aut soluta omnis eum reiciendis
          voluptas deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Aliquam ipsum molestias modi saepe Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime voluptas modi officia repellendus
          laborum dolorum inventore? Voluptatum obcaecati odio optio voluptas,
          libero unde, minima tempore facere impedit similique consequatur
          sunt.!{" "}
        </p>
      </div>
    </div>
  );
}
