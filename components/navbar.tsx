'use client'

import { Navbar, ScrollArea, createStyles, rem } from '@mantine/core';
import {
  IconAdjustments,
  IconHome,
  IconNotebook,
  IconChecklist,
} from '@tabler/icons-react';
import { UserButton } from './userButton';
import { LinksGroup } from './navbarLinkGroup';

const data = [
  { label: 'Home', icon: IconHome, href: '/app/home' },
  {
    label: 'Classes',
    icon: IconNotebook,
    initiallyOpened: true,
    href: '/app/classes',
    links: [
      { label: 'Chemistry', link: '/app/classes/chemistry' },
      { label: 'Geometry', link: '/app/classes/geometry' },
      { label: 'Human Geography', link: '/app/classes/aphug' },
      { label: 'English', link: '/app/classes/ela' },
    ],
  },
  {
    label: 'Grades',
    icon: IconChecklist,
    href: '/app/grades',
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Settings', icon: IconAdjustments, href: '/app/settings' },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

export default function NavbarNested(opened: any, setOpened: any) {
  const { classes } = useStyles();
  const links = data.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <Navbar hidden={opened} width={{ md: 300 }} px="md" className={classes.navbar}>
      <Navbar.Section grow className={classes.links} component={ScrollArea}>
        <div className={classes.linksInner}>{links}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UserButton
          image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
          name="Anna Nullpoint"
          email="anullpointer@yahoo.com"
        />
      </Navbar.Section>
    </Navbar>
  );
}