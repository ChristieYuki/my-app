import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";

export default function Sidebar() {
  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      padding="auto"
    >
      <aside>
        <nav>
          <UnorderedList>
            <ListItem padding={"13px"}>imagem judite</ListItem>
            <ListItem>Page 1</ListItem>
            <ListItem>Page 2</ListItem>
            <ListItem>Page 3</ListItem>
            <ListItem>Exit</ListItem>
          </UnorderedList>
        </nav>
      </aside>
    </Box>
  );
};