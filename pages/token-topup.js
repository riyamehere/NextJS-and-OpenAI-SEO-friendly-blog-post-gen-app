import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function TokenTopUp() {
    return <div>TokenTopUp page</div>;
  }

  export const getServerSideProps = withPageAuthRequired(() => {
    return{
      props: {},
    }
  });