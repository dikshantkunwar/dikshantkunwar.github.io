import { Button, Icon, Link, List, ListItem } from '@chakra-ui/react'
import { IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import React from 'react'

export default function SocialLinks() {
  return (
    <List>
      <ListItem>
        <Link href="https://github.com/dikshantkunwar" target="_blank">
          <Button
            variant="ghost"
            colorScheme="purple"
            leftIcon={<Icon as={IoLogoGithub} />}
            >
              dikshantkunwar
            </Button>
        </Link>
      </ListItem>
      <ListItem>
        <Link href="https://instagram.com/dkshynt" target="_blank">
          <Button
            variant="ghost"
            colorScheme="purple"
            leftIcon={<Icon as={IoLogoInstagram} />}
            >
              dkshynt
            </Button>
        </Link>
      </ListItem>
    </List>
  )
}