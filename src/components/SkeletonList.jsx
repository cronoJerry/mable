import { HStack, Skeleton } from '@chakra-ui/react';
import React from 'react';

export default function SkeletonList() {
  return (
    <HStack spacing={2}>
      <Skeleton w="170px" height="240px" />
      <Skeleton w="170px" height="240px" />
      <Skeleton w="170px" height="240px" />
      <Skeleton w="170px" height="240px" />
      <Skeleton w="170px" height="240px" />
      <Skeleton w="170px" height="240px" />
      <Skeleton w="170px" height="240px" />
    </HStack>
  );
}
