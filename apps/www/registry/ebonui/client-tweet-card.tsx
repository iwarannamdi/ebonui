"use client"

import { TweetProps, useTweet } from "react-tweet"

import {
  GlowTweet,
  TweetNotFound,
  TweetSkeleton,
} from "@/registry/ebonui/tweet-card"

export const ClientTweetCard = ({
  id,
  apiUrl,
  fallback = <TweetSkeleton />,
  components,
  fetchOptions,
  onError,
  ...props
}: TweetProps & { className?: string }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions)

  if (isLoading) return fallback
  if (error || !data) {
    const NotFound = components?.TweetNotFound || TweetNotFound
    return <NotFound error={onError ? onError(error) : error} />
  }

  return <GlowTweet tweet={data} {...props} />
}
