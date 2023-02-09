---
to: apps/web/pages/<%= h.changeCase.camel(name) %>/new/index.tsx
---
import { useCreate<%= h.changeCase.pascal(name) %>Mutation } from 'graphql/generated';
import { NextPage } from 'next';
import i18n from 'translation';
import { popup } from 'ui/components/popup';
import { useCurrentLocale } from 'ui/utils/common';
import { <%= h.changeCase.pascal(name) %>AddView } from 'ui/views/<%= h.changeCase.pascal(name) %>AddView';

type <%= h.changeCase.pascal(name) %>AddProps = {
  id?: string;
};
const <%= h.changeCase.pascal(name) %>Add: NextPage<<%= h.changeCase.pascal(name) %>AddProps> = (_data: <%= h.changeCase.pascal(name) %>AddProps): JSX.Element => {
  const [create<%= h.changeCase.pascal(name) %>Mutation] = useCreate<%= h.changeCase.pascal(name) %>Mutation();
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return (
    <<%= h.changeCase.pascal(name) %>AddView
      onFinish={async (value): Promise<void> => {
        try {
          await create<%= h.changeCase.pascal(name) %>Mutation({
            variables: {
              data: {
                customField: value.customField,
              },
            },
          });
          popup.success(i18n.t('common.succeeded'));
        } catch (error) {
          popup.error(error);
        }
      }}
    />
  );
};

export default <%= h.changeCase.pascal(name) %>Add;
