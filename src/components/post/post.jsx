import "./post.css";
export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">music</span>
          <span className="postCat">movies</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </span>
        <hr />
        <span className="postDate">1h ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro qui
        voluptas doloribus non nisi perferendis, suscipit iste eius ea illo
        laudantium Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
        consequatur libero asperiores excepturi nulla enim ipsam distinctio hic
        omnis, eveniet non molestiae animi placeat corrupti id quia temporibus
        porro fugiat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolorem dolore nostrum culpa voluptas qui tenetur enim, consectetur,
        pariatur temporibus dolor incidunt sequi nisi commodi impedit nemo fuga
        nihil ducimus quidem.
      </p>
    </div>
  );
}
