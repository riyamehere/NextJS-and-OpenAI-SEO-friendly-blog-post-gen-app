import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function PostId() {
    return <div>This is post id</div>;
  }
  
  export const getServerSideProps = withPageAuthRequired(() => {
    return{
      props: {},
    }
  });