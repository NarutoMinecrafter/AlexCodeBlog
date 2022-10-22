import { PostDocumentWithoutContent } from "interfaces";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "redux/typesHooks";

import { setTags } from "../redux/slices/selectedTags";
import DraftImg from "./DraftImg";
interface Props {
  post: PostDocumentWithoutContent;
}


export const DraftPostMark = () => {
  return (
    <div className="draft-post">
      <div className="triangle-draft triangle triangle-item">
        <span className="triangle-text-draft triangle-text">draft</span>
      </div>
      <div className="small-triagles-draft">
        <div className="small-triagles-item-draft-first triangle small-triagles-item-draft small-triagles-item"></div>
        <div className="small-triagles-item-draft-second triangle small-triagles-item-draft small-triagles-item"></div>
      </div>
    </div>
  );
  //   draft post flag
};

export const FuturePostMark = () => {
  return (
    <div className="future-post">
      <div className="triangle-future triangle triangle-item">
        <span className="triangle-text-future triangle-text">future</span>
        <span className="triangle-text-future-post triangle-text"> post</span>
      </div>
      <div className="small-triagles-future">
        <div className="small-triagles-item-future-first triangle small-triagles-item-future small-triagles-item"></div>
        <div className="small-triagles-item-future-second triangle small-triagles-item-future small-triagles-item"></div>
      </div>
    </div>
  );

  //   future post flag
};

const shimmer = (width: number, height: number) => `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#444" offset="20%" />
        <stop stop-color="#333" offset="50%" />
        <stop stop-color="#444" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="#444" />
    <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${width}" to="${width}" dur="3s" repeatCount="indefinite"  />
  </svg>
`;

const toBase64 = (str: string) => Buffer.from(str).toString("base64");


const PostCard = ({ post }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <DraftPostMark />
      <FuturePostMark />
      <div className="posts-list-block posts-list-block-draft-or-future">
        {/* posts-list-block-draft-or-future - Class, that gives a PostCard specific styles(turns off hover effect and adds linear gradient) */}
        <div className="content">
          <Link href={`/post/${post.slug}`}>
            <a className="post-img">

              {post.featuredImage ? (
                <Image
                src={post.featuredImage ?? "/post-images/placeholder.png"}
                alt="blog post image"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(378, 378)
                )}`}
                style={{filter: "grayscale(50%)"}}
              />
              ) : (
                <DraftImg height="100%" />
              )}
              {/* Check have I got an image */}

            </a>
          </Link>
          <div className="tags">
            {post.tags.map((tag) => (
              <Link href="/" key={tag}>
                <a
                  href=""
                  key={tag}
                  onClick={(event) => {
                    event.preventDefault();
                    dispatch(setTags([tag]));
                  }}
                >
                  #{tag}
                </a>
              </Link>
            ))}
          </div>
          <Link href={`/post/${post.slug}`}>
            <a className="link">{post.title}</a>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default PostCard;
