import { Box } from "@chakra-ui/react";
import React from "react";

export default function Sidebar() {
  return (
    <Box display="flex" alignItems="flex-start" justifyContent="flex-start" >
      <aside>
        <nav>
          <ul>
            <li>Home</li>
            <li>Page 1</li>
            <li>Page 2</li>
            <li>Page 3</li>
            <li>Exit</li>
          </ul>
        </nav>
      </aside>
    </Box>
  );
};