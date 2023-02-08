import { LoadingOutlined } from '@ant-design/icons';
import { notification, Progress } from 'antd';
import { ArgsProps, NotificationPlacement } from 'antd/es/notification/interface';

const errorDisplay = (description: unknown): void => {
  if (typeof description === 'string') {
    notification.error({
      message: 'エラー',
      description,
    });
  } else if (description instanceof Error) {
    if ('networkError' in description && description.networkError) {
      notification.error({
        message: 'エラー',
        description: 'ネットワークエラー',
      });
    } else if ('graphQLErrors' in description && Array.isArray(description.graphQLErrors)) {
      if (description?.graphQLErrors?.length > 0) {
        // const gqlExtension = description?.graphQLErrors?.[0]?.extensions;
        notification.error({
          message: 'エラー', // `エラーコード： ${gqlExtension?.errorCode || gqlExtension?.code}`,
          description: description?.graphQLErrors?.[0]?.message,
        });
      }
    } else {
      notification.error({
        message: `エラー`,
        description: `エラー`,
      });
    }
  } else {
    notification.error({
      message: `エラー`,
      description: `エラー`,
    });
  }
};

export const popup = {
  success: (description: string): void =>
    notification.success({
      duration: 3,
      message: '成功',
      description,
      // className: 'successNotification',
    }),
  error: errorDisplay,
  info: (description: string): void =>
    notification.info({
      message: 'INFO',
      description,
    }),
  warning: (description: string, placement?: NotificationPlacement): void =>
    notification.warning({
      message: 'WARNING',
      description,
      placement,
    }),
  open: (config: ArgsProps): void => {
    notification.open(config);
  },
  progress: {
    open: ({
      key,
      message,
      percent = 0,
      onClose,
    }: {
      key: string;
      message: string;
      percent: number;
      onClose?: (() => void) | undefined;
    }): void =>
      notification.info({
        key,
        icon: <LoadingOutlined style={{ color: 'var(--mainColor)' }} spin />,
        message,
        duration: null,
        description: (
          <Progress percent={percent} size="small" status="active" showInfo={false} strokeColor="var(--mainColor)" />
        ),
        onClose: onClose || ((): void => {}),
      }),
    success: ({ key, description }: { key: string; description: string }): void => {
      setTimeout(
        () =>
          notification.success({
            key,
            duration: 3,
            message: '成功',
            description,
          }),
        350,
      );
    },
    error: ({ key, description }: { key: string; description: unknown }): void => {
      if (typeof description === 'string') {
        notification.error({
          key,
          message: 'エラー',
          description,
        });
      } else if (description instanceof Error) {
        if ('networkError' in description && description.networkError) {
          notification.error({
            key,
            message: 'エラー',
            description: 'ネットワークエラー',
          });
        } else if ('graphQLErrors' in description && Array.isArray(description.graphQLErrors)) {
          if (description?.graphQLErrors?.length > 0) {
            const gqlExtension = description?.graphQLErrors?.[0]?.extensions;
            notification.error({
              key,
              message: `エラーコード： ${gqlExtension?.errorCode || gqlExtension?.code}`,
              description: description?.graphQLErrors?.[0]?.message,
            });
          }
        } else {
          notification.error({
            key,
            message: `エラー`,
            description: `エラー`,
          });
        }
      } else {
        notification.error({
          key,
          message: `エラー`,
          description: `エラー`,
        });
      }
    },
  },
};
