import { Container, Box, Text } from '@chakra-ui/react';
import packageJson from '../package.json';

export const Footer = () => {
  return (
    <Box
      height="120px"
      bgColor="elvenTools.dark.darker"
      color="elvenTools.white"
      display="flex"
      alignItems="center"
    >
      <Container
        maxW="container.xl"
        fontSize="sm"
        fontWeight="normal"
        textAlign="center"
      >
        <Box>SKV Minter Dapp (v{`${packageJson.version}`})</Box>
        <Box fontSize="xs" fontWeight="hairline">
          All for free. Please support the project. Give it credit and tell the
          world about it. Attribution is not required but welcomed in the form
          of a backlink.
        </Box>
        <Box fontSize="xs" fontWeight="bold">
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://www.skvagency.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            SKV Agency
          </Text>{' '}
          ⚡{' '}
          <Text
            as="a"
            color="elvenTools.color3.base"
            href="https://twitter.com/Tikapo1"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Tikapo
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
