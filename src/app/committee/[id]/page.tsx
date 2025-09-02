"use client";
import React from 'react';
import { useParams } from 'next/navigation';
import Details from '@/components/Details/Details';

const CommitteeDetailPage = () => {
  const params = useParams();
  const committeeId = params.id as string;

  return <Details committeeId={committeeId} />;
};

export default CommitteeDetailPage;
