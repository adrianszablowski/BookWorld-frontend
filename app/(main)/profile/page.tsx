import { user } from "@/mocks/mocks";
import AddedBooks from "./_components/added-books";
import ProfileHeader from "./_components/profile-header";
import ReadingLists from "./_components/reading-lists";
import UserReviews from "./_components/user-reviews";

export default function Profile() {
  return (
    <div className="space-y-6">
      <ProfileHeader user={user} />
      <div className="grid gap-6 md:grid-cols-2">
        <ReadingLists lists={user.readingLists} />
        <UserReviews reviews={user.reviews} />
      </div>
      <AddedBooks books={user.addedBooks} />
    </div>
  );
}
