import { Heading, Page } from "@shopify/polaris";
import { TitleBar, Button, Redirect } from '@shopify/app-bridge/actions';
import { useAppBridge } from "@shopify/app-bridge-react";

const Index = () => {
  const app = useAppBridge();
  const breadcrumb = Button.create(app, { label: 'My breadcrumb' });
  breadcrumb.subscribe(Button.Action.CLICK, () => {
    app.dispatch(Redirect.toApp({ path: '/breadcrumb-link' }));
  });

  const titleBarOptions = {
    title: 'Dashboard',
    //breadcrumbs: breadcrumb
  };

  TitleBar.create(app, titleBarOptions);


  return (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
  </Page>
  );
}

export default Index;
