import { Heading, Page } from "@shopify/polaris";
import { TitleBar, Redirect, Button } from '@shopify/app-bridge/actions';
import { useAppBridge } from "@shopify/app-bridge-react";

const Page2 = () => {
  const app = useAppBridge();
  const breadcrumb = Button.create(app, { label: 'My breadcrumb' });
  breadcrumb.subscribe(Button.Action.CLICK, () => {
    app.dispatch(Redirect.toApp({ path: '/breadcrumb-link' }));
  });

  const titleBarOptions = {
    title: 'Page 2',
    //breadcrumbs: breadcrumb
  };

  TitleBar.create(app, titleBarOptions);

  return (
    <Page>
      <Heading>Page 2</Heading>
    </Page>
  );
}

export default Page2;
