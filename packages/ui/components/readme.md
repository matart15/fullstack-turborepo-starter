# purpose of this folder

- 複数のAtomを合わせるため
- html, antd など使用しない

## example
```ts
import { AtomA } from '../../atoms/AtomA';
import { AtomB } from '../../atoms/AtomB';
import { AtomC } from '../../atoms/AtomC';

export const MyComponent = ({
  pathname,
  child,
}: {
  pathname: string;
  child?: JSX.Element;
}): JSX.Element => (
  <>
    <AtomA pathname={pathname} subTitle="notFound" child={child} />
    <AtomB pathname={pathname}>
      <AtomC />
    </AtomB>
  </>
);

```