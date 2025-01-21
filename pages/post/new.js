import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../../components/AppLayout/AppLayout";
export default function NewPost(props) {

  const handleClick = async() => {
    const response =  await fetch(`/api/generatePost`,{
      method:'POST'
    })
    const json = await response.json();
    console.log(json)
  }
    return (
    <><div>This is new post</div>
    <button className="btn" onClick={handleClick}>
      Generate
      </button></>
    );
  }

NewPost.getLayout = function getLayout(page, pageProps){
  return <AppLayout {...pageProps}>{page}</AppLayout>
}
  
export const getServerSideProps = withPageAuthRequired(() => {
  return{
    props: {},
  }
});