"use client"

import Image from "next/image"
import { ProductImage } from "@/assets"
import { DollarSign, Heart, ShoppingCart } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "registry/ebonui/ui/card"

import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card className="group w-full max-w-[350px] overflow-hidden rounded-xl border shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={ProductImage}
          alt="Product image for demo card"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 350px) 100vw, 350px"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
        <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 rounded-full bg-white/90 p-0 hover:bg-purple-600"
            aria-label="Add to wishlist"
          >
            <Heart className="h-4 w-4 text-red-400" />
          </Button>
        </div>
      </div>
      <CardContent className="space-y-3 p-6">
        <CardTitle className="line-clamp-1 text-lg leading-tight font-semibold">
          This is the title of the goods
        </CardTitle>
        <CardDescription className="text-muted-foreground line-clamp-2 text-sm">
          This is the description of the item. It provides more details about
          the product features and benefits.
        </CardDescription>
        <div className="flex items-center justify-between">
          <CardDescription className="flex items-center gap-1 text-lg font-bold text-purple-600">
            <DollarSign className="h-4 w-4" />
            100
          </CardDescription>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            aria-label="Add to cart quick"
          >
            <ShoppingCart className="mr-1 h-3 w-3" />
            Quick add
          </Button>
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Button variant="default">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </CardFooter>
    </Card>
  )
}
