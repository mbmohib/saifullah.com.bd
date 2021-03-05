import * as React from "react";
import { Layout, Text, Box, Button } from "../components";

export default function IndexPage() {
  return (
    <Layout>
      <Box mt={4}>
        <p>Hello from layout</p>
        <Text>Hello from Text</Text>
        <Button color="red">Click</Button>
      </Box>
    </Layout>
  );
}
