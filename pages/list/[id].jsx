import axios from "axios";
import useSWR from "swr";
import styles from "../../styles/List/ListDetailPage.module.scss";
import { useRouter } from "next/router";

// https://swr.vercel.app/getting-started
// https://swr.vercel.app/docs/with-nextjs#pre-rendering
const fetcher = (url) => axios.get(url).then((res) => {
  console.log('Axios Getting...')
  return res.data
});

const ListDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/posts?id=${id}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) {
    return (
      <div className={styles["container"]}>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (data.length === 0) {
    return <div>failed to load</div>
  };
  return (
    <div className={styles["container"]}>
      <code>Hello, Post!</code>
      <h4>{`Post# ${data[0].id}`}</h4>
      <h1>{data[0].title}</h1>
      <p>{data[0].body}</p>
    </div>
  );
};

export default ListDetailPage;

// Fetch API from Server side
// https://nextjs.org/docs/basic-features/data-fetching#fetching-data-on-the-client-side

// export async function getServerSideProps({ params }) {
//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts?id=${params.id}`
//   );
//   if (res === undefined) {
//     console.log("error");
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   console.log(res.data);

//   return {
//     props: {
//       post: res.data[0],
//     },
//   };
// }
