'use client'

import {
  UnstyledButton,
  UnstyledButtonProps,
  Group,
  Avatar,
  Text,
  createStyles,
  Menu,
} from '@mantine/core';
import { IconArrowsLeftRight, IconChevronRight, IconLogout, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconTrash } from '@tabler/icons-react';
import { signOut } from 'next-auth/react';

const useStyles = createStyles((theme) => ({
  user: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    },
  },
}));

interface UserButtonProps extends UnstyledButtonProps {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

export function UserButton({ image, name, email, icon, ...others }: UserButtonProps) {
  const { classes } = useStyles();

  return (
    <Menu shadow="md" width={200} position="right-end">
      <Menu.Target>
      <UnstyledButton className={classes.user} {...others}>
        <Group>
          <Avatar src={image} radius="xl" />
          <div style={{ flex: 1 }}>
            <Text size="sm" weight={500} lineClamp={1} style={{wordBreak: 'break-all'}}>
              {name}
            </Text>
            <Text color="dimmed" size="xs" lineClamp={1} style={{wordBreak: 'break-all'}}>
              {email}
            </Text>
          </div>
          {icon || <IconChevronRight size="0.9rem" stroke={1.5} />}
        </Group>
      </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item icon={<IconLogout size={14} />} color='red' onClick={() => {signOut({redirect:false})}}>Sign Out</Menu.Item>
        
      </Menu.Dropdown>
    </Menu>
  );
}