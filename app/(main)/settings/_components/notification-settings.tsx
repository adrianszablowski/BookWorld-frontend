import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function NotificationSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>
          Choose how you want to be notified about activity on BookWorld.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch id="email-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="push-notifications">Push Notifications</Label>
            <Switch id="push-notifications" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="new-reviews">New Reviews on Your Books</Label>
            <Switch id="new-reviews" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="new-comments">New Comments on Your Reviews</Label>
            <Switch id="new-comments" />
          </div>
          <Button type="submit">Save Notification Preferences</Button>
        </form>
      </CardContent>
    </Card>
  );
}
