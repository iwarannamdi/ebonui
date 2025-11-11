// app/examples/checkbox-table-example.tsx
"use client"

import { useEffect, useState } from "react"
import { Checkbox } from "registry/ebonui/checkbox"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export function CheckboxTableExample() {
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>(
    {}
  )
  const [indeterminate, setIndeterminate] = useState(false)

  const items = [
    { id: "1", name: "Grok Premium", status: "active" },
    { id: "2", name: "API Access", status: "active" },
    { id: "3", name: "Team Plan", status: "inactive" },
    { id: "4", name: "Enterprise", status: "active" },
  ]

  useEffect(() => {
    const selectedCount = Object.values(selectedItems).filter(Boolean).length
    setIndeterminate(selectedCount > 0 && selectedCount < items.length)
  }, [selectedItems, items])

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedItems(
        items.reduce((acc, item) => ({ ...acc, [item.id]: true }), {})
      )
    } else {
      setSelectedItems({})
    }
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={Object.values(selectedItems).length === items.length}
                  indeterminate={indeterminate}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedItems[item.id] || false}
                    onCheckedChange={(checked) =>
                      setSelectedItems((prev) => ({
                        ...prev,
                        [item.id]: !!checked,
                      }))
                    }
                  />
                </TableCell>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell>
                  <Badge
                    variant={item.status === "active" ? "default" : "secondary"}
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between pt-0">
        <div className="text-muted-foreground space-x-2 text-sm">
          {Object.values(selectedItems).filter(Boolean).length} of{" "}
          {items.length} selected
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={Object.keys(selectedItems).length === 0}
          >
            Export Selected
          </Button>
          <Button
            size="sm"
            variant="destructive"
            disabled={Object.keys(selectedItems).length === 0}
          >
            Delete Selected
          </Button>
        </div>
      </div>
    </div>
  )
}
