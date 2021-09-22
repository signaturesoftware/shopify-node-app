import { Heading, Page, Link } from "@shopify/polaris";
import { TitleBar, Redirect, Button } from '@shopify/app-bridge/actions';
import { useAppBridge } from "@shopify/app-bridge-react";

const Page1 = () => {
  const app = useAppBridge();
  const redirect = Redirect.create(app);
  const breadcrumb = Button.create(app, { label: 'My breadcrumb' });
  breadcrumb.subscribe(Button.Action.CLICK, () => {
    app.dispatch(Redirect.toApp({ path: '/breadcrumb-link' }));
  });

  const titleBarOptions = {
    title: 'Page 1',
    //breadcrumbs: breadcrumb
  };

  TitleBar.create(app, titleBarOptions);

  return (
    <Page>
      <Heading>Page 1</Heading>
      <Link onClick={() => redirect.dispatch(Redirect.Action.APP, '/page1/5555') }>Item 1</Link>
    </Page>
  );
}

export default Page1;
 