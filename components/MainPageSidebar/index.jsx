import AuthorBio from "../AuthorBio";
import RandomPost from "../RandomPost";
import TagsSelect from "../TagsSelect";

const MainPageSidebar = ({ posts, tags, filterPosts, selectedTag, setSidebarOpen }) => (
    <div>
      <AuthorBio
        avatar={"https://api.lorem.space/image/face?hash=55350"}
        name={"Paul Brats"}
        bio={"I'm a software developer"}
      />
      <TagsSelect
        tags={tags.data}
        indicator
        filterPosts={filterPosts}
        totalPosts={posts.data.length}
        selectedTag={selectedTag}
        setSidebarOpen={setSidebarOpen}      />
        <RandomPost />
    </div>
  );

  export default MainPageSidebar;