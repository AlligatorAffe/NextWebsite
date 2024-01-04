export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}

/*
export async function generateStaticParams() {
    const posts = await fetch('https://.../posts').then((res) => res.json())

    return posts.map((post) => ({
        slug: post.slug,
    }))
}
*/
/*
import { useRouter } from 'next/router';

const BlogPost = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const posts = await fetch('https://.../posts').then((res) => res.json());

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await fetch(`https://.../posts/${params.slug}`).then((res) => res.json());

  return { props: { post } };
}

export default BlogPost;
*/