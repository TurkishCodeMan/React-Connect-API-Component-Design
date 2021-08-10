import { Stack } from '@twilio-paste/core';
import { MenuItemContainer } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        <MenuItemContainer {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
