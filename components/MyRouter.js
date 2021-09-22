import { useRouter } from 'next/router'
import { useClientRouting } from '@shopify/app-bridge-react';

function MyRouter(props) {
  const router = useRouter();

  useClientRouting(router);
  return null;
}

export default MyRouter;