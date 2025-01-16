import { withPageAuthRequired } from "@auth0/nextjs-auth0";
export default function NewPost(props) {
    return (
    <div>This is new post</div>
    );
  }
  
export const getServerSideProps = withPageAuthRequired(() => {
  return{
    props: {},
  }
});