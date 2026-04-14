"use client"

import * as React from "react"
import { isMotionComponent, motion, type HTMLMotionProps } from "motion/react"

import { cn } from "@/lib/utils"

type AnyProps = Record<string, unknown>

type DOMMotionProps<T extends HTMLElement = HTMLElement> = Omit<
  HTMLMotionProps<keyof HTMLElementTagNameMap>,
  "ref"
> & { ref?: React.Ref<T> }

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined })

type SlotProps<T extends HTMLElement = HTMLElement> = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
} & DOMMotionProps<T>

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === "function") {
        ref(node)
      } else {
        ;(ref as React.RefObject<T | null>).current = node
      }
    })
  }
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps }

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string
    )
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    }
  }

  return merged
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  if (!React.isValidElement(children)) return null

  const isAlreadyMotion =
    typeof children.type === "object" &&
    children.type !== null &&
    isMotionComponent(children.type)

  const { ref: childRef, ...childProps } = children.props as AnyProps
  const mergedProps = mergeProps(childProps, props)
  const mergedRef = mergeRefs(childRef as React.Ref<T>, ref)

  if (isAlreadyMotion) {
    return React.createElement(children.type as React.ElementType, {
      ...mergedProps,
      ref: mergedRef,
    })
  }

  const MotionComponent = motion.create(children.type as React.ElementType)
  return React.createElement(MotionComponent, {
    ...mergedProps,
    ref: mergedRef,
  })
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
}
