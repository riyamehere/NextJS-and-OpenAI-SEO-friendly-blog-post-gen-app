import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import AppLayout from "../../components/AppLayout/AppLayout";
export default function NewPost(props) {
    return (
    <div>This is new post</div>
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