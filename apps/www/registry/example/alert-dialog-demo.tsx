import { AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/ebonui/alert-dialog"

export function AlertDialogDemo() {
  return (
    <div className="space-y-6">
      {/* Example 1: Delete Confirmation */}
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">Delete Account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Delete Account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Example 2: Logout Confirmation */}
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline">Log out</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Log out?</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to log out? You will need to log in again
                to access your account.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Stay signed in</AlertDialogCancel>
              <AlertDialogAction>Log out</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      {/* Example 3: Warning with Icon */}
      <div>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Share Project</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader className="space-y-2">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="text-destructive h-5 w-5" />
                <AlertDialogTitle>Share with team?</AlertDialogTitle>
              </div>
              <AlertDialogDescription>
                This will give all team members access to edit this project.
                Only share if you are sure they are the right people.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Share Project</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  )
}
