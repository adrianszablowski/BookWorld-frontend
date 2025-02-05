import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/types";

type ProfileHeaderProps = {
  user: User;
};

export default function ProfileHeader({ user }: Readonly<ProfileHeaderProps>) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="size-20">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback>{user.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl">{user.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{user.username}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{user.bio}</p>
      </CardContent>
    </Card>
  );
}
