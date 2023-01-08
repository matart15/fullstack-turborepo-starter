# purpose of this folder

- 複数のcomponentsを合わせるため
- html, antd など使用しない
- 最後にBrowserで見える画面がここで完成してほしい。（そうなると、Storybookで画面全体を見せることができます）

## example
```ts
import { ComponentA } from '../../components/ComponentA';
import { ComponentB } from '../../components/ComponentB';
import { ComponentC } from '../../components/ComponentC';
import { LoadingComponent } from '../../components/LoadingComponent';
import { ErrorComponent } from '../../components/ErrorComponent';

export const MyPageView = ({
  loading,
  error,
  pathname,
  child,
}: {
  loading: boolean,
  error: MyCustomErrorType
  pathname: string;
  child?: JSX.Element;
}): JSX.Element => {
  if(Loading) {
    return <LoadingComponent />
  }
  if(error){
    return <ErrorComponent error={error}/>
  }

  return <>
    <ComponentA pathname={pathname} subTitle="notFound" child={child} />
    <ComponentB pathname={pathname}>
      <Componentc />
    </ComponentB>
  </>
};

```