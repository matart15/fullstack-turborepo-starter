import { useCreateRoleMutation } from 'graphql/generated';
import { NextPage } from 'next';
import i18n from 'translation';
import { popup } from 'ui/components/popup';
import { useCurrentLocale } from 'ui/utils/common';
import { RoleAddView } from 'ui/views/RoleAddView';

type RoleAddProps = {
  id?: string;
};
const RoleAdd: NextPage<RoleAddProps> = (_data: RoleAddProps): JSX.Element => {
  const [createRoleMutation] = useCreateRoleMutation();
  const currentLocale = useCurrentLocale();
  i18n.changeLanguage(currentLocale); // hack. We could not easily set language on react component from next  path
  return (
    <RoleAddView
      onFinish={async (value): Promise<void> => {
        try {
          await createRoleMutation({
            variables: {
              data: {
                name: value.name,
                description: value.description,
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

export default RoleAdd;
