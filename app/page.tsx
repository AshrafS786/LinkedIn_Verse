import UserInformation from "@/components/UserInformation";

export default function Home() {
  return (
    <div className="grid grid-cols-8 mt-5 sm:px-5 ronuded-md">
      <section>
        {/* UserInfo */}
        <UserInformation />
      </section>

      <section>
        {/* PostForm */}
        {/* PostFeed */}
      </section>

      <section>
        {/* Widget */}
      </section>
      
    </div>
  );
}
