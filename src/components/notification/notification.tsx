// components
import { Alert, Collapse } from './notification.styled';
// types
import type { FC } from 'react';
import type { NotificationProps } from './notification.interface';

const Notification: FC<NotificationProps> = ({
  message,
  notificationResult,
}) => {
  return (
    <Collapse in={!!notificationResult}>
      {notificationResult && (
        <Alert
          variant='filled'
          severity={notificationResult === 'win' ? 'success' : 'error'}>
          {message.split('\n').map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </Alert>
      )}
    </Collapse>
  );
};

export default Notification;
