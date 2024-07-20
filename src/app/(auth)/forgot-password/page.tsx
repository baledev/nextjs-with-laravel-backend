import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Forgot password</CardTitle>
          <CardDescription>
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that
            will allow you to choose a new one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <Button type="submit" className="w-full">
                Email Password Reset Link
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Back to {" "}
            <Link href="/login" className="underline">
              Sign in
            </Link>
            {" "}page.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
