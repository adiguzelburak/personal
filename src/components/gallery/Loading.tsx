"use client";

import { Flex, Text, Spinner } from "@/once-ui/components";

export default function Loading() {
  return (
    <Flex
      direction="column"
      horizontal="center"
      vertical="center"
      gap="l"
      style={{ minHeight: "50vh" }}
    >
      <Spinner size="l" />
      <Text>Loading gallery images...</Text>
    </Flex>
  );
}
