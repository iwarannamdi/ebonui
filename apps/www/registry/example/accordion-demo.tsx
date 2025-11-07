"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "registry/ebonui/accordion"

const items = [
  {
    value: "item-1",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    value: "item-2",
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    value: "item-3",
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    value: "item-4",
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
]

export const AccordionDemo = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mx-auto mt-12 max-w-[648px]">
        <Accordion type="multiple" className="w-full">
          {items.map(({ value, question, answer }) => (
            <AccordionItem
              value={value}
              key={value}
              className="muted-foreground border-b"
            >
              <AccordionTrigger className="text-md py-7 font-bold hover:underline">
                {question}
              </AccordionTrigger>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                >
                  <AccordionContent className="text-sm">
                    {answer}
                  </AccordionContent>
                </motion.div>
              </AnimatePresence>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
