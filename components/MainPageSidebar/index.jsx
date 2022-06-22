import AuthorBio from "../AuthorBio";
import TagsSelect from "../TagsSelect";

const MainPageSidebar = ({ posts, tags, filterPosts, selectedTag }) => (
    <div>
      <AuthorBio
        avatar={"https://api.lorem.space/image/face?hash=55350"}
        name={"Paul Brats"}
        bio={"I'm a software developer"}
      />
      <TagsSelect
        tags={tags.data}
        indicator
        onClick={filterPosts}
        totalPosts={posts.data.length}
        selectedTag={selectedTag}
      />
    </div>
  );

  export default MainPageSidebar;