import { Heading, Page } from "@shopify/polaris";
import { TitleBar, Redirect, Button } from '@shopify/app-bridge/actions';
import { useAppBridge } from "@shopify/app-bridge-react";
import { useRouter } from "next/router";
import { useState } from 'react';

const Page1Item1 = (props) => {
  const app = useAppBridge();
  const breadcrumb = Button.create(app, { label: 'Page 1' });
  const router = useRouter();
  const [ loading, setLoading ] = useState(false);
  const [ loaded, setLoaded ] = useState(false);

  breadcrumb.subscribe(Button.Action.CLICK, () => {
    app.dispatch(Redirect.toApp({ path: '/page1' }));
  });

  const titleBarOptions = {
    title: 'Page 1 - Item 1',
    breadcrumbs: breadcrumb
  };

  TitleBar.create(app, titleBarOptions);

  const id = router.query.id;

  // if(!loading && !loaded) {
  //   setLoading(true);
  //   props.authAxios.get('/api/v1/tenants').then(res => {
  //     console.log('Returned data is ', res);
  //     setLoaded(true);
  //     setLoading(false);
  //   });
  // }
  

  return (
    <Page>
      <Heading>Page 1 - Item {id}</Heading>
    </Page>
  );
}

export default Page1Item1;
 